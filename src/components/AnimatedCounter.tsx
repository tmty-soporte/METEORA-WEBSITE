'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

type AnimatedCounterProps = {
  value: string;
  duration?: number;
};

function isNumericToken(token: string): boolean {
  return /^[\d,.]+$/.test(token) && token !== '.' && token !== ',';
}

function hasNumericValue(token: string): boolean {
  return /[\d,.]+/.test(token) && token !== '.' && token !== ',';
}

function buildInitialValue(tokens: string[]): string {
  return tokens
    .map((token) => {
      if (isNumericToken(token)) {
        return token.replace(/\d/g, '0');
      }

      return token;
    })
    .join('');
}

function buildAnimatedValue(tokens: string[], progress: number): string {
  const easeOutQuart = 1 - Math.pow(1 - progress, 4);

  return tokens
    .map((token) => {
      if (!isNumericToken(token)) {
        return token;
      }

      const isFloat = token.includes('.');
      const rawNum = token.replace(/,/g, '');
      const targetNum = Number.parseFloat(rawNum);

      if (Number.isNaN(targetNum)) {
        return token;
      }

      const currentNum = targetNum * easeOutQuart;

      if (isFloat) {
        const decimals = rawNum.split('.')[1]?.length ?? 0;
        return currentNum.toFixed(decimals);
      }

      let formatted = Math.floor(currentNum).toString();

      if (token.includes(',')) {
        formatted = Number(formatted).toLocaleString('en-US');
      }

      return formatted;
    })
    .join('');
}

export default function AnimatedCounter({ value, duration = 2500 }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  const [displayValue, setDisplayValue] = useState('0');
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const tokens = useMemo(() => value.split(/([\d,.]+)/), [value]);
  const hasNumbers = useMemo(() => tokens.some(hasNumericValue), [tokens]);
  const initialValue = useMemo(() => buildInitialValue(tokens), [tokens]);

  useEffect(() => {
    const currentNode = nodeRef.current;

    if (!currentNode) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(currentNode);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isVisible || !hasNumbers) {
      return;
    }

    let animationFrameId: number;
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (start === null) {
        start = timestamp;
        setDisplayValue(initialValue);
        setIsAnimating(true);
      }

      const progress = Math.min((timestamp - start) / duration, 1);
      const currentValue = buildAnimatedValue(tokens, progress);

      setDisplayValue(currentValue);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(animate);
        return;
      }

      setDisplayValue(value);
      setIsAnimating(false);
    };

    animationFrameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [duration, hasNumbers, initialValue, isVisible, tokens, value]);

  if (!hasNumbers) {
    return <span>{value}</span>;
  }

  return (
    <span
      ref={nodeRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.8s ease-out',
        display: 'inline-block',
        textShadow: isAnimating
          ? '0 0 15px rgba(255, 255, 255, 0.4), 0 0 5px rgba(84, 101, 255, 0.5)'
          : 'none',
      }}
    >
      {isVisible ? displayValue : '0'}
    </span>
  );
}