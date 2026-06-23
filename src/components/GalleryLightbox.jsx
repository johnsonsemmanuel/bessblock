import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import LazyBackground from './LazyBackground';
import ScrollReveal from './ScrollReveal';
import './GalleryLightbox.css';

export default function GalleryLightbox({ images, columns = 3 }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const openLightbox = useCallback((index) => {
    setCurrent(index);
    setOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setOpen(false);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));
  }, [images.length]);

  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [open, closeLightbox, prev, next]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) next();
      else prev();
    }
  };

  return (
    <>
      <div className="gl-grid" style={{ '--gl-columns': columns }}>
        {images.map((src, i) => (
          <ScrollReveal key={i} delay={i * 0.04}>
            <button
              type="button"
              className="gl-thumb"
              onClick={() => openLightbox(i)}
              aria-label={`Open image ${i + 1}`}
            >
              <LazyBackground src={src} className="gl-thumb-img" />
            </button>
          </ScrollReveal>
        ))}
      </div>

      {open && (
        <div
          className="gl-overlay"
          onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-label="Image gallery lightbox"
        >
          <button type="button" className="gl-close" onClick={closeLightbox} aria-label="Close">
            <X size={28} />
          </button>

          <button type="button" className="gl-nav gl-prev" onClick={prev} aria-label="Previous">
            <ChevronLeft size={36} />
          </button>

          <div className="gl-slide">
            <LazyBackground src={images[current]} className="gl-image" />
          </div>

          <button type="button" className="gl-nav gl-next" onClick={next} aria-label="Next">
            <ChevronRight size={36} />
          </button>

          <div className="gl-counter">
            {current + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
