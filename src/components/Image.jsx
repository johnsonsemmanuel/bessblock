export default function Image({ src, alt = '', className = '', style, ...rest }) {
  if (!src || src.startsWith('http') || src.startsWith('data:')) {
    return <img src={src} alt={alt} className={className} style={style} {...rest} />;
  }

  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <img src={src} alt={alt} className={className} style={style} {...rest} />
    </picture>
  );
}
