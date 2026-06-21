import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import './ProjectsGallery.css';

const projects = [
  { title: 'Ring Road Interchange', client: 'Urban Roads Authority', scope: 'Road kerbs, paving blocks, drainage kerbs', image: 'https://images.unsplash.com/photo-1541625602330-2277a4c46182?w=800&q=80' },
  { title: 'Central Business District Plaza', client: 'City Municipal Council', scope: 'Hexagonal paving blocks, demarcation kerbs', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80' },
  { title: 'University Campus Development', client: 'State University', scope: 'Hollow concrete blocks, ceiling blocks, paving', image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80' },
  { title: 'Industrial Park Phase 3', client: 'Industrial Development Corp', scope: 'Solid concrete blocks, retaining walls, paving', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80' },
  { title: 'Hospital Complex', client: 'Ministry of Health', scope: 'Hollow blocks, solid blocks, kerbs', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80' },
  { title: 'Shopping Mall Expansion', client: 'Retail Holdings Ltd', scope: 'Interlocking paving, ceiling blocks, garden kerbs', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?w=800&q=80' },
];

export default function ProjectsGallery() {
  return (
    <>
      <SEO title="Projects Gallery" description="Browse a selection of infrastructure, commercial, and institutional projects supplied by Bessblock Concrete Products Ltd across Ghana." />
      <div className="page">
      <PageHero title="Projects Gallery" description="A selection of projects supplied by Bessblock Concrete Products across infrastructure, commercial, and institutional sectors." bgImage="/images/hero/paving-hero.jpg" />

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
            <Link to="/contact" className="projects-cta-btn">Request a Quote</Link>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
