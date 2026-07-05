import ScrollReveal from './ScrollReveal';
import './GalleryLightbox.css';

export default function GalleryLightbox({ images, columns }) {
  const colCount = columns ?? Math.min(images.length, 4);

  return (
    <div className="gl-grid" style={{ '--gl-columns': colCount }}>
      {images.map((src, i) => (
        <ScrollReveal key={i} delay={i * 0.04}>
          <div className="gl-thumb">
            <img
              src={src}
              alt={`Gallery image ${i + 1}`}
              className="gl-thumb-img"
              loading="lazy"
            />
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}