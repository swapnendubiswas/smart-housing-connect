import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaRocket,
  FaEye,
  FaHeart,
  FaUsers,
  FaBuilding,
  FaClipboardList,
  FaStore,
  FaBullhorn,
  FaCalendarAlt,
  FaShieldAlt,
  FaChartLine,
  FaArrowRight,
  FaGraduationCap,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaCheckCircle,
  FaSpinner,
  FaClock,
  FaMobileAlt,
  FaRobot,
  FaParking,
  FaWifi,
  FaDatabase,
  FaLock,
  FaComments,
  FaInfoCircle,
  FaTag,
  FaCalendarCheck,
  FaRocket as FaLaunch,
} from 'react-icons/fa';

const About = () => {
  const stats = [
    { label: 'Housing Complexes', value: '250+', icon: <FaBuilding />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Active Communities', value: '180+', icon: <FaUsers />, gradient: 'from-purple-500 to-pink-400' },
    { label: 'Complaints Resolved', value: '15,000+', icon: <FaClipboardList />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Happy Residents', value: '10,000+', icon: <FaHeart />, gradient: 'from-amber-500 to-orange-400' },
  ];

  const features = [
    { icon: <FaClipboardList />, title: 'Complaint Management', description: 'Track and resolve issues in real-time' },
    { icon: <FaStore />, title: 'Community Marketplace', description: 'Buy and sell within your community' },
    { icon: <FaBullhorn />, title: 'Smart Notices', description: 'Real-time announcements and updates' },
    { icon: <FaShieldAlt />, title: 'Emergency SOS', description: 'One-tap emergency assistance' },
    { icon: <FaCalendarAlt />, title: 'Event Management', description: 'Organize and manage community events' },
    { icon: <FaChartLine />, title: 'Analytics Dashboard', description: 'Track community engagement metrics' },
  ];

  const roadmapStages = [
    { label: 'UI Research', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'UX Design', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'Frontend Development', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'Marketplace Module', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'Complaint Module', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'Community Module', status: 'completed', icon: <FaCheckCircle /> },
    { label: 'Responsive Optimization', status: 'in-progress', icon: <FaSpinner /> },
    { label: 'Performance Optimization', status: 'in-progress', icon: <FaSpinner /> },
    { label: 'Backend Integration', status: 'planned', icon: <FaClock /> },
    { label: 'MongoDB Database', status: 'planned', icon: <FaDatabase /> },
    { label: 'JWT Authentication', status: 'planned', icon: <FaLock /> },
    { label: 'Real-time Chat', status: 'planned', icon: <FaComments /> },
    { label: 'Mobile Application', status: 'planned', icon: <FaMobileAlt /> },
    { label: 'AI-powered Resident Assistant', status: 'planned', icon: <FaRobot /> },
    { label: 'Public Release', status: 'future', icon: <FaRocket /> },
  ];

  const futureVision = [
    { icon: <FaMobileAlt />, label: 'Android App' },
    { icon: <FaMobileAlt />, label: 'iOS App' },
    { icon: <FaShieldAlt />, label: 'Visitor Management' },
    { icon: <FaRobot />, label: 'AI Assistant' },
    { icon: <FaParking />, label: 'Smart Parking' },
    { icon: <FaWifi />, label: 'IoT Integration' },
  ];

  const getStatusStyles = (status) => {
    const styles = {
      completed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      'in-progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      planned: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      future: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
    };
    return styles[status] || styles.planned;
  };

  const getStatusIcon = (status) => {
    const icons = {
      completed: <FaCheckCircle className="text-emerald-500 dark:text-emerald-400" />,
      'in-progress': <FaSpinner className="text-blue-500 dark:text-blue-400 animate-spin" />,
      planned: <FaClock className="text-purple-500 dark:text-purple-400" />,
      future: <FaRocket className="text-cyan-500 dark:text-cyan-400" />,
    };
    return icons[status] || icons.planned;
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

  const cardVariants = {
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

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Background decorative elements - matching Home page */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Hero Section - Matching Home page hero style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative text-center py-12 sm:py-16 lg:py-20"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4"
          >
            About Smart Housing Connect
          </motion.div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-4">
            Smart Housing Connect
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Transforming Modern Residential Living Through Technology
          </p>
          <div className="mt-6">
            <p className="text-sm text-slate-500 dark:text-slate-400 tracking-wider">An Independent Product by</p>
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2"
              style={{
                fontFamily: "'Orbitron', 'Audiowide', monospace",
              }}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ✨ SWAPNO LABS ✨
              </span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Statistics - Matching Home stats style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10 text-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 bg-gradient-to-r ${stat.gradient} text-white text-sm shadow-lg`}>
                  {stat.icon}
                </div>
                <div className="text-xl font-bold text-slate-800 dark:text-slate-100">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Product Information Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg">
                <FaInfoCircle />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Product Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <FaTag className="text-blue-500 text-xs" />
                  Product Name
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Smart Housing Connect</p>
              </div>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <FaTag className="text-purple-500 text-xs" />
                  Version
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">v1.0.0</p>
              </div>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <FaCalendarCheck className="text-emerald-500 text-xs" />
                  Release
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">July 2026</p>
              </div>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <FaCheckCircle className="text-emerald-500 text-xs" />
                  Status
                </p>
                <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Frontend Complete ✅</p>
              </div>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <FaLaunch className="text-cyan-500 text-xs" />
                  Next Milestone
                </p>
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">Backend Integration</p>
              </div>
            </div>
            <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/20 dark:border-slate-700/20 text-center">
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Powered by{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
                  Swapno Labs
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* About the Project - Glass card matching Home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">About the Project</h2>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Smart Housing Connect is a modern smart residential community platform created as an independent portfolio project. 
              It demonstrates expertise in building a complete, production-ready SaaS platform with a focus on 
              user experience, modern design, and robust functionality. The platform solves real-world problems 
              faced by residential communities by providing a unified digital solution for communication, 
              complaint management, and community engagement.
            </p>
          </div>
        </motion.div>

        {/* Mission & Vision - Glass cards matching Home */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-xl shadow-lg">
                  <FaRocket />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Mission</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower residential communities with intelligent technology that simplifies communication, 
                enhances engagement, and creates a more connected and harmonious living experience for every resident.
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-xl shadow-lg">
                  <FaEye />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Vision</h2>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                To become the world's most trusted community management platform, transforming how residential societies 
                operate, communicate, and grow together in the digital age.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Features - Matching Home features style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-3">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Key Features
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-2">
              Everything your residential community needs in one intelligent platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                  <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-400/10 text-purple-600 dark:text-purple-400 text-sm font-medium tracking-wider mb-3">
              Roadmap
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Development Roadmap
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-2">
              The journey of building Smart Housing Connect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {roadmapStages.map((stage, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className={`backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border ${getStatusStyles(stage.status)} rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 flex items-center gap-3`}
              >
                <div className="flex-shrink-0 text-lg">
                  {getStatusIcon(stage.status)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{stage.label}</p>
                </div>
                <div className="flex-shrink-0 text-xs text-slate-500 dark:text-slate-400">
                  {stage.status === 'completed' ? 'Done' : 
                   stage.status === 'in-progress' ? 'In Progress' :
                   stage.status === 'future' ? 'Coming Soon' : 'Planned'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 dark:bg-cyan-400/10 text-cyan-600 dark:text-cyan-400 text-sm font-medium tracking-wider mb-3">
              Future Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Future Vision
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-2">
              Expanding Smart Housing Connect to new heights.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {futureVision.map((item, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.05 }}
                className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="text-3xl text-cyan-500 dark:text-cyan-400 mb-2">{item.icon}</div>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 text-sm font-medium tracking-wider mb-3">
              Founder
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-100">
              Meet the Founder
            </h2>
          </div>

          <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-5xl font-bold shadow-lg shadow-blue-500/25">
                  SB
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Swapnendu Biswas</h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 mt-1 text-sm text-slate-500 dark:text-slate-400">
                  <FaGraduationCap className="text-blue-500 dark:text-blue-400" />
                  <span>B.Tech CSE • Institute of Engineering & Management</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
                  <a href="#" className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
                    <FaGithub className="text-lg" />
                  </a>
                  <a href="#" className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110">
                    <FaLinkedin className="text-lg" />
                  </a>
                  <a href="#" className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:text-cyan-400 transition-all duration-300 hover:scale-110">
                    <FaTwitter className="text-lg" />
                  </a>
                  <a href="#" className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:text-pink-500 transition-all duration-300 hover:scale-110">
                    <FaInstagram className="text-lg" />
                  </a>
                  <a href="mailto:swapnendu@example.com" className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-white/30 dark:border-slate-700/30 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 hover:text-purple-500 transition-all duration-300 hover:scale-110">
                    <FaEnvelope className="text-lg" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call To Action - Matching Home CTA style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative backdrop-blur-xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-500/10 dark:to-purple-500/10 border border-white/30 dark:border-slate-700/30 rounded-3xl p-8 sm:p-12 text-center overflow-hidden shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
                Get Started
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                Build a Smarter{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Community Today
                </span>
              </h3>
              <p className="text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
                Join thousands of residents who are already using Smart Housing Connect to build better communities.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/"
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-2"
                >
                  Explore the Platform
                  <FaArrowRight className="text-sm" />
                </Link>
                <Link
                  to="/contact"
                  className="px-8 py-4 rounded-full bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-white/30 dark:border-slate-700/30 text-slate-700 dark:text-slate-200 font-semibold text-base hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-blue-500/20 rounded-tl-3xl opacity-30" />
            <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-purple-500/20 rounded-br-3xl opacity-30" />
          </div>
        </motion.div>

        {/* Footer - Matching Home footer style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50"
        >
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Powered by{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
              ✨ SWAPNO LABS ✨
            </span>
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
            Designed & Developed by Swapnendu Biswas
          </p>
          <p className="text-xs text-slate-400 dark:text-slate-500">Version 1.0.0</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2">
            © 2026 Swapno Labs. All Rights Reserved.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;