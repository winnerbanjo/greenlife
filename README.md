# Greenlife Pharmaceuticals - MERN Stack Application

A high-end, professional-grade MERN stack website for Greenlife Pharmaceuticals featuring a premium dark mode aesthetic and comprehensive admin dashboard.

## Tech Stack

### Frontend
- React 19 (Vite)
- React Router DOM
- Tailwind CSS
- Framer Motion
- Lucide Icons

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs
- express-validator

## Project Structure

```
greenlifepharma/
├── backend/
│   ├── models/          # MongoDB models (User, Product, BlogPost)
│   ├── routes/          # API routes (auth, products, posts)
│   ├── middleware/      # Authentication middleware
│   └── server.js        # Express server entry point
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── App.jsx      # Main app with routing
│   └── ...
```

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/greenlifepharma
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

4. Start the server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or another port if 5173 is busy)

## Features

### Public Site
- **Home**: Hero section with motion text animations, 27-year legacy showcase, drag-to-scroll product carousel (exactly 6 items)
- **Products**: Product catalog with category filtering, no prices displayed
- **About**: Company information with product-group imagery, shortened "sneak peek" of core values
- **Insights**: High-end magazine layout with featured post treatment

### Admin Dashboard
- **Login**: Glassmorphic login screen with JWT authentication
- **Dashboard**: Overview statistics
- **Product Management**: Full CRUD with minimalist table UI
- **Blog Management**: Full CRUD with minimalist table UI
- **Sidebar Navigation**: Clean sidebar layout for admin panel

## Design System

- **Colors**: Pure White, Slate-950, Premium Emerald (#059669)
- **Typography**: Inter/Geist font family (headings: font-bold tracking-tighter)
- **Layout**: 8-column grid system
- **Animations**: Framer Motion whileInView fade-up animations, scale-hover on buttons
- **Spacing**: Section padding of py-40 (160px) for breathable feel
- **Demarcations**: Background shifts (not lines) between sections

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register admin user
- `POST /api/auth/login` - Login admin user
- `GET /api/auth/me` - Get current user (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/featured` - Get featured products (for carousel)
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (protected)
- `PUT /api/products/:id` - Update product (protected)
- `DELETE /api/products/:id` - Delete product (protected)

### Posts (Insights)
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get single post
- `POST /api/posts` - Create post (protected)
- `DELETE /api/posts/:id` - Delete post (protected)

## Creating an Admin User

To create an admin user, make a POST request to `/api/auth/register`:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "yourpassword"}'
```

## Notes

- Add a logo image at `/frontend/public/logo.png` for the header
- Product images should be provided via URL in the admin panel
- Featured products (for carousel) are limited to exactly 6 items
- All admin routes are protected and require JWT authentication

## Production Deployment

1. Set up environment variables properly
2. Use a secure JWT secret
3. Configure CORS for your domain
4. Set up MongoDB Atlas or production MongoDB instance
5. Build the frontend: `npm run build`
6. Serve the built files with a production server (nginx, etc.)
