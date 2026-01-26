import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Download, ExternalLink } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Insights = () => {
  const [posts, setPosts] = useState([]);

  // Newsroom Content - Hard-coded with absolute image paths
  const newsroomPosts = [
    {
      _id: '1',
      title: 'Sun Business Man of the Year: Dr. Obiora Chukwuka',
      excerpt: 'Greenlife\'s Chairman receives the prestigious Sun Business Man of the Year award, recognizing over 27 years of pioneering leadership in the West African pharmaceutical landscape and a commitment to quality healthcare.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dad9946f?auto=format&fit=crop&w=800&q=80',
      createdAt: '2024-07-20',
      category: 'Corporate',
      source: 'Sun News',
      externalUrl: 'https://greenlifepharmaceuticals.com/greenlife-chairman-bags-suns-business-man-of-the-year-award/',
    },
    {
      _id: '2',
      title: 'Greenlife Deploys MAS Technology to Curb Fake Drugs',
      excerpt: 'Greenlife Pharmaceuticals becomes a frontrunner in patient safety by deploying Mobile Authentication Service (MAS) technology, enabling real-time verification of brands like Lonart through NAFDAC-approved SMS systems.',
      imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?auto=format&fit=crop&w=800&q=80',
      createdAt: '2024-06-10',
      category: 'Innovation',
      source: 'Vanguard',
      externalUrl: 'https://www.vanguardngr.com/2011/09/greenlife-deploys-mas-to-check-counterfeiting/',
    },
    {
      _id: '3',
      title: 'Greenlife Boss Calls for Stringent Measures Against Substandard Medicines',
      excerpt: 'Strategic partnership with NAFDAC to secure the Nigerian pharmaceutical supply chain. Dr. Obiora emphasizes the need for punitive measures to protect the integrity of life-saving medications.',
      imageUrl: 'https://plus.unsplash.com/premium_photo-1664475450083-5c9eef17a351?auto=format&fit=crop&w=800&q=80',
      createdAt: '2024-05-15',
      category: 'Partnership',
      source: 'ThisDay',
      externalUrl: 'https://www.thisdaylive.com/2023/11/10/greenfield-pharmaceuticals-boss-calls-for-stringent-punitive-measures-against-fake-drug-dealers/',
    },
    {
      _id: '4',
      title: 'The Compelling Narrative of Greenlife\'s Success',
      excerpt: 'Exploring the 27-year journey of Greenlife Pharmaceuticals from its humble beginnings to becoming a dominant force in the African pharmaceutical industry, driven by vision and quality.',
      imageUrl: '/african-american-woman-pharmacist-smiling-confident-standing-pharmacy (1) Small.jpeg',
      createdAt: '2024-04-10',
      category: 'Corporate',
      source: 'BusinessDay',
      externalUrl: 'https://businessday.ng/opinion/article/the-compelling-narrative-of-greenlifes-chukwuka/',
    },
  ];

  // Immediate state setting - no API wait
  useEffect(() => {
    setPosts(newsroomPosts);
  }, []);

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Fallback: Use newsroomPosts if posts array is empty
  const displayPosts = posts.length === 0 ? newsroomPosts : posts;

  return (
    <div className="pt-28 bg-[#f8fafc]">
      {/* Hero Header with Background */}
      <div 
        className="relative pt-32 pb-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1587854692152-cbe660dbbb88?q=80&w=2000')`
        }}
      >
        <div className="relative max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] mb-4">
                Greenlife Newsroom
              </h4>
              <h1 className="text-6xl font-bold tracking-tight text-white">
                Insights & <span className="text-white/70">Media</span>
              </h1>
            </motion.div>
            
            <motion.a
              href="/resources"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card bg-white/40 border border-slate-200 rounded-2xl font-bold text-slate-900 flex items-center gap-3 shadow-sm"
            >
              <Download size={20} className="text-white" />
              Download Press Kit
            </motion.a>
          </div>
        </div>
      </div>
      
      <Section>
        <div className="max-w-6xl mx-auto px-4">

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayPosts.map((post, index) => (
              <motion.a
                key={post._id + index}
                href={post.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative glass-card rounded-3xl overflow-hidden flex flex-col bg-white border border-slate-200/60 shadow-xl transition-all hover:shadow-2xl ${
                  index === 0 ? 'md:col-span-2 lg:flex-row' : ''
                }`}
              >
                {/* Image Container */}
                <div className={`${index === 0 ? 'md:w-1/2 h-full' : 'aspect-video'} overflow-hidden relative`}>
                  <img
                    src={post.imageUrl.startsWith('http') ? post.imageUrl : encodeURI(post.imageUrl)}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ minHeight: '200px' }}
                  />
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-[#059669] rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 flex flex-col justify-between ${index === 0 ? 'md:w-1/2' : 'flex-1'}`}>
                  <div>
                    <div className="flex items-center gap-3 text-slate-400 text-xs font-medium mb-4">
                      <Calendar size={14} className="text-[#059669]" />
                      {formatDate(post.createdAt)}
                    </div>
                    <h3 className={`font-bold tracking-tight text-slate-900 mb-4 group-hover:text-[#059669] transition-colors ${
                      index === 0 ? 'text-3xl leading-tight' : 'text-xl'
                    }`}>
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Published via</span>
                      <span className="text-sm font-bold text-slate-800">{post.source}</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-[#059669] group-hover:bg-[#059669] group-hover:text-white transition-all">
                      <ExternalLink size={18} />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Insights;
