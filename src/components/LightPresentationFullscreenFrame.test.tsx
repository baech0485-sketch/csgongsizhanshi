import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LightPresentationFullscreenFrame } from './LightPresentationFullscreenFrame';

describe('LightPresentationFullscreenFrame', () => {
  beforeEach(() => {
    let fullscreenElement: Element | null = null;

    Object.defineProperty(document, 'fullscreenElement', {
      configurable: true,
      get: () => fullscreenElement,
    });

    Object.defineProperty(Element.prototype, 'requestFullscreen', {
      configurable: true,
      value: vi.fn().mockImplementation(function (this: Element) {
        fullscreenElement = this;
        document.dispatchEvent(new Event('fullscreenchange'));
        return Promise.resolve();
      }),
    });

    Object.defineProperty(document, 'exitFullscreen', {
      configurable: true,
      value: vi.fn().mockImplementation(() => {
        fullscreenElement = null;
        document.dispatchEvent(new Event('fullscreenchange'));
        return Promise.resolve();
      }),
    });
  });

  it('默认显示进入全屏按钮', () => {
    render(
      <LightPresentationFullscreenFrame>
        <div>浅色展示内容</div>
      </LightPresentationFullscreenFrame>,
    );

    expect(screen.getByRole('button', { name: '进入全屏' })).toBeInTheDocument();
    expect(screen.getByText('点击左上角按钮或按')).toBeInTheDocument();
  });

  it('点击按钮后会请求全屏并切换为退出按钮', async () => {
    render(
      <LightPresentationFullscreenFrame>
        <div>浅色展示内容</div>
      </LightPresentationFullscreenFrame>,
    );

    fireEvent.click(screen.getByRole('button', { name: '进入全屏' }));

    await waitFor(() => {
      expect(Element.prototype.requestFullscreen).toHaveBeenCalledTimes(1);
    });

    expect(screen.getByRole('button', { name: '退出全屏' })).toBeInTheDocument();
  });
});
