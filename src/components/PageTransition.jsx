import { motion } from 'framer-motion';

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97, filter: 'blur(4px)' }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, y: -16, scale: 0.98, filter: 'blur(2px)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 24, mass: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
