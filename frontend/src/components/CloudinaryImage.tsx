import { useState } from 'react';
import { getCloudinaryUrl, FALLBACK_IMAGE } from '../lib/cloudinary';

interface CloudinaryImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallback?: string;
  onError?: () => void;
  [key: string]: any; // Allow other img props
}

/**
 * CloudinaryImage component with automatic fallback handling
 * Shows a skeleton loader while loading and falls back to placeholder on error
 */
const CloudinaryImage = ({
  src,
  alt,
  className = '',
  style = {},
  fallback = FALLBACK_IMAGE,
  onError,
  ...otherProps
}: CloudinaryImageProps) => {
  const [imageSrc, setImageSrc] = useState(getCloudinaryUrl(src));
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    setImageSrc(fallback);
    if (onError) {
      onError();
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className={`relative ${className}`} style={style}>
      {isLoading && (
        <div
          className="absolute inset-0 bg-slate-200 animate-pulse rounded"
          style={style}
          aria-hidden="true"
        />
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        style={style}
        onError={handleError}
        onLoad={handleLoad}
        loading="lazy"
        {...otherProps}
      />
    </div>
  );
};

export default CloudinaryImage;
