import { motion } from 'framer-motion';

const Section = ({ children, className = '', id, bgSlate = false }) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`section-padding ${bgSlate ? 'bg-[#F8FAFC]' : 'bg-white'} ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
