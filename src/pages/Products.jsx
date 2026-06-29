import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import PageHero from '../components/PageHero';
import LazyBackground from '../components/LazyBackground';
import SiteCTA from '../components/SiteCTA';
import { ProductHighlightCard } from '../components/ProductHighlightCard';
import { PavingIcon, WallingIcon, KerbIcon, SlabIcon, StepIcon } from '../components/CategoryIcons';
import productCategories from '../data/products';
import SEO from '../components/SEO';
import './Products.css';

const icons = { 'paving-blocks': PavingIcon, 'walling': WallingIcon, 'paving-slabs': SlabIcon, 'step-risers': StepIcon, 'kerbs-edging': KerbIcon };

const subImages = {
  'interlocking-paving-blocks': '/images/products/interlocking-paving-1.webp',
  'rectangular-paving-blocks': '/images/products/rectangular-paving-1.webp',
  'hexagonal-paving-blocks': '/images/products/hexagonal-paving-blocks-1.webp',
  'hollow-concrete-blocks': '/images/products/hollow-blocks-1.webp',
  'solid-concrete-blocks': '/images/products/solid-blocks-1.webp',
  'ceiling-blocks': '/images/products/ceiling-blocks-1.webp',
  'retaining-walls': '/images/products/retaining-walls.jpg',
  'l-range-standard': '/images/products/l-range-standard.jpg',
  'l-range-rock-face': '/images/products/l-range-rock-face.jpg',
  '4x4-step-block': '/images/products/4x4-step-block.jpg',
  'terralite': '/images/products/terralite.jpg',
  'terrafix': '/images/products/terrafix.jpg',
  'terracrete': '/images/products/terracrete.jpg',
  'road-kerbs': '/images/products/road-kerbs.jpg',
  'demarcation-kerbs': '/images/products/demarcation-kerbs.jpg',
  'garden-kerbs': '/images/products/garden-kerbs.jpg',
  'barrier-kerbs': '/images/products/barrier-kerbs.jpg',
  'gutter-kerbs': '/images/products/gutter-kerbs.jpg',
  'slotted-kerbs': '/images/products/hexagonal-paving-blocks-2.webp',
  'textured-paving-slabs': '/images/products/textured-paving-slabs.jpg',
  'smooth-paving-slabs': '/images/products/smooth-paving-slabs.jpg',
  'large-format-slabs': '/images/products/large-format-slabs.jpg',
  'standard-step-risers': '/images/products/standard-step-risers.jpg',
  'wide-tread-steps': '/images/products/wide-tread-steps.jpg',
  'bullnose-steps': '/images/products/bullnose-steps.jpg',
};

const categoryImages = {
  'paving-blocks': '/images/products/interlocking-paving-1.webp',
  'walling': '/images/products/hollow-blocks-1.webp',
  'paving-slabs': '/images/products/textured-paving-slabs.jpg',
  'step-risers': '/images/products/standard-step-risers.jpg',
  'kerbs-edging': '/images/products/road-kerbs.jpg',
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
                imageSrc={subImages[sub.id]}
                imageAlt={sub.name}
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
                imageSrc={subImages[sub.id]}
                imageAlt={sub.name}
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
        bgImage="/images/products/rectangular-paving-1.webp"
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
                <option value="name-asc">Name A-Z</option>
                <option value="name-desc">Name Z-A</option>
                <option value="count">Most products first</option>
              </select>
            </div>
          </div>

          {hasActiveFilter && (
            <p className="products-filter-result-count">
              Showing filtered results, <Link to="/products" onClick={e => { e.preventDefault(); setFilter(''); }} className="products-filter-result-clear">clear filter</Link>
            </p>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-16)' }}>
            {sortedCategories.map(cat => (
              <CategoryCard key={cat.id} cat={cat} filter={filter} icons={icons} images={categoryImages} />
            ))}
          </div>
        </div>
      </section>

      <SiteCTA
        title="Need Help Choosing?"
        description="Our technical team can help you select the right products for your project specifications."
        secondaryText="Speak to an Expert"
        secondaryLink="/contact"
      />
    </div>
    </>
  );
}
