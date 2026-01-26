import { motion } from 'framer-motion';
import { Eye, Target, Heart, Award, Lightbulb, Users, Cpu, Shield } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getLifestyleImages } from '../utils/products';

const About = () => {
  const lifestyleImages = getLifestyleImages();
  
  const coreValues = [
    {
      icon: Eye,
      title: 'Vision',
      description: 'To be Africa\'s leading pharmaceutical company, delivering innovative healthcare solutions.',
    },
    {
      icon: Target,
      title: 'Mission',
      description: 'Providing accessible, quality pharmaceutical products that improve lives across Africa.',
    },
    {
      icon: Heart,
      title: 'Purpose',
      description: 'Empowering health and enriching lives through pharmaceutical excellence.',
    },
    {
      icon: Award,
      title: 'Quality',
      description: 'Uncompromising standards in manufacturing, distribution, and patient care.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering pharmaceutical research and development for better outcomes.',
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Committed to serving communities and improving public health across Africa.',
    },
  ];

  const timeline = [
    {
      year: '1995',
      title: 'Foundation',
      description: 'Greenlife Pharmaceuticals was established with a vision to transform healthcare delivery in Nigeria.',
    },
    {
      year: '2011',
      title: 'MAS Innovation',
      description: 'Launched innovative manufacturing and supply chain solutions, expanding our reach across West Africa.',
    },
    {
      year: '2017',
      title: 'Ilupeju HQ',
      description: 'Opened state-of-the-art headquarters in Ilupeju, Lagos, strengthening our operational capabilities.',
    },
    {
      year: '2023',
      title: 'Health Initiatives',
      description: 'Launched comprehensive health initiatives, reaching over 5 million people across Nigeria and West Africa.',
    },
  ];

  const leadership = [
    {
      name: 'Dr. Obiora Anthony Chukwuka',
      role: 'Chief Executive Officer',
      image: '/leader Small.jpeg',
    },
    {
      name: 'Mr. Ebere Nwosu',
      role: 'Chief Operating Officer',
      image: '/leader Small.jpeg',
    },
    {
      name: 'Dr. Amina Mohammed',
      role: 'Chief Medical Officer',
      image: '/leader Small.jpeg',
    },
    {
      name: 'Mr. Tunde Adebayo',
      role: 'Head of Quality Assurance',
      image: '/leader Small.jpeg',
    },
    {
      name: 'Mrs. Chioma Okonkwo',
      role: 'Director of Operations',
      image: '/leader Small.jpeg',
    },
    {
      name: 'Dr. Ibrahim Musa',
      role: 'Head of Research & Development',
      image: '/leader Small.jpeg',
    },
  ];

  return (
    <div className="pt-28">
      {/* Hero Header with Background */}
      <div 
        className="relative pt-32 pb-20 overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${encodeURI('/portrait-man-working-as-chemist.jpg')})`
        }}
      >
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
              About Greenlife Pharmaceuticals
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Trusted by over 5 million people across Nigeria & West Africa
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Intro Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid-8 items-center gap-12 mb-11">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="col-span-8 lg:col-span-4"
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Greenlife Pharmaceuticals has been a trusted partner in healthcare delivery for over 27 years, serving millions across Nigeria and West Africa.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden diffused-shadow-lg">
                <img
                  src={encodeURI(lifestyleImages[2])}
                  alt="Pharmaceutical Professional"
                  className="w-full h-full object-cover"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
      
      {/* Core Values - Glass Tile Layout */}
      <Section bgSlate>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Our Core Values
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="glass-card rounded-xl p-8"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#059669]/10 flex items-center justify-center mb-4">
                    <Icon className="text-[#059669]" size={24} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* MAS Technology Leadership - Tech Feature Block */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-12 lg:p-16"
          >
            <div className="grid-8 items-center gap-12">
              <div className="col-span-8 lg:col-span-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#059669]/10 flex items-center justify-center">
                    <Cpu className="text-[#059669]" size={32} />
                  </div>
                  <div>
                    <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
                      2011 Innovation
                    </span>
                    <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mt-2">
                      MAS Technology Leadership
                    </h2>
                  </div>
                </div>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  In 2011, Greenlife Pharmaceuticals achieved a breakthrough in technology leadership
                  with our innovative Manufacturing and Supply (MAS) solutions. This milestone
                  revolutionized our operations and expanded our reach across West Africa.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-lg p-4">
                    <Shield className="text-[#059669] mb-2" size={24} />
                    <h4 className="font-bold text-slate-900 mb-1">Advanced Systems</h4>
                    <p className="text-sm text-slate-600">State-of-the-art manufacturing</p>
                  </div>
                  <div className="glass-card rounded-lg p-4">
                    <Cpu className="text-[#059669] mb-2" size={24} />
                    <h4 className="font-bold text-slate-900 mb-1">Supply Chain</h4>
                    <p className="text-sm text-slate-600">Optimized distribution network</p>
                  </div>
                </div>
              </div>
              <div className="col-span-8 lg:col-span-4">
                <div className="aspect-video rounded-2xl overflow-hidden relative" style={{ boxShadow: '0 0 40px rgba(5, 150, 105, 0.3)' }}>
                  <img
                    src={encodeURI('/mas Small.jpeg')}
                    alt="MAS Technology Innovation"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                  <div className="absolute inset-0 rounded-2xl" style={{ boxShadow: 'inset 0 0 60px rgba(5, 150, 105, 0.2)' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Timeline */}
      <Section bgSlate>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Our Story
            </h2>
          </motion.div>
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#059669] via-[#059669]/50 to-[#059669] hidden lg:block"></div>
            
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative pl-20 lg:pl-24"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 w-16 h-16 rounded-full bg-white border-2 border-[#059669] flex items-center justify-center diffused-shadow">
                    <span className="text-[#059669] font-bold text-xs">{item.year}</span>
                  </div>
                  
                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Leadership Gallery */}
      <Section>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Leadership Team
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col items-center"
              >
                <div className="relative mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-[#059669]/20 shadow-lg">
                    <img
                      src={encodeURI(leader.image)}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                  </div>
                </div>
                <div className="text-center glass-card rounded-xl p-6 w-full">
                  <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-1">
                    {leader.name}
                  </h3>
                  <p className="text-[#059669] font-semibold">{leader.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Impact Blocks */}
      <Section bgSlate>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
          {/* Anti-Malarial Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="glass-card rounded-2xl p-8 lg:p-12"
          >
            <div className="grid-8 items-center gap-8">
              <div className="col-span-8 lg:col-span-4">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
                  Anti-Malarial Excellence
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our flagship product <strong className="text-slate-900">Lonart</strong> has been a cornerstone in the fight
                  against malaria across Africa. With proven efficacy and quality assurance,
                  Lonart has helped millions combat this preventable disease.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>WHO prequalified formulation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>NAFDAC approved and certified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>Widely distributed across West Africa</span>
                  </li>
                </ul>
              </div>
              <div className="col-span-8 lg:col-span-4">
                <div className="aspect-video rounded-xl overflow-hidden diffused-shadow-lg">
                  <img
                    src={encodeURI('/portrait-woman-working-pharmaceutical-industry (3).jpg')}
                    alt="Anti-Malarial Products"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Anti-Counterfeiting Innovation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card rounded-2xl p-8 lg:p-12"
          >
            <div className="grid-8 items-center gap-8">
              <div className="col-span-8 lg:col-span-4 order-2 lg:order-1">
                <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                  <img
                    src={encodeURI('/mas Small.jpeg')}
                    alt="Anti-Counterfeiting Innovation"
                    className="w-full h-full object-cover"
                    style={{ imageRendering: '-webkit-optimize-contrast' }}
                  />
                </div>
              </div>
              <div className="col-span-8 lg:col-span-4 order-1 lg:order-2">
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
                  Anti-Counterfeiting Innovation
                </h2>
                <p className="text-lg text-slate-600 mb-6">
                  We've implemented cutting-edge authentication technologies to ensure
                  product integrity and protect patients from counterfeit medications.
                  Our multi-layered security approach includes holographic labels,
                  QR code verification, and serial number tracking.
                </p>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>Holographic security labels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>QR code verification system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#059669] mt-1">✓</span>
                    <span>Serial number tracking</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default About;
