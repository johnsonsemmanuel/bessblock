import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ProgressiveBlur } from './ProgressiveBlur';

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
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <motion.h1
            className="page-hero-title"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              className="page-hero-desc"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
            >
              {description}
            </motion.p>
          )}
          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', zIndex: 1, overflow: 'hidden' }}>
        <ProgressiveBlur direction="bottom" blurLayers={6} blurIntensity={0.35} />
      </div>
    </header>
  );
}
