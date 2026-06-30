import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import team from '../data/team';
import './About.css';
import './Leadership.css';

export default function Leadership() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <>
      <SEO title="Leadership" description="Meet the leadership team behind Bessblock Concrete Products Ltd, experienced professionals driving quality, operations, and growth." />
      <div className="page">
      <PageHero
        title="Leadership"
        description="Bessblock's leadership team brings experience in operations, production, sales, and financial oversight to guide the company."
        bgImage="/images/hero/concrete-texture-1.webp"
      />

      <section className="section">
        <div className="container">
          <div className="leadership-grid">
            {team.map((member, i) => (
              <motion.div
                key={i}
                className={`leadership-card ${member.image ? '' : 'leadership-card-noimg'} ${expandedIndex === i ? 'expanded' : ''}`}
                onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {member.image && (
                  <div
                    className="leadership-bg"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                )}
                <div className="leadership-overlay" />
                <div className="leadership-body">
                  {!member.image && (
                    <div className="leadership-initials">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                  <h3 className="leadership-name">{member.name}</h3>
                  <span className="leadership-role">{member.role}</span>
                  <p className="leadership-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
