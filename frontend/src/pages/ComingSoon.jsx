import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const ComingSoon = () => {
  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <div className="w-24 h-24 rounded-full bg-[#059669]/10 flex items-center justify-center mx-auto mb-8">
              <Clock className="text-[#059669]" size={48} />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Coming Soon
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We're working hard to bring you this content. Please check back soon or contact us for more information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <ArrowLeft size={20} />
                  Back to Home
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 font-bold rounded-lg border-2 border-slate-200 hover:border-[#059669] transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default ComingSoon;
