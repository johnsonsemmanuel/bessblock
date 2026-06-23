import { useState, useEffect } from 'react';

export const ease = [0.25, 0.1, 0.25, 1];

export const durations = {
  fast: 0.3,
  base: 0.4,
  slow: 0.5,
  reveal: 0.5,
};

export const staggers = {
  tight: 0.06,
  base: 0.08,
  loose: 0.1,
};

export const defaultOffset = 24;

export function fadeUp(overrides = {}) {
  const { duration = durations.base, delay = 0, offset = defaultOffset } = overrides;
  return {
    hidden: { opacity: 0, y: offset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, delay, ease },
    },
  };
}

export function fadeIn(overrides = {}) {
  const { duration = durations.base, delay = 0 } = overrides;
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration, delay, ease },
    },
  };
}

export function staggerContainer(overrides = {}) {
  const { stagger = staggers.base, delay = 0 } = overrides;
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return reduced;
}
