import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Circle } from 'lucide-react';
import './TestimonialsSection.css';

const avatarColors = ['#404088', '#5a5a9e', '#2e2e6b', '#ffda45', '#e6c130'];

function getInitials(name) {
  return name
    .split(' ')
    .map(w => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getAvatarColor(id) {
  return avatarColors[id % avatarColors.length];
}

export default function TestimonialsSection({
  title = 'What Our Clients Say',
  subtitle = 'See what our clients say about working with Bessblock',
  testimonials = [],
  autoRotateInterval = 6000,
  showVerifiedBadge = true,
  trustedCompanies = [],
  trustedCompaniesTitle = 'Trusted by teams at these companies and more',
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [testimonials.length, autoRotateInterval]);

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const handlePrev = () => {
    setActiveIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex(prev => (prev + 1) % testimonials.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  if (testimonials.length === 0) return null;

  return (
    <section ref={sectionRef} className="section section-light testimonials-section">
      <div className="container">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="testimonials-header"
        >
          <motion.h2 variants={itemVariants} className="testimonials-title">
            {title}
          </motion.h2>
          <motion.p variants={itemVariants} className="testimonials-subtitle">
            {subtitle}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="testimonials-layout"
        >
          <motion.div variants={itemVariants} className="testimonials-carousel">
            <div className="testimonials-quote-icon">
              <Quote size={48} strokeWidth={1} />
            </div>

            <div className="testimonials-cards-container">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`testimonial-card${index === activeIndex ? ' active' : ''}`}
                >
                  <div className="testimonial-card-inner">
                    <div className="testimonial-card-top">
                      <div className="testimonial-avatar-row">
                        <div
                          className="testimonial-avatar"
                          style={{ backgroundColor: getAvatarColor(t.id) }}
                        >
                          {getInitials(t.name)}
                        </div>
                        <div>
                          <h4 className="testimonial-name">{t.name}</h4>
                          <p className="testimonial-role">{t.role}, {t.company}</p>
                        </div>
                      </div>
                      <div className="testimonial-stars">
                        {[...Array(t.rating)].map((_, i) => (
                          <Circle key={i} size={12} className="testimonial-star" />
                        ))}
                      </div>
                    </div>

                    <div className="testimonial-divider" />

                    <p className="testimonial-quote">&ldquo;{t.content}&rdquo;</p>

                    {showVerifiedBadge && (
                      <div className="testimonial-verified">Verified Customer</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="testimonials-nav">
            <button
              className="testimonials-nav-btn"
              onClick={handlePrev}
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="testimonials-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonials-dot${index === activeIndex ? ' active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              className="testimonials-nav-btn"
              onClick={handleNext}
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </motion.div>
        </motion.div>

        {trustedCompanies.length > 0 && (
          <motion.div variants={itemVariants} className="testimonials-trusted">
            <div className="testimonials-trusted-divider" />
            <h3 className="testimonials-trusted-title">{trustedCompaniesTitle}</h3>
            <div className="testimonials-trusted-logos">
              {trustedCompanies.map(company => (
                <span key={company} className="testimonials-trusted-logo">{company}</span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
