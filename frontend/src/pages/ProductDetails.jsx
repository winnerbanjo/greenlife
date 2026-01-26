import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Pill, Calendar, Thermometer } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getProductByName } from '../utils/productData';

const ProductDetails = () => {
  const { productName } = useParams();
  const product = getProductByName(productName);

  if (!product) {
    return (
      <div className="pt-28">
        <Section>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center py-20">
              <h1 className="text-4xl font-bold tracking-tighter text-slate-900 mb-4">Product Not Found</h1>
              <p className="text-slate-600 mb-8">The product you're looking for doesn't exist.</p>
              <Link to="/catalogue">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-[#059669] text-white font-bold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Back to Catalogue
                </motion.button>
              </Link>
            </div>
          </div>
        </Section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <Link to="/catalogue" className="inline-flex items-center gap-2 text-slate-600 hover:text-[#059669] transition-colors mb-8">
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Catalogue</span>
          </Link>

          {/* Product Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="grid-8 items-center gap-12">
              <div className="col-span-8 lg:col-span-4">
                {product.logo && (
                  <div className="mb-6">
                    <img
                      src={product.logo}
                      alt={product.name}
                      className="h-24 w-auto object-contain"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                  </div>
                )}
                <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mt-4 mb-6">
                  {product.name}
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  {product.description}
                </p>
              </div>
              <div className="col-span-8 lg:col-span-4">
                {product.variants[0]?.image && (
                  <div className="aspect-square rounded-2xl overflow-hidden diffused-shadow-lg bg-[#F8FAFC] flex items-center justify-center p-12">
                    <img
                      src={product.variants[0].image}
                      alt={product.name}
                      className="max-w-full max-h-full object-contain"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Variants Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-slate-900 mb-6 flex items-center gap-3">
              <Package className="text-[#059669]" size={28} />
              Available Variants
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.variants.map((variant, index) => (
                <div key={index} className="glass-card rounded-xl p-6">
                  {variant.image && (
                    <div className="aspect-square bg-[#F8FAFC] rounded-lg overflow-hidden mb-4 flex items-center justify-center p-4">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="max-w-full max-h-full object-contain"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-bold tracking-tighter text-slate-900 mb-2">
                    {variant.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-1">{variant.strength}</p>
                  <p className="text-xs text-[#059669] font-semibold">{variant.packSize}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clinical Information */}
          <div className="grid-8 gap-12 mb-12">
            {/* Indications */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 flex items-center gap-3">
                  <Pill className="text-[#059669]" size={24} />
                  Indications
                </h2>
                <ul className="space-y-3">
                  {product.indications.map((indication, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-[#059669] mt-1">•</span>
                      <span className="text-slate-700">{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Dosage */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 flex items-center gap-3">
                  <Calendar className="text-[#059669]" size={24} />
                  Dosage & Administration
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Adult Dosage</h3>
                    <p className="text-slate-700">{product.dosage.adult}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Pediatric Dosage</h3>
                    <p className="text-slate-700">{product.dosage.pediatric}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Administration</h3>
                    <p className="text-slate-700">{product.dosage.administration}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Storage & Pharmacology */}
          <div className="grid-8 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 flex items-center gap-3">
                  <Thermometer className="text-[#059669]" size={24} />
                  Storage Conditions
                </h2>
                <p className="text-slate-700 leading-relaxed">{product.storage}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="glass-card rounded-xl p-8">
                <h2 className="text-2xl font-bold tracking-tighter text-slate-900 mb-6">
                  Pharmacology
                </h2>
                <p className="text-slate-700 leading-relaxed">{product.pharmacology}</p>
              </div>
            </motion.div>
          </div>

          {/* Technical Data Table */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold tracking-tighter text-slate-900 mb-6">
                Technical Data
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F8FAFC] border-b border-slate-200">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Property</th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 tracking-tighter">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="px-6 py-4 text-slate-700 font-semibold">Category</td>
                      <td className="px-6 py-4 text-slate-600">{product.category}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-6 py-4 text-slate-700 font-semibold">Variants Available</td>
                      <td className="px-6 py-4 text-slate-600">{product.variants.length}</td>
                    </tr>
                    <tr className="border-b border-slate-200">
                      <td className="px-6 py-4 text-slate-700 font-semibold">Regulatory Status</td>
                      <td className="px-6 py-4 text-slate-600">NAFDAC Approved</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-slate-700 font-semibold">Storage Temperature</td>
                      <td className="px-6 py-4 text-slate-600">Below 30°C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default ProductDetails;
