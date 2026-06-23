import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AnimatedButton from './AnimatedButton';
import './CTAWithVerticalMarquee.css';

const marqueeItems = [
  'Paving Blocks',
  'Walling Systems',
  'Retaining Walls',
  'Kerbs & Edging',
];

function VerticalMarquee({ children, pauseOnHover = false, reverse = false, speed = 30 }) {
  return (
    <div
      className="cta-marquee-track-wrapper"
      style={{ '--duration': `${speed}s` }}
    >
      <div
        className={`cta-marquee-track${pauseOnHover ? ' cta-marquee-pause-hover' : ''}${reverse ? ' cta-marquee-reverse' : ''}`}
      >
        {children}
      </div>
      <div
        className={`cta-marquee-track cta-marquee-track-duplicate${pauseOnHover ? ' cta-marquee-pause-hover' : ''}${reverse ? ' cta-marquee-reverse' : ''}`}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}

export default function CTAWithVerticalMarquee() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeContainer = marqueeRef.current;
    if (!marqueeContainer) return;

    let frameId;

    const updateOpacity = () => {
      const items = marqueeContainer.querySelectorAll('.cta-marquee-item');
      const containerRect = marqueeContainer.getBoundingClientRect();
      const centerY = containerRect.top + containerRect.height / 2;

      items.forEach(item => {
        const itemRect = item.getBoundingClientRect();
        const itemCenterY = itemRect.top + itemRect.height / 2;
        const distance = Math.abs(centerY - itemCenterY);
        const maxDistance = containerRect.height / 2;
        const normalizedDistance = Math.min(distance / maxDistance, 1);
        item.style.opacity = String(1 - normalizedDistance * 0.5);
      });

      frameId = requestAnimationFrame(updateOpacity);
    };

    frameId = requestAnimationFrame(updateOpacity);
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="cta-marquee-section">
      <div className="container">
        <div className="cta-marquee-layout">
          <motion.div
            className="cta-marquee-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="cta-marquee-title">Ready to start your project?</h2>
            <p className="cta-marquee-text">
              Speak to Bessblock for product advice, project support, and quotation requests. Whether you need paving, walling, retaining walls, or kerbs, our team can help you choose the right concrete solution for your project.
            </p>
            <div className="cta-marquee-actions">
               <AnimatedButton to="/contact" variant="primary" size="lg">Contact Bessblock</AnimatedButton>
              <AnimatedButton to="/request-quote" variant="yellow" size="lg">Request a Quote</AnimatedButton>
              <AnimatedButton to="/products" variant="outline" size="lg">View Products</AnimatedButton>
            </div>
          </motion.div>

          <div ref={marqueeRef} className="cta-marquee-visual">
            <div className="cta-marquee-visual-inner">
              <VerticalMarquee speed={20}>
                {marqueeItems.map((item, idx) => (
                  <div key={idx} className="cta-marquee-item">
                    {item}
                  </div>
                ))}
              </VerticalMarquee>

              <div className="cta-marquee-vignette cta-marquee-vignette-top" />
              <div className="cta-marquee-vignette cta-marquee-vignette-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
