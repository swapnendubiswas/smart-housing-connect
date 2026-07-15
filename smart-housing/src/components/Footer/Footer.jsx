import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaArrowUp,
  FaPaperPlane,
  FaHome,
  FaClipboardList,
  FaStore,
  FaUsers,
  FaChartPie,
  FaInfoCircle,
  FaPhone,
  FaShieldAlt,
  FaUserCheck,
  FaBell,
  FaCalendarAlt,
  FaTools,
} from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing! You will receive updates from Swapno Labs.');
    setEmail('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <footer className="relative overflow-hidden bg-slate-900 dark:bg-slate-950">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Column 1 - Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏡</span>
              <span className="text-xl font-bold text-white">Smart Housing Connect</span>
            </div>
            <p className="text-sm text-blue-400 font-medium">A Product by Swapno Labs</p>
            <p className="text-sm text-slate-400 leading-relaxed">
              Smart Housing Connect is an intelligent community management platform developed by Swapno Labs to simplify complaint management, community communication, resident engagement and marketplace services.
            </p>
            <div className="flex gap-3 pt-2">
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaLinkedin className="text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaGithub className="text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaInstagram className="text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaFacebook className="text-sm" />
              </motion.a>
              <motion.a
                whileHover={{ y: -2, scale: 1.1 }}
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300"
              >
                <FaTwitter className="text-sm" />
              </motion.a>
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {['Home', 'Features', 'Marketplace', 'Complaints', 'Community', 'Dashboard', 'About', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:pl-1">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Solutions */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                'Complaint Management',
                'Marketplace',
                'Community Feed',
                'Visitor Management',
                'Emergency Support',
                'Analytics Dashboard',
                'Resident Portal',
              ].map((solution) => (
                <li key={solution}>
                  <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-200 hover:pl-1">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact Information</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-400 font-medium">Company</p>
                <p className="text-sm text-white">Swapno Labs</p>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Email</p>
                <a href="mailto:contact@swapnolabs.com" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  contact@swapnolabs.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Support</p>
                <a href="mailto:support@swapnolabs.com" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  support@swapnolabs.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Website</p>
                <a href="#" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                  www.swapnolabs.com
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Office Hours</p>
                <p className="text-sm text-white">Mon – Sat</p>
                <p className="text-sm text-slate-400">9:00 AM – 7:00 PM</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-slate-800"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-white font-semibold text-lg mb-1">Stay Updated</h4>
              <p className="text-slate-400 text-sm">Subscribe to receive product updates and community news.</p>
            </div>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-white/5 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <FaPaperPlane className="text-xs" />
                Subscribe
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
        >
          <div className="text-center md:text-left">
            <p className="text-slate-400 text-sm">
              Powered by{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-bold">
                ✨ SWAPNO LABS ✨
              </span>
            </p>
            <p className="text-slate-500 text-xs mt-1">
              Designed & Developed by Swapnendu Biswas
            </p>
            <p className="text-slate-500 text-xs">Version 1.0.0</p>
          </div>

          <div className="text-center">
            <span className="text-slate-500 text-xs">© 2026 Swapno Labs. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4 text-center md:text-right">
            <a href="#" className="text-slate-500 hover:text-white transition-colors duration-200 text-xs">
              Privacy Policy
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors duration-200 text-xs">
              Terms of Service
            </a>
            <span className="text-slate-700">|</span>
            <a href="#" className="text-slate-500 hover:text-white transition-colors duration-200 text-xs">
              Support
            </a>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          scale: showBackToTop ? 1 : 0.8,
          y: showBackToTop ? 0 : 20,
        }}
        transition={{ duration: 0.3 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 flex items-center justify-center ${
          showBackToTop ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <FaArrowUp className="text-sm" />
      </motion.button>
    </footer>
  );
};

export default Footer;