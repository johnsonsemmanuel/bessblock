import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
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
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = prev;
      document.documentElement.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose?.({ index: null }); }}
    >
      <button
        className="lightbox-close"
        onClick={(e) => { e.stopPropagation(); onClose?.({ index: null }); }}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      <button
        ref={prevRef}
        className="lightbox-nav lightbox-prev"
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Previous image"
      >
        <ChevronLeft size={28} />
      </button>

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
            transition={{ duration: 0.2 }}
          />
        </AnimatePresence>
      </div>

      <button
        ref={nextRef}
        className="lightbox-nav lightbox-next"
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Next image"
      >
        <ChevronRight size={28} />
      </button>

      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </motion.div>,
    document.body
  );
}
