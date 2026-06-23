import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import './Lightbox.css';

export default function Lightbox({ images, index, onClose }) {
  const prev = useCallback(() => {
    onClose?.({ index: (index - 1 + images.length) % images.length });
  }, [index, images.length, onClose]);

  const next = useCallback(() => {
    onClose?.({ index: (index + 1) % images.length });
  }, [index, images.length, onClose]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose?.({ index: null });
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [prev, next, onClose]);

  return (
    <div className="lightbox-overlay" onClick={() => onClose?.({ index: null })}>
      <button className="lightbox-close" onClick={() => onClose?.({ index: null })} aria-label="Close">
        <X size={28} />
      </button>

      <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">
        <ChevronLeft size={32} />
      </button>

      <div className="lightbox-image-wrap" onClick={(e) => e.stopPropagation()}>
        <div
          className="lightbox-image"
          style={{ backgroundImage: `url(${images[index]})` }}
        />
      </div>

      <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">
        <ChevronRight size={32} />
      </button>

      <div className="lightbox-counter">{index + 1} / {images.length}</div>
    </div>
  );
}
