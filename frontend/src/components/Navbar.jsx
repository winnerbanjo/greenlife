import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, ChevronDown, History, Users, Star, Globe, Pill, Heart, Activity, Stethoscope, Package } from 'lucide-react';
import { useState } from 'react';
import { searchProducts } from '../utils/productData';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  if (isAdmin) return null;

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.length > 0) {
      const results = searchProducts(query);
      setSearchResults(results.slice(0, 5));
      setShowSearch(true);
    } else {
      setSearchResults([]);
      setShowSearch(false);
    }
  };

  const menuItems = [
    {
      name: 'About Us',
      path: '/about',
      megaMenu: [
        { name: 'History', path: '/about#timeline', icon: History },
        { name: 'Leadership', path: '/about#leadership', icon: Users },
        { name: 'Core Values', path: '/about#values', icon: Star },
        { name: 'Impact', path: '/about#impact', icon: Globe },
      ],
    },
    {
      name: 'Our Products',
      path: '/products',
      megaMenu: [
        { name: 'Anti-Malarials', path: '/catalogue?category=Anti-Malarials', icon: Pill },
        { name: 'Antibiotics', path: '/catalogue?category=Antibiotics', icon: Stethoscope },
        { name: 'Anti-Diabetics', path: '/catalogue?category=Anti-Diabetics', icon: Activity },
        { name: 'Cardiovascular', path: '/catalogue?category=Cardiovascular', icon: Heart },
        { name: 'Multivitamins', path: '/catalogue?category=Multivitamins', icon: Pill },
        { name: 'Fertility Solutions', path: '/catalogue?category=Fertility', icon: Heart },
        { name: 'Pain Management', path: '/catalogue?category=Pain Management', icon: Stethoscope },
        { name: 'View All', path: '/catalogue', icon: Package },
      ],
    },
    { name: 'Your Health', path: '/insights' },
    { name: 'Responsibility', path: '/csr' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#059669] text-white text-xs">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-end gap-6 h-8">
            <Link to="/about#investors" className="hover:text-slate-200 transition-colors uppercase tracking-wider font-medium">
              Investors
            </Link>
            <Link to="/insights" className="hover:text-slate-200 transition-colors uppercase tracking-wider font-medium">
              News & Media
            </Link>
            <Link to="/careers" className="hover:text-slate-200 transition-colors uppercase tracking-wider font-medium">
              Career
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-8 left-0 right-0 z-50 glass-navbar"
        onMouseLeave={() => {
          setHoveredMenu(null);
          setShowSearch(false);
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Absolute Left */}
            <Link to="/" className="flex items-center flex-shrink-0">
              <motion.img
                src={encodeURI('/GreenLife-logo-black (1).png')}
                alt="Greenlife Pharmaceuticals"
                className="h-12 w-auto object-contain"
                style={{ imageRendering: '-webkit-optimize-contrast' }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 400 }}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.megaMenu && setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    to={item.path}
                    className="px-4 py-2 text-sm font-medium tracking-tight text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1"
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown size={14} />}
                  </Link>

                  {/* Mega Menu - Full Width */}
                  {item.megaMenu && (
                    <AnimatePresence>
                      {hoveredMenu === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-screen max-w-4xl glass-card rounded-xl p-8 shadow-xl"
                        >
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {item.megaMenu.map((subItem) => {
                              const Icon = subItem.icon;
                              return (
                                <Link
                                  key={subItem.name}
                                  to={subItem.path}
                                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-slate-700 hover:text-[#059669] hover:bg-[#059669]/5 rounded-full transition-all border border-transparent hover:border-[#059669]/20"
                                  onClick={() => setHoveredMenu(null)}
                                >
                                  <Icon size={18} className="text-[#059669]" />
                                  <span className="font-medium">{subItem.name}</span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side - Search & Distributor Portal */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center gap-2 glass-card rounded-lg px-4 py-2 min-w-[300px]">
                  <Search size={18} className="text-slate-500" />
                  <input
                    type="text"
                    placeholder="Search for products..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    onFocus={() => searchQuery.length > 0 && setShowSearch(true)}
                    className="flex-1 bg-transparent border-none outline-none text-sm text-slate-900 placeholder-slate-400"
                  />
                </div>
                
                {/* Search Results Dropdown */}
                {showSearch && searchResults.length > 0 && (
                  <div className="absolute top-full mt-2 w-full glass-card rounded-xl p-4 shadow-xl max-h-96 overflow-y-auto">
                    {searchResults.map((product) => (
                      <Link
                        key={product.name}
                        to={`/product/${product.name}`}
                        onClick={() => {
                          setShowSearch(false);
                          setSearchQuery('');
                        }}
                        className="block px-4 py-3 hover:bg-[#059669]/5 rounded-lg transition-colors mb-2"
                      >
                        <div className="font-semibold text-slate-900">{product.name}</div>
                        <div className="text-xs text-slate-600">{product.category}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors shadow-lg"
                >
                  Distributor Portal
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden pb-6 space-y-2 border-t border-white/20 mt-2"
            >
              {menuItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-white/50 transition-colors rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.megaMenu && (
                    <div className="pl-6 space-y-1">
                      {item.megaMenu.map((subItem) => {
                        const Icon = subItem.icon;
                        return (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="flex items-center gap-2 px-4 py-2 text-xs text-slate-600 hover:text-[#059669] transition-colors rounded-full"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <Icon size={14} />
                            <span>{subItem.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-white/20 px-4">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full px-6 py-2.5 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    Distributor Portal
                  </motion.button>
                </Link>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;
