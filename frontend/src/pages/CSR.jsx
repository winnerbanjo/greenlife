import { motion } from 'framer-motion';
import { Users, GraduationCap, Heart, BookOpen, Award, Target } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getLifestyleImages } from '../utils/products';

const CSR = () => {
  const lifestyleImages = getLifestyleImages();

  const programs = [
    {
      icon: BookOpen,
      title: 'Community Health Outreach',
      description: 'Recent public health campaigns in Ilupeju and Oshodi providing free health screenings and drug administration. Our team of medical professionals conducts regular health education programs across rural and urban communities, focusing on malaria prevention, proper medication use, and general health awareness. Thousands of people benefit annually from these initiatives.',
      image: lifestyleImages[0] || '/african-american-woman-pharmacist-smiling-confident-standing-pharmacy (1).jpg',
    },
    {
      icon: Target,
      title: 'Malaria-Free Initiative',
      description: 'Our long-term commitment to providing affordable ACT-based antimalarials (Lonart, P-Alaxin) in line with WHO standards. Through strategic partnerships with healthcare institutions and NGOs, we distribute anti-malarial medications and provide comprehensive support for malaria prevention initiatives across West Africa. Our Lonart brand has been instrumental in treating over 2 million malaria cases.',
      image: lifestyleImages[1] || '/portrait-man-working-as-chemist.jpg',
    },
    {
      icon: GraduationCap,
      title: 'Scholarships for Pharmacy Students',
      description: 'We invest in the future of healthcare by providing scholarships to outstanding pharmacy students across Nigerian universities. Our scholarship program has supported over 150 students in the past 5 years, ensuring a pipeline of qualified pharmaceutical professionals.',
      image: lifestyleImages[2] || '/portrait-woman-working-pharmaceutical-industry (3).jpg',
    },
  ];

  const stats = [
    { number: '2M+', label: 'Malaria Cases Treated', icon: Heart },
    { number: '150+', label: 'Scholarships Awarded', icon: GraduationCap },
    { number: '50K+', label: 'People Educated', icon: Users },
    { number: '25+', label: 'Community Programs', icon: Award },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={encodeURI('/portrait-woman-working-pharmaceutical-industry (3).jpg')}
            alt="Community Impact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
              Corporate Social Responsibility
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Enriching lives through community health initiatives, education, and sustainable healthcare solutions across West Africa.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#059669] text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3">
                    <Icon size={32} className="text-white/80" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                  <div className="text-sm text-white/80 uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Programs Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Our Impact Programs
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three core initiatives driving positive change in healthcare and education
            </p>
          </motion.div>

          <div className="space-y-16">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <motion.div
                  key={program.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative rounded-2xl overflow-hidden aspect-video">
                      <img
                        src={encodeURI(program.image)}
                        alt={program.title}
                        className="w-full h-full object-cover"
                        style={{ imageRendering: '-webkit-optimize-contrast' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                    </div>
                  </div>
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="glass-card rounded-2xl p-8">
                      <div className="w-16 h-16 rounded-xl bg-[#059669]/10 flex items-center justify-center mb-6">
                        <Icon className="text-[#059669]" size={32} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-3xl font-bold tracking-tighter text-slate-900 mb-4">
                        {program.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-lg">
                        {program.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Call to Action */}
      <div className="bg-slate-50 py-21">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
              Partner With Us
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              Interested in collaborating on community health initiatives? Contact us to learn more about our CSR programs and partnership opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CSR;
