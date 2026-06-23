import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import './TestimonialsSection.css';

export default function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle = 'See what our customers have to say about us.',
  badgeText = 'Testimonials',
  testimonials = [],
}) {
  if (testimonials.length === 0) return null;

  return (
    <section className="section section-light testimonials-section">
      <div className="container">
        <motion.div
          className="testimonials-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <SectionTitle label={badgeText} title={title} />
          <p className="testimonials-subtitle">{subtitle}</p>
        </motion.div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => {
            const stars = typeof t.rating === 'number' ? t.rating : 0;
            return (
              <motion.div
                key={t.id || i}
                className="testimonial-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="testimonial-quote-icon" aria-hidden="true">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M10 11H6.5C6.5 8.5 8 7 10 6V3C6.5 4 3 7 3 12V17C3 18.1 3.9 19 5 19H10C11.1 19 12 18.1 12 17V13C12 11.9 11.1 11 10 11ZM21 11H17.5C17.5 8.5 19 7 21 6V3C17.5 4 14 7 14 12V17C14 18.1 14.9 19 16 19H21C22.1 19 23 18.1 23 17V13C23 11.9 22.1 11 21 11Z"/>
                  </svg>
                </span>

                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className={idx < stars ? 'testimonial-star' : 'testimonial-star-empty'}
                    />
                  ))}
                </div>

                <p className="testimonial-text">&ldquo;{t.content || t.text}&rdquo;</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}