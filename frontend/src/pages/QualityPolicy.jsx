import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, CheckCircle, Award, FileCheck } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const QualityPolicy = () => {
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
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                <Shield className="text-[#059669]" size={32} />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900">
                Quality Policy
              </h1>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Our quality assurance framework adheres to WHO-standard Good Manufacturing Practices (GMP). We maintain rigorous internal audits from sourcing to final delivery to ensure pharmaceutical excellence.
              </p>
            </div>
          </motion.div>

          {/* Quality Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-[#059669]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">WHO GMP Standards</h3>
              </div>
              <p className="text-slate-600">
                All manufacturing processes comply with World Health Organization Good Manufacturing Practice guidelines.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="text-[#059669]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Rigorous Audits</h3>
              </div>
              <p className="text-slate-600">
                Continuous internal and external audits ensure compliance at every stage of production and distribution.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-[#059669]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Source to Delivery</h3>
              </div>
              <p className="text-slate-600">
                Quality control measures are implemented from raw material sourcing through final product delivery.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#059669]" size={24} />
                <h3 className="text-xl font-bold text-slate-900">Pharmaceutical Excellence</h3>
              </div>
              <p className="text-slate-600">
                Commitment to the highest standards of pharmaceutical manufacturing and quality assurance.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default QualityPolicy;
