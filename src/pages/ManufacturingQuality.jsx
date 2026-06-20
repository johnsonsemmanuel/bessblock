import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import AnimatedButton from '../components/AnimatedButton';
import PageHero from '../components/PageHero';
import './About.css';

export default function ManufacturingQuality() {
  return (
    <div className="page">
      <PageHero title="Manufacturing & Quality" bgImage="/images/hero/hollow-blocks.jpg">
        <p className="page-hero-desc">
          At Bessblock, manufacturing is built around one clear principle: every block, paver, and concrete product should leave the plant consistent, durable, and fit for purpose. Our production process combines modern plant operations, controlled material handling, and quality-focused curing methods to help ensure dependable performance across all product lines.
        </p>
        <p className="page-hero-desc">
          Bessblock's manufacturing approach is hinged on strength, not just a background process. That means showing visitors that the company is not simply selling concrete products, but producing them with a disciplined system designed to support contractors, developers, engineers, and project owners.
        </p>
      </PageHero>

      <section className="section">
        <div className="container">
          <div className="about-content">

            <ScrollReveal>
              <h2 className="about-heading">Built for consistency</h2>
              <p className="about-text">
                Bessblock manufactures its products under controlled production conditions so that size, shape, finish, and strength remain as consistent as possible from batch to batch. This matters because in construction, small variations can affect installation speed, alignment, structural performance, and overall appearance.
              </p>
              <p className="about-text">
                For customers, consistency means fewer site issues, smoother installation, and a more professional finished result. It also gives specifiers greater confidence when selecting Bessblock products for repeat-use projects or larger developments.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2 className="about-heading">Automated block production</h2>
              <p className="about-text">
                A major part of Bessblock's quality story is its automated Besser block making system. Besser is widely recognised as a leading provider of concrete products equipment and production systems, with a long-standing reputation for engineering, durability, and support for the precast and masonry industries. Besser's history in block-making innovation is also deeply connected to the development of modern block production technology.
              </p>
              <p className="about-text">
                At Bessblock, the Besser machine helps automate the block-making process, improving output efficiency and helping to produce uniform units with reliable dimensional accuracy. This is especially important for paving blocks, walling blocks, kerbs, and other precast concrete products where shape consistency and finish quality directly affect installation and end use.
              </p>
              <p className="about-text">
                The benefit to customers is simple: better machinery supports better products. It also helps Bessblock maintain production speed while protecting quality standards on every order.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="about-heading">Mist curing system</h2>
              <p className="about-text">
                A key part of our quality process is our special mist curing system. This controlled curing method helps retain moisture during the early strength development stage, supporting better hydration of the concrete and improving the final durability of the product.
              </p>
              <p className="about-text">
                Mist curing is important because concrete needs the right environment to achieve its best performance. By slowing down premature drying, the process helps reduce surface defects, supports stronger finished units, and contributes to a cleaner, more reliable product finish.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <h2 className="about-heading">Quality control standards</h2>
              <p className="about-text">
                Bessblock's quality control starts with raw materials and continues through batching, moulding, compaction, curing, inspection, and dispatch. Every stage is monitored to help ensure the final product meets the expectations of customers who depend on concrete products for structural performance, durability, and appearance.
              </p>
              <p className="about-text">Key quality control measures include:</p>
              <ul className="about-list">
                <li>Inspection of raw materials before production.</li>
                <li>Controlled batching and mixing.</li>
                <li>Monitoring of compaction and mould filling.</li>
                <li>Dimensional checks for finished units.</li>
                <li>Visual inspection for cracks, chips, and surface defects.</li>
                <li>Curing control before release to stock or delivery.</li>
              </ul>
              <p className="about-text">
                This approach helps ensure that the company's products meet the practical demands of construction work, especially where load-bearing performance, edge definition, and surface durability are required.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h2 className="about-heading">Why it matters</h2>
              <p className="about-text">
                For contractors and engineers, manufacturing quality affects everything downstream: installation time, waste, maintenance, and long-term performance. For developers and property owners, it affects appearance, reliability, and value.
              </p>
              <p className="about-text">
                Bessblock has invested in production capability, quality control, and curing methods that help deliver dependable concrete products.
              </p>
            </ScrollReveal>

          </div>
        </div>
      </section>

      <section className="section section-blue">
        <div className="container">
          <motion.div
            className="about-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="about-cta-title" style={{ color: 'var(--color-white)' }}>
              Quality made into every product.
            </h2>
            <p className="about-cta-text" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              From automated production on the Besser block machine to careful mist curing and final inspection, Bessblock's manufacturing process is designed to produce concrete products you can trust on site.
            </p>
            <div className="about-cta-actions">
              <AnimatedButton to="/products/paving-blocks" variant="yellow">Explore Products</AnimatedButton>
              <AnimatedButton to="/contact" variant="outline">Request a Quote</AnimatedButton>
              <AnimatedButton to="/contact" variant="outline">Contact Bessblock</AnimatedButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
