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
// Logo and common image mappings - use exact filenames as they appear in Cloudinary
// These are direct mappings for files that might have different names in Cloudinary
// If a filename is not in this mapping, it will be used exactly as provided
const filenameMapping: Record<string, string> = {
  // Keep mappings only if filenames differ in Cloudinary
  // Otherwise, filenames will be used exactly as they appear in code
};

/**
 * Converts a local image path to Cloudinary URL
 * Uses EXACT filenames as they appear in the code - no transformations
 * @param localPath - Local path like '/image.jpg' or '/folder/image.jpg'
 * @returns Cloudinary URL
 */
export const getCloudinaryUrl = (localPath: string): string => {
  if (!localPath) return '';
  
  // Remove leading slash if present
  let cleanPath = localPath.startsWith('/') ? localPath.slice(1) : localPath;
  
  // Check if it's already a full URL (external image)
  if (cleanPath.startsWith('http://') || cleanPath.startsWith('https://')) {
    return cleanPath;
  }
  
  // Check for direct mapping first (logos and common images)
  if (filenameMapping[cleanPath]) {
    return `${BASE_URL}/${filenameMapping[cleanPath]}`;
  }
  
  // Use EXACT filename as-is - Cloudinary will handle it
  // Only URL encode spaces and special characters that need encoding
  const encodedFilename = encodeURIComponent(cleanPath);
  
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
