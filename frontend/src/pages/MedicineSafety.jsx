import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, AlertTriangle, Phone, Mail, Shield } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const MedicineSafety = () => {
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
                Medicine Use & Safety
              </h1>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Patient safety is our priority. We monitor the efficacy of our products continuously through a dedicated pharmacovigilance team. Report adverse effects immediately to our regulatory affairs hotline.
              </p>
            </div>
          </motion.div>

          {/* Safety Information */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-1" size={24} />
              <div>
                <h3 className="text-lg font-bold text-red-900 mb-2">Report Adverse Effects</h3>
                <p className="text-red-800 mb-4">
                  If you experience any adverse effects or reactions to our medications, please report them immediately to our regulatory affairs team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="tel:+23412345678"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                  >
                    <Phone size={18} />
                    Regulatory Affairs Hotline
                  </a>
                  <a
                    href="mailto:regulatory@greenlifepharma.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white text-red-600 border-2 border-red-600 rounded-lg hover:bg-red-50 transition-colors font-semibold"
                  >
                    <Mail size={18} />
                    Email Report
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Guidelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Continuous Monitoring</h3>
              <p className="text-slate-600">
                Our dedicated pharmacovigilance team continuously monitors product efficacy and safety data to ensure patient well-being.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Patient Safety First</h3>
              <p className="text-slate-600">
                Every decision we make prioritizes patient safety, from product development through post-market surveillance.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Regulatory Compliance</h3>
              <p className="text-slate-600">
                All products meet NAFDAC and international regulatory standards for safety and efficacy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white border border-slate-200 rounded-xl p-6"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Transparent Reporting</h3>
              <p className="text-slate-600">
                We maintain transparent reporting systems and work closely with healthcare providers to ensure safe medication use.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default MedicineSafety;
