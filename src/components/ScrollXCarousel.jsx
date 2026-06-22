import { createContext, useContext, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '../lib/utils';

const ScrollXCarouselContext = createContext(null);

function useScrollXCarousel() {
  const context = useContext(ScrollXCarouselContext);
  if (!context) {
    throw new Error('useScrollXCarousel must be used within a ScrollXCarousel');
  }
  return context;
}

export function ScrollXCarousel({ children, className, ...props }) {
  const carouselRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: carouselRef });
  return (
    <ScrollXCarouselContext.Provider value={{ scrollYProgress }}>
      <div ref={carouselRef} className={cn('scroll-x', className)} {...props}>
        {children}
      </div>
    </ScrollXCarouselContext.Provider>
  );
}

export function ScrollXCarouselContainer({ className, ...props }) {
  return (
    <div className={cn('scroll-x-container', className)} {...props} />
  );
}

export function ScrollXCarouselWrap({ className, style, xRange = ['0%', '-80%'], ...props }) {
  const { scrollYProgress } = useScrollXCarousel();
  const x = useTransform(scrollYProgress, [0, 1], xRange);
  return (
    <motion.div className={cn('scroll-x-wrap', className)} style={{ x, ...style }} {...props} />
  );
}

export function ScrollXCarouselProgress({ className, style, progressStyle, ...props }) {
  const { scrollYProgress } = useScrollXCarousel();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className={cn('scroll-x-progress-track', className)} {...props}>
      <motion.div className={cn('scroll-x-progress-bar', progressStyle)} style={{ scaleX, ...style }} />
    </div>
  );
}
