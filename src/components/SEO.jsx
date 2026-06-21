import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'Bessblock Concrete Products Ltd';
const DEFAULT_DESC = 'Bessblock Concrete Products Ltd — manufacturer of concrete paving blocks, walling blocks, kerbs, paving slabs, and step risers for infrastructure and institutional projects in Ghana.';
const DEFAULT_IMAGE = '/images/hero/concrete-texture-1.jpg';
const SITE_URL = 'https://bessblock.com';

export default function SEO({ title, description, image, type = 'website' }) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageDesc = description || DEFAULT_DESC;
  const pageImage = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={SITE_URL} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
      <meta name="twitter:image" content={pageImage} />
    </Helmet>
  );
}
