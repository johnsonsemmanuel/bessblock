import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import PageHero from '../components/PageHero';
import LazyBackground from '../components/LazyBackground';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import SEO from '../components/SEO';
import './Products.css';

const icons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

const categoryImages = {
  'paving-blocks': 'https://images.unsplash.com/photo-1590674899484-d5640d0f7b3e?w=800&q=80',
  'walling': 'https://images.unsplash.com/photo-1567016526105-22da7c13161a?w=800&q=80',
  'paving-slabs': 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
  'step-risers': 'https://images.unsplash.com/photo-1504307651254-84280e7f79d8?w=800&q=80',
  'kerbs-edging': 'https://images.unsplash.com/photo-1558459654-c430be5b5717?w=800&q=80',
};

function match(filter, text) {
  return text.toLowerCase().includes(filter.toLowerCase());
}

function CategoryCard({ cat, filter, icons: iconMap, images }) {
  const matches = useMemo(() => {
    if (!filter.trim()) return cat.subcategories;
    return cat.subcategories.filter(
      sub => match(filter, sub.name) || match(filter, sub.description)
    );
  }, [cat, filter]);

  const hasMatches = matches.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={hasMatches ? { opacity: 1, y: 0 } : { opacity: 0.3 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      style={{ display: hasMatches ? undefined : 'none' }}
    >
      {filter.trim() && !match(filter, cat.name) && !match(filter, cat.description) ? (
        <div>
          <div className="pc-card pc-card-mini">
            <LazyBackground src={images[cat.id]} className="pc-card-bg" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }} />
            <div className="pc-card-overlay" />
            <div className="pc-card-content">
              <div className="pc-card-icon">{iconMap[cat.id]}</div>
              <h2 className="pc-card-title">{cat.name}</h2>
            </div>
          </div>
          <div className="pc-grid">
            {matches.map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={iconMap[cat.id]}
                category={cat.name}
                title={sub.name}
                description={sub.description}
                to={sub.path}
              />
            ))}
          </div>
        </div>
      ) : (
        <>
          <div className="pc-card">
            <LazyBackground
              src={images[cat.id]}
              className="pc-card-bg"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="pc-card-overlay" />
            <div className="pc-card-content">
              <div className="pc-card-icon">{iconMap[cat.id]}</div>
              <h2 className="pc-card-title">{cat.name}</h2>
              <p className="pc-card-desc">{cat.description}</p>
            </div>
            <div className="pc-card-tags">
              {matches.map(sub => (
                <Link key={sub.id} to={sub.path} className="pc-card-tag">{sub.name}</Link>
              ))}
            </div>
          </div>

          <div className="pc-grid">
            {matches.map(sub => (
              <ProductHighlightCard
                key={sub.id}
                categoryIcon={iconMap[cat.id]}
                category={cat.name}
                title={sub.name}
                description={sub.description}
                to={sub.path}
              />
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
}

export default function Products() {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('default');

  const sortedCategories = useMemo(() => {
    const cats = [...productCategories];
    if (sort === 'name-asc') cats.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'name-desc') cats.sort((a, b) => b.name.localeCompare(a.name));
    if (sort === 'count') cats.sort((a, b) => b.subcategories.length - a.subcategories.length);
    return cats;
  }, [sort]);

  const hasActiveFilter = filter.trim().length > 0;

  return (
    <>
      <SEO title="All Products" description="Browse Bessblock's complete range of concrete paving blocks, walling blocks, kerbs, paving slabs, and step risers for construction projects." />
      <div className="page">
      <PageHero
        title="All Products"
        description="Comprehensive range of concrete blocks, paving units, kerbs, and edging solutions for infrastructure and institutional projects."
        bgImage="/images/hero/concrete-texture-2.jpg"
      />

      <section className="section">
        <div className="container">
          <div className="products-filter-bar">
            <div className="products-filter-search">
              <Search size={16} className="products-filter-search-icon" />
              <input
                type="text"
                className="products-filter-input"
                placeholder="Search products by name or use case..."
                value={filter}
                onChange={e => setFilter(e.target.value)}
                aria-label="Filter products"
              />
              {hasActiveFilter && (
                <button className="products-filter-clear" onClick={() => setFilter('')} aria-label="Clear filter">
                  &times;
                </button>
              )}
            </div>
            <div className="products-filter-sort">
              <SlidersHorizontal size={14} className="products-filter-sort-icon" />
              <select
                value={sort}
                onChange={e => setSort(e.target.value)}
                aria-label="Sort products"
                className="products-filter-select"
              >
                <option value="default">Default order</option>
                <option value="name-asc">Name A–Z</option>
                <option value="name-desc">Name Z–A</option>
                <option value="count">Most products first</option>
              </select>
            </div>
          </div>

          {hasActiveFilter && (
            <p className="products-filter-result-count">
              Showing filtered results — <Link to="/products" onClick={e => { e.preventDefault(); setFilter(''); }} className="products-filter-result-clear">clear filter</Link>
            </p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            {sortedCategories.map(cat => (
              <CategoryCard key={cat.id} cat={cat} filter={filter} icons={icons} images={categoryImages} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <motion.div
            className="products-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="products-cta-title">Need Help Choosing?</h2>
            <p className="products-cta-desc">
              Our technical team can help you select the right products for your project specifications.
            </p>
            <div className="products-cta-actions">
              <Link to="/request-quote" className="products-cta-btn products-cta-btn-primary">
                Request a Quote
              </Link>
              <Link to="/contact" className="products-cta-btn products-cta-btn-secondary">
                Speak to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
