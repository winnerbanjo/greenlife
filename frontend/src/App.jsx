import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import AIChatWidget from './components/AIChatWidget';
import ScrollToTop from './components/ScrollToTop';

// Public Pages
import Home from './pages/Home';
import Products from './pages/Products';
import Catalogue from './pages/Catalogue';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Insights from './pages/Insights';
import Contact from './pages/Contact';

// Admin Pages
import AdminLogin from './pages/AdminLogin';
import Admin from './pages/Admin';

// Public Pages - Resources
import CSR from './pages/CSR';
import Resources from './pages/Resources';
import Careers from './pages/Careers';
import ComingSoon from './pages/ComingSoon';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const adminSession = localStorage.getItem('adminSession');
  return (token && adminSession) ? children : <Navigate to="/admin/login" replace />;
};

function AppContent() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      {!isAdmin && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/product/:productName" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/csr" element={<CSR />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
      {!isAdmin && <AIChatWidget />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
