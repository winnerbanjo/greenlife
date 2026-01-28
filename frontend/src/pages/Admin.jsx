import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Package, FileText, LogOut, Plus, Edit, Trash2, Users, TrendingUp, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productsAPI, postsAPI, authAPI } from '../utils/api';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getProductGroups } from '../utils/products';

const Admin = () => {
  const [view, setView] = useState('dashboard');
  const [products, setProducts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [stats, setStats] = useState({ products: 0, posts: 0, totalProductImages: 0 });
  
  // Mock traffic data
  const trafficData = [
    { name: 'Mon', visitors: 1240, reach: 3200 },
    { name: 'Tue', visitors: 1890, reach: 4100 },
    { name: 'Wed', visitors: 2100, reach: 4800 },
    { name: 'Thu', visitors: 1780, reach: 3900 },
    { name: 'Fri', visitors: 2450, reach: 5200 },
    { name: 'Sat', visitors: 1680, reach: 3600 },
    { name: 'Sun', visitors: 1320, reach: 3400 },
  ];

  const locationData = [
    { name: 'Lagos', value: 45, color: '#059669' },
    { name: 'Abuja', value: 25, color: '#10b981' },
    { name: 'Port Harcourt', value: 15, color: '#34d399' },
    { name: 'Kano', value: 10, color: '#6ee7b7' },
    { name: 'Others', value: 5, color: '#a7f3d0' },
  ];
  const [showProductModal, setShowProductModal] = useState(false);
  const [showPostModal, setShowPostModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [productForm, setProductForm] = useState({
    name: '',
    category: '',
    description: '',
    imageUrl: '',
    featured: false,
  });
  const [postForm, setPostForm] = useState({
    title: '',
    content: '',
    excerpt: '',
    imageUrl: '',
  });
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const adminSession = localStorage.getItem('adminSession');
    if (!token || !adminSession) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const [productsRes, postsRes] = await Promise.all([
        productsAPI.getAll(),
        postsAPI.getAll(),
      ]);
      setProducts(productsRes?.data || []);
      setPosts(postsRes?.data || []);
      
      // Count actual products from /public folder
      const actualProducts = getProductGroups();
      const totalProductImages = actualProducts.reduce((sum, product) => sum + product.images.length, 0);
      
      setStats({ 
        products: actualProducts.length || productsRes?.data?.length || 0, 
        posts: postsRes?.data?.length || 0,
        totalProductImages: totalProductImages,
      });
    } catch (err) {
      console.error('Error fetching data:', err);
      // If unauthorized, redirect to login
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('adminSession');
        navigate('/admin/login');
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('adminSession');
    navigate('/admin/login');
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await productsAPI.update(editingProduct._id, productForm);
      } else {
        await productsAPI.create(productForm);
      }
      fetchData();
      resetProductForm();
      alert(`✅ ${editingProduct ? 'Product updated' : 'Product created'} successfully!`);
    } catch (err) {
      // If backend is not available, show mock success for demo
      if (!err.response || err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
        alert(`✅ [DEMO MODE] ${editingProduct ? 'Product updated' : 'Product created'} successfully!\n\nNote: Backend API is not available. This is a mock success for demonstration purposes.`);
        resetProductForm();
        // Optionally refresh the list if we have local data
        if (products.length > 0) {
          fetchData();
        }
        return;
      }
      const errorMsg = err.response?.data?.message || 'Error saving product';
      alert(errorMsg);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
      }
    }
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingPost) {
        await postsAPI.update(editingPost._id, postForm);
      } else {
        await postsAPI.create(postForm);
      }
      fetchData();
      resetPostForm();
      alert(`✅ ${editingPost ? 'Post updated' : 'Post created'} successfully!`);
    } catch (err) {
      // If backend is not available, show mock success for demo
      if (!err.response || err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
        alert(`✅ [DEMO MODE] ${editingPost ? 'Post updated' : 'Post created'} successfully!\n\nNote: Backend API is not available. This is a mock success for demonstration purposes.`);
        resetPostForm();
        // Optionally refresh the list if we have local data
        if (posts.length > 0) {
          fetchData();
        }
        return;
      }
      const errorMsg = err.response?.data?.message || 'Error saving post';
      alert(errorMsg);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
      }
    }
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm('Delete this product?')) return;
    try {
      await productsAPI.delete(id);
      fetchData();
      alert('✅ Product deleted successfully!');
    } catch (err) {
      // If backend is not available, show mock success for demo
      if (!err.response || err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
        alert('✅ [DEMO MODE] Product deleted successfully!\n\nNote: Backend API is not available. This is a mock success for demonstration purposes.');
        // Remove from local state for demo
        setProducts(products.filter(p => p._id !== id));
        return;
      }
      const errorMsg = err.response?.data?.message || 'Error deleting product';
      alert(errorMsg);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
      }
    }
  };

  const handleDeletePost = async (id) => {
    if (!confirm('Delete this post?')) return;
    try {
      await postsAPI.delete(id);
      fetchData();
      alert('✅ Post deleted successfully!');
    } catch (err) {
      // If backend is not available, show mock success for demo
      if (!err.response || err.code === 'ERR_NETWORK' || err.message?.includes('Network Error')) {
        alert('✅ [DEMO MODE] Post deleted successfully!\n\nNote: Backend API is not available. This is a mock success for demonstration purposes.');
        // Remove from local state for demo
        setPosts(posts.filter(p => p._id !== id));
        return;
      }
      const errorMsg = err.response?.data?.message || 'Error deleting post';
      alert(errorMsg);
      if (err.response?.status === 401) {
        localStorage.removeItem('token');
        navigate('/admin/login');
      }
    }
  };

  const resetProductForm = () => {
    setProductForm({ name: '', category: '', description: '', imageUrl: '', featured: false });
    setEditingProduct(null);
    setShowProductModal(false);
  };

  const resetPostForm = () => {
    setPostForm({ title: '', content: '', excerpt: '', imageUrl: '' });
    setEditingPost(null);
    setShowPostModal(false);
  };

  const openEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      category: product.category,
      description: product.description,
      imageUrl: product.imageUrl,
      featured: product.featured || false,
    });
    setShowProductModal(true);
  };

  const openEditPost = (post) => {
    setEditingPost(post);
    setPostForm({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt || '',
      imageUrl: post.imageUrl || '',
    });
    setShowPostModal(true);
  };

  // Dashboard Stats Component
  const DashboardStats = () => (
    <div>
      <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-8">Traffic & Content Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Products</h2>
            <Package className="text-[#059669]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#059669]">{stats.products}</p>
          <p className="text-sm text-slate-600 mt-2">Product Groups</p>
          {stats.totalProductImages && (
            <p className="text-xs text-slate-500 mt-1">{stats.totalProductImages} total variants</p>
          )}
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Posts</h2>
            <FileText className="text-[#059669]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#059669]">{stats.posts}</p>
          <p className="text-sm text-slate-600 mt-2">Total posts</p>
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Visitors</h2>
            <Users className="text-[#059669]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#059669]">12.4K</p>
          <p className="text-sm text-slate-600 mt-2">This week</p>
        </div>
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-slate-900">Reach</h2>
            <TrendingUp className="text-[#059669]" size={24} />
          </div>
          <p className="text-4xl font-bold text-[#059669]">28K</p>
          <p className="text-sm text-slate-600 mt-2">This week</p>
        </div>
      </div>

      {/* Traffic Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Weekly Traffic Chart */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6">Weekly Traffic</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={trafficData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="name" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'white', 
                  border: '1px solid #e2e8f0',
                  borderRadius: '8px'
                }} 
              />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#059669" strokeWidth={2} name="Visitors" />
              <Line type="monotone" dataKey="reach" stroke="#10b981" strokeWidth={2} name="Reach" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Location Distribution */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="text-[#059669]" size={20} />
            Geographic Reach
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={locationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {locationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Pages Bar Chart */}
      <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
        <h2 className="text-xl font-bold text-slate-900 mb-6">Page Views by Section</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={[
            { name: 'Home', views: 4520 },
            { name: 'Products', views: 3280 },
            { name: 'Catalogue', views: 2890 },
            { name: 'About', views: 2150 },
            { name: 'Insights', views: 1890 },
            { name: 'Contact', views: 1240 },
          ]}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="name" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }} 
            />
            <Bar dataKey="views" fill="#059669" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  // Product Management Table Component
  const ProductManagementTable = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-900">Products</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            resetProductForm();
            setShowProductModal(true);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus size={20} />
          Add Product
        </motion.button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
          >
            <div className="aspect-square bg-[#F8FAFC] rounded-lg overflow-hidden mb-4 flex items-center justify-center">
              <img 
                src={encodeURI(product.imageUrl || '/placeholder.jpg')} 
                alt={product.name} 
                className="max-w-full max-h-full object-contain" 
              />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{product.name}</h3>
            <p className="text-sm text-[#059669] mb-3">{product.category}</p>
            {product.featured && (
              <span className="inline-block px-2 py-1 bg-[#059669]/10 text-[#059669] rounded text-xs font-semibold mb-3">Featured</span>
            )}
            <div className="flex items-center gap-2 mt-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => openEditProduct(product)}
                className="flex-1 p-2 bg-[#F8FAFC] text-slate-700 rounded-lg hover:bg-slate-100 transition-colors text-sm font-semibold"
              >
                <Edit size={16} className="inline mr-1" />
                Edit
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handleDeleteProduct(product._id)}
                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
              >
                <Trash2 size={16} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  // Posts Management Table Component
  const PostsManagementTable = () => (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold tracking-tighter text-slate-900">Posts</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            resetPostForm();
            setShowPostModal(true);
          }}
          className="flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
        >
          <Plus size={20} />
          Add Post
        </motion.button>
      </div>
      <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full">
          <thead className="bg-[#F8FAFC] border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Title</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Excerpt</th>
              <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Date</th>
              <th className="px-6 py-4 text-right text-sm font-bold text-slate-900 tracking-tighter">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post._id} className="border-b border-slate-200 hover:bg-[#F8FAFC] transition-colors">
                <td className="px-6 py-4 text-slate-900 font-semibold">{post.title}</td>
                <td className="px-6 py-4 text-slate-600 text-sm">{post.excerpt || '-'}</td>
                <td className="px-6 py-4 text-slate-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => openEditPost(post)}
                      className="p-2 bg-[#F8FAFC] text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                    >
                      <Edit size={18} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDeletePost(post._id)}
                      className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                    >
                      <Trash2 size={18} />
                    </motion.button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col shadow-lg">
        <div className="mb-8">
          <img
            src={encodeURI('/GreenLife-logo-black (1).png')}
            alt="Greenlife Pharmaceuticals"
            className="h-10 w-auto object-contain brightness-0 invert mb-4"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <h2 className="text-xl font-bold tracking-tighter text-white">Admin Panel</h2>
        </div>
        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setView('dashboard')}
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
            onClick={() => setView('products')}
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
            onClick={() => setView('posts')}
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
        <motion.button
          onClick={handleLogout}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
        >
          <LogOut size={20} />
          Logout
        </motion.button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-white border-l border-slate-200">
        <div className="max-w-[1440px] mx-auto">
          <div className="admin-content">
            {view === 'dashboard' && <DashboardStats />}
            {view === 'products' && (
              <div>
                <div className="p-6 text-black">Product Table Loading...</div>
                <ProductManagementTable />
              </div>
            )}
            {view === 'posts' && (
              <div>
                <div className="p-6 text-black">Posts Table Loading...</div>
                <PostsManagementTable />
              </div>
            )}
          </div>

        {/* Product Modal */}
        {showProductModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    type="text"
                    value={productForm.name}
                    onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Category</label>
                  <input
                    type="text"
                    value={productForm.category}
                    onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Description</label>
                  <textarea
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    rows="4"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={productForm.imageUrl}
                    onChange={(e) => setProductForm({ ...productForm, imageUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    required
                  />
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={productForm.featured}
                    onChange={(e) => setProductForm({ ...productForm, featured: e.target.checked })}
                    className="w-4 h-4 rounded border-slate-300 bg-white text-[#059669] focus:ring-[#059669]"
                  />
                  <label htmlFor="featured" className="text-sm font-semibold text-slate-900">Featured</label>
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-[#059669] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    {editingProduct ? 'Update' : 'Create'}
                  </motion.button>
                  <button
                    type="button"
                    onClick={resetProductForm}
                    className="px-6 py-3 bg-[#F8FAFC] text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}

        {/* Post Modal */}
        {showPostModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-6">{editingPost ? 'Edit Post' : 'Add Post'}</h2>
              <form onSubmit={handlePostSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Title</label>
                  <input
                    type="text"
                    value={postForm.title}
                    onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Excerpt</label>
                  <input
                    type="text"
                    value={postForm.excerpt}
                    onChange={(e) => setPostForm({ ...postForm, excerpt: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={postForm.imageUrl}
                    onChange={(e) => setPostForm({ ...postForm, imageUrl: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Content</label>
                  <textarea
                    value={postForm.content}
                    onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:border-[#059669]"
                    rows="8"
                    required
                  />
                </div>
                <div className="flex gap-4 pt-4">
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-[#059669] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    {editingPost ? 'Update' : 'Create'}
                  </motion.button>
                  <button
                    type="button"
                    onClick={resetPostForm}
                    className="px-6 py-3 bg-[#F8FAFC] text-slate-700 font-semibold rounded-lg hover:bg-slate-100 transition-colors border border-slate-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
        </div>
      </main>
    </div>
  );
};

export default Admin;
