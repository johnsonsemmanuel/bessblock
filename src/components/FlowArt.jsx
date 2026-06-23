import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

export function FlowPanel({ children, className, style, ...props }) {
  const panelRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: panelRef,
    offset: ['start end', 'start start'],
  });

  const noMotion = reducedMotion || isMobile;
  const rotate = useTransform(scrollYProgress, [0, 1], noMotion ? [0, 0] : [30, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], noMotion ? [1, 1] : [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], noMotion ? [1, 1, 1] : [0.6, 1, 1]);

  return (
    <motion.div
      ref={panelRef}
      className={cn(
        'flow-panel sticky top-0 flex min-h-screen w-full items-center overflow-hidden',
        className,
      )}
      style={{ transformOrigin: 'bottom left', rotate, scale, opacity, ...style }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function FlowArt({ children, className, ...props }) {
  const panels = Array.isArray(children) ? children : [children];
  return (
    <div className={cn('flow-art relative', className)} {...props}>
      {panels.map((panel, i) => (
        <div key={i} className="flow-panel-wrap" style={{ zIndex: i + 1 }}>
          {panel}
        </div>
      ))}
    </div>
  );
}
