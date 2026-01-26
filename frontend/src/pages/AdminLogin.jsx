import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock } from 'lucide-react';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simple password check
    setTimeout(() => {
      if (password === 'greenlife2026') {
        // Set session token
        localStorage.setItem('token', 'admin-authenticated');
        localStorage.setItem('adminSession', 'true');
        navigate('/admin');
      } else {
        setError('Invalid access key. Please try again.');
        setLoading(false);
      }
    }, 500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Pharmaceutical Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={encodeURI('/portrait-woman-working-pharmaceutical-industry (3).jpg')}
          alt="Pharmaceutical Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      {/* Glassmorphic Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md mx-6"
      >
        <div
          className="backdrop-blur-[30px] bg-white/10 border border-white/20 rounded-3xl p-10 shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
          }}
        >
          {/* Logo/Icon */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#059669]/20 backdrop-blur-sm border border-[#059669]/30 mb-6"
            >
              <Shield className="text-[#059669]" size={40} strokeWidth={1.5} />
            </motion.div>
            <h1 className="text-4xl font-bold tracking-tighter text-white mb-3">
              Admin Access
            </h1>
            <p className="text-white/80 text-sm tracking-wide">
              Verify your identity to continue
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-100 text-sm"
              >
                {error}
              </motion.div>
            )}

            <div>
              <label className="block text-sm font-bold tracking-tighter text-white/90 mb-3 uppercase tracking-widest">
                Access Key
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Lock className="text-white/60" size={20} />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/50 transition-all"
                  placeholder="Enter access key"
                  required
                  autoFocus
                />
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              className="w-full px-6 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-xl hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#059669]/30"
            >
              {loading ? 'Verifying...' : 'Verify Identity'}
            </motion.button>
          </form>

          {/* Security Notice */}
          <p className="text-center text-white/50 text-xs mt-6 tracking-wide">
            Authorized personnel only
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AdminLogin;
