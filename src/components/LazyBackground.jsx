import { useRef, useState, useEffect } from 'react';

function toWebP(url) {
  return url.replace(/\.(jpe?g|png)$/i, '.webp');
}

export default function LazyBackground({ src, className, children, style, ...props }) {
  const ref = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const bgImage = src !== toWebP(src)
    ? `image-set(url("${toWebP(src)}") type("image/webp"), url("${src}") type("image/jpeg"))`
    : `url(${src})`;

  return (
    <div
      ref={ref}
      className={className}
      style={{
        backgroundImage: bgImage,
        opacity: loaded ? 1 : 0,
        transition: 'opacity 0.4s ease',
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
