import { useState } from 'react';
import { LayoutDashboard, Package, FileText, Users, TrendingUp, LogOut } from 'lucide-react';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const [view, setView] = useState('dashboard');

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'greenlife2026') {
      setIsLoggedIn(true);
      setPassword('');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView('dashboard');
    setPassword('');
  };

  // Mock Products Data
  const mockProducts = [
    { id: 1, name: 'G-Mal', category: 'Antimalarial', status: 'Active' },
    { id: 2, name: 'Lonart', category: 'Antimalarial', status: 'Active' },
    { id: 3, name: 'P-Alaxin', category: 'Antimalarial', status: 'Active' },
    { id: 4, name: 'Artemether', category: 'Antimalarial', status: 'Active' },
  ];

  // Products View Component
  const ProductsView = () => (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Product Management</h1>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Product Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Category</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Status</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockProducts.map((product) => (
              <tr key={product.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 text-slate-900 font-semibold">{product.name}</td>
                <td className="px-6 py-4 text-slate-600">{product.category}</td>
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                    {product.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button type="button" className="text-[#059669] hover:text-emerald-600 font-semibold text-sm">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  // Login Gate
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#059669] rounded-full flex items-center justify-center mx-auto mb-4">
              <LayoutDashboard className="text-white" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Admin Login</h1>
            <p className="text-slate-600">Enter password to access admin panel</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-slate-900 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent text-slate-900"
                placeholder="Enter password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#059669] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Main Admin Panel
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Fixed Sidebar - Direct HTML */}
      <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 flex flex-col shadow-lg fixed left-0 top-0">
        <div className="mb-8">
          <img
            src={encodeURI('/GreenLife-logo-black (1).png')}
            alt="Greenlife Pharmaceuticals"
            className="h-10 w-auto object-contain brightness-0 invert mb-4"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <h2 className="text-xl font-bold tracking-tighter">Admin Panel</h2>
        </div>
        
        <nav className="space-y-2 flex-1">
          <button
            type="button"
            onClick={() => {
              console.log('Switching to dashboard');
              setView('dashboard');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              view === 'dashboard'
                ? 'bg-[#059669] text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Switching to products');
              setView('products');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              view === 'products'
                ? 'bg-[#059669] text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Package size={20} />
            Products
          </button>
          <button
            type="button"
            onClick={() => {
              console.log('Switching to posts');
              setView('posts');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              view === 'posts'
                ? 'bg-[#059669] text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-800'
            }`}
          >
            <FileText size={20} />
            Posts
          </button>
        </nav>

        <button
          type="button"
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-all mt-4"
        >
          <LogOut size={20} />
          Logout
        </button>
      </aside>

      {/* Content Area */}
      <main className="flex-1 ml-64 p-8 overflow-y-auto bg-white">
        <div className="max-w-7xl mx-auto">
          {view === 'dashboard' && (
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Dashboard</h1>
              
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Users</h2>
                    <Users className="text-[#059669]" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-[#059669]">1,234</p>
                  <p className="text-sm text-slate-600 mt-2">Total users</p>
                </div>
                
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Products</h2>
                    <Package className="text-[#059669]" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-[#059669]">456</p>
                  <p className="text-sm text-slate-600 mt-2">Total products</p>
                </div>
                
                <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-bold text-slate-900">Visits</h2>
                    <TrendingUp className="text-[#059669]" size={24} />
                  </div>
                  <p className="text-4xl font-bold text-[#059669]">12.4K</p>
                  <p className="text-sm text-slate-600 mt-2">This month</p>
                </div>
              </div>
            </div>
          )}

          {view === 'products' && <ProductsView />}

          {view === 'posts' && (
            <div>
              <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Blog Posts</h1>
              <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
                <p className="text-slate-600">Posts management interface coming soon...</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
