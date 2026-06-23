import { CheckCircle2, Shield, Layers, Wrench, Clock, Award } from 'lucide-react';
import SEO from '../components/SEO';
import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ScrollReveal';
import SiteCTA from '../components/SiteCTA';
import SpecSheet from '../components/SpecSheet';
import './RectangularPavingBlocks.css';

const benefits = [
  { title: 'Heavy-Duty Durability', text: 'Designed to withstand heavy traffic loads and harsh weather conditions.', icon: Shield },
  { title: 'High Compressive Strength', text: 'Manufactured to achieve excellent compressive strength for long-term performance.', icon: Award },
  { title: 'Easy to Repair', text: 'Individual blocks can be removed and replaced without affecting surrounding pavement.', icon: Wrench },
  { title: 'Variety of Finishes', text: 'Available in multiple colours and finishes to complement different architectural designs.', icon: Layers },
  { title: 'Improved Traction', text: 'Textured surface provides improved traction for pedestrians and vehicles.', icon: Clock },
  { title: 'Low Maintenance', text: 'Offers lower maintenance costs compared to conventional concrete or asphalt surfaces.', icon: CheckCircle2 },
];

const techItems = [
  { label: 'Material composition', value: 'Cement, graded sand, quarry dust, chippings, and water.' },
  { label: 'Manufacturing method', value: 'Vibration, compaction, and controlled curing.' },
  { label: 'Finish options', value: 'Smooth, textured, or lightly patterned surfaces.' },
  { label: 'Colour options', value: 'Grey, red, buff, black, and other special finishes.' },
  { label: 'Typical use', value: 'Footpaths, patios, terraces, courtyards, garden areas, and utility spaces.' },
];

export default function RectangularPavingBlocks() {
  return (
    <>
      <SEO title="Rectangular Paving Blocks" description="High-quality precast rectangular concrete paving blocks from Bessblock for pedestrian, residential, commercial, and industrial surfacing applications." />
      <div className="page">
      <PageHero title="Rectangular Paving Block" bgImage="/images/hero/concrete-texture-1.webp">
        <p className="page-hero-desc">
          Rectangular concrete paving block manufactured from high-quality cement, graded aggregates, and pigments (where applicable), compacted under high pressure to ensure dimensional accuracy and durability.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <SectionTitle label="Overview" title="Clean. Strong. Versatile." align="left" />
          <ScrollReveal>
            <div className="rect-overview">
              <p>
                Bessblock Rectangular Paving Blocks are high-quality precast concrete paving units designed for a wide range of pedestrian, residential, commercial, and industrial applications. Manufactured using premium aggregates, cement, and controlled production processes, these paving blocks provide durable, aesthetically appealing, and cost-effective surfacing solutions.
              </p>
              <p style={{ marginTop: 'var(--spacing-4)' }}>
                These products are suitable where project designers want a clean, modern surface with reliable strength and a neat architectural finish. They also work well in spaces where low maintenance, easy replacement, and consistent appearance are important.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Key Benefits" title="Built for performance" align="left" />
          <div className="rect-benefits-grid">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="rect-benefit-card">
                    <div className="rect-benefit-icon">
                      <Icon size={22} />
                    </div>
                    <h3 className="rect-benefit-title">{b.title}</h3>
                    <p className="rect-benefit-text">{b.text}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle label="Technical Range" title="Specifications at a glance" align="left" />
          <ScrollReveal><SpecSheet specs={techItems} /></ScrollReveal>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <SectionTitle label="Detailed Specifications" title="Sizes & performance data" align="left" />
          <div className="rect-specs-layout">
            <div className="rect-specs-groups">
              <ScrollReveal>
                <div className="rect-spec-group">
                  <h3 className="rect-spec-group-title">Standard sizes</h3>
                  <div className="rect-spec-items">
                    <div className="rect-spec-item">200mm x 100mm x 60mm</div>
                    <div className="rect-spec-item">200mm x 100mm x 80mm</div>
                    <div className="rect-spec-item">200mm x 100mm x 100mm</div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.05}>
                <div className="rect-spec-group">
                  <h3 className="rect-spec-group-title">Performance range</h3>
                  <div className="rect-spec-items">
                    <div className="rect-spec-item">Compressive strength: 25 MPa to 50 MPa depending on grade.</div>
                    <div className="rect-spec-item">Water absorption: Low to moderate depending on finish and cure.</div>
                    <div className="rect-spec-item">Surface tolerance: Suitable for pedestrian, commercial and domestic paving applications.</div>
                    <div className="rect-spec-item">Coverage: Approx. 50pcs per m²</div>
                    <div className="rect-spec-item">Pack quantity: Typically 600pcs per pallet depending on dimensions.</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div
              className="rect-specs-img"
              style={{
                backgroundImage: 'url(/images/products/rectangular-paving-1.webp)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <span>Dimension reference</span>
            </div>
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need more information?"
        description="Contact our team for technical specifications, pricing, and project-specific advice."
        secondaryText="View All Paving"
        secondaryLink="/products/paving-blocks"
      />
    </div>
    </>
  );
}
