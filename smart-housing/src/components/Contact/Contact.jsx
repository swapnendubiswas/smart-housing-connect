import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaUser,
  FaCity,
  FaBuilding,
  FaShare,
  FaHome,
  FaPen,
  FaPaperPlane,
  FaExclamationTriangle,
  FaHeadset,
  FaMap,
  FaArrowRight,
  FaShieldAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaCheckCircle,
  FaQuestionCircle,
  FaRegClock,
  FaArrowLeft,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }, 3000);
    }, 1500);
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const slideLeftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const slideRightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm 
    border ${focusedField === fieldName || formData[fieldName] ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} 
    rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 
    transition-all duration-300 text-slate-700 dark:text-slate-200 
    placeholder-transparent peer
    outline-none
  `;

  const labelClasses = (fieldName) => `
    absolute left-4 transition-all duration-300 pointer-events-none
    ${focusedField === fieldName || formData[fieldName] 
      ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' 
      : 'top-3.5 text-slate-400 dark:text-slate-500'}
  `;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4"
        >
          <div className="flex items-center gap-3">
            <Link to="/" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Get In Touch
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Have questions? Reach out to your housing management anytime.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 flex items-center gap-3"
          >
            <FaCheckCircle className="text-emerald-500 text-lg" />
            <div>
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Message Sent Successfully!</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Our team will get back to you within 24 hours.</p>
            </div>
          </motion.div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-sm">
                  <FaPen />
                </span>
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 transition-all duration-300 ${
                    focusedField === 'fullName' || formData.fullName ? 'text-blue-500' : ''
                  }`}>
                    <FaUser className="text-sm" />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    onFocus={() => handleFocus('fullName')}
                    onBlur={handleBlur}
                    className={inputClasses('fullName')}
                    required
                  />
                  <label className={labelClasses('fullName')}>
                    Full Name *
                  </label>
                </div>

                {/* Email */}
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 transition-all duration-300 ${
                    focusedField === 'email' || formData.email ? 'text-blue-500' : ''
                  }`}>
                    <FaEnvelope className="text-sm" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={inputClasses('email')}
                    required
                  />
                  <label className={labelClasses('email')}>
                    Email Address *
                  </label>
                </div>

                {/* Phone */}
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 transition-all duration-300 ${
                    focusedField === 'phone' || formData.phone ? 'text-blue-500' : ''
                  }`}>
                    <FaPhoneAlt className="text-sm" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => handleFocus('phone')}
                    onBlur={handleBlur}
                    className={inputClasses('phone')}
                    required
                  />
                  <label className={labelClasses('phone')}>
                    Phone Number *
                  </label>
                </div>

                {/* Subject */}
                <div className="relative">
                  <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 transition-all duration-300 ${
                    focusedField === 'subject' || formData.subject ? 'text-blue-500' : ''
                  }`}>
                    <FaPen className="text-sm" />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => handleFocus('subject')}
                    onBlur={handleBlur}
                    className={inputClasses('subject')}
                    required
                  />
                  <label className={labelClasses('subject')}>
                    Subject *
                  </label>
                </div>

                {/* Message */}
                <div className="relative">
                  <div className={`absolute left-3 top-3.5 text-slate-400 dark:text-slate-500 transition-all duration-300 ${
                    focusedField === 'message' || formData.message ? 'text-blue-500' : ''
                  }`}>
                    <FaPen className="text-sm" />
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    rows="5"
                    className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'message' || formData.message ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-transparent peer outline-none resize-none`}
                    required
                  />
                  <label className={`${labelClasses('message')} ${formData.message ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                    Message *
                  </label>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Contact Information */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm">
                  <FaMapMarkerAlt />
                </span>
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaMapMarkerAlt className="text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Office Address</p>
                    <p className="text-sm text-slate-700 dark:text-slate-200">Greenwood Towers, Block A, Kolkata - 700001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaEnvelope className="text-purple-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Email</p>
                    <a href="mailto:contact@smarthousing.com" className="text-sm text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-colors">
                      contact@smarthousing.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaPhoneAlt className="text-emerald-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Phone</p>
                    <a href="tel:+913312345678" className="text-sm text-slate-700 dark:text-slate-200 hover:text-blue-500 transition-colors">
                      +91 33 1234 5678
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaClock className="text-amber-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Support Hours</p>
                    <p className="text-sm text-slate-700 dark:text-slate-200">Mon-Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-sm">
                  <FaShare />
                </span>
                Connect With Us
              </h3>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-blue-500 transition-all duration-300 hover:scale-110">
                  <FaLinkedin className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-purple-500 transition-all duration-300 hover:scale-110">
                  <FaGithub className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-blue-600 transition-all duration-300 hover:scale-110">
                  <FaFacebook className="text-lg" />
                </a>
                <a href="#" className="w-10 h-10 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                  <FaTwitter className="text-lg" />
                </a>
              </div>
            </motion.div>

            {/* Google Map Placeholder */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-white text-sm">
                  <FaMap />
                </span>
                Find Us
              </h3>
              <div className="bg-slate-100 dark:bg-slate-800 rounded-xl h-48 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-600">
                <FaMapMarkerAlt className="text-4xl text-blue-400 dark:text-blue-500 mb-2" />
                <p className="text-sm text-slate-500 dark:text-slate-400">Interactive Map</p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Greenwood Towers, Kolkata</p>
                <button className="mt-3 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                  View on Google Maps
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/10 dark:to-purple-500/10 border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 sm:p-10 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                Need Immediate{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Help?
                </span>
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-6">
                Raise an emergency complaint instantly or call our society office for urgent assistance.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/complaints/new"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-rose-500 text-white font-semibold text-sm shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  <FaExclamationTriangle className="text-sm" />
                  Emergency Complaint
                </Link>
                <a
                  href="tel:+913312345678"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  <FaHeadset className="text-sm" />
                  Call Society Office
                </a>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl opacity-30" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;