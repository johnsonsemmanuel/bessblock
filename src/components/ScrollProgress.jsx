import { useScroll, useSpring, motion } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-track" />
      <motion.div className="scroll-progress-thumb" style={{ scaleY, transformOrigin: 'top' }} />
    </div>
  );
}
