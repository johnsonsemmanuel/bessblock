import { Link } from 'react-router-dom';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import projects from '../data/projects';
import './ProjectsGallery.css';

function FolderIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

function ArrowUpRightIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export default function ProjectsGallery() {
  const [activeId, setActiveId] = useState(0);
  const active = projects[activeId];
  const highlights = active.scope.split(', ');

  return (
    <>
      <SEO title="Projects Gallery" description="Browse a selection of infrastructure, commercial, and institutional projects supplied by Bessblock Concrete Products Ltd across Ghana." />
      <div className="page">
        <PageHero title="Projects Gallery" description="A selection of projects supplied by Bessblock Concrete Products across infrastructure, commercial, and institutional sectors." bgImage="/images/hero/concrete-texture-2.webp" />

        <section className="section">
          <div className="container">
            <div className="bento-card">
              {/* ─── Card header ─── */}
              <div className="bento-header">
                <p className="bento-header-label">Project Portfolio</p>
                <h2 className="bento-header-title">
                  Explore a selection of projects supplied by Bessblock across Ghana.
                </h2>
              </div>

              {/* ─── Mock window ─── */}
              <div className="bento-window">
                {/* ─── Window title bar ─── */}
                <div className="bento-titlebar">
                  <div className="bento-traffic-lights">
                    <span className="bento-dot bento-dot-red" />
                    <span className="bento-dot bento-dot-yellow" />
                    <span className="bento-dot bento-dot-green" />
                  </div>
                  <div className="bento-titlebar-label">
                    <FolderIcon />
                    <span>Projects</span>
                  </div>
                </div>

                {/* ─── Window body ─── */}
                <div className="bento-body">
                  {/* ─── Sidebar ─── */}
                  <div className="bento-sidebar">
                    <div className="bento-sidebar-header">
                      <ListIcon />
                      <span>All Projects</span>
                    </div>
                    <LayoutGroup>
                      {projects.map((p, i) => {
                        const isActive = activeId === i;
                        return (
                          <button
                            key={i}
                            onClick={() => setActiveId(i)}
                            className={
                              'bento-tab' +
                              (isActive ? ' bento-tab-active' : '')
                            }
                          >
                            <span className="bento-tab-dot" />
                            <span className="bento-tab-label">{p.title}</span>
                            {isActive && (
                              <motion.div
                                layoutId="bento-pill"
                                className="bento-pill"
                                transition={{
                                  type: 'spring',
                                  bounce: 0.2,
                                  duration: 0.6,
                                }}
                              />
                            )}
                            {isActive && (
                              <motion.div
                                layoutId="bento-bg"
                                className="bento-tab-bg"
                                transition={{
                                  type: 'spring',
                                  bounce: 0.2,
                                  duration: 0.6,
                                }}
                              />
                            )}
                          </button>
                        );
                      })}
                    </LayoutGroup>
                  </div>

                  {/* ─── Content ─── */}
                  <div className="bento-content">
                    <div className="bento-content-scroll">
                      <div className="bento-content-header">
                        <div className="bento-content-breadcrumb">
                          <MapPinIcon />
                          <span>{active.client}</span>
                        </div>
                        <Link to="/request-quote" className="bento-content-link">
                          Inquire <ArrowUpRightIcon />
                        </Link>
                      </div>

                      <AnimatePresence mode="popLayout">
                        <motion.div
                          key={activeId}
                          className="bento-content-main"
                          initial={{ opacity: 0, y: 8, filter: 'blur(4px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -8, filter: 'blur(4px)' }}
                          transition={{
                            duration: 0.35,
                            ease: [0.23, 1, 0.32, 1],
                          }}
                        >
                          {/* Project image */}
                          <div className="bento-image-wrap">
                            <div
                              className="bento-image"
                              style={{
                                backgroundImage: `url(${active.image})`,
                              }}
                            />
                            <div className="bento-image-fade" />
                            <h3 className="bento-image-title">
                              {active.title}
                            </h3>
                          </div>

                          {/* Highlights */}
                          <ul className="bento-highlights">
                            {highlights.map((item, idx) => (
                              <li key={idx} className="bento-highlight-item">
                                <span className="bento-highlight-dot" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
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
              <Link to="/request-quote" className="projects-cta-btn">
                Request a Quote
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
