// src/components/Hero/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import BackgroundSlider from './BackgroundSlider';

const Hero = () => {
  const cities = ['Kolkata', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'];
  
  // City-specific HD images (Unsplash)
  const cityImages = {
    Kolkata: 'https://images.unsplash.com/photo-1534351450181-ea9f78427fe8?w=1920&h=1080&fit=crop&q=80',
    Delhi: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1920&h=1080&fit=crop&q=80',
    Mumbai: 'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?w=1920&h=1080&fit=crop&q=80',
    Bangalore: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=1920&h=1080&fit=crop&q=80',
    Hyderabad: 'https://images.unsplash.com/photo-1613845166013-c7b32e5921f0?w=1920&h=1080&fit=crop&q=80',
  };

  // Housing complex images for each city
  const housingImages = {
    Kolkata: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop&q=80',
    ],
    Delhi: [
      'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1920&h=1080&fit=crop&q=80',
    ],
    Mumbai: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&h=1080&fit=crop&q=80',
    ],
    Bangalore: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop&q=80',
    ],
    Hyderabad: [
      'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?w=1920&h=1080&fit=crop&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1920&h=1080&fit=crop&q=80',
    ],
  };

  // Combine all images for the slider
  const allImages = [
    ...cities.map(city => cityImages[city]),
    ...Object.values(housingImages).flat(),
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Slider */}
      <BackgroundSlider images={allImages} />

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium tracking-wider">
              🏡 Your Smart Community Hub
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Smart Living
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {' '}Starts Here
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Manage complaints, buy & sell, connect with residents and build a better community.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="group relative px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10">Explore</span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              Report Issue
            </button>

            <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg">
              Marketplace
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/10"
          >
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Active Residents</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">120+</div>
              <div className="text-sm text-white/60">Complaints Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">30+</div>
              <div className="text-sm text-white/60">Community Events</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;