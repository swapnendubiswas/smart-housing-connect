import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'How do I register on Smart Housing Connect?',
      answer: 'Registering is simple! Click on the "Get Started" button on the homepage. Enter your email, create a password, and verify your residential details using your flat number and housing complex name. You\'ll receive a verification OTP on your registered mobile number.',
    },
    {
      id: 2,
      question: 'How do I report a complaint?',
      answer: 'Navigate to the "Complaints" page and click on "Report New Complaint". Fill in the details including category, priority, location, and a brief description. You can also attach photos to help the management understand the issue better.',
    },
    {
      id: 3,
      question: 'Can I upload photos with my complaint?',
      answer: 'Yes! You can upload up to 5 photos per complaint. Simply click on the upload button and select images from your device. Supported formats include JPG, PNG, and GIF. This helps the maintenance team assess the issue more accurately.',
    },
    {
      id: 4,
      question: 'How do I track the status of my complaint?',
      answer: 'You can track your complaint status in real-time from the "Complaints" page. Each complaint shows a progress bar with stages: Submitted → Assigned → In Progress → Resolved. You\'ll also receive email and push notifications when your complaint status changes.',
    },
    {
      id: 5,
      question: 'Who can use the Community Marketplace?',
      answer: 'The Marketplace is exclusively for verified residents of your housing complex. You can buy, sell, or rent items within your community. All transactions are between residents, and the platform provides a safe environment for local commerce.',
    },
    {
      id: 6,
      question: 'Can I sell my flat through the Marketplace?',
      answer: 'Yes! You can list your flat for sale or rent in the Marketplace. Provide details like flat size, number of bedrooms, amenities, and photos. Interested buyers or renters within your community can contact you directly through the platform.',
    },
    {
      id: 7,
      question: 'How are emergency alerts sent to residents?',
      answer: 'Emergency alerts are sent through multiple channels: Push notifications to the app, SMS, and email. The SOS button in the app provides one-tap access to emergency services and contacts. Alerts are also displayed prominently on the Notice Board.',
    },
    {
      id: 8,
      question: 'How do I contact the society management?',
      answer: 'You can contact management through the "Contact" page, which provides email, phone, and in-person visit details. You can also raise queries directly from the dashboard, and the management team will get back to you within 24 hours.',
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
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
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Everything residents need to know.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="relative"
            >
              <div className={`backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 transition-all duration-300 ${
                activeIndex === index ? 'shadow-2xl' : 'hover:shadow-xl'
              }`}>
                {/* Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left group focus:outline-none"
                >
                  <h4 className="text-sm sm:text-base font-semibold text-slate-800 dark:text-slate-100 pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                    {faq.question}
                  </h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 group-hover:bg-slate-200 dark:group-hover:bg-slate-700'
                  }`}>
                    {activeIndex === index ? (
                      <FaMinus className="text-xs" />
                    ) : (
                      <FaPlus className="text-xs" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="h-px bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 mb-4" />
                        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 ${
                  activeIndex === index ? 'from-blue-500/30 via-purple-500/30 to-pink-500/30' : 'hover:from-blue-500/10 hover:via-purple-500/10 hover:to-pink-500/10'
                }`}>
                  <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/10 dark:to-purple-500/10 border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 text-center overflow-hidden shadow-2xl">
            {/* Background glow */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <h4 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                Still have questions?
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                Contact our society office for personalized assistance.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 dark:bg-blue-400/10 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <FaEnvelope className="text-xs" />
                  </div>
                  <span>support@smarthousing.com</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 dark:bg-purple-400/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                    <FaPhoneAlt className="text-xs" />
                  </div>
                  <span>+91 1800-123-4567</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
                  <div className="w-8 h-8 rounded-full bg-pink-500/20 dark:bg-pink-400/10 flex items-center justify-center text-pink-600 dark:text-pink-400">
                    <FaMapMarkerAlt className="text-xs" />
                  </div>
                  <span>Community Office, Block A</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-500/20 rounded-tl-2xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/20 rounded-br-2xl opacity-30" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;