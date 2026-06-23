import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SiteCTA.css';

export default function SiteCTA({
  title = 'Have a Similar Project?',
  description = 'We supply products for projects of all sizes. Contact our team to discuss your requirements.',
  primaryText = 'Request a Quote',
  primaryLink = '/request-quote',
  secondaryText,
  secondaryLink,
}) {
  return (
    <section className="section section-blue">
      <div className="container">
        <motion.div
          className="site-cta-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="site-cta-title">{title}</h2>
          {description && (
            <p className="site-cta-desc">{description}</p>
          )}
          <div className="site-cta-actions">
            <Link to={primaryLink} className="site-cta-btn site-cta-btn-primary">
              {primaryText}
            </Link>
            {secondaryText && secondaryLink && (
              <Link to={secondaryLink} className="site-cta-btn site-cta-btn-secondary">
                {secondaryText}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
