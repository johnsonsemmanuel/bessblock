import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import projects from '../data/projects';
import './ProjectsGallery.css';

function ProjectRevealCard({ project, i }) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  // useMotionValue to track hover state progress

  const highlights = project.scope.split(', ');

  return (
    <motion.div
      ref={cardRef}
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: i * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      tabIndex={0}
    >
      {/* Base – always visible */}
      <div className="project-card-base">
        <div className="project-card-bg" style={{ backgroundImage: `url(${project.image})` }} />
        <div className="project-card-base-fade" />
        <div className="project-card-base-content">
          <p className="project-card-client-label">{project.client}</p>
          <h3 className="project-card-base-title">{project.title}</h3>
        </div>
      </div>

      {/* Overlay – revealed on hover via clip-path */}
      <motion.div
        className="project-card-overlay"
        initial={false}
        animate={{
          clipPath: hovered
            ? 'circle(150% at 50% 50%)'
            : 'circle(0% at 50% 50%)',
        }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="project-card-overlay-body">
          <p className="project-card-overlay-client">{project.client}</p>
          <h3 className="project-card-overlay-title">{project.title}</h3>
          <p className="project-card-overlay-desc">{project.scope}</p>

          <ul className="project-card-overlay-list">
            {highlights.map((item, idx) => (
              <li key={idx}>
                <span className="project-card-overlay-dot" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsGallery() {
  return (
    <>
      <SEO title="Projects Gallery" description="Browse a selection of infrastructure, commercial, and institutional projects supplied by Bessblock Concrete Products Ltd across Ghana." />
      <div className="page">
      <PageHero title="Projects Gallery" description="A selection of projects supplied by Bessblock Concrete Products across infrastructure, commercial, and institutional sectors." bgImage="/images/hero/concrete-texture-2.webp" />

      <section className="section">
        <div className="container">
          <div className="projects-grid">
            {projects.map((project, i) => (
              <ProjectRevealCard key={i} project={project} i={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <motion.div
            className="projects-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="projects-cta-title">Have a Similar Project?</h2>
            <p className="projects-cta-desc">
              We supply products for projects of all sizes. Contact our team to discuss your requirements.
            </p>
            <Link to="/request-quote" className="projects-cta-btn">Request a Quote</Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
