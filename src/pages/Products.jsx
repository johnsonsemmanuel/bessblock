import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';

const icons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

export default function Products() {
  return (
    <div className="page">
      <PageHero
        title="All Products"
        description="Comprehensive range of concrete blocks, paving units, kerbs, and edging solutions for infrastructure and institutional projects."
        bgImage="/images/hero/paving-hero.jpg"
      />

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            {productCategories.map(cat => (
              <div key={cat.id}>
                <motion.h2
                  className="page-hero-title"
                  style={{ fontSize: 'var(--text-3xl)', marginBottom: 'var(--spacing-6)', color: 'var(--text)' }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  {cat.name}
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--spacing-6)' }}>
                  {cat.subcategories.map(sub => (
                    <ProductHighlightCard
                      key={sub.id}
                      categoryIcon={icons[cat.id]}
                      category={cat.name}
                      title={sub.name}
                      description={sub.description}
                      to={sub.path}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
