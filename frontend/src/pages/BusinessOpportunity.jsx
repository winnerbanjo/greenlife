import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Briefcase, Users, TrendingUp, Award } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const BusinessOpportunity = () => {
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
              Business Opportunity
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed">
                Join a legacy of trust. We are seeking visionary healthcare partners to expand our footprint. We provide full marketing support and clinical training for authorized representatives.
              </p>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <Briefcase className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Legacy of Trust</h3>
              <p className="text-slate-600">
                Join a company with nearly three decades of excellence in pharmaceutical manufacturing and distribution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <TrendingUp className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expand Your Footprint</h3>
              <p className="text-slate-600">
                Help us bring quality healthcare solutions to underserved communities across West Africa.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <Users className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Full Marketing Support</h3>
              <p className="text-slate-600">
                Comprehensive marketing materials, brand assets, and promotional support to help you succeed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                <Award className="text-[#059669]" size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Clinical Training</h3>
              <p className="text-slate-600">
                Authorized representatives receive comprehensive clinical training and product knowledge support.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#059669] rounded-xl p-8 text-white text-center"
          >
            <h2 className="text-2xl font-bold mb-4">Ready to Partner With Us?</h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Contact our business development team to learn more about partnership opportunities and how we can grow together.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-white text-[#059669] font-bold rounded-lg hover:bg-slate-100 transition-colors"
              >
                Get Started
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default BusinessOpportunity;
