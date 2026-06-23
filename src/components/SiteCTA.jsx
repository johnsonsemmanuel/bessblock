import { motion } from 'framer-motion';
import AnimatedButton from './AnimatedButton';
import './SiteCTA.css';

export default function SiteCTA({
  title = 'Have a Similar Project?',
  description = 'We supply products for projects of all sizes. Contact our team to discuss your requirements.',
  primaryText = 'Request a Quote',
  primaryLink = '/request-quote',
  secondaryText,
  secondaryLink,
  tertiaryText,
  tertiaryLink,
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
            <AnimatedButton to={primaryLink} variant="yellow">
              {primaryText}
            </AnimatedButton>
            {secondaryText && secondaryLink && (
              <AnimatedButton to={secondaryLink} variant="outline">
                {secondaryText}
              </AnimatedButton>
            )}
            {tertiaryText && tertiaryLink && (
              <AnimatedButton to={tertiaryLink} variant="outline">
                {tertiaryText}
              </AnimatedButton>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
