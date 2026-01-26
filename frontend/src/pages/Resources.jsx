import { motion } from 'framer-motion';
import { FileText, Download, ExternalLink, Book, Shield, Award } from 'lucide-react';
import Footer from '../components/Footer';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: 'Quality Policy',
      description: 'Our comprehensive quality assurance framework ensuring pharmaceutical excellence.',
      status: 'In Development',
    },
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'NAFDAC, WHO, and international regulatory standards documentation.',
      status: 'Available Soon',
    },
    {
      icon: Award,
      title: 'Certifications',
      description: 'ISO certifications, WHO prequalification, and quality awards.',
      status: 'In Development',
    },
    {
      icon: Book,
      title: 'Product Information Sheets',
      description: 'Detailed product specifications, indications, and safety information.',
      status: 'Available Soon',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-slate-900 mb-6">
              Resources & Documentation
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              Access quality policies, regulatory documents, and comprehensive product information
            </p>
          </motion.div>
        </div>
      </div>

      {/* Resources Grid */}
      <div className="py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-[#059669]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#059669]" size={28} strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">
                        {resource.title}
                      </h3>
                      <p className="text-slate-600 mb-4 leading-relaxed">
                        {resource.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold">
                          {resource.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900 mb-4">
              Need Specific Documentation?
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Contact our regulatory affairs team for custom documentation requests
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
