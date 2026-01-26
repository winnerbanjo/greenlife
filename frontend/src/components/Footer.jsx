import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const googleMapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Ilupeju+Industrial+Estate+Lagos+Nigeria';

  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Corporate */}
          <div>
            <h3 className="text-sm font-bold tracking-tighter text-white mb-4 uppercase">
              Corporate
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about#leadership" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/about#timeline" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  History
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/insights" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  News & Media
                </Link>
              </li>
              <li>
                <Link to="/about#investors" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Investors
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-sm font-bold tracking-tighter text-white mb-4 uppercase">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/catalogue?category=Anti-Malarials" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Anti-Malarials
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Antibiotics" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Antibiotics
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Cardiovascular" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Cardiovascular
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Multivitamins" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Multivitamins
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Fertility" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Fertility Solutions
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Anti-Diabetics" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Anti-Diabetics
                </Link>
              </li>
              <li>
                <Link to="/catalogue?category=Pain Management" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Pain Management
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Partner Hub */}
          <div>
            <h3 className="text-sm font-bold tracking-tighter text-white mb-4 uppercase">
              Partner Hub
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Distributor Portal
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Registered Distributors
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Business Opportunity
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Partner Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Legal */}
          <div>
            <h3 className="text-sm font-bold tracking-tighter text-white mb-4 uppercase">
              Support & Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Quality Policy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Medicine Use & Safety
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-slate-400 hover:text-emerald-500 transition-colors text-sm block inline-block">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Brand & Social Row */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <Link to="/">
                <img
                  src="/GreenLife-logo-black (1).png"
                  alt="Greenlife Pharmaceuticals"
                  className="h-12 w-auto object-contain mb-4 brightness-0 invert hover:opacity-80 transition-opacity"
                  style={{ imageRendering: '-webkit-optimize-contrast' }}
                />
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed">
                Enriching lives since 1995
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-emerald-500 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-slate-800 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href={googleMapsSearchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-emerald-500 transition-colors text-sm flex items-start gap-2"
            >
              <MapPin className="text-[#059669] mt-0.5 flex-shrink-0" size={16} />
              <span>Ilupeju Industrial Estate, Lagos</span>
            </a>
            <a
              href="tel:+23412345678"
              className="text-slate-400 hover:text-emerald-500 transition-colors text-sm flex items-center gap-2"
            >
              <Phone className="text-[#059669] flex-shrink-0" size={16} />
              <span>+234 (0) 1 234 5678</span>
            </a>
            <a
              href="mailto:info@greenlifepharma.com"
              className="text-slate-400 hover:text-emerald-500 transition-colors text-sm flex items-center gap-2"
            >
              <Mail className="text-[#059669] flex-shrink-0" size={16} />
              <span>info@greenlifepharma.com</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-xs text-slate-500">
              <Link to="/resources" className="hover:text-emerald-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/resources" className="hover:text-emerald-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/about#investors" className="hover:text-emerald-500 transition-colors">
                Investors
              </Link>
              <Link to="/insights" className="hover:text-emerald-500 transition-colors">
                News & Media
              </Link>
              <Link to="/careers" className="hover:text-emerald-500 transition-colors">
                Careers
              </Link>
            </div>
            <p className="text-xs text-slate-500 tracking-wider">
              © 2026 Greenlife Pharmaceuticals. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
