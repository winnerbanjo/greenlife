import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard, Package, FileText, LogOut, Plus, Edit, Trash2, Users, TrendingUp, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { productsAPI, postsAPI, authAPI } from '../utils/api';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { getProductGroups } from '../utils/products';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
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
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
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
    } catch (err) {
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

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col shadow-sm">
        <h2 className="text-xl font-bold tracking-tighter text-slate-900 mb-8">Admin Panel</h2>
        <nav className="space-y-2 flex-1">
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'dashboard'
                ? 'bg-[#059669] text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-[#F8FAFC]'
            }`}
          >
            <LayoutDashboard size={20} />
            Dashboard
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'products'
                ? 'bg-[#059669] text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-[#F8FAFC]'
            }`}
          >
            <Package size={20} />
            Products
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm transition-all ${
              activeTab === 'posts'
                ? 'bg-[#059669] text-white'
                : 'text-slate-700 hover:text-slate-900 hover:bg-[#F8FAFC]'
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
          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold text-sm text-slate-700 hover:text-slate-900 hover:bg-[#F8FAFC] transition-all"
        >
          <LogOut size={20} />
          Logout
        </motion.button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto bg-[#F8FAFC]">
        {activeTab === 'dashboard' && (
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
        )}

        {activeTab === 'products' && (
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
            <div className="rounded-xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              <table className="w-full">
                <thead className="bg-[#F8FAFC] border-b border-slate-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Image</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Name</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Category</th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Featured</th>
                    <th className="px-6 py-4 text-right text-sm font-bold text-slate-900 tracking-tighter">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product._id} className="border-b border-slate-200 hover:bg-[#F8FAFC] transition-colors">
                      <td className="px-6 py-4">
                        <img src={product.imageUrl || 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=100&h=100&fit=crop'} alt={product.name} className="w-16 h-16 object-cover rounded-lg" />
                      </td>
                      <td className="px-6 py-4 text-slate-900 font-semibold">{product.name}</td>
                      <td className="px-6 py-4 text-[#059669] text-sm">{product.category}</td>
                      <td className="px-6 py-4">
                        {product.featured ? (
                          <span className="px-2 py-1 bg-[#059669]/10 text-[#059669] rounded text-xs font-semibold">Yes</span>
                        ) : (
                          <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs">No</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => openEditProduct(product)}
                            className="p-2 bg-[#F8FAFC] text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
                          >
                            <Edit size={18} />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteProduct(product._id)}
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
        )}

        {activeTab === 'posts' && (
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
        )}

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
      </main>
    </div>
  );
};

export default Admin;
