# Cloudinary Migration Setup Guide

This project has been migrated to use Cloudinary for all image assets. All images are served from the `greenlife-uploads` folder in your Cloudinary account.

## Environment Variables

Create a `.env` file in the `frontend` directory with your Cloudinary cloud name:

```env
REACT_APP_CLOUDINARY_CLOUD_NAME=your-cloud-name-here
```

Replace `your-cloud-name-here` with your actual Cloudinary cloud name (found in your Cloudinary dashboard).

## Image Naming Convention

The system automatically handles image filename mapping:

1. **Standard filenames**: Files like `image.jpg` are converted to `image-copy-3.jpg`
2. **Files with "Small" suffix**: Files like `image Small.jpeg` are converted to `image-small-copy-3.jpg`
3. **Files already in Cloudinary**: If a file already exists with the correct name, it will be used directly

## Uploading Images to Cloudinary

1. Log in to your Cloudinary dashboard
2. Navigate to the Media Library
3. Create or navigate to the `greenlife-uploads` folder
4. Upload all images from `frontend/public/` to this folder
5. Ensure filenames match the expected pattern (with `-copy-3` suffix if needed)

## Fallback Handling

If an image fails to load from Cloudinary, the system will automatically:
- Show a placeholder image
- Log an error to the console (in development mode)

## Testing

After setting up your environment variable:
1. Restart your development server
2. Check the browser console for any image loading errors
3. Verify images load correctly from Cloudinary

## Troubleshooting

- **Images not loading**: Check that `REACT_APP_CLOUDINARY_CLOUD_NAME` is set correctly
- **Wrong images showing**: Verify filenames in Cloudinary match the expected naming convention
- **404 errors**: Ensure images are uploaded to the `greenlife-uploads` folder in Cloudinary
