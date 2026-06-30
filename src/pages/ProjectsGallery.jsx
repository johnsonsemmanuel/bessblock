import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import LazyBackground from '../components/LazyBackground';
import Lightbox from '../components/Lightbox';
import SiteCTA from '../components/SiteCTA';
import projects from '../data/projects';
import './ProjectsGallery.css';

const galleryImages = [
  '/images/gallery/paving-blocks-stack.webp',
  '/images/gallery/hollow-blocks.webp',
  '/images/gallery/solid-blocks.webp',
  '/images/gallery/interlocking-residential.webp',
  '/images/gallery/rectangular-residential.webp',
  '/images/gallery/rectangular-katamanso.webp',
  '/images/gallery/rectangular-residential-2.webp',
  '/images/gallery/retaining-action.webp',
  '/images/gallery/road-kerbs-delivery.webp',
  '/images/gallery/textured-slabs-pool.webp',
];

export default function ProjectsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleLightbox = ({ index }) => {
    if (index === null) setLightboxIndex(null);
    else setLightboxIndex(index);
  };

  return (
    <>
      <SEO title="Projects Gallery" description="Browse a selection of infrastructure, commercial, and institutional projects supplied by Bessblock Concrete Products Ltd across Ghana." />
      <div className="page">
        <PageHero title="Projects Gallery" description="A selection of projects supplied by Bessblock Concrete Products across infrastructure, commercial, and institutional sectors." bgImage="/images/hero/concrete-texture-2.webp" />

      {lightboxIndex !== null && (
        <Lightbox images={galleryImages} index={lightboxIndex} onClose={handleLightbox} />
      )}

        <section className="section">
          <div className="container">
            <div className="projects-grid">
              {projects.map((project, i) => {
                const highlights = project.scope.split(', ');
                return (
                  <motion.div
                    key={i}
                    className="project-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    {/* ─── Image ─── */}
                    <div className="project-card-image-wrap">
                      <div
                        className="project-card-image"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                      <div className="project-card-image-overlay" />

                      {/* Tags on image */}
                      {highlights.length > 0 && (
                        <div className="project-card-tags">
                          {highlights.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="project-card-tag">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Hover overlay */}
                      <div className="project-card-hover-overlay">
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="project-card-read-btn"
                        >
                          <BookOpen size={16} />
                          View Project
                        </motion.span>
                      </div>
                    </div>

                    {/* ─── Content ─── */}
                    <div className="project-card-content">
                      <div className="project-card-body">
                        <h3 className="project-card-title">{project.title}</h3>
                        <p className="project-card-excerpt">{project.scope}</p>
                      </div>

                      <div className="project-card-footer">
                        <div className="project-card-footer-left">
                          <div className="project-card-avatar">
                            {project.client[0]}
                          </div>
                          <div className="project-card-author-info">
                            <span className="project-card-author-name">
                              {project.client}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

      {/* Products Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Products Gallery" title="Our products in action" />
          <div className="gallery-grid">
            {galleryImages.map((src, i) => (
              <ScrollReveal key={i} delay={i * 0.03}>
                <button className="gallery-grid-item" onClick={() => setLightboxIndex(i)} aria-label={`View image ${i + 1}`}>
                  <LazyBackground src={src} className="gallery-grid-bg" />
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA />
      </div>
    </>
  );
}
