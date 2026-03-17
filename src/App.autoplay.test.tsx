import { act, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

describe('App autoplay', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.runOnlyPendingTimers();
    vi.useRealTimers();
  });

  it('6 秒后自动切换到下一张页面', () => {
    render(<App />);

    expect(screen.getByText(/1\s*\/\s*6/)).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(6000);
    });

    expect(screen.getByText(/2\s*\/\s*6/)).toBeInTheDocument();
  });
});
