import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/Section';
import Footer from '../components/Footer';

const Contact = () => {
  const mapPlaceId = 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Ilupeju Industrial Estate, Lagos
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.35!3d6.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNjDCsDMzJzAwLjAiTiAzwrAyMScwMC4wIkU!5e0!3m2!1sen!2sng!4v1234567890`;
  const googleMapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Ilupeju+Industrial+Estate+Lagos+Nigeria';

  return (
    <div className="pt-28">
      <Section>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="mb-11"
          >
            <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
              Contact
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tighter text-slate-900 mt-4">
              Get in Touch
            </h1>
            <p className="text-lg text-slate-600 mt-6 max-w-2xl">
              Reach out to us for inquiries, partnerships, or any questions about our
              pharmaceutical solutions.
            </p>
          </motion.div>

          {/* Map Section with Glassmorphic Card Overlay */}
          <div className="relative mb-16 rounded-2xl overflow-hidden diffused-shadow-lg" id="map">
            <div className="aspect-[16/9] bg-slate-200">
              <iframe
                src={mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
            {/* Glassmorphic "Get in Touch" Card Overlay */}
            <div className="absolute top-6 right-6 glass-card rounded-xl p-6 max-w-sm">
              <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-2">
                Visit Our Headquarters
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Ilupeju Industrial Estate, Lagos, Nigeria
              </p>
              <a
                href={googleMapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-[#059669] text-white font-semibold text-sm rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>

          <div className="grid-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-8 lg:col-span-4"
            >
              <div className="space-y-8">
                <a href="mailto:info@greenlifepharma.com" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-[#059669]/10 border border-[#059669]/20 group-hover:bg-[#059669]/20 transition-colors">
                    <Mail className="text-[#059669]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-2">
                      Email
                    </h3>
                    <p className="text-slate-600 group-hover:text-[#059669] transition-colors">info@greenlifepharma.com</p>
                  </div>
                </a>
                <a href="tel:+23412345678" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-[#059669]/10 border border-[#059669]/20 group-hover:bg-[#059669]/20 transition-colors">
                    <Phone className="text-[#059669]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-2">
                      Phone
                    </h3>
                    <p className="text-slate-600 group-hover:text-[#059669] transition-colors">+234 (0) 1 234 5678</p>
                  </div>
                </a>
                <a href={googleMapsSearchUrl} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="p-3 rounded-lg bg-[#059669]/10 border border-[#059669]/20 group-hover:bg-[#059669]/20 transition-colors">
                    <MapPin className="text-[#059669]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold tracking-tighter text-slate-900 mb-2">
                      Address
                    </h3>
                    <p className="text-slate-600 group-hover:text-[#059669] transition-colors">
                      Ilupeju Industrial Estate<br />
                      Lagos, Nigeria
                    </p>
                  </div>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-8 lg:col-span-4"
            >
              <form className="space-y-6 glass-card rounded-xl p-8">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#059669] transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#059669] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    rows="6"
                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#059669] transition-colors"
                    placeholder="Your message"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full px-8 py-4 bg-[#059669] text-white font-bold text-sm tracking-tight rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
};

export default Contact;
