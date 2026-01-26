import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import ProductCard from './ProductCard';

const ProductCarousel = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const carouselRef = useRef(null);
  const x = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);

  useEffect(() => {
    // Ensure exactly 6 products are displayed
    const productsToShow = products.slice(0, 6);
    setDisplayedProducts(productsToShow);
  }, [products]);

  const handleDragEnd = () => {
    if (!carouselRef.current) return;
    
    const containerWidth = carouselRef.current.offsetWidth;
    const cardWidth = containerWidth / 3;
    const currentX = x.get();
    
    const snapIndex = Math.round(-currentX / cardWidth);
    const maxIndex = Math.max(0, displayedProducts.length - 3);
    const clampedIndex = Math.max(0, Math.min(snapIndex, maxIndex));
    
    x.set(-clampedIndex * cardWidth);
  };

  if (displayedProducts.length === 0) {
    return null;
  }

  const maxDrag = -(displayedProducts.length - 3) * (100 / 3);

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={carouselRef}
        className="flex gap-6 cursor-grab active:cursor-grabbing"
        style={{ x: xSpring }}
        drag="x"
        dragConstraints={{ left: maxDrag, right: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        whileDrag={{ cursor: 'grabbing' }}
      >
        {displayedProducts.map((product) => (
          <div key={product._id} className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 px-3">
            <ProductCard product={product} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ProductCarousel;
