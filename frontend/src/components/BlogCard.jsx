import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const BlogCard = ({ post }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="group relative overflow-hidden rounded-2xl bg-slate-900/50 border border-white/5 hover:border-premium-emerald/30 transition-all duration-300 cursor-pointer"
    >
      {post.imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={encodeURI(post.imageUrl)}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-white/40 mb-3">
          <Calendar size={14} />
          <span>{formatDate(post.createdAt)}</span>
        </div>
        <h3 className="text-xl font-bold tracking-tighter text-white mb-2 group-hover:text-premium-emerald transition-colors">
          {post.title}
        </h3>
        {post.excerpt && (
          <p className="text-sm text-white/60 line-clamp-3">
            {post.excerpt}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default BlogCard;
