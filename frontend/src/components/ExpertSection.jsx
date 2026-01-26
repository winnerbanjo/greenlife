import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const ExpertSection = () => {
  const experts = [
    {
      name: 'Dr. Fatima Bello',
      role: 'Chief Pharmacist, Lagos State University Teaching Hospital',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
      quote: 'Greenlife Pharmaceuticals has consistently delivered quality products that meet international standards. Their commitment to excellence in manufacturing and distribution makes them a trusted partner in healthcare delivery.',
      affiliation: 'Lagos State University Teaching Hospital',
    },
    {
      name: 'Prof. Adebayo Ogunleye',
      role: 'WHO Technical Advisor, Malaria Control',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
      quote: 'The quality assurance protocols at Greenlife Pharmaceuticals align with WHO prequalification standards. Their anti-malarial products have demonstrated efficacy in clinical settings across West Africa.',
      affiliation: 'World Health Organization',
    },
    {
      name: 'Dr. Chidi Okoro',
      role: 'Medical Director, Federal Medical Centre Abuja',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      quote: 'As a medical practitioner, I trust Greenlife products for their consistent quality and reliable supply chain. Their pharmaceutical solutions have been instrumental in improving patient outcomes.',
      affiliation: 'Federal Medical Centre Abuja',
    },
  ];

  return (
    <div className="bg-white py-30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
            The Specialist's Perspective
          </h2>
          <p className="text-lg text-slate-600">
            Clinical endorsements from healthcare professionals and regulatory experts
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-[#059669] overflow-hidden flex-shrink-0">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tighter text-slate-900">
                    {expert.name}
                  </h3>
                  <p className="text-sm text-[#059669] font-semibold">{expert.role}</p>
                  <p className="text-xs text-slate-600 mt-1">{expert.affiliation}</p>
                </div>
              </div>
              <div className="relative">
                <Quote className="text-[#059669]/20 absolute -top-2 -left-2" size={32} />
                <p className="text-slate-700 leading-relaxed pl-6 italic">
                  "{expert.quote}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertSection;
