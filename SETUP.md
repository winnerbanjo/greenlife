# Greenlife Pharmaceuticals - Setup & Verification Guide

## ✅ Dependency Audit

### Backend Dependencies (Verified)
- ✅ `express` - Web framework
- ✅ `mongoose` - MongoDB ODM
- ✅ `jsonwebtoken` - JWT authentication
- ✅ `bcryptjs` - Password hashing
- ✅ `cors` - Cross-origin resource sharing
- ✅ `dotenv` - Environment variables
- ✅ `express-validator` - Input validation
- ✅ `colors` - Console colors
- ✅ `nodemon` - Development server (dev dependency)

### Frontend Dependencies (Verified)
- ✅ `react` & `react-dom` - React framework
- ✅ `react-router-dom` - Routing
- ✅ `axios` - HTTP client
- ✅ `framer-motion` - Animations
- ✅ `lucide-react` - Icons
- ✅ `tailwindcss` - Styling
- ✅ `postcss` & `autoprefixer` - CSS processing

## ✅ Environment Configuration

### Backend (.env file required)
Create `backend/.env` with:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/greenlifepharma
JWT_SECRET=your-super-secret-jwt-key-change-in-production
```

**Verification:**
- ✅ `server.js` uses `process.env.MONGO_URI` with fallback
- ✅ `server.js` uses `process.env.PORT` with fallback (5000)
- ✅ `auth.js` routes use `process.env.JWT_SECRET` with fallback
- ✅ `middleware/auth.js` uses `process.env.JWT_SECRET` with fallback

## ✅ Admin Login Integration

### Frontend Login Form
- ✅ Located at `/admin/login`
- ✅ Uses `authAPI.login()` from `utils/api.js`
- ✅ Stores JWT token in localStorage
- ✅ Redirects to `/admin` on success
- ✅ Shows error messages on failure

### Backend Auth Routes
- ✅ `POST /api/auth/login` - Authenticates user
- ✅ `POST /api/auth/register` - Creates admin user
- ✅ `GET /api/auth/me` - Gets current user (protected)
- ✅ JWT token generation and validation working

### Protected Routes
- ✅ Admin dashboard protected by `ProtectedRoute` component
- ✅ Token validation in API interceptors
- ✅ Auto-redirect to login on 401 errors

## ✅ Home Page Verification

### Padding Consistency
- ✅ All sections use `Section` component
- ✅ `Section` component applies `section-padding` class
- ✅ `section-padding` = `py-40` (160px vertical padding)
- ✅ Consistent spacing between all sections

### Animations
- ✅ All sections use `whileInView` fade-up animations
- ✅ Smooth transitions with `duration: 0.6, ease: 'easeOut'`
- ✅ Viewport margin set to `-100px` for early trigger
- ✅ `once: true` prevents re-animation on scroll
- ✅ Hero section has staggered motion text animations
- ✅ Buttons use `scale-hover` effects (whileHover scale)

### Background Demarcations
- ✅ Legacy section uses `bgShift` prop with `bg-slate-900/30`
- ✅ CTA section uses `bgShift` prop with `bg-slate-900/30`
- ✅ Clean background shifts (no clumsy lines)

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend (new terminal)
cd frontend
npm install
```

### 2. Setup Environment
```bash
# Copy example env file
cd backend
cp .env.example .env

# Edit .env with your MongoDB URI and JWT secret
```

### 3. Start MongoDB
```bash
# Make sure MongoDB is running locally
# Or update MONGO_URI in .env to point to your MongoDB instance
```

### 4. Start Servers
```bash
# Backend (Terminal 1)
cd backend
npm run dev

# Frontend (Terminal 2)
cd frontend
npm run dev
```

### 5. Create Admin User
```bash
# Register admin user
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"username": "admin", "password": "password123"}'
```

### 6. Access Application
- **Frontend**: http://localhost:5173 (or port shown in terminal)
- **Backend API**: http://localhost:5000
- **Admin Login**: http://localhost:5173/admin/login

## ✅ Verification Checklist

- [x] All dependencies installed
- [x] Environment variables configured
- [x] MongoDB connection working
- [x] Backend server running on port 5000
- [x] Frontend server running
- [x] Admin login form functional
- [x] JWT authentication working
- [x] Protected routes secured
- [x] Home page padding consistent (160px)
- [x] Animations smooth and working
- [x] API endpoints responding
- [x] Error handling in place

## 🔧 Troubleshooting

### Backend won't start
- Check MongoDB is running
- Verify `.env` file exists in `backend/` directory
- Check port 5000 is not in use

### Frontend won't start
- Verify all dependencies installed (`npm install`)
- Check Node.js version (v18+ recommended)
- Clear `node_modules` and reinstall if needed

### Admin login fails
- Verify backend is running
- Check API URL in `utils/api.js` matches backend port
- Verify admin user exists (register if needed)
- Check browser console for errors

### API requests fail
- Verify CORS is enabled in backend
- Check API base URL in `utils/api.js`
- Verify token is stored in localStorage
- Check network tab for request/response details

## 📝 Notes

- All sections use consistent 160px (py-40) vertical padding
- Animations are optimized with `once: true` to prevent re-triggering
- Error handling includes auto-redirect to login on 401 errors
- Environment variables have sensible fallbacks for development
