import React from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaSignInAlt,
  FaExclamationTriangle,
  FaChartLine,
  FaCheckCircle,
  FaArrowRight,
  FaChevronRight,
} from 'react-icons/fa';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: 'Choose City',
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      description: 'Select your city.',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Choose Housing Complex',
      icon: <FaBuilding className="w-6 h-6" />,
      description: 'Choose your residential complex.',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 3,
      title: 'Login',
      icon: <FaSignInAlt className="w-6 h-6" />,
      description: 'Login as Resident or Admin.',
      gradient: 'from-amber-500 to-orange-400',
    },
    {
      id: 4,
      title: 'Report Issue',
      icon: <FaExclamationTriangle className="w-6 h-6" />,
      description: 'Upload complaint with photos.',
      gradient: 'from-red-500 to-rose-400',
    },
    {
      id: 5,
      title: 'Track Progress',
      icon: <FaChartLine className="w-6 h-6" />,
      description: 'Track status live.',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      id: 6,
      title: 'Issue Resolved',
      icon: <FaCheckCircle className="w-6 h-6" />,
      description: 'Receive notification after resolution.',
      gradient: 'from-indigo-500 to-violet-400',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
        delay: 0.4,
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
            PROCESS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            How It{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Raise complaints and manage your housing in just a few simple steps.
          </p>
        </motion.div>

        {/* Desktop Timeline - Horizontal */}
        <div className="hidden md:block relative">
          {/* Connecting Line */}
          <motion.div
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="absolute top-[72px] left-[60px] right-[60px] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-6 gap-4"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="relative flex flex-col items-center"
              >
                {/* Step Number */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-400 dark:text-slate-500">
                  Step {step.id}
                </div>

                {/* Icon Circle */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${step.gradient} text-white shadow-lg mb-4`}
                  style={{
                    boxShadow: `0 8px 32px rgba(59, 130, 246, 0.25)`,
                  }}
                >
                  {step.icon}
                </motion.div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-[calc(100%+8px)] text-slate-300 dark:text-slate-600">
                    <FaArrowRight className="w-4 h-4" />
                  </div>
                )}

                {/* Card */}
                <div className="w-full backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mobile Timeline - Vertical */}
        <div className="md:hidden relative">
          {/* Vertical Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-indigo-500 rounded-full origin-top"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="space-y-8"
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                variants={itemVariants}
                whileHover={{ x: 4 }}
                className="relative flex items-start gap-6 pl-16"
              >
                {/* Timeline Dot */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="absolute left-5 top-1 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/25 flex items-center justify-center text-white text-[10px] font-bold z-10"
                >
                  {step.id}
                </motion.div>

                {/* Card */}
                <div className="flex-1 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${step.gradient} text-white shadow-lg`}>
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                        {step.title}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="mt-3 flex justify-end">
                      <FaChevronRight className="text-slate-300 dark:text-slate-600 text-sm" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

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
            Get Started Now →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;