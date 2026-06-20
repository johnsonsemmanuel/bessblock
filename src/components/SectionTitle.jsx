import { motion } from 'framer-motion';
import './SectionTitle.css';

export default function SectionTitle({ label, title, align = 'center', light } = {}) {
  return (
    <motion.div
      className={`section-title section-title-${align}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4 }}
    >
      {label && <span className={`section-title-label ${light ? 'section-title-label-light' : ''}`}>{label}</span>}
      {title && <h2 className={`section-title-heading ${light ? 'section-title-heading-light' : ''}`}>{title}</h2>}
    </motion.div>
  );
}
