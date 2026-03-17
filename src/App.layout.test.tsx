import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App layout', () => {
  it('首屏与尾屏内容整体下移，让视觉重心更居中', async () => {
    render(<App />);

    const coverStack = screen.getByTestId('cover-stack');
    expect(coverStack.className).toContain('translate-y-8');

    fireEvent.keyDown(window, { key: 'ArrowLeft' });

    const closingStack = await screen.findByTestId('closing-stack');
    expect(closingStack.className).toContain('translate-y-8');
  });
});
