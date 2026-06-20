import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Image } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import './ProjectsGallery.css';

const projects = [
  { title: 'Ring Road Interchange', client: 'Urban Roads Authority', scope: 'Road kerbs, paving blocks, drainage kerbs', color: '#404088' },
  { title: 'Central Business District Plaza', client: 'City Municipal Council', scope: 'Hexagonal paving blocks, demarcation kerbs', color: '#4a4a8a' },
  { title: 'University Campus Development', client: 'State University', scope: 'Hollow concrete blocks, ceiling blocks, paving', color: '#2e2e6b' },
  { title: 'Industrial Park Phase 3', client: 'Industrial Development Corp', scope: 'Solid concrete blocks, retaining walls, paving', color: '#5a5a9e' },
  { title: 'Hospital Complex', client: 'Ministry of Health', scope: 'Hollow blocks, solid blocks, kerbs', color: '#3a3a78' },
  { title: 'Shopping Mall Expansion', client: 'Retail Holdings Ltd', scope: 'Interlocking paving, ceiling blocks, garden kerbs', color: '#6a6aaa' },
];

export default function ProjectsGallery() {
  return (
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
                <div className="project-card-visual" style={{ background: project.color }}>
                  <div className="project-card-grid" />
                  <div className="project-card-blur" />
                  <span className="project-card-icon">
                    <Image size={32} color="rgba(255,255,255,0.3)" strokeWidth={1.5} />
                  </span>
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
    </div>
  );
}
