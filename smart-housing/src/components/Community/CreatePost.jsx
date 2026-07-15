import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaUser,
  FaHome,
  FaPen,
  FaTag,
  FaImage,
  FaVideo,
  FaSmile,
  FaMapMarkerAlt,
  FaGlobe,
  FaLock,
  FaUsers,
  FaPaperPlane,
  FaSave,
  FaTrash,
  FaLightbulb,
  FaShieldAlt,
  FaRocket,
  FaEye,
  FaCheckCircle,
  FaTimes,
  FaPlus,
  FaUpload,
  FaCalendarAlt,
  FaPoll,
  FaRegCalendarAlt,
  FaCamera,
} from 'react-icons/fa';

const CreatePost = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: '',
    location: '',
    visibility: 'public',
    schedulePost: false,
    scheduleDate: '',
    scheduleTime: '',
  });

  const [focusedField, setFocusedField] = useState(null);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [pollOptions, setPollOptions] = useState(['', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const fileInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const categories = [
    'Announcement',
    'Festival',
    'Lost & Found',
    'Blood Donation',
    'Event',
    'Information',
    'Help & Support',
    'General',
  ];

  const visibilityOptions = [
    { value: 'public', label: 'Public', icon: <FaGlobe /> },
    { value: 'society', label: 'Society Only', icon: <FaUsers /> },
    { value: 'admin', label: 'Admin Only', icon: <FaLock /> },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.checked,
    });
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

  const addPollOption = () => {
    setPollOptions([...pollOptions, '']);
  };

  const removePollOption = (index) => {
    if (pollOptions.length > 2) {
      setPollOptions(pollOptions.filter((_, i) => i !== index));
    }
  };

  const updatePollOption = (index, value) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
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

  const triggerCamera = () => {
    cameraInputRef.current?.click();
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
          title: '',
          description: '',
          category: '',
          tags: '',
          location: '',
          visibility: 'public',
          schedulePost: false,
          scheduleDate: '',
          scheduleTime: '',
        });
        setImages([]);
        setVideos([]);
        setPollOptions(['', '']);
      }, 3000);
    }, 1500);
  };

  const handleSaveDraft = () => {
    setIsDraft(true);
    setTimeout(() => {
      setIsDraft(false);
      alert('Draft saved successfully!');
    }, 500);
  };

  const handleDiscard = () => {
    if (window.confirm('Are you sure you want to discard this post?')) {
      setFormData({
        title: '',
        description: '',
        category: '',
        tags: '',
        location: '',
        visibility: 'public',
        schedulePost: false,
        scheduleDate: '',
        scheduleTime: '',
      });
      setImages([]);
      setVideos([]);
      setPollOptions(['', '']);
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
            <Link to="/community" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Create Community Post
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Share updates, announcements and moments with your housing community.
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
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Post Published Successfully!</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Your post is now visible to the community.</p>
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
              {/* User Profile Header */}
              <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                  S
                </div>
                <div>
                  <p className="font-semibold text-slate-800 dark:text-slate-100">Swapnendu</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <FaHome className="text-[10px]" />
                    Flat B-205 • Greenwood Towers, Kolkata
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="space-y-5">
                  {/* Post Title */}
                  <div className="relative">
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
                      Post Title *
                    </label>
                  </div>

                  {/* Description */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaPen className="text-sm" />
                    </div>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      onFocus={() => handleFocus('description')}
                      onBlur={handleBlur}
                      rows="6"
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'description' || formData.description ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-transparent peer outline-none resize-none`}
                      required
                    />
                    <label className={`${labelClasses('description')} ${formData.description ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Description *
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
                      Category *
                    </label>
                  </div>

                  {/* Tags */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaTag className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="tags"
                      value={formData.tags}
                      onChange={handleChange}
                      onFocus={() => handleFocus('tags')}
                      onBlur={handleBlur}
                      className={inputClasses('tags')}
                      placeholder="e.g., diwali, celebration, community"
                    />
                    <label className={labelClasses('tags')}>
                      Tags (comma separated)
                    </label>
                  </div>

                  {/* Media Upload */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
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
                      <button
                        type="button"
                        onClick={triggerVideoUpload}
                        className="px-4 py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                      >
                        <FaVideo className="text-sm" />
                        Upload Video
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
                          : images.length > 0 || videos.length > 0
                          ? 'border-slate-300 dark:border-slate-600'
                          : 'border-slate-300 dark:border-slate-600'
                      } bg-white/30 dark:bg-slate-800/30`}
                    >
                      <div className="flex flex-col items-center justify-center gap-2">
                        <FaUpload className="text-3xl text-slate-400 dark:text-slate-500" />
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Drag & drop images or videos here
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500">
                          PNG, JPG, GIF, MP4, WebM (Max 50MB)
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
                        ref={videoInputRef}
                        accept="video/*"
                        onChange={handleVideoUpload}
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

                    {/* Video Previews */}
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

                  {/* Poll Creator */}
                  <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                      <FaPoll className="text-purple-500" />
                      Add Poll Options
                    </h4>
                    {pollOptions.map((option, index) => (
                      <div key={index} className="flex items-center gap-2 mb-2">
                        <input
                          type="text"
                          value={option}
                          onChange={(e) => updatePollOption(index, e.target.value)}
                          placeholder={`Option ${index + 1}`}
                          className="flex-1 px-4 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none text-sm"
                        />
                        {pollOptions.length > 2 && (
                          <button
                            type="button"
                            onClick={() => removePollOption(index)}
                            className="p-2 rounded-xl hover:bg-red-100 dark:hover:bg-red-900/30 text-red-500 transition-colors"
                          >
                            <FaTimes className="text-sm" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={addPollOption}
                      className="mt-2 px-4 py-1.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2"
                    >
                      <FaPlus className="text-sm" />
                      Add Option
                    </button>
                  </div>

                  {/* Location */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      onFocus={() => handleFocus('location')}
                      onBlur={handleBlur}
                      className={inputClasses('location')}
                    />
                    <label className={labelClasses('location')}>
                      Location (Optional)
                    </label>
                  </div>

                  {/* Emoji & Privacy */}
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <button type="button" className="p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors">
                      <FaSmile className="text-lg" />
                    </button>

                    <div className="flex items-center gap-2">
                      {visibilityOptions.map((option) => (
                        <label key={option.value} className="flex items-center gap-1.5 text-sm">
                          <input
                            type="radio"
                            name="visibility"
                            value={option.value}
                            checked={formData.visibility === option.value}
                            onChange={handleChange}
                            className="w-4 h-4 accent-blue-500"
                          />
                          <span className="text-slate-600 dark:text-slate-300 flex items-center gap-1">
                            {option.icon}
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Schedule Post Toggle */}
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <input
                      type="checkbox"
                      name="schedulePost"
                      checked={formData.schedulePost}
                      onChange={handleCheckboxChange}
                      className="w-4 h-4 accent-blue-500 cursor-pointer"
                    />
                    <label className="text-sm text-slate-600 dark:text-slate-300 flex items-center gap-2">
                      <FaRegCalendarAlt className="text-blue-500" />
                      Schedule Post
                    </label>
                    {formData.schedulePost && (
                      <div className="flex items-center gap-2 ml-auto">
                        <input
                          type="date"
                          name="scheduleDate"
                          value={formData.scheduleDate}
                          onChange={handleChange}
                          className="px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        />
                        <input
                          type="time"
                          name="scheduleTime"
                          value={formData.scheduleTime}
                          onChange={handleChange}
                          className="px-3 py-1.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-lg text-sm text-slate-700 dark:text-slate-200 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6 pt-6 border-t border-slate-200/50 dark:border-slate-700/50">
                  <Link
                    to="/community"
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane className="text-sm" />
                    Publish Post
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleSaveDraft}
                    className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaSave className="text-sm" />
                    {isDraft ? 'Saving...' : 'Save Draft'}
                  </motion.button>
                  <Link
                    to="/community/post"
                    className="px-6 py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaEye className="text-sm" />
                    Preview
                  </Link>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="button"
                    onClick={handleDiscard}
                    className="px-6 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaTrash className="text-sm" />
                    Discard
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
            {/* Posting Guidelines */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Posting Guidelines
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Be respectful and kind
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Share relevant information
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Use appropriate categories
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Keep it community-focused
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  No spam or promotions
                </li>
              </ul>
            </motion.div>

            {/* Community Rules */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-500" />
                Community Rules
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No offensive content
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Respect privacy
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No hate speech
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Keep it constructive
                </li>
              </ul>
            </motion.div>

            {/* Tips for Better Engagement */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaRocket className="text-purple-500" />
                Tips for Better Engagement
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-purple-500 text-xs mt-1">•</span>
                  Add a captivating title
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-purple-500 text-xs mt-1">•</span>
                  Use high-quality images
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-purple-500 text-xs mt-1">•</span>
                  Keep it concise and clear
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-purple-500 text-xs mt-1">•</span>
                  Ask questions to engage
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-purple-500 text-xs mt-1">•</span>
                  Use relevant tags
                </li>
              </ul>
            </motion.div>

            {/* Preview Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                <FaEye className="text-purple-500" />
                Post Preview
              </h3>
              <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {formData.title || 'Post Title'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {formData.category || 'Category'} • {formData.visibility || 'Public'}
                </p>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2">
                  {formData.description || 'Your post description will appear here...'}
                </p>
                {images.length > 0 && (
                  <div className="mt-2 flex gap-1">
                    {images.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="w-12 h-12 rounded-lg overflow-hidden">
                        <img src={img} alt="Preview" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    {images.length > 3 && (
                      <div className="w-12 h-12 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs text-slate-500">
                        +{images.length - 3}
                      </div>
                    )}
                  </div>
                )}
                {formData.tags && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {formData.tags.split(',').slice(0, 3).map((tag, idx) => (
                      <span key={idx} className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                        #{tag.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {formData.schedulePost && formData.scheduleDate && (
                  <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 flex items-center gap-1">
                    <FaCalendarAlt className="text-[10px]" />
                    Scheduled: {formData.scheduleDate} {formData.scheduleTime}
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

export default CreatePost;