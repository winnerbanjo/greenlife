/**
 * Cloudinary Image URL Configuration
 * All images are served from the 'greenlife-uploads' folder in Cloudinary
 */

// Cloudinary configuration
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME || 'do4mbqgjn';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/v1/greenlife-uploads`;

/**
 * Maps local image filenames to Cloudinary paths
 * Handles various naming conventions including "Copy 3" patterns and "Small" suffixes
 */
const filenameMapping: Record<string, string> = {
  // Handle "Small" suffix variations
  'lonart (1).jpg': 'lonart-1-copy-3.jpg',
  'lonart (2).jpg': 'lonart-2-copy-3.jpg',
  'lonart (3).jpg': 'lonart-3-copy-3.jpg',
  'lonart (4).jpg': 'lonart-4-copy-3.jpg',
  'Manix capsule (1).jpg': 'manix-capsule-1-copy-3.jpg',
  'Manix capsule (2).jpg': 'manix-capsule-2-copy-3.jpg',
  'P-alaxin 1 x 9 (1).jpg': 'p-alaxin-1-x-9-1-copy-3.jpg',
  'P-alaxin 1 x 9 (2).jpg': 'p-alaxin-1-x-9-2-copy-3.jpg',
  'P-alaxin 1 x 9 (3).jpg': 'p-alaxin-1-x-9-3-copy-3.jpg',
  'P-alaxin 1 x 9 (4).jpg': 'p-alaxin-1-x-9-4-copy-3.jpg',
  'G-clav (1).jpg': 'g-clav-1-copy-3.jpg',
  'G-clav (2).jpg': 'g-clav-2-copy-3.jpg',
  'G-clav (3).jpg': 'g-clav-3-copy-3.jpg',
  'G-clav (4).jpg': 'g-clav-4-copy-3.jpg',
  // Add more mappings as needed
};

/**
 * Converts a local image path to Cloudinary URL
 * @param localPath - Local path like '/image.jpg' or '/folder/image.jpg'
 * @returns Cloudinary URL
 */
export const getCloudinaryUrl = (localPath: string): string => {
  if (!localPath) return '';
  
  // Remove leading slash if present
  const cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // Check if it's already a full URL (external image)
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  // Check for direct mapping first
  if (filenameMapping[cleanPath]) {
    return `${BASE_URL}/${encodeURIComponent(filenameMapping[cleanPath])}`;
  }
  
  // Handle "Small" suffix pattern (e.g., "image Small.jpeg" -> "image-small-copy-3.jpg")
  // Also handle files that already have "Small" in the name
  const smallSuffixMatch = cleanPath.match(/^(.+?)\s+Small\.(jpeg|jpg|png)$/i);
  if (smallSuffixMatch) {
    const baseName = smallSuffixMatch[1].toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '') // Remove parentheses
      .replace(/\s*\([^)]*\)/g, ''); // Remove any remaining parenthetical content
    const ext = smallSuffixMatch[2].toLowerCase();
    // Try with "-small-copy-3" first, then fallback to "-copy-3"
    return `${BASE_URL}/${encodeURIComponent(`${baseName}-small-copy-3.${ext}`)}`;
  }
  
  // Handle files that already have "Small" in the filename
  if (cleanPath.toLowerCase().includes('small')) {
    let processedName = cleanPath.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[()]/g, '')
      .replace(/\s*\([^)]*\)/g, '');
    if (!processedName.includes('copy-3')) {
      const extMatch = processedName.match(/^(.+?)(\.(jpg|jpeg|png|svg|webp|gif))$/);
      if (extMatch) {
        processedName = `${extMatch[1]}-copy-3${extMatch[2]}`;
      }
    }
    return `${BASE_URL}/${encodeURIComponent(processedName)}`;
  }
  
  // Handle standard filenames - convert to lowercase, replace spaces with hyphens
  // Handle "copy 1", "copy 2", "copy 3" patterns
  let cloudinaryFilename = cleanPath.toLowerCase();
  
  // Replace "copy 1", "copy 2", "copy 3" patterns with "copy-3"
  cloudinaryFilename = cloudinaryFilename.replace(/\s*copy\s*[0-9]+\s*/gi, '-copy-3-');
  
  // Replace spaces with hyphens
  cloudinaryFilename = cloudinaryFilename.replace(/\s+/g, '-');
  
  // Remove parentheses and clean up
  cloudinaryFilename = cloudinaryFilename.replace(/[()]/g, '').replace(/--+/g, '-');
  
  // If filename doesn't already have "copy-3", add it before extension
  if (!cloudinaryFilename.includes('copy-3')) {
    const extMatch = cloudinaryFilename.match(/^(.+?)(\.(jpg|jpeg|png|svg|webp|gif))$/);
    if (extMatch) {
      cloudinaryFilename = `${extMatch[1]}-copy-3${extMatch[2]}`;
    } else {
      cloudinaryFilename = `${cloudinaryFilename}-copy-3`;
    }
  }
  
  // URL encode the filename to handle special characters and spaces
  const encodedFilename = encodeURIComponent(cloudinaryFilename);
  
  return `${BASE_URL}/${encodedFilename}`;
};

/**
 * Gets Cloudinary URL with optional transformations
 * @param localPath - Local image path
 * @param transformations - Cloudinary transformation parameters (e.g., 'w_800,h_600,c_fill')
 * @returns Cloudinary URL with transformations
 */
export const getCloudinaryUrlWithTransform = (
  localPath: string,
  transformations?: string
): string => {
  const baseUrl = getCloudinaryUrl(localPath);
  
  // If already external URL or no transformations, return as-is
  if (!transformations || baseUrl.startsWith('http') && !baseUrl.includes('cloudinary.com')) {
    return baseUrl;
  }
  
  // Insert transformations before the version path
  if (baseUrl.includes('/v1/')) {
    return baseUrl.replace('/v1/', `/${transformations}/v1/`);
  }
  
  return baseUrl;
};

/**
 * Fallback image URL (placeholder or default image)
 */
export const FALLBACK_IMAGE = 'https://via.placeholder.com/400x300?text=Image+Loading';

export default {
  getCloudinaryUrl,
  getCloudinaryUrlWithTransform,
  FALLBACK_IMAGE,
  BASE_URL,
};
