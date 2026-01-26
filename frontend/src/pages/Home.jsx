import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, FileCheck, CreditCard, CheckCircle, ArrowUp, Pill, Activity, Heart, Stethoscope, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Footer from '../components/Footer';
import ExpertSection from '../components/ExpertSection';
import { getLifestyleImages } from '../utils/products';
import { postsAPI } from '../utils/api';

const Home = () => {
  const [insights, setInsights] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const lifestyleImages = getLifestyleImages();

  useEffect(() => {
    postsAPI.getAll()
      .then((res) => setInsights(res.data.slice(0, 3)))
      .catch((err) => console.error('Error fetching insights:', err));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productLogos = [
    { logo: '/Group-2087326717.svg', category: 'Anti-Malarials', product: 'Lonart' },
    { logo: '/Group-2087326718.svg', category: 'Anti-Malarials', product: 'P-alaxin' },
    { logo: '/AMOXICLIQ.svg', category: 'Antibiotics', product: 'Amoxicliq' },
    { logo: '/Manix-1-1.svg', category: 'Pain Management', product: 'Manix' },
    { logo: '/Group-1000010927.svg', category: 'Antibiotics', product: 'G-clav' },
    { logo: '/Group-2087326719.svg', category: 'Pain Management', product: null },
    { logo: '/Group-2087326720.svg', category: 'Anti-Malarials', product: null },
  ];

  const categoryIcons = {
    'Anti-Malarials': Pill,
    'Anti-Diabetics': Activity,
    'Multivitamins': Pill,
    'Fertility': Heart,
    'Cardiovascular': Heart,
    'Pain Management': Stethoscope,
    'Antibiotics': Stethoscope,
    'Supplements': Package,
  };

  const b2bFeatures = [
    {
      icon: Shield,
      title: 'Bulk Pricing',
      description: 'Exclusive competitive rates for volume orders',
    },
    {
      icon: FileCheck,
      title: 'Quality Assurance',
      description: 'GMP certified manufacturing standards',
    },
    {
      icon: CreditCard,
      title: 'Bespoke Credit',
      description: 'Flexible payment terms tailored to your needs',
    },
    {
      icon: CheckCircle,
      title: 'Regulatory Compliance',
      description: 'NAFDAC approved, fully compliant products',
    },
  ];

  const timeline = [
    { year: '1995', title: 'Foundation', description: 'Greenlife Pharmaceuticals established' },
    { year: '2011', title: 'MAS Innovation', description: 'Technology leadership breakthrough' },
    { year: '2017', title: 'Ilupeju HQ', description: 'State-of-the-art headquarters opened' },
    { year: '2023', title: 'Health Initiatives', description: '5M+ people served milestone' },
    { year: '2026', title: 'Future Vision', description: 'Continuing healthcare excellence' },
  ];


  return (
    <div className="pt-28">
      {/* Hero Section - Full-Width Background with Overlay */}
      <div className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/african-american-woman-pharmacist-smiling-confident-standing-pharmacy (1).jpg"
            alt="Professional Pharmacist"
            className="w-full h-full object-cover object-center"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-tight drop-shadow-lg">
              Empowering Health & Enriching Lives Since 1995
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed drop-shadow-md">
              Trusted pharmaceutical partner delivering quality healthcare solutions
              across Nigeria and West Africa. Over 5 million people served.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/catalogue"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-[#047857] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Products
                <ArrowRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* At a Glance Bar - Clickable Stats - Light Medical Grey with Borders */}
      <div className="bg-slate-50 border-y border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '27+', label: 'Years', sublabel: 'Experience', link: '/about#timeline' },
              { number: '11+', label: 'Distribution Depots', sublabel: 'Logistics', link: '/contact#map' },
              { number: '350+', label: 'Registered Brands', sublabel: 'Brands', link: '/catalogue' },
              { number: '260+', label: 'Medical Reps', sublabel: 'Team', link: '/careers' },
            ].map((stat, index) => (
              <Link key={stat.sublabel} to={stat.link}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="text-center cursor-pointer glass-card rounded-xl p-6"
                >
                  <div className="text-5xl lg:text-6xl font-bold text-[#059669] mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-slate-900 tracking-tight mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-600 uppercase tracking-wider">{stat.sublabel}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Product Categories - Overhauled UI */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-12 flex flex-col items-center text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Product Categories
            </h2>
            <p className="text-lg text-slate-600">
              Comprehensive range of pharmaceutical solutions
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 justify-center">
            {[
              'Anti-Malarials',
              'Anti-Diabetics',
              'Multivitamins',
              'Fertility',
              'Cardiovascular',
              'Pain Management',
              'Antibiotics',
              'Supplements',
            ].map((category, index) => (
              <Link key={category} to={`/catalogue?category=${category}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square flex flex-col items-center justify-center p-8 text-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl transition-all hover:bg-white/10 hover:scale-105 cursor-pointer"
                >
                  {(() => {
                    const Icon = categoryIcons[category] || Package;
                    return (
                      <div className="mb-3 flex justify-center">
                        <Icon className="text-[#059669]" size={32} strokeWidth={1.5} />
                      </div>
                    );
                  })()}
                  <h3 className="text-sm font-bold tracking-tighter text-slate-900 uppercase tracking-widest">
                    {category}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* Brand Wall - Clickable Logos - Light Grey Background */}
      <Section bgSlate>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4 text-center">
              Flagship Products
            </h2>
          </motion.div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {productLogos.map((item, index) => (
              <Link key={item.logo} to={item.product ? `/product/${item.product}` : `/catalogue?category=${item.category}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="glass-card rounded-xl p-6 aspect-square flex items-center justify-center cursor-pointer group grayscale hover:grayscale-0 transition-all duration-500"
                >
                  <img
                    src={item.logo}
                    alt="Product Logo"
                    className="max-h-20 max-w-20 object-contain group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </Section>

      {/* B2B Growth Hub - Emerald Green Background with White Text */}
      <div className="bg-[#059669] text-white py-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-white mb-4">
              B2B Growth Hub
            </h2>
            <p className="text-lg text-white/90">
              Tailored solutions for healthcare providers and distributors
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {b2bFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white/10 backdrop-blur-xl rounded-xl p-8 border border-white/20"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tighter text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-white/80 text-sm">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Expert Opinion Section */}
      <ExpertSection />

      {/* Authority Block - Over 5 Million People Served with Lifestyle Image */}
      <div className="relative py-30 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={lifestyleImages[1]}
            alt="27 Years of Excellence"
            className="w-full h-full object-cover"
            style={{ imageRendering: '-webkit-optimize-contrast' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              27 Years of Excellence
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Over 5 million people served across Nigeria and West Africa. 
              Our commitment to quality healthcare solutions has made us a trusted 
              partner in pharmaceutical excellence.
            </p>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#059669] font-bold text-sm tracking-tight rounded-lg hover:bg-slate-100 transition-colors"
              >
                Learn More About Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Timeline - Apple Style Vertical - White */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Our Story
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#059669] via-[#059669]/50 to-[#059669] hidden lg:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-20 lg:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-white border-2 border-[#059669] flex items-center justify-center diffused-shadow">
                    <span className="text-[#059669] font-bold text-xs">{item.year}</span>
                  </div>
                  
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Global Impact - High-End Stats Section - "Total Symmetry" */}
      <div className="bg-slate-50 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Global Impact
            </h2>
            <p className="text-lg text-slate-600">
              Our commitment to healthcare excellence spans decades and borders
            </p>
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto px-4 w-full flex justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 w-full items-stretch">
            {[
              { number: '27+', label: 'Years of Excellence', icon: Activity },
              { number: '300+', label: 'Staff Professionals', icon: Heart },
              { number: 'Nationwide', label: 'Coverage', icon: Package },
              { number: 'WHO-cGMP', label: 'Certified', icon: Shield },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="flex flex-col items-center justify-center text-center p-10 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-all h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-[#059669]/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-[#059669]" size={32} strokeWidth={1.5} />
                  </div>
                  <div className="text-[#059669] text-5xl font-black tracking-tighter mb-3">{stat.number}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] leading-tight">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>


      {/* Footer */}
      <Footer />

      {/* Back to Top Button - Positioned above AI chat */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={scrollToTop}
          className="fixed bottom-28 right-8 z-40 w-14 h-14 rounded-full glass-card flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="text-[#059669]" size={24} />
        </motion.button>
      )}
    </div>
  );
};

export default Home;
