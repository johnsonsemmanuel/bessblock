import { motion } from 'framer-motion';

const directionVariants = {
  up: { y: 24 },
  down: { y: -24 },
  left: { x: 24 },
  right: { x: -24 },
  scale: { scale: 0.92, opacity: 0 },
  fade: { opacity: 0 },
};

export default function ScrollReveal({ children, className = '', delay = 0, direction = 'up' }) {
  const dir = directionVariants[direction] || directionVariants.up;

  const hidden = { opacity: 0, ...dir };
  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: direction === 'scale' ? 0.55 : 0.5,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{ hidden, visible }}
    >
      {children}
    </motion.div>
  );
}
