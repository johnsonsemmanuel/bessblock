import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function toWebP(url) {
  return url.replace(/\.(jpe?g|png)$/i, '.webp');
}

export default function PageHero({ title, description, children, bgImage }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!bgImage) return;
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.src = bgImage;
  }, [bgImage]);

  const bgStyle = bgImage
    ? {
        backgroundImage: bgImage !== toWebP(bgImage)
          ? `image-set(url("${toWebP(bgImage)}") type("image/webp"), url("${bgImage}") type("image/jpeg"))`
          : `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.6s ease',
      }
    : {};

  return (
    <header className="page-hero">
      {bgImage && <div className="page-hero-bg" style={bgStyle} />}
      {bgImage && <div className="page-hero-overlay" />}
      <div className="page-hero-bottom-fade" />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={loaded ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={loaded ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="page-hero-desc"
              initial={{ opacity: 0, y: 12 }}
              animate={loaded ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={loaded ? { opacity: 1, y: 0 } : undefined}
              transition={{ duration: 0.7, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
