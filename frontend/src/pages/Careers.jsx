import { motion } from 'framer-motion';
import { Briefcase, MapPin, Users, Award, ArrowRight } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';
import { getLifestyleImages } from '../utils/products';

const Careers = () => {
  const lifestyleImages = getLifestyleImages();

  const jobOpenings = [
    {
      title: 'Medical Sales Representative',
      locations: ['Lagos', 'Abuja', 'Aba', 'Kano'],
      department: 'Sales & Marketing',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Specialist',
      locations: ['Ilupeju HQ'],
      department: 'Quality Assurance',
      type: 'Full-time',
    },
    {
      title: 'Supply Chain Manager',
      locations: ['Ilupeju HQ'],
      department: 'Operations',
      type: 'Full-time',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={encodeURI(lifestyleImages[1] || '/portrait-man-working-as-chemist.jpg')}
            alt="Careers at Greenlife"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/60"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tighter text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Join a team of over 300 professionals, including 75+ registered Pharmacists, 
              dedicated to pioneering health solutions across Nigeria's six geopolitical zones.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Culture Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-11">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <Users className="text-[#059669] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">300+ Professionals</h3>
              <p className="text-slate-600">Dedicated team members across Nigeria</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <Award className="text-[#059669] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">75+ Pharmacists</h3>
              <p className="text-slate-600">Registered pharmaceutical professionals</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <MapPin className="text-[#059669] mx-auto mb-4" size={40} />
              <h3 className="text-2xl font-bold tracking-tighter text-slate-900 mb-2">6 Geopolitical Zones</h3>
              <p className="text-slate-600">Nationwide presence and impact</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Job Openings */}
      <Section bgSlate>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-slate-600">
              Explore opportunities to grow your career with us
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="text-[#059669]" size={24} />
                      <h3 className="text-2xl font-bold tracking-tighter text-slate-900">
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-slate-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span className="text-sm">{job.locations.join(', ')}</span>
                      </div>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{job.department}</span>
                      <span className="text-sm">•</span>
                      <span className="text-sm">{job.type}</span>
                    </div>
                  </div>
                  <motion.a
                    href="/contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass-card rounded-2xl p-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-slate-900 mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
            >
              Send Your Resume
            </motion.a>
          </motion.div>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Careers;
