'use client';

import { AnimationSnapshot, BlurTextProps } from '@/type';
import { motion } from 'framer-motion';
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  CSSProperties,
} from 'react';


const buildKeyframes = (
  from: AnimationSnapshot,
  steps: AnimationSnapshot[]
): Record<string, (string | number)[]> => {
  const keys = new Set([
    ...Object.keys(from),
    ...steps.flatMap((s) => Object.keys(s)),
  ]);

  const keyframes: Record<string, (string | number)[]> = {};
  keys.forEach((k) => {
    const fromValue = from[k as keyof AnimationSnapshot] ?? 0; // Default fallback
    keyframes[k] = [fromValue];
    steps.forEach((s) => {
      const stepValue = s[k as keyof AnimationSnapshot] ?? fromValue;
      keyframes[k].push(stepValue);
    });
  });

  return keyframes;
};

const BlurText: React.FC<BlurTextProps> = ({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.35,
}) => {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('');
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const defaultFrom: AnimationSnapshot = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -50 }
        : { filter: 'blur(10px)', opacity: 0, y: 50 },
    [direction]
  );

  const defaultTo: AnimationSnapshot[] = useMemo(
    () => [
      {
        filter: 'blur(5px)',
        opacity: 0.5,
        y: direction === 'top' ? 5 : -5,
      },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  );

  const fromSnapshot = animationFrom ?? defaultFrom;
  const toSnapshots = animationTo ?? defaultTo;

  const stepCount = toSnapshots.length + 1;
  const totalDuration = stepDuration * (stepCount - 1);
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  );

  return (
    <p
      ref={ref}
      className={className}
      style={{ display: 'flex', flexWrap: 'wrap' } as CSSProperties}
    >
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots);

        const spanTransition = {
          duration: totalDuration,
          times,
          delay: (index * delay) / 1000,
          ease: easing,
        };

        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot}
            animate={inView ? animateKeyframes : fromSnapshot}
            transition={spanTransition}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        );
      })}
    </p>
  );
};

export default BlurText;
