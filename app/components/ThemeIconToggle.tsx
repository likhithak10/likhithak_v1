"use client";

import { useState, useCallback, useEffect } from "react";

type ThemeIconToggleProps = {
  className?: string;
  size?: number;
};

export default function ThemeIconToggle({ className, size = 24 }: ThemeIconToggleProps) {
  const [isSun, setIsSun] = useState(false);

  const handleClick = useCallback(() => {
    setIsSun((prev) => {
      const next = !prev;
      if (typeof document !== 'undefined') {
        const body = document.body;
        if (next) {
          body.classList.add('light-mode');
        } else {
          body.classList.remove('light-mode');
        }
      }
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('theme:mode', { detail: { isLight: next } }));
        try { localStorage.setItem('theme', next ? 'light' : 'dark'); } catch {}
      }
      return next;
    });
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const isLight = document.body.classList.contains('light-mode');
    setIsSun(isLight);
  }, []);

  return (
    <button
      type="button"
      aria-label={isSun ? "Switch to moon" : "Switch to sun"}
      className={`theme-icon-toggle ${className ?? ""}`}
      onClick={handleClick}
    >
      <img
        src={isSun ? "/sun.png" : "/moon.png"}
        alt={isSun ? "Sun" : "Moon"}
        width={size}
        height={size}
        style={{
          display: 'block',
          width: size,
          height: size,
          transform: isSun ? 'scale(1.2)' : 'scale(1)',
          transformOrigin: 'center'
        }}
      />
    </button>
  );
}


