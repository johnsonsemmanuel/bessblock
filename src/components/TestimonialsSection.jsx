import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import './TestimonialsSection.css';

function initials(name) {
  return name.split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2);
}

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
          <div className="testimonials-badge">{badgeText}</div>
          <h2 className="testimonials-title">{title}</h2>
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
                <div className="testimonial-stars">
                  {Array.from({ length: stars }).map((_, idx) => (
                    <Star
                      key={idx}
                      size={16}
                      className="testimonial-star"
                    />
                  ))}
                </div>

                <p className="testimonial-text">&ldquo;{t.content || t.text}&rdquo;</p>

                <div className="testimonial-footer">
                  <div className="testimonial-avatar">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name} />
                    ) : (
                      <span>{initials(t.name)}</span>
                    )}
                  </div>
                  <div>
                    <p className="testimonial-name">{t.name}</p>
                    <p className="testimonial-role">
                      {t.role}{t.company ? `, ${t.company}` : ''}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
