import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaUsers,
  FaBuilding,
  FaTrophy,
} from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      city: 'Mumbai',
      housing: 'Ocean Pearl',
      avatar: 'https://i.pravatar.cc/150?img=1',
      rating: 5,
      text: 'Smart Housing Connect has completely transformed how our community communicates. Complaints are resolved within hours, and the marketplace is a game-changer!',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      city: 'Delhi',
      housing: 'Lotus Apartments',
      avatar: 'https://i.pravatar.cc/150?img=2',
      rating: 5,
      text: 'The best platform for residential communities. The emergency SOS feature gives us peace of mind, and the community feed keeps everyone connected.',
    },
    {
      id: 3,
      name: 'Sneha Patel',
      city: 'Bangalore',
      housing: 'Gardenia',
      avatar: 'https://i.pravatar.cc/150?img=3',
      rating: 4.5,
      text: 'I love how easy it is to track complaints and see real-time progress. The dashboard is beautiful and intuitive. Highly recommended!',
    },
    {
      id: 4,
      name: 'Amit Verma',
      city: 'Hyderabad',
      housing: 'Cyber City',
      avatar: 'https://i.pravatar.cc/150?img=4',
      rating: 5,
      text: 'Managing society notices and events has never been easier. The glassmorphism UI is stunning and the mobile experience is flawless.',
    },
    {
      id: 5,
      name: 'Ananya Reddy',
      city: 'Kolkata',
      housing: 'Greenwood Towers',
      avatar: 'https://i.pravatar.cc/150?img=5',
      rating: 5,
      text: 'The marketplace feature helped me sell my sofa set within a day! The community is active and trustworthy. Best platform for housing societies.',
    },
    {
      id: 6,
      name: 'Vikram Singh',
      city: 'Delhi',
      housing: 'Orchid Heights',
      avatar: 'https://i.pravatar.cc/150?img=6',
      rating: 4.5,
      text: 'Finally a platform that understands community living. The real-time updates and transparent complaint system have improved our society management significantly.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    }),
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-sm" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-sm" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-sm" />);
    }
    return stars;
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
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
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl pointer-events-none opacity-10 dark:opacity-5"
        style={{
          background: 'radial-gradient(circle, #ec4899 0%, transparent 70%)',
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            What{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Residents Say
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Trusted by thousands of residents across different housing complexes.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative"
            >
              <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 shadow-2xl shadow-slate-200/50 dark:shadow-slate-800/50">
                <div className="flex flex-col items-center text-center">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl mb-4 shadow-lg shadow-blue-500/25">
                    <FaQuoteLeft />
                  </div>

                  {/* Avatar */}
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-xl mb-4"
                  />

                  {/* Name & Housing */}
                  <h4 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {testimonials[currentIndex].housing}, {testimonials[currentIndex].city}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 mt-2 mb-3">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed max-w-2xl">
                    "{testimonials[currentIndex].text}"
                  </p>
                </div>

                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20">
                  <div className="h-full w-full rounded-3xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <FaChevronLeft className="text-slate-700 dark:text-slate-200" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-20"
          >
            <FaChevronRight className="text-slate-700 dark:text-slate-200" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'w-8 bg-gradient-to-r from-blue-500 to-purple-600'
                    : 'w-2 bg-slate-300 dark:bg-slate-600 hover:bg-slate-400 dark:hover:bg-slate-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-yellow-400/25">
                <FaTrophy />
              </div>
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
              ★★★★★ 4.9/5
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Average Rating</p>
          </div>

          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25">
                <FaUsers />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              10,000+
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Happy Residents</p>
          </div>

          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 group hover:scale-105">
            <div className="flex justify-center mb-3">
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-2xl shadow-lg shadow-purple-500/25">
                <FaBuilding />
              </div>
            </div>
            <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
              250+
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">Housing Complexes</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;