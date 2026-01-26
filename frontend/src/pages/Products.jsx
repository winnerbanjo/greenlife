import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { productsAPI } from '../utils/api';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    productsAPI.getAll()
      .then((res) => {
        setProducts(res.data);
        const uniqueCategories = ['All', ...new Set(res.data.map((p) => p.category))];
        setCategories(uniqueCategories);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
              Catalog
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mt-4">
              Our Products
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl">
              Discover our comprehensive range of pharmaceutical products designed
              to meet the highest standards of quality and efficacy.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
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

export default Products;
