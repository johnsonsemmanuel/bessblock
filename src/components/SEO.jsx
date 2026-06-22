import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Bessblock Concrete Products Ltd';
const DEFAULT_DESC = 'Bessblock Concrete Products Ltd, manufacturer of concrete paving blocks, walling blocks, kerbs, paving slabs, and step risers for infrastructure and institutional projects in Ghana.';
const DEFAULT_IMAGE = '/images/hero/concrete-texture-1.jpg';
const SITE_URL = 'https://bessblock.com';

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/bessblocklogo.png`,
  description: DEFAULT_DESC,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Industrial Area, Accra',
    addressCountry: 'GH',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+233-302-555-019',
    contactType: 'sales',
    email: 'info@bessblock.com',
  },
  sameAs: [
    'https://linkedin.com/company/bessblock',
    'https://facebook.com/bessblock',
    'https://twitter.com/bessblock',
    'https://instagram.com/bessblock',
  ],
};

export default function SEO({ title, description, image, type = 'website', schema }) {
  const { pathname } = useLocation();
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDesc = description || DEFAULT_DESC;
  const pageImage = image || DEFAULT_IMAGE;
  const canonical = `${SITE_URL}${pathname}`;

  const pageSchema = schema
    ? { ...schema, '@context': 'https://schema.org' }
    : null;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImage} />

      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      {pageSchema && (
        <script type="application/ld+json">
          {JSON.stringify(pageSchema)}
        </script>
      )}
    </Helmet>
  );
}
