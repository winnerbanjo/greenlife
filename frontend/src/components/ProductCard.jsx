import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative overflow-hidden rounded-xl glass-card cursor-pointer"
    >
      <div className="aspect-square overflow-hidden bg-[#F8FAFC]">
        <img
          src={product.imageUrl || product.primaryImage || '/placeholder.jpg'}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
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
        <p className="mt-3 text-sm text-slate-600 line-clamp-2">
          {product.description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
