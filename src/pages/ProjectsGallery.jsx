import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import projects from '../data/projects';
import './ProjectsGallery.css';

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
              <motion.div
                key={i}
                className="project-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="project-card-visual">
                  <div className="project-card-bg" style={{ backgroundImage: `url(${project.image})` }} />
                  <div className="project-card-overlay" />
                </div>
                <div className="project-card-body">
                  <h3 className="project-card-title">{project.title}</h3>
                  <span className="project-card-client">{project.client}</span>
                  <p className="project-card-scope">{project.scope}</p>
                </div>
              </motion.div>
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
