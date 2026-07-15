import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaUser,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaTag,
  FaExclamationTriangle,
  FaMapMarkerAlt,
  FaPen,
  FaClock,
  FaUserTie,
  FaCalendarAlt,
  FaCheckCircle,
  FaFilePdf,
  FaImage,
  FaChevronDown,
  FaChevronUp,
  FaPaperclip,
  FaClipboardList,
  FaInfoCircle,
  FaRegClock,
  FaDownload,
  FaHeadset,
} from 'react-icons/fa';

const ComplaintDetails = () => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const complaint = {
    id: 'C-1002',
    status: 'In Progress',
    priority: 'Urgent',
    category: 'Electricity',
    dateCreated: '2024-01-16',
    resident: {
      name: 'Priya Sharma',
      flat: 'B-205',
      phone: '+91 98765 43210',
      email: 'priya.sharma@email.com',
    },
    details: {
      location: 'Block B, Floor 2',
      description: 'There is a persistent power fluctuation in my flat. The lights keep flickering and sometimes the power goes out completely for 5-10 minutes. This has been happening for the past 3 days and is affecting my work and daily activities. I have checked the main switch and it seems fine. Please send an electrician to investigate the issue urgently. The problem seems to be getting worse each day.',
      image: 'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop&q=80',
    },
    assignedStaff: {
      name: 'Jane Smith',
      department: 'Maintenance Department',
      phone: '+91 87654 32109',
      status: 'Active',
    },
    resolutionNotes: 'The electrician has been assigned to investigate the power fluctuation issue. Initial inspection suggests a potential wiring problem in the main circuit. The team will replace the faulty wiring and ensure proper power supply restoration. Estimated completion time is 4-6 hours.',
    estimatedResolutionTime: '4-6 hours',
    uploadedImages: [
      'https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee2f8b6e0e6f?w=400&h=300&fit=crop&q=80',
    ],
    timeline: [
      { status: 'Complaint Created', date: '2024-01-16 09:30 AM', completed: true },
      { status: 'Assigned to Staff', date: '2024-01-16 10:15 AM', completed: true },
      { status: 'In Progress', date: '2024-01-16 11:00 AM', completed: true },
      { status: 'Resolved', date: 'Expected by 2024-01-18', completed: false },
    ],
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      'In Progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      Resolved: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      Rejected: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      Low: 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300',
      Medium: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
      High: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      Urgent: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    };
    return colors[priority] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
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

  const handleImageError = (e) => {
    e.target.src = "https://images.unsplash.com/photo-1563207153-f403bf289096?w=400&h=300&fit=crop&q=80";
  };

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
          <div className="flex items-center gap-4">
            <Link to="/complaints" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Complaint Details
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                #{complaint.id} • {complaint.category}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className={`px-4 py-2 rounded-full text-sm font-medium ${getStatusColor(complaint.status)}`}>
              {complaint.status}
            </span>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2 space-y-6"
          >
            {/* Complaint Information */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm">
                  <FaInfoCircle />
                </span>
                Complaint Information
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Complaint ID</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.id}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Category</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
                    <FaTag className="text-blue-500 text-xs" />
                    {complaint.category}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Priority</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(complaint.priority)}`}>
                      {complaint.priority}
                    </span>
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Date Created</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
                    <FaCalendarAlt className="text-blue-500 text-xs" />
                    {complaint.dateCreated}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Resident Details */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-sm">
                  <FaUser />
                </span>
                Resident Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaUser className="text-blue-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Name</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.resident.name}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaHome className="text-purple-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Flat Number</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.resident.flat}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <FaPhoneAlt className="text-emerald-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Contact</p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.resident.phone}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Complaint Details */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 flex items-center justify-center text-white text-sm">
                  <FaPen />
                </span>
                Complaint Details
              </h3>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 mb-4">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Description</p>
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {showFullDescription ? complaint.details.description : complaint.details.description.slice(0, 200) + '...'}
                </p>
                {complaint.details.description.length > 200 && (
                  <button
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-2 text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors flex items-center gap-1"
                  >
                    {showFullDescription ? (
                      <>Show Less <FaChevronUp className="text-xs" /></>
                    ) : (
                      <>Read More <FaChevronDown className="text-xs" /></>
                    )}
                  </button>
                )}
              </div>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                <p className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-500 text-xs" />
                  {complaint.details.location}
                </p>
              </div>
            </motion.div>

            {/* Uploaded Images */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-white text-sm">
                  <FaImage />
                </span>
                Uploaded Images
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {complaint.uploadedImages.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/20">
                    <img
                      src={image}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      onError={handleImageError}
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Resolution Notes */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center text-white text-sm">
                  <FaClipboardList />
                </span>
                Resolution Notes
              </h3>
              <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  {complaint.resolutionNotes}
                </p>
              </div>
              <div className="mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30">
                <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-2">
                  <FaRegClock className="text-emerald-500" />
                  Estimated Resolution Time: <span className="font-medium text-slate-700 dark:text-slate-200">{complaint.estimatedResolutionTime}</span>
                </p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <Link
                to="/complaints"
                className="px-6 py-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
              >
                <FaArrowLeft className="text-sm" />
                Back to Complaints
              </Link>
              <Link
                to="/community/chat"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
              >
                <FaHeadset className="text-sm" />
                Contact Support
              </Link>
              <button className="px-6 py-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2">
                <FaFilePdf className="text-sm" />
                Download Report
              </button>
            </motion.div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Assigned Staff */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-400 flex items-center justify-center text-white text-sm">
                  <FaUserTie />
                </span>
                Assigned Staff
              </h3>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Staff Name</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.assignedStaff.name}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Department</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{complaint.assignedStaff.department}</p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Contact</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200 flex items-center gap-2">
                    <FaPhoneAlt className="text-emerald-500 text-xs" />
                    {complaint.assignedStaff.phone}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Status</p>
                  <span className="inline-flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {complaint.assignedStaff.status}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Complaint Timeline */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <span className="w-8 h-8 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 flex items-center justify-center text-white text-sm">
                  <FaClock />
                </span>
                Complaint Timeline
              </h3>
              <div className="relative pl-8">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700">
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full opacity-30" />
                </div>

                {complaint.timeline.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative mb-6 last:mb-0"
                  >
                    <div className={`absolute -left-6 w-4 h-4 rounded-full border-2 border-white dark:border-slate-800 ${
                      step.completed
                        ? 'bg-emerald-500 border-emerald-500'
                        : 'bg-slate-300 dark:bg-slate-600 border-slate-300 dark:border-slate-600'
                    }`}>
                      {step.completed && (
                        <FaCheckCircle className="absolute -top-0.5 -left-0.5 text-emerald-500 text-sm bg-white dark:bg-slate-800 rounded-full" />
                      )}
                    </div>

                    <div className={`p-3 rounded-xl transition-all duration-300 ${
                      step.completed
                        ? 'bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20'
                        : 'bg-white/20 dark:bg-slate-800/20 border border-white/10 dark:border-slate-700/10 opacity-70'
                    }`}>
                      <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                        {step.status}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {step.date}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Total Time</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">2 days, 4 hrs</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Updates</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">5</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Comments</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">3</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;