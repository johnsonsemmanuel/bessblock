import { useScroll, useTransform, motion } from 'framer-motion';

export default function SideLabel() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <motion.div className="side-label" style={{ opacity, y }}>
      Established since 1991
    </motion.div>
  );
}
