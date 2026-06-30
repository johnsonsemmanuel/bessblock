import { motion } from 'framer-motion';
import { Plus, Lock, Grid3x3, Layers, Wrench, Clock, Info, Award, Shield, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import GalleryLightbox from '../components/GalleryLightbox';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon } from '../components/CategoryIcons';
import './RectangularPavingBlocks.css';
import './InterlockingPavingBlocks.css';
import '../components/ProductTemplate.css';

const galImages = [
  '/images/products/interlocking-paving-1.webp',
  '/images/products/interlocking-paving-2.webp',
  '/images/products/interlocking-paving-3.webp',
  '/images/products/interlocking-paving-4.webp',
];

function PlusIcon() {
  return <Plus size={24} />;
}

function LockIcon() {
  return <Lock size={24} />;
}

function GridIcon() {
  return <Grid3x3 size={24} />;
}

const steps = [
  { icon: PlusIcon, title: 'Precision Manufacturing', desc: 'High-pressure vibration and hydraulic compaction produce uniform, dimensionally accurate units.' },
  { icon: LockIcon, title: 'Interlocking Design', desc: 'Each block locks securely with neighbours to create a unified pavement system.' },
  { icon: GridIcon, title: 'Complete Coverage', desc: 'Blocks distribute loads across the entire surface, reducing point stress and movement.' },
];

const benefits = [
  { icon: '⬡', title: 'High load-bearing', desc: 'Withstands heavy vehicular traffic without deformation.' },
  { icon: '🔗', title: 'Interlocking strength', desc: 'Superior mechanical interlock prevents shifting.' },
  { icon: '🔧', title: 'Easy replacement', desc: 'Individual blocks removed and replaced without disrupting the surface.' },
  { icon: '🎨', title: 'Attractive finishes', desc: 'Multiple colours and textures for design flexibility.' },
  { icon: '💰', title: 'Low maintenance', desc: 'Minimal upkeep costs compared to conventional paving surfaces.' },
  { icon: '🛡️', title: 'Excellent durability', desc: 'Engineered to withstand heavy use and harsh weather conditions.' },
  { icon: '👟', title: 'Slip-resistant', desc: 'Textured surface provides improved traction for pedestrians and vehicles.' },
];

const specs = [
  { label: 'Product type', value: 'Precast concrete paving slab.' },
  { label: 'Standard sizes', value: '200mm x 100mm x 60mm, 200mm x 100mm x 80mm.' },
  { label: 'Thickness options', value: '60mm to 80mm, depending on application.' },
  { label: 'Compressive strength', value: '25 MPa to 50 MPa.' },
  { label: 'Surface finish', value: 'Smooth or lightly textured.' },
  { label: 'Colour options', value: 'Grey, yellow, red, and charcoal.' },
  { label: 'Coverage', value: 'Approx. 45pcs' },
];

const techItems = [
  'Produced using high-pressure vibration and hydraulic compaction.',
  'Cured for a minimum of 14-28 days to achieve optimum strength.',
  'Individual units or blocks fit together tightly to form a durable and visually appealing surface.',
  'Suitable in commercial and domestic use such as pathways, gardens, footpaths, parking areas etc.',
];

const applications = [
  'Garden patios.', 'Footpaths.', 'Courtyards.',
  'Residential walkways.', 'Landscape paving.', 'Light-use commercial outdoor areas.',
];

const related = [
  {
    name: 'Rectangular Paving Blocks',
    path: '/products/paving-blocks/rectangular',
    image: '/images/products/rectangular-paving-1.webp',
    category: 'Paving Blocks',
    icon: PavingIcon,
    desc: 'Clean, strong rectangular paving for pedestrian and commercial use.',
  },
  {
    name: 'Hexagonal Paving Blocks',
    path: '/products/paving-blocks/hexagonal',
    image: '/images/products/hexagonal-paving-blocks-1.webp',
    category: 'Paving Blocks',
    icon: PavingIcon,
    desc: 'Six-sided interlocking blocks for superior load distribution.',
  },
];

export default function InterlockingPavingBlocks() {
  return (
    <>
      <SEO title="Interlocking Paving Blocks" description="Precision-engineered interlocking concrete paving blocks from Bessblock for durable, stable pavement surfaces for pedestrian and vehicular traffic." />
      <div className="page">
      <PageHero title="Interlocking Paving Blocks" description="Precision-engineered interlocking paving blocks for durable pavement surfaces for pedestrian and vehicular traffic." bgImage="/images/products/interlocking-paving-1.webp" />

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Process" title="How interlocking paving works" />
          <div className="inter-steps">
            {steps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="inter-step">
                  <div className="inter-step-num">{i + 1}</div>
                  <div className="inter-step-icon"><step.icon /></div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Why choose interlocking" align="left" />
          <div className="inter-benefits">
            {benefits.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  className="inter-benefit"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="inter-benefit-icon">
                    {i === 0 && <Layers size={24} />}
                    {i === 1 && <Lock size={24} />}
                    {i === 2 && <Wrench size={24} />}
                    {i === 3 && <Clock size={24} />}
                    {i === 4 && <Award size={24} />}
                    {i === 5 && <Shield size={24} />}
                    {i === 6 && <CheckCircle2 size={24} />}
                  </div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Specs */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Specifications" title="Detailed product data" align="left" />
          <ScrollReveal><SpecSheet specs={specs} columns={2} /></ScrollReveal>
        </div>
      </section>

      {/* Technical Information */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Technical Information" title="Manufacturing & performance" align="left" />
          <div className="inter-tech-list">
            {techItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="inter-tech-item">
                  <Info size={16} className="inter-tech-dot" />
                  <p>{item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Applications" title="Where to use interlocking paving" align="left" />
          <div className="inter-apps-grid">
            {applications.map((app, i) => (
              <ScrollReveal key={i} delay={i * 0.04}>
                <div className="inter-app-card">{app}</div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Project Gallery" title="See interlocking in action" align="left" />
          <GalleryLightbox images={galImages} />
        </div>
      </section>

      {/* Related Products */}
      <section className="section">
        <div className="container">
          <SectionTitle label="Related Products" title="Explore more paving solutions" align="left" />
          <div className="related-grid" style={{ '--rel-columns': 4 }}>
            {related.map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 0.06}>
                <ProductHighlightCard
                  categoryIcon={r.icon}
                  category={r.category}
                  title={r.name}
                  description={r.desc}
                  to={r.path}
                  imageSrc={r.image}
                  imageAlt={r.name}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SiteCTA
        title="Start your paving project"
        description="Contact our team for technical specifications, pricing, and project-specific advice."
        secondaryText="View All Paving"
        secondaryLink="/products/paving-blocks"
      />
    </div>
    </>
  );
}
