import React, { useEffect, useEffectEvent, useRef, useState } from 'react';
import { Maximize2, Minimize2 } from 'lucide-react';

type LightPresentationFullscreenFrameProps = {
  children: React.ReactNode;
};

export function LightPresentationFullscreenFrame({
  children,
}: LightPresentationFullscreenFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // 同步浏览器全屏状态，确保按钮文案与显隐逻辑一致。
  useEffect(() => {
    const syncFullscreenState = () => {
      setIsFullscreen(document.fullscreenElement === frameRef.current);
    };

    syncFullscreenState();
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, []);

  const enterFullscreen = useEffectEvent(async () => {
    setErrorMessage('');

    if (!frameRef.current?.requestFullscreen) {
      setErrorMessage('当前浏览器不支持页面全屏，请直接按 F11。');
      return;
    }

    try {
      await frameRef.current.requestFullscreen();
    } catch {
      setErrorMessage('浏览器拦截了全屏请求，请重试一次，或直接按 F11。');
    }
  });

  const exitFullscreen = useEffectEvent(async () => {
    setErrorMessage('');

    if (!document.fullscreenElement || !document.exitFullscreen) {
      return;
    }

    try {
      await document.exitFullscreen();
    } catch {
      setErrorMessage('退出全屏失败，请按 Esc 或 F11 返回窗口模式。');
    }
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() !== 'f') {
        return;
      }

      event.preventDefault();
      if (document.fullscreenElement === frameRef.current) {
        void exitFullscreen();
        return;
      }

      void enterFullscreen();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enterFullscreen, exitFullscreen]);

  return (
    <div ref={frameRef} className="relative h-screen w-full overflow-hidden bg-slate-50 font-sans">
      {children}

      <div className="group/control-zone absolute left-0 top-0 z-[70] h-28 w-44">
        <button
          type="button"
          aria-label={isFullscreen ? '退出全屏' : '进入全屏'}
          onClick={() => {
            if (isFullscreen) {
              void exitFullscreen();
              return;
            }

            void enterFullscreen();
          }}
          className={`absolute left-5 top-5 flex items-center gap-2 rounded-full border border-slate-200 bg-white/88 px-4 py-3 text-slate-700 shadow-lg backdrop-blur-md transition hover:bg-white ${
            isFullscreen
              ? 'opacity-0 pointer-events-none group-hover/control-zone:opacity-100 group-hover/control-zone:pointer-events-auto focus:opacity-100 focus:pointer-events-auto focus-visible:opacity-100 focus-visible:pointer-events-auto'
              : 'opacity-100'
          }`}
        >
          {isFullscreen ? <Minimize2 className="h-5 w-5" /> : <Maximize2 className="h-5 w-5" />}
          <span className="text-sm font-semibold tracking-[0.2em] uppercase">
            {isFullscreen ? '退出全屏' : '全屏模式'}
          </span>
        </button>
      </div>

      {!isFullscreen && (
        <div className="pointer-events-none absolute left-5 top-24 z-[65] rounded-2xl border border-slate-200 bg-white/82 px-4 py-3 text-slate-500 shadow-lg backdrop-blur-md">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-600">Fullscreen</p>
          <p className="mt-1 text-sm">
            点击左上角按钮或按 <span className="font-semibold text-slate-700">F</span>
          </p>
        </div>
      )}

      {errorMessage && (
        <div className="absolute left-5 top-36 z-[65] max-w-sm rounded-2xl border border-amber-200 bg-amber-50/92 px-4 py-3 text-sm text-amber-900 shadow-lg backdrop-blur-md">
          <p role="status">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}
