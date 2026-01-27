import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Network, Package, TrendingUp, Shield } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const PartnerHub = () => {
  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Link to="/" className="inline-flex items-center gap-2 text-[#059669] hover:text-[#047857] mb-8 transition-colors">
              <ArrowLeft size={20} />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6">
              Partner Hub / Distributor Portal
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed">
                Greenlife operates a sophisticated supply chain network across West Africa. Our partners benefit from real-time inventory tracking, priority allocation, and dedicated account management to ensure life-saving medications reach the front lines.
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <Network className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Real-Time Tracking</h3>
              <p className="text-slate-600 text-sm">Monitor inventory levels and order status in real-time through our advanced portal.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <Package className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Priority Allocation</h3>
              <p className="text-slate-600 text-sm">Get priority access to high-demand products with our partner allocation system.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Account Management</h3>
              <p className="text-slate-600 text-sm">Dedicated support team to help optimize your supply chain operations.</p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#059669] rounded-xl p-8 text-white text-center"
          >
            <Shield className="mx-auto mb-4" size={48} />
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join our network of trusted distributors and help bring quality healthcare to communities across West Africa.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#059669] font-bold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default PartnerHub;
