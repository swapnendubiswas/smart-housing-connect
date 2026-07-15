import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  FaFileImage,
  FaClock,
  FaPaperPlane,
  FaUndo,
  FaLightbulb,
  FaShieldAlt,
  FaClock as FaClockIcon,
  FaIdCard,
  FaCheckCircle,
  FaUpload,
  FaCamera,
  FaVideo,
  FaFile,
  FaTimes,
  FaCalendarAlt,
  FaEye,
  FaClipboardCheck,
  FaRegClock,
} from 'react-icons/fa';

const RaiseComplaint = () => {
  const [formData, setFormData] = useState({
    residentName: '',
    flatNumber: '',
    mobileNumber: '',
    email: '',
    category: '',
    title: '',
    description: '',
    priority: '',
    location: '',
    preferredDate: '',
    preferredTime: '',
    termsAccepted: false,
  });

  const [focusedField, setFocusedField] = useState(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [documents, setDocuments] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);
  const [progress, setProgress] = useState(0);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const documentInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const categories = ['Water Supply', 'Electricity', 'Garbage Collection', 'Lift Maintenance', 'Security', 'Parking', 'Noise Complaint', 'Other'];
  const priorities = ['Low', 'Medium', 'High', 'Emergency'];
  const locations = ['Block A', 'Block B', 'Block C', 'Tower 1', 'Tower 2', 'Clubhouse', 'Parking Lot', 'Other'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    if (name === 'description') {
      setCharacterCount(value.length);
    }
    // Update progress
    updateProgress();
  };

  const updateProgress = () => {
    const fields = ['residentName', 'flatNumber', 'mobileNumber', 'category', 'title', 'description', 'priority', 'location'];
    const filled = fields.filter(field => formData[field] && formData[field].trim() !== '').length;
    const total = fields.length;
    setProgress(Math.round((filled / total) * 100));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleImageUpload = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleVideoUpload = (e) => {
    if (e.target.files) {
      const newVideos = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setVideos([...videos, ...newVideos]);
    }
  };

  const handleDocumentUpload = (e) => {
    if (e.target.files) {
      const newDocs = Array.from(e.target.files).map(file => ({
        name: file.name,
        size: (file.size / 1024).toFixed(1),
        type: file.type,
        url: URL.createObjectURL(file),
      }));
      setDocuments([...documents, ...newDocs]);
    }
  };

  const handleCameraCapture = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const removeVideo = (index) => {
    setVideos(videos.filter((_, i) => i !== index));
  };

  const removeDocument = (index) => {
    setDocuments(documents.filter((_, i) => i !== index));
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files) {
      const newImages = Array.from(e.dataTransfer.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const triggerVideoUpload = () => {
    videoInputRef.current?.click();
  };

  const triggerDocumentUpload = () => {
    documentInputRef.current?.click();
  };

  const triggerCamera = () => {
    cameraInputRef.current?.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the Terms & Conditions before submitting.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          residentName: '',
          flatNumber: '',
          mobileNumber: '',
          email: '',
          category: '',
          title: '',
          description: '',
          priority: '',
          location: '',
          preferredDate: '',
          preferredTime: '',
          termsAccepted: false,
        });
        setImages([]);
        setVideos([]);
        setDocuments([]);
        setCharacterCount(0);
        setProgress(0);
      }, 3000);
    }, 1500);
  };

  const handleSaveDraft = () => {
    alert('Draft saved successfully!');
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setFormData({
        residentName: '',
        flatNumber: '',
        mobileNumber: '',
        email: '',
        category: '',
        title: '',
        description: '',
        priority: '',
        location: '',
        preferredDate: '',
        preferredTime: '',
        termsAccepted: false,
      });
      setImages([]);
      setVideos([]);
      setDocuments([]);
      setCharacterCount(0);
      setProgress(0);
    }
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

  const slideLeftVariants = {
    hidden: { x: -30, opacity: 0 },
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
    hidden: { x: 30, opacity: 0 },
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

  const getPriorityColor = (priority) => {
    const colors = {
      Low: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      Medium: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      High: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      Emergency: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-300',
    };
    return colors[priority] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
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
          <div className="flex items-center gap-3">
            <Link to="/complaints" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Raise New Complaint
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Submit your complaint and track its progress in real-time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 p-4 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Completeness</span>
            <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
            />
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
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Complaint Submitted Successfully!</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Your complaint ID is #C-1011. We'll keep you updated.</p>
            </div>
          </motion.div>
        )}

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Resident Name */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaUser className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="residentName"
                      value={formData.residentName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('residentName')}
                      onBlur={handleBlur}
                      className={inputClasses('residentName')}
                      required
                    />
                    <label className={labelClasses('residentName')}>
                      Resident Name *
                    </label>
                  </div>

                  {/* Flat Number */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaHome className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="flatNumber"
                      value={formData.flatNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus('flatNumber')}
                      onBlur={handleBlur}
                      className={inputClasses('flatNumber')}
                      required
                    />
                    <label className={labelClasses('flatNumber')}>
                      Flat Number *
                    </label>
                  </div>

                  {/* Mobile Number */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <input
                      type="tel"
                      name="mobileNumber"
                      value={formData.mobileNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus('mobileNumber')}
                      onBlur={handleBlur}
                      className={inputClasses('mobileNumber')}
                      required
                    />
                    <label className={labelClasses('mobileNumber')}>
                      Mobile Number *
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
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

                  {/* Category */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaTag className="text-sm" />
                    </div>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      onFocus={() => handleFocus('category')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'category' || formData.category ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none`}
                      required
                    >
                      <option value="" className="text-slate-400">Select Category</option>
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <label className={`${labelClasses('category')} ${formData.category ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Complaint Category *
                    </label>
                  </div>

                  {/* Priority */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaExclamationTriangle className="text-sm" />
                    </div>
                    <select
                      name="priority"
                      value={formData.priority}
                      onChange={handleChange}
                      onFocus={() => handleFocus('priority')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'priority' || formData.priority ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none`}
                      required
                    >
                      <option value="" className="text-slate-400">Select Priority</option>
                      {priorities.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <label className={`${labelClasses('priority')} ${formData.priority ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Priority *
                    </label>
                  </div>

                  {/* Complaint Title */}
                  <div className="relative sm:col-span-2">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaPen className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      onFocus={() => handleFocus('title')}
                      onBlur={handleBlur}
                      className={inputClasses('title')}
                      required
                    />
                    <label className={labelClasses('title')}>
                      Complaint Title *
                    </label>
                  </div>

                  {/* Description */}
                  <div className="relative sm:col-span-2">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaPen className="text-sm" />
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      onFocus={() => handleFocus('description')}
                      onBlur={handleBlur}
                      rows="4"
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'description' || formData.description ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-transparent peer outline-none resize-none`}
                      required
                    />
                    <label className={`${labelClasses('description')} ${formData.description ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Detailed Description *
                    </label>
                    <div className="flex justify-end mt-1">
                      <span className={`text-xs ${characterCount > 500 ? 'text-red-500' : 'text-slate-400 dark:text-slate-500'}`}>
                        {characterCount}/500
                      </span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="relative sm:col-span-2">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <select
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onFocus={() => handleFocus('location')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'location' || formData.location ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none`}
                      required
                    >
                      <option value="" className="text-slate-400">Select Location</option>
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>{loc}</option>
                      ))}
                    </select>
                    <label className={`${labelClasses('location')} ${formData.location ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Location *
                    </label>
                  </div>

                  {/* Preferred Date */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaCalendarAlt className="text-sm" />
                    </div>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      onFocus={() => handleFocus('preferredDate')}
                      onBlur={handleBlur}
                      className={inputClasses('preferredDate')}
                    />
                    <label className={labelClasses('preferredDate')}>
                      Preferred Visit Date
                    </label>
                  </div>

                  {/* Preferred Time */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaRegClock className="text-sm" />
                    </div>
                    <input
                      type="time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      onFocus={() => handleFocus('preferredTime')}
                      onBlur={handleBlur}
                      className={inputClasses('preferredTime')}
                    />
                    <label className={labelClasses('preferredTime')}>
                      Preferred Visit Time
                    </label>
                  </div>

                  {/* Upload Images */}
                  <div className="relative sm:col-span-2">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={triggerFileUpload}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                          <FaUpload className="text-sm" />
                          Upload Images
                        </button>
                        <button
                          type="button"
                          onClick={triggerCamera}
                          className="px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                        >
                          <FaCamera className="text-sm" />
                          Click Photo
                        </button>
                      </div>

                      {/* Drag & Drop Area */}
                      <div
                        onDragEnter={handleDragEnter}
                        onDragLeave={handleDragLeave}
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        className={`relative border-2 border-dashed rounded-xl p-6 transition-all duration-300 ${
                          isDragging
                            ? 'border-blue-500 bg-blue-500/10'
                            : images.length > 0
                            ? 'border-slate-300 dark:border-slate-600'
                            : 'border-slate-300 dark:border-slate-600'
                        } bg-white/30 dark:bg-slate-800/30`}
                      >
                        <div className="flex flex-col items-center justify-center gap-2">
                          <FaUpload className="text-3xl text-slate-400 dark:text-slate-500" />
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Drag & drop images here or use the buttons above
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-500">
                            PNG, JPG, GIF (Max 5MB each)
                          </p>
                        </div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          multiple
                          onChange={handleImageUpload}
                          className="hidden"
                        />
                        <input
                          type="file"
                          ref={cameraInputRef}
                          accept="image/*"
                          capture="environment"
                          onChange={handleCameraCapture}
                          className="hidden"
                        />
                      </div>

                      {/* Image Previews */}
                      {images.length > 0 && (
                        <div className="grid grid-cols-4 gap-3">
                          {images.map((image, index) => (
                            <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/20 group">
                              <img src={image} alt={`Upload ${index + 1}`} className="w-full h-full object-cover" />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <FaTimes className="text-xs" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Upload Video */}
                  <div className="relative sm:col-span-2">
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={triggerVideoUpload}
                        className="px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2 w-fit"
                      >
                        <FaVideo className="text-sm" />
                        Upload Video
                      </button>
                      <input
                        type="file"
                        ref={videoInputRef}
                        accept="video/*"
                        onChange={handleVideoUpload}
                        className="hidden"
                      />
                      {videos.length > 0 && (
                        <div className="grid grid-cols-2 gap-3">
                          {videos.map((video, index) => (
                            <div key={index} className="relative aspect-video rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/20 group">
                              <video src={video} className="w-full h-full object-cover" controls />
                              <button
                                type="button"
                                onClick={() => removeVideo(index)}
                                className="absolute top-1 right-1 p-1 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
                              >
                                <FaTimes className="text-xs" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Attach Documents */}
                  <div className="relative sm:col-span-2">
                    <div className="flex flex-col gap-3">
                      <button
                        type="button"
                        onClick={triggerDocumentUpload}
                        className="px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2 w-fit"
                      >
                        <FaFile className="text-sm" />
                        Attach Documents
                      </button>
                      <input
                        type="file"
                        ref={documentInputRef}
                        accept=".pdf,.doc,.docx,.txt"
                        multiple
                        onChange={handleDocumentUpload}
                        className="hidden"
                      />
                      {documents.length > 0 && (
                        <div className="space-y-2">
                          {documents.map((doc, index) => (
                            <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                              <div className="flex items-center gap-3">
                                <FaFile className="text-blue-500" />
                                <div>
                                  <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{doc.name}</p>
                                  <p className="text-xs text-slate-500 dark:text-slate-400">{doc.size} KB</p>
                                </div>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeDocument(index)}
                                className="p-1 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors"
                              >
                                <FaTimes className="text-sm" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-0.5 w-4 h-4 accent-blue-500 cursor-pointer"
                      />
                      <label className="text-sm text-slate-600 dark:text-slate-300">
                        I agree to the <span className="text-blue-500 font-medium">Terms & Conditions</span> and confirm that all information provided is accurate.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting || !formData.termsAccepted}
                    className={`flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Submit Complaint
                      </>
                    )}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleSaveDraft}
                    className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaClipboardCheck className="text-sm" />
                    Save as Draft
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaUndo className="text-sm" />
                    Reset
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Complaint Tips */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Complaint Tips
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Be specific about the issue
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Upload clear photos for reference
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Choose appropriate priority level
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Provide accurate location details
                </li>
              </ul>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-red-500" />
                Emergency Contact
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Security</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">+91 98765 43210</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Maintenance</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">+91 87654 32109</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Emergency</span>
                  <span className="font-medium text-red-600 dark:text-red-400">112</span>
                </div>
              </div>
            </motion.div>

            {/* Expected Resolution Time */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaClockIcon className="text-blue-500" />
                Expected Resolution Time
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Low Priority</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">2-3 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Medium Priority</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">1-2 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">High Priority</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">4-8 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Emergency</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Immediate</span>
                </div>
              </div>
            </motion.div>

            {/* Live Preview Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                <FaEye className="text-purple-500" />
                Complaint Preview
              </h3>
              <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                {images.length > 0 && (
                  <div className="mb-2 rounded-lg overflow-hidden">
                    <img src={images[0]} alt="Preview" className="w-full h-24 object-cover" />
                  </div>
                )}
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {formData.title || 'Complaint Title'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formData.category || 'Category'} • {formData.priority || 'Priority'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formData.location || 'Location'} • Flat {formData.flatNumber || 'N/A'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {formData.residentName || 'Resident Name'}
                </p>
                {formData.preferredDate && (
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    📅 {formData.preferredDate} {formData.preferredTime ? `at ${formData.preferredTime}` : ''}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RaiseComplaint;