import { motion } from 'framer-motion';
import LazyBackground from './LazyBackground';
import { ProgressiveBlur } from './ProgressiveBlur';

export default function PageHero({ title, description, children, bgImage }) {
  return (
    <section className="page-hero">
      {bgImage && (
        <LazyBackground
          src={bgImage}
          className="page-hero-bg"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
      )}
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
    </section>
  );
}
