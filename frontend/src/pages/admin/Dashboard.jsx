import { useEffect, useState } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { Package, FileText } from 'lucide-react';

const Dashboard = () => {
  const [stats, setStats] = useState({ products: 0, posts: 0 });

  useEffect(() => {
    Promise.all([
      fetch('http://localhost:5000/api/products').then((res) => res.json()),
      fetch('http://localhost:5000/api/posts').then((res) => res.json()),
    ])
      .then(([products, posts]) => {
        setStats({ products: products.length, posts: posts.length });
      })
      .catch((err) => console.error('Error fetching stats:', err));
  }, []);

  return (
    <AdminLayout>
      <div>
        <h1 className="text-4xl font-black tracking-tighter text-white mb-8">
          Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Products</h2>
              <Package className="text-premium-emerald" size={24} />
            </div>
            <p className="text-4xl font-black text-premium-emerald">{stats.products}</p>
            <p className="text-sm text-white/60 mt-2">Total products</p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/50 border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Blog Posts</h2>
              <FileText className="text-premium-emerald" size={24} />
            </div>
            <p className="text-4xl font-black text-premium-emerald">{stats.posts}</p>
            <p className="text-sm text-white/60 mt-2">Total posts</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
