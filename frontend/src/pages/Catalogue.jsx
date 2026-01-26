import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getProductGroups } from '../utils/products';
import { getProductByName } from '../utils/productData';

const Catalogue = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const products = getProductGroups();
  
  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [searchParams]);
  
  const categories = ['All', ...new Set(products.map(p => p.category))];
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setSearchParams({});
    } else {
      setSearchParams({ category });
    }
  };

  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
              Complete Catalogue
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mt-4">
              Our Product Portfolio
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl">
              Explore our comprehensive range of pharmaceutical products, each backed by quality assurance and regulatory compliance.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => handleCategoryChange(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-lg font-semibold text-sm tracking-tight transition-all ${
                  selectedCategory === category
                    ? 'bg-[#059669] text-white'
                    : 'glass-card text-slate-700 hover:text-slate-900'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Products Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product, index) => {
              const productData = getProductByName(product.name);
              const productLink = productData ? `/product/${product.name}` : `/catalogue`;
              
              return (
                <Link key={product.name} to={productLink}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -8 }}
                    className="glass-card rounded-xl overflow-hidden cursor-pointer group"
                  >
                <div className="aspect-square bg-white overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={encodeURI(product.primaryImage)}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-[#059669] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-xl font-bold tracking-tighter text-slate-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {product.images.length} variant{product.images.length !== 1 ? 's' : ''}
                  </p>
                </div>
                  </motion.div>
                </Link>
              );
            })}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center py-20"
            >
              <p className="text-slate-600 text-lg">No products found in this category.</p>
            </motion.div>
          )}
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Catalogue;
