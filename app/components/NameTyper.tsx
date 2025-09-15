'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';

type NameTyperProps = {
  englishText: string;
  teluguText: string;
  className?: string;
  style?: React.CSSProperties;
  holdMs?: number;
  typingDelayMs?: number;
  deletingDelayMs?: number;
};

export default function NameTyper({
  englishText,
  teluguText,
  className,
  style,
  holdMs = 2000,
  typingDelayMs = 80,
  deletingDelayMs = 50,
}: NameTyperProps) {
  const [displayText, setDisplayText] = useState<string>(englishText);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const runningRef = useRef<boolean>(false);
  const abortedRef = useRef<boolean>(false);
  const mountedRef = useRef<boolean>(true);
  const textRef = useRef<string>(englishText);

  useEffect(() => {
    textRef.current = displayText;
  }, [displayText]);

  useEffect(() => {
    // Reset to a clean state on mount to ensure hover works after navigation
    mountedRef.current = true;
    abortedRef.current = false;
    runningRef.current = false;
    setDisplayText(englishText);
    setIsAnimating(false);

    return () => {
      mountedRef.current = false;
      abortedRef.current = true;
    };
  }, [englishText]);

  const sleep = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

  const runSequence = useCallback(async () => {
    if (runningRef.current) return;
    runningRef.current = true;
    abortedRef.current = false;
    setIsAnimating(true);

    const ensureMounted = () => mountedRef.current && !abortedRef.current;

    // Step 1: delete current (English) to empty
    let workingText = textRef.current;
    while (ensureMounted() && workingText.length > 0) {
      workingText = workingText.slice(0, Math.max(0, workingText.length - 1));
      textRef.current = workingText;
      setDisplayText(workingText);
      await sleep(deletingDelayMs);
    }
    if (!ensureMounted()) {
      setDisplayText(englishText);
      runningRef.current = false;
      setIsAnimating(false);
      return;
    }

    // Step 2: type Telugu
    const teluguTarget = teluguText;
    while (ensureMounted() && workingText !== teluguTarget) {
      const nextLen = Math.min(teluguTarget.length, workingText.length + 1);
      workingText = teluguTarget.slice(0, nextLen);
      textRef.current = workingText;
      setDisplayText(workingText);
      await sleep(typingDelayMs);
    }
    if (!ensureMounted()) {
      setDisplayText(englishText);
      runningRef.current = false;
      setIsAnimating(false);
      return;
    }

    // Step 3: hold Telugu for specified time
    await sleep(holdMs);
    if (!ensureMounted()) {
      setDisplayText(englishText);
      runningRef.current = false;
      setIsAnimating(false);
      return;
    }

    // Step 4: delete Telugu to empty
    while (ensureMounted() && workingText.length > 0) {
      workingText = workingText.slice(0, Math.max(0, workingText.length - 1));
      textRef.current = workingText;
      setDisplayText(workingText);
      await sleep(deletingDelayMs);
    }
    if (!ensureMounted()) {
      setDisplayText(englishText);
      runningRef.current = false;
      return;
    }

    // Step 5: type English back
    const englishTarget = englishText;
    while (ensureMounted() && workingText !== englishTarget) {
      const nextLen = Math.min(englishTarget.length, workingText.length + 1);
      workingText = englishTarget.slice(0, nextLen);
      textRef.current = workingText;
      setDisplayText(workingText);
      await sleep(typingDelayMs);
    }

    // Finish
    setDisplayText(englishText);
    runningRef.current = false;
    setIsAnimating(false);
  }, [deletingDelayMs, englishText, holdMs, teluguText, typingDelayMs]);

  const handleMouseEnter = useCallback(() => {
    runSequence();
  }, [runSequence]);

  const handleMouseLeave = useCallback(() => {
    // Intentionally do nothing so one full cycle completes after hover starts
  }, []);

  return (
    <h1 className={className ?? ''} style={style}>
      <span
        className={isAnimating ? 'typing-caret' : ''}
        onPointerEnter={handleMouseEnter}
        onPointerLeave={handleMouseLeave}
        style={{ display: 'inline-block' }}
      >
        {displayText}
      </span>
    </h1>
  );
}


