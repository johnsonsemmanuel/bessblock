import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ChevronRight } from 'lucide-react';

const labels = {
  '': 'Home',
  'about': 'About',
  'manufacturing': 'Manufacturing & Quality',
  'leadership': 'Leadership',
  'products': 'Products',
  'paving-blocks': 'Paving Blocks',
  'interlocking': 'Interlocking Paving Blocks',
  'rectangular': 'Rectangular Paving Blocks',
  'hexagonal': 'Hexagonal Paving Blocks',
  'walling': 'Walling',
  'hollow-concrete-blocks': 'Hollow Concrete Blocks',
  'solid-concrete-blocks': 'Solid Concrete Blocks',
  'ceiling-blocks': 'Ceiling Blocks',
  'retaining-walls': 'Retaining Walls',
  'l-range-standard': 'L-Range Standard',
  'l-range-rock-face': 'L-Range Rock Face',
  'terralite': 'Terralite',
  '4x4-step-block': '4×4 Step Block',
  'terrafix': 'Terrafix',
  'terracrete': 'Terracrete',
  'kerbs-edging': 'Kerbs & Edging',
  'road-kerbs': 'Road Kerbs',
  'demarcation-kerbs': 'Demarcation Kerbs',
  'garden-kerbs': 'Garden Kerbs',
  'barrier-kerbs': 'Barrier Kerbs',
  'gutter-kerbs': 'Gutter Kerbs',
  'slotted-kerbs': 'Slotted Kerbs',
  'paving-slabs': 'Paving Slabs',
  'textured': 'Textured Paving Slabs',
  'smooth': 'Smooth Paving Slabs',
  'large-format': 'Large Format Slabs',
  'step-risers': 'Step Risers',
  'standard': 'Standard Step Risers',
  'wide-tread': 'Wide Tread Steps',
  'bullnose': 'Bullnose Steps',
  'projects': 'Projects Gallery',
  'insights': 'Insights',
  'blog': 'Blog',
  'faqs': 'FAQs',
  'contact': 'Contact',
  'search': 'Search',
  'privacy-policy': 'Privacy Policy',
  'terms-conditions': 'Terms & Conditions',
};

export default function Breadcrumbs({ path, current }) {
  const segments = path.split('/').filter(Boolean);

  const itemListElements = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://bessblock.com/' },
    ...segments.map((seg, i) => {
      const to = '/' + segments.slice(0, i + 1).join('/');
      const isLast = i === segments.length - 1;
      const label = labels[seg] || seg.replace(/-/g, ' ');
      return {
        '@type': 'ListItem',
        position: i + 2,
        name: isLast ? (current || label) : label,
        item: isLast ? undefined : `https://bessblock.com${to}`,
      };
    }),
  ].filter(Boolean);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: itemListElements,
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <ol className="breadcrumbs-list">
          <li className="breadcrumbs-item">
            <Link to="/" className="breadcrumbs-link">Home</Link>
          </li>
          {segments.map((seg, i) => {
            const to = '/' + segments.slice(0, i + 1).join('/');
            const isLast = i === segments.length - 1;
            const label = labels[seg] || seg.replace(/-/g, ' ');
            return (
              <li key={seg} className="breadcrumbs-item">
                <ChevronRight size={12} className="breadcrumbs-sep" />
                {isLast ? (
                  <span className="breadcrumbs-current">{current || label}</span>
                ) : (
                  <Link to={to} className="breadcrumbs-link">{label}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
