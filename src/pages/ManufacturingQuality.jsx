import { motion } from 'framer-motion';
import { Shield, Droplets, Settings, Truck, HardHat, Ruler, Hammer } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import SectionTitle from '../components/SectionTitle';
import SiteCTA from '../components/SiteCTA';
import PageHero from '../components/PageHero';
import LazyBackground from '../components/LazyBackground';
import SEO from '../components/SEO';
import './About.css';

const stats = [
  { icon: Shield, number: '100%', label: 'Production quality monitored at every stage' },
  { icon: HardHat, number: '50+', label: 'Years of combined manufacturing expertise' },
  { icon: Truck, number: '24/7', label: 'Quality control across dispatch operations' },
];

const qcItems = [
  { icon: Ruler, text: 'Inspection of raw materials before production.' },
  { icon: Settings, text: 'Controlled batching and mixing.' },
  { icon: Hammer, text: 'Monitoring of compaction and mould filling.' },
  { icon: Ruler, text: 'Dimensional checks for finished units.' },
  { icon: Shield, text: 'Visual inspection for cracks, chips, and surface defects.' },
  { icon: Droplets, text: 'Curing control before release to stock or delivery.' },
];

const mfgImages = [
  '/images/production/IMG_1803.webp',
  '/images/production/IMG_1873.webp',
  '/images/production/IMG_0628.webp',
  '/images/production/IMG_1836.webp',
];

export default function ManufacturingQuality() {
  return (
    <>
      <SEO title="Manufacturing & Quality" description="Learn how Bessblock manufactures concrete blocks, paving units, and kerbs with automated Besser production, mist curing, and rigorous quality control." />
      <div className="page">
      <PageHero title="Manufacturing & Quality" bgImage="/images/hero/concrete-texture-2.webp">
        <p className="page-hero-desc">
          At Bessblock, every block, paver, and concrete product is manufactured under controlled conditions combining modern plant operations, automated production, and quality-focused curing methods to deliver consistent, durable, and fit-for-purpose results across all product lines.
        </p>
      </PageHero>

      {/* Stats */}
      <section className="section section-light">
        <div className="container">
          <div className="about-stats">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="about-stat-card"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="about-stat-icon">
                    <stat.icon size={22} />
                  </div>
                  <div className="about-stat-number">{stat.number}</div>
                  <div className="about-stat-label">{stat.label}</div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Built for consistency */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-text">
                <SectionTitle
                  label="Quality First"
                  title="Built for consistency"
                  align="left"
                />
                <p className="about-text">
                  Bessblock manufactures its products under controlled production conditions so that size, shape, finish, and strength remain as consistent as possible from batch to batch. This matters because in construction, small variations can affect installation speed, alignment, structural performance, and overall appearance.
                </p>
                <p className="about-text">
                  For customers, consistency means fewer site issues, smoother installation, and a more professional finished result. It also gives specifiers greater confidence when selecting Bessblock products for repeat-use projects or larger developments.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-media">
                <LazyBackground src={mfgImages[0]} className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Quality-controlled production facility</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Automated block production */}
      <section className="section section-light">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-media">
                <LazyBackground src={mfgImages[1]} className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Besser automated block machine</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-text">
                <SectionTitle
                  label="Automation"
                  title="Automated block production"
                  align="left"
                />
                <p className="about-text">
                  A major part of Bessblock's quality story is its automated Besser block making system. Besser is widely recognised as a leading provider of concrete products equipment and production systems, with a long-standing reputation for engineering, durability, and support for the precast and masonry industries.
                </p>
                <p className="about-text">
                  At Bessblock, the Besser machine helps automate the block-making process, improving output efficiency and helping to produce uniform units with reliable dimensional accuracy. This is especially important for paving blocks, walling blocks, kerbs, and other precast concrete products where shape consistency and finish quality directly affect installation and end use.
                </p>
                <p className="about-text">
                  The benefit to customers is simple: better machinery supports better products. It also helps Bessblock maintain production speed while protecting quality standards on every order.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mist curing system */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-text">
                <SectionTitle
                  label="Curing Process"
                  title="Mist curing system"
                  align="left"
                />
                <p className="about-text">
                  A key part of our quality process is our special mist curing system. This controlled curing method helps retain moisture during the early strength development stage, supporting better hydration of the concrete and improving the final durability of the product.
                </p>
                <p className="about-text">
                  Mist curing is important because concrete needs the right environment to achieve its best performance. By slowing down premature drying, the process helps reduce surface defects, supports stronger finished units, and contributes to a cleaner, more reliable product finish.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-media">
                <LazyBackground src={mfgImages[2]} className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Controlled mist curing environment</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quality control standards */}
      <section className="section section-light">
        <div className="container">
          <ScrollReveal>
            <SectionTitle
              label="Standards"
              title="Quality control standards"
              align="left"
            />
            <p className="about-text">
              Bessblock's quality control starts with raw materials and continues through batching, moulding, compaction, curing, inspection, and dispatch. Every stage is monitored to help ensure the final product meets the expectations of customers who depend on concrete products for structural performance, durability, and appearance.
            </p>
            <p className="about-text">Key quality control measures include:</p>
          </ScrollReveal>

          <div className="about-list">
            {qcItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <li>
                  <span className="about-list-icon">
                    <item.icon size={13} />
                  </span>
                  {item.text}
                </li>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.25}>
            <p className="about-text" style={{ marginTop: 'var(--spacing-6)' }}>
              This approach helps ensure that the company's products meet the practical demands of construction work, especially where load-bearing performance, edge definition, and surface durability are required.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why it matters */}
      <section className="section">
        <div className="container">
          <div className="about-split">
            <ScrollReveal direction="left">
              <div className="about-split-media">
                <LazyBackground src={mfgImages[3]} className="about-image-block about-image-block-photo">
                  <div className="about-image-block-label">Dependable products for every project</div>
                </LazyBackground>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.1}>
              <div className="about-split-text">
                <SectionTitle
                  label="Value"
                  title="Why it matters"
                  align="left"
                />
                <p className="about-text">
                  For contractors and engineers, manufacturing quality affects everything downstream: installation time, waste, maintenance, and long-term performance. For developers and property owners, it affects appearance, reliability, and value.
                </p>
                <p className="about-text">
                  Bessblock has invested in production capability, quality control, and curing methods that help deliver dependable concrete products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <SiteCTA
        title="Quality made into every product."
        description="From automated production on the Besser block machine to careful mist curing and final inspection, Bessblock's manufacturing process is designed to produce concrete products you can trust on site."
        primaryText="Explore Products"
        primaryLink="/products/paving-blocks"
        secondaryText="Request a Quote"
        secondaryLink="/request-quote"
      />
    </div>
    </>
  );
}
