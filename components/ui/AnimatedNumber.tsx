"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedNumberProps {
  value: number;
  precision?: number;
  format?: (n: number) => string;
  mass?: number;
  stiffness?: number;
  damping?: number;
  onAnimationStart?: () => void;
  onAnimationComplete?: () => void;
  className?: string;
}

export function AnimatedNumber({
  value,
  precision = 0,
  format,
  mass = 1,
  stiffness = 100,
  damping = 40,
  onAnimationStart,
  onAnimationComplete,
  className,
}: AnimatedNumberProps) {
  const [display, setDisplay] = useState(value);
  const currentRef = useRef(value);
  const velocityRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const prevValueRef = useRef(value);

  useEffect(() => {
    if (value === prevValueRef.current) return;
    prevValueRef.current = value;
    onAnimationStart?.();

    const target = value;

    const step = () => {
      const displacement = currentRef.current - target;
      const springForce = -stiffness * displacement;
      const dampingForce = -damping * velocityRef.current;
      const acceleration = (springForce + dampingForce) / mass;

      velocityRef.current += acceleration * 0.016; // ~60fps
      currentRef.current += velocityRef.current * 0.016;

      const close =
        Math.abs(currentRef.current - target) < 0.01 &&
        Math.abs(velocityRef.current) < 0.01;

      if (close) {
        currentRef.current = target;
        velocityRef.current = 0;
        setDisplay(target);
        onAnimationComplete?.();
        return;
      }

      setDisplay(currentRef.current);
      rafRef.current = requestAnimationFrame(step);
    };

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, mass, stiffness, damping, onAnimationStart, onAnimationComplete]);

  const formatted = format
    ? format(display)
    : precision > 0
    ? display.toFixed(precision)
    : Math.round(display).toLocaleString("en-IN");

  return <span className={className}>{formatted}</span>;
}
