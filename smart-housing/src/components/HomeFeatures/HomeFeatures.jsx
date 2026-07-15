import React from 'react';
import { motion } from 'framer-motion';
import {
  FaClipboardList,
  FaStore,
  FaBullhorn,
  FaAmbulance,
  FaUserCheck,
  FaCalendarAlt,
  FaTools,
  FaChartPie,
} from 'react-icons/fa';

const HomeFeatures = () => {
  const features = [
    {
      id: 1,
      icon: <FaClipboardList className="w-6 h-6" />,
      title: 'Complaint Management',
      description: 'Track and resolve maintenance issues.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      icon: <FaStore className="w-6 h-6" />,
      title: 'Community Marketplace',
      description: 'Buy and sell within your housing.',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 3,
      icon: <FaBullhorn className="w-6 h-6" />,
      title: 'Society Notices',
      description: 'Important announcements from management.',
      gradient: 'from-amber-500 to-orange-400',
    },
    {
      id: 4,
      icon: <FaAmbulance className="w-6 h-6" />,
      title: 'Emergency SOS',
      description: 'One-tap emergency assistance.',
      gradient: 'from-red-500 to-rose-400',
    },
    {
      id: 5,
      icon: <FaUserCheck className="w-6 h-6" />,
      title: 'Visitor Management',
      description: 'Manage visitor entries securely.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      id: 6,
      icon: <FaCalendarAlt className="w-6 h-6" />,
      title: 'Community Events',
      description: 'Festivals, meetings and activities.',
      gradient: 'from-indigo-500 to-violet-400',
    },
    {
      id: 7,
      icon: <FaTools className="w-6 h-6" />,
      title: 'Maintenance Tracker',
      description: 'Track repair and maintenance requests.',
      gradient: 'from-cyan-500 to-blue-400',
    },
    {
      id: 8,
      icon: <FaChartPie className="w-6 h-6" />,
      title: 'Analytics Dashboard',
      description: 'Community statistics and reports.',
      gradient: 'from-slate-500 to-gray-400',
    },
  ];

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

  const cardVariants = {
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

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background elements - using only building/apartment imagery */}
      <div 
        className="absolute top-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #3b82f6, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #8b5cf6, transparent 70%)',
        }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10 dark:opacity-5"
        style={{
          background: 'radial-gradient(circle, #ec4899, transparent 70%)',
        }}
      />

      {/* Subtle building silhouettes as decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 opacity-5 dark:opacity-10 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-slate-800 dark:text-slate-200">
          <rect x="20" y="80" width="30" height="120" rx="2" />
          <rect x="55" y="40" width="30" height="160" rx="2" />
          <rect x="90" y="60" width="30" height="140" rx="2" />
          <rect x="125" y="20" width="30" height="180" rx="2" />
          <rect x="160" y="90" width="30" height="110" rx="2" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-5 dark:opacity-10 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 200 200" fill="currentColor" className="text-slate-800 dark:text-slate-200">
          <rect x="20" y="80" width="30" height="120" rx="2" />
          <rect x="55" y="40" width="30" height="160" rx="2" />
          <rect x="90" y="60" width="30" height="140" rx="2" />
          <rect x="125" y="20" width="30" height="180" rx="2" />
          <rect x="160" y="90" width="30" height="110" rx="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            FEATURES
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Everything You Need in{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Manage your entire residential community from a single modern platform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Glow effect behind card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${feature.gradient.split(' ')[0]}, ${feature.gradient.split(' ')[2]})`,
                }}
              />

              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.split(' ')[0]}, ${feature.gradient.split(' ')[2]})`,
                  }}
                >
                  <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>

                <div className="relative z-10">
                  {/* Icon with gradient background */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-r ${feature.gradient} text-white shadow-lg`}
                    style={{
                      boxShadow: `0 8px 24px rgba(59, 130, 246, 0.25)`,
                    }}
                  >
                    {feature.icon}
                  </div>

                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative line on hover */}
                  <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:w-12 transition-all duration-300" />
                </div>

                {/* Subtle gradient overlay on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${feature.gradient.split(' ')[0]}, ${feature.gradient.split(' ')[2]})`,
                  }}
                />
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
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl"
          >
            Explore All Features →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatures;