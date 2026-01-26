import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, FileText, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Products', path: '/admin/products', icon: Package },
    { name: 'Blog Posts', path: '/admin/blog', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-slate-900/50 border-r border-white/10 h-screen fixed left-0 top-0 p-6">
      <div className="mb-8">
        <h2 className="text-xl font-black tracking-tighter text-white">
          Admin Panel
        </h2>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
                isActive
                  ? 'bg-premium-emerald text-white'
                  : 'text-white/60 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <motion.button
        onClick={handleLogout}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="absolute bottom-6 left-6 right-6 flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-white/60 hover:text-white hover:bg-slate-800/50 transition-all"
      >
        <LogOut size={20} />
        Logout
      </motion.button>
    </aside>
  );
};

export default Sidebar;
