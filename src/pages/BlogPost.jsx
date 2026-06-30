import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PortableText } from '@portabletext/react';
import { sanityApi, urlFor } from '../lib/sanity';
import PageHero from '../components/PageHero';
import SEO from '../components/SEO';
import './Blog.css';

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  title,
  "slug": slug.current,
  author->{name, "avatar": avatar.asset->url, role, bio},
  category,
  excerpt,
  publishedAt,
  readTime,
  body,
  "image": mainImage,
  "imageAlt": mainImage.alt
}`;

const ptComponents = {
  types: {
    image: ({ value }) => (
      <img
        src={urlFor(value).width(900).url()}
        alt={value.alt || ''}
        className="blog-post-image"
        style={{ margin: '1.5rem 0' }}
      />
    ),
  },
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    sanityApi.fetch(QUERY, { slug })
      .then(setPost)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return <div className="page"><div style={{ padding: '4rem', textAlign: 'center', color: 'var(--text-tertiary)' }}>Loading…</div></div>;
  }

  if (!post) {
    return (
      <>
        <SEO title="Blog Post" description="The article you're looking for doesn't exist." />
        <div className="page">
          <PageHero title="Post Not Found" description="The article you're looking for doesn't exist." bgImage="/images/hero/concrete-texture-2.webp" />
          <section className="section">
            <div className="container" style={{ textAlign: 'center' }}>
              <Link to="/insights/blog" className="blog-card-link">&larr; Back to Blog</Link>
            </div>
          </section>
        </div>
      </>
    );
  }

  const authorName = typeof post.author === 'object' ? post.author?.name : post.author || 'Bessblock Team';
  const authorAvatar = typeof post.author === 'object' ? post.author?.avatar : null;
  const imageUrl = post.image ? urlFor(post.image).width(1200).url() : '/images/production/IMG_1750.webp';
  const dateStr = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt || ''}
        schema={{
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          image: imageUrl,
          datePublished: post.publishedAt,
          author: { '@type': 'Person', name: authorName },
          publisher: {
            '@type': 'Organization',
            name: 'Bessblock Concrete Products Ltd',
            logo: { '@type': 'ImageObject', url: 'https://bessblock.com/bessblocklogo.png' },
          },
        }}
      />
      <div className="page">
        <PageHero title="Blog" description={post.title} bgImage="/images/hero/concrete-texture-2.webp" />
        <section className="section">
          <div className="container blog-post">
            <Link to="/insights/blog" className="blog-post-back">&larr; Back to Blog</Link>
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <img src={imageUrl} alt={post.imageAlt || post.title} className="blog-post-image" />
              <h1 className="blog-post-title">{post.title}</h1>
              <div className="blog-post-meta">
                <span>{dateStr}</span>
                <span className="blog-card-cat">{post.category}</span>
                <span className="blog-post-author">
                  {authorAvatar && <img src={authorAvatar} alt="" className="blog-post-avatar" />}
                  By {authorName}
                </span>
              </div>
              {post.body && <PortableText value={post.body} components={ptComponents} />}
            </motion.article>
          </div>
        </section>
      </div>
    </>
  );
}
