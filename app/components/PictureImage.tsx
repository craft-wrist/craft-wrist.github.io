interface PictureImageProps {
  src: string;
  webp: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  fetchPriority?: 'high' | 'low' | 'auto';
  decoding?: 'async' | 'sync';
}

export default function PictureImage({
  src,
  webp,
  width,
  height,
  alt,
  className,
  loading,
  fetchPriority,
  decoding,
}: PictureImageProps) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={src}
        width={width}
        height={height}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        decoding={decoding}
      />
    </picture>
  );
}
