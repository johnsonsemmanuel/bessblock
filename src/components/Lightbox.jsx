import { useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const prev = () => onClose?.({ index: (index - 1 + images.length) % images.length });
  const next = () => onClose?.({ index: (index + 1) % images.length });

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.({ index: null });
      if (e.key === 'ArrowLeft') prevRef.current?.click();
      if (e.key === 'ArrowRight') nextRef.current?.click();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClose?.({ index: null })}
    >
      <motion.button
        className="lightbox-close"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); onClose?.({ index: null }); }}
        aria-label="Close"
      >
        <X size={24} />
      </motion.button>

      <motion.button
        ref={prevRef}
        className="lightbox-nav lightbox-prev"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </motion.button>

      <div className="lightbox-image-area">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            className="lightbox-image"
            src={images[index]}
            alt={`Gallery image ${index + 1}`}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25 }}
          />
        </AnimatePresence>
      </div>

      <motion.button
        ref={nextRef}
        className="lightbox-nav lightbox-next"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </motion.button>

      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </motion.div>
  );
}
