import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, FileText, Users, TrendingUp, LogOut, Plus, Edit, Trash2, X, Upload } from 'lucide-react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const [products, setProducts] = useState([]);
  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    price: '',
    description: '',
    image: null,
    imagePreview: null,
  });

  // Load products from localStorage on mount
  useEffect(() => {
    if (isLoggedIn) {
      const savedProducts = localStorage.getItem('adminProducts');
      if (savedProducts) {
        setProducts(JSON.parse(savedProducts));
      } else {
        // Initialize with mock data
        const initialProducts = [
          { id: 1, name: 'G-Mal', category: 'Antimalarial', price: '₦2,500', status: 'Active', imageUrl: '/products/g-mal.jpg' },
          { id: 2, name: 'Lonart', category: 'Antimalarial', price: '₦3,200', status: 'Active', imageUrl: '/products/lonart.jpg' },
          { id: 3, name: 'P-Alaxin', category: 'Antimalarial', price: '₦2,800', status: 'Active', imageUrl: '/products/p-alaxin.jpg' },
          { id: 4, name: 'Artemether', category: 'Antimalarial', price: '₦3,500', status: 'Active', imageUrl: '/products/artemether.jpg' },
        ];
        setProducts(initialProducts);
        localStorage.setItem('adminProducts', JSON.stringify(initialProducts));
      }
    }
  }, [isLoggedIn]);

  // Save products to localStorage whenever products change
  useEffect(() => {
    if (isLoggedIn && products.length > 0) {
      localStorage.setItem('adminProducts', JSON.stringify(products));
    }
  }, [products, isLoggedIn]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'greenlife2026') {
      setIsLoggedIn(true);
      setPassword('');
      navigate('/admin');
    } else {
      alert('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    navigate('/admin/login');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProductForm({
          ...productForm,
          image: file,
          imagePreview: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: editingProduct ? editingProduct.id : Date.now(),
      name: productForm.name,
      category: productForm.category,
      price: productForm.price,
      description: productForm.description,
      status: 'Active',
      imageUrl: productForm.imagePreview || editingProduct?.imageUrl || '/placeholder.jpg',
    };

    if (editingProduct) {
      setProducts(products.map(p => p.id === editingProduct.id ? newProduct : p));
    } else {
      setProducts([...products, newProduct]);
    }

    resetProductForm();
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      price: product.price,
      description: product.description || '',
      image: null,
      imagePreview: product.imageUrl || null,
    });
    setShowProductModal(true);
  };

  const handleDeleteProduct = (id) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const resetProductForm = () => {
    setProductForm({
      name: '',
      category: '',
      price: '',
      description: '',
      image: null,
      imagePreview: null,
    });
    setEditingProduct(null);
    setShowProductModal(false);
  };

  // Mock Analytics Data
  const monthlySalesData = [
    { month: 'Jan', sales: 45000, inquiries: 120 },
    { month: 'Feb', sales: 52000, inquiries: 145 },
    { month: 'Mar', sales: 48000, inquiries: 130 },
    { month: 'Apr', sales: 61000, inquiries: 165 },
    { month: 'May', sales: 55000, inquiries: 150 },
    { month: 'Jun', sales: 67000, inquiries: 180 },
  ];

  const categoryData = [
    { name: 'Antimalarial', value: 45, color: '#03a84e' },
    { name: 'Antibiotics', value: 25, color: '#10b981' },
    { name: 'Vitamins', value: 20, color: '#34d399' },
    { name: 'Others', value: 10, color: '#6ee7b7' },
  ];

  // Dashboard Component
  const Dashboard = () => (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Users</h2>
            <Users className="text-[#03a84e]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#03a84e]">1,234</p>
          <p className="text-sm text-slate-600 mt-2">Total users</p>
        </div>
        
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Products</h2>
            <Package className="text-[#03a84e]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#03a84e]">{products.length}</p>
          <p className="text-sm text-slate-600 mt-2">Total products</p>
        </div>
        
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Visits</h2>
            <TrendingUp className="text-[#03a84e]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#03a84e]">12.4K</p>
          <p className="text-sm text-slate-600 mt-2">This month</p>
        </div>
      </div>

      {/* Analytics Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Monthly Sales/Inquiries Line Chart */}
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
          <h2 className="text-xl font-bold text-white mb-6">Monthly Sales & Inquiries</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={monthlySalesData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
              <Legend wrapperStyle={{ color: '#9ca3af' }} />
              <Line type="monotone" dataKey="sales" stroke="#03a84e" strokeWidth={2} name="Sales (₦)" />
              <Line type="monotone" dataKey="inquiries" stroke="#10b981" strokeWidth={2} name="Inquiries" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Category Pie Chart */}
        <div className="p-6 rounded-xl bg-slate-900 border border-slate-800 shadow-sm">
          <h2 className="text-xl font-bold text-white mb-6">Product Categories</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1f2937', 
                  border: '1px solid #374151',
                  borderRadius: '8px',
                  color: '#fff'
                }} 
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );

  // Product Table Component
  const ProductTable = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-900">Product Management</h1>
        <button
          type="button"
          onClick={() => {
            resetProductForm();
            setShowProductModal(true);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#03a84e] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-[#028a42] transition-colors"
        >
          <Plus size={20} />
          Add New Product
        </button>
      </div>
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Thumbnail</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Product Name</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Category</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Price</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900">Status</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-slate-900">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-8 text-center text-slate-500">
                  No products found. Click "Add New Product" to get started.
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center">
                      {product.imageUrl ? (
                        <img 
                          src={product.imageUrl} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="64" height="64"%3E%3Crect fill="%23e5e7eb" width="64" height="64"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy=".3em" fill="%239ca3af" font-size="12"%3ENo Image%3C/text%3E%3C/svg%3E';
                          }}
                        />
                      ) : (
                        <Package className="text-slate-400" size={24} />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-900 font-semibold">{product.name}</td>
                  <td className="px-6 py-4 text-slate-600">{product.category}</td>
                  <td className="px-6 py-4 text-slate-900 font-semibold">{product.price}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => handleEditProduct(product)}
                        className="p-2 text-[#03a84e] hover:bg-green-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => handleDeleteProduct(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Product Modal */}
      {showProductModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-900">
                {editingProduct ? 'Edit Product' : 'Add New Product'}
              </h2>
              <button
                type="button"
                onClick={resetProductForm}
                className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
              >
                <X size={20} className="text-slate-600" />
              </button>
            </div>
            <form onSubmit={handleProductSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Product Name</label>
                <input
                  type="text"
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#03a84e] focus:ring-2 focus:ring-[#03a84e]/20"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Category</label>
                  <input
                    type="text"
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#03a84e] focus:ring-2 focus:ring-[#03a84e]/20"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Price</label>
                  <input
                    type="text"
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="₦2,500"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#03a84e] focus:ring-2 focus:ring-[#03a84e]/20"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Description</label>
                <textarea
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#03a84e] focus:ring-2 focus:ring-[#03a84e]/20"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">Product Image</label>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 px-4 py-3 border-2 border-dashed border-slate-300 rounded-lg cursor-pointer hover:border-[#03a84e] transition-colors">
                    <Upload className="text-[#03a84e]" size={20} />
                    <span className="text-slate-600">Click to upload image</span>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                  {productForm.imagePreview && (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-slate-200">
                      <img
                        src={productForm.imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-[#03a84e] text-white font-bold rounded-lg hover:bg-[#028a42] transition-colors"
                >
                  {editingProduct ? 'Update Product' : 'Save Product'}
                </button>
                <button
                  type="button"
                  onClick={resetProductForm}
                  className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-lg hover:bg-slate-200 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );

  // Posts Table Component
  const PostsTable = () => (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Blog Posts</h1>
      <div className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm">
        <p className="text-slate-600">Posts management interface coming soon...</p>
      </div>
    </div>
  );

  // Determine active tab based on URL
  const getActiveTab = () => {
    const path = location.pathname;
    if (path.includes('/products')) return 'products';
    if (path.includes('/posts')) return 'posts';
    return 'dashboard';
  };

  const activeTab = getActiveTab();

  // Login Gate
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center p-6">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#03a84e] rounded-full flex items-center justify-center mx-auto mb-4">
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
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#03a84e] focus:border-transparent text-slate-900"
                placeholder="Enter password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[#03a84e] text-white font-bold rounded-lg hover:bg-[#028a42] transition-colors"
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
              navigate('/admin');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#03a84e] text-white'
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
              navigate('/admin/products');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'products'
                ? 'bg-[#03a84e] text-white'
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
              navigate('/admin/posts');
            }}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'posts'
                ? 'bg-[#03a84e] text-white'
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
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="products" element={<ProductTable />} />
            <Route path="posts" element={<PostsTable />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Admin;
