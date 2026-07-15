import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaTag,
  FaList,
  FaCheckCircle,
  FaRupeeSign,
  FaToggleOn,
  FaToggleOff,
  FaPen,
  FaImage,
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaPaperPlane,
  FaSave,
  FaUndo,
  FaLightbulb,
  FaShieldAlt,
  FaClock,
  FaEye,
  FaPlus,
  FaTimes,
  FaUpload,
  FaCamera,
  FaUser,
  FaBox,
  FaClipboardCheck,
} from 'react-icons/fa';

const SellProduct = () => {
  const [formData, setFormData] = useState({
    productName: '',
    category: '',
    condition: '',
    price: '',
    isNegotiable: false,
    description: '',
    quantity: '',
    housingName: '',
    city: '',
    pickupAddress: '',
    contactNumber: '',
    sellerName: '',
    isAvailable: true,
    termsAccepted: false,
  });

  const [focusedField, setFocusedField] = useState(null);
  const [images, setImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDraft, setIsDraft] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const categories = ['Furniture', 'Electronics', 'Vehicles', 'Home Appliances', 'Books', 'Sports', 'Fashion', 'Others'];
  const conditions = ['New', 'Like New', 'Excellent', 'Good', 'Fair'];
  const cities = ['Kolkata', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'];

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

  const handleCameraCapture = (e) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Please accept the Terms & Conditions before publishing.');
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          productName: '',
          category: '',
          condition: '',
          price: '',
          isNegotiable: false,
          description: '',
          quantity: '',
          housingName: '',
          city: '',
          pickupAddress: '',
          contactNumber: '',
          sellerName: '',
          isAvailable: true,
          termsAccepted: false,
        });
        setImages([]);
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

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset the form?')) {
      setFormData({
        productName: '',
        category: '',
        condition: '',
        price: '',
        isNegotiable: false,
        description: '',
        quantity: '',
        housingName: '',
        city: '',
        pickupAddress: '',
        contactNumber: '',
        sellerName: '',
        isAvailable: true,
        termsAccepted: false,
      });
      setImages([]);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const triggerCamera = () => {
    cameraInputRef.current?.click();
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
            <Link to="/marketplace" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
                Sell Your Product
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                List your item for residents in your housing community.
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
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Product Listed Successfully!</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400">Your product is now live in the marketplace.</p>
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
                {/* Image Upload Section */}
                <div className="mb-6">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-200 block mb-2">
                    Product Images
                  </label>
                  
                  {/* Image Preview Card */}
                  {images.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      {images.map((image, index) => (
                        <div key={index} className="relative aspect-square rounded-xl overflow-hidden border border-white/20 dark:border-slate-700/20 group">
                          <img src={image} alt={`Product ${index + 1}`} className="w-full h-full object-cover" />
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
                    <div className="flex flex-col items-center justify-center gap-3">
                      {images.length === 0 ? (
                        <>
                          <FaUpload className="text-4xl text-slate-400 dark:text-slate-500" />
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            Drag & drop images here or use the buttons below
                          </p>
                        </>
                      ) : (
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          {images.length} image{images.length > 1 ? 's' : ''} uploaded
                        </p>
                      )}
                      
                      <div className="flex items-center gap-3">
                        <button
                          type="button"
                          onClick={triggerFileUpload}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                        >
                          <FaUpload className="text-sm" />
                          Upload Image
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
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Product Name */}
                  <div className="relative sm:col-span-2">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaTag className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="productName"
                      value={formData.productName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('productName')}
                      onBlur={handleBlur}
                      className={inputClasses('productName')}
                      required
                    />
                    <label className={labelClasses('productName')}>
                      Product Name *
                    </label>
                  </div>

                  {/* Category */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaList className="text-sm" />
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

                  {/* Condition */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaCheckCircle className="text-sm" />
                    </div>
                    <select
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      onFocus={() => handleFocus('condition')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'condition' || formData.condition ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none`}
                      required
                    >
                      <option value="" className="text-slate-400">Select Condition</option>
                      {conditions.map((cond) => (
                        <option key={cond} value={cond}>{cond}</option>
                      ))}
                    </select>
                    <label className={`${labelClasses('condition')} ${formData.condition ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      Condition *
                    </label>
                  </div>

                  {/* Price */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaRupeeSign className="text-sm" />
                    </div>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      onFocus={() => handleFocus('price')}
                      onBlur={handleBlur}
                      className={inputClasses('price')}
                      required
                    />
                    <label className={labelClasses('price')}>
                      Price (₹) *
                    </label>
                  </div>

                  {/* Quantity */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaBox className="text-sm" />
                    </div>
                    <input
                      type="number"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      onFocus={() => handleFocus('quantity')}
                      onBlur={handleBlur}
                      className={inputClasses('quantity')}
                      placeholder="1"
                    />
                    <label className={labelClasses('quantity')}>
                      Quantity
                    </label>
                  </div>

                  {/* Negotiable Toggle */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, isNegotiable: !formData.isNegotiable })}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        {formData.isNegotiable ? (
                          <FaToggleOn className="text-2xl text-blue-500" />
                        ) : (
                          <FaToggleOff className="text-2xl text-slate-400" />
                        )}
                        <span className="font-medium">Price Negotiable</span>
                      </button>
                    </div>
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
                      Description *
                    </label>
                  </div>

                  {/* Seller Name */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaUser className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="sellerName"
                      value={formData.sellerName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('sellerName')}
                      onBlur={handleBlur}
                      className={inputClasses('sellerName')}
                      required
                    />
                    <label className={labelClasses('sellerName')}>
                      Seller Name *
                    </label>
                  </div>

                  {/* Contact Number */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaPhoneAlt className="text-sm" />
                    </div>
                    <input
                      type="tel"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      onFocus={() => handleFocus('contactNumber')}
                      onBlur={handleBlur}
                      className={inputClasses('contactNumber')}
                      required
                    />
                    <label className={labelClasses('contactNumber')}>
                      Contact Number *
                    </label>
                  </div>

                  {/* Housing Name */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaBuilding className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="housingName"
                      value={formData.housingName}
                      onChange={handleChange}
                      onFocus={() => handleFocus('housingName')}
                      onBlur={handleBlur}
                      className={inputClasses('housingName')}
                      required
                    />
                    <label className={labelClasses('housingName')}>
                      Housing Name *
                    </label>
                  </div>

                  {/* City */}
                  <div className="relative">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <select
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      onFocus={() => handleFocus('city')}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 pl-10 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border ${focusedField === 'city' || formData.city ? 'border-blue-500' : 'border-slate-200/50 dark:border-slate-700/50'} rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none`}
                      required
                    >
                      <option value="" className="text-slate-400">Select City</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    <label className={`${labelClasses('city')} ${formData.city ? '-top-2.5 text-xs text-blue-500 bg-white/80 dark:bg-slate-800/80 px-2' : ''}`}>
                      City *
                    </label>
                  </div>

                  {/* Pickup Address */}
                  <div className="relative sm:col-span-2">
                    <div className="absolute left-4 top-3.5 text-slate-400 dark:text-slate-500 peer-focus:text-blue-500 transition-colors duration-300">
                      <FaMapMarkerAlt className="text-sm" />
                    </div>
                    <input
                      type="text"
                      name="pickupAddress"
                      value={formData.pickupAddress}
                      onChange={handleChange}
                      onFocus={() => handleFocus('pickupAddress')}
                      onBlur={handleBlur}
                      className={inputClasses('pickupAddress')}
                      required
                    />
                    <label className={labelClasses('pickupAddress')}>
                      Pickup Address *
                    </label>
                  </div>

                  {/* Availability Status Toggle */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-center gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                      <button
                        type="button"
                        onClick={() => setFormData({ ...formData, isAvailable: !formData.isAvailable })}
                        className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
                      >
                        {formData.isAvailable ? (
                          <FaToggleOn className="text-2xl text-emerald-500" />
                        ) : (
                          <FaToggleOff className="text-2xl text-slate-400" />
                        )}
                        <span className="font-medium">
                          {formData.isAvailable ? 'Available' : 'Out of Stock'}
                        </span>
                      </button>
                    </div>
                  </div>

                  {/* Terms & Conditions Checkbox */}
                  <div className="relative sm:col-span-2">
                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleCheckboxChange}
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
                        Publishing...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-sm" />
                        Publish Listing
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
                    <FaSave className="text-sm" />
                    {isDraft ? 'Saving...' : 'Save Draft'}
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
            {/* Selling Tips */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Selling Tips
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Add clear, well-lit photos
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Set a competitive price
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Be honest about condition
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Provide detailed description
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Respond to inquiries quickly
                </li>
              </ul>
            </motion.div>

            {/* Price Suggestions */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaClock className="text-blue-500" />
                Price Suggestions
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Similar Items</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">₹12,000 - ₹20,000</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Market Average</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">₹16,500</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Your Price</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">
                    {formData.price ? `₹${formData.price}` : '₹0'}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Marketplace Rules */}
            <motion.div
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-500" />
                Marketplace Rules
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Only for housing residents
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No prohibited items
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Accurate descriptions required
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Be respectful and honest
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
                Listing Preview
              </h3>
              <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                {images.length > 0 && (
                  <div className="mb-2 rounded-lg overflow-hidden">
                    <img src={images[0]} alt="Preview" className="w-full h-32 object-cover" />
                  </div>
                )}
                <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
                  {formData.productName || 'Product Name'}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {formData.category || 'Category'} • {formData.condition || 'Condition'}
                </p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {formData.price ? `₹${formData.price}` : '₹0'}
                  {formData.isNegotiable && ' (Negotiable)'}
                </p>
                <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                  {formData.housingName || 'Housing'} • {formData.city || 'City'}
                </p>
                {formData.quantity && (
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    Qty: {formData.quantity}
                  </p>
                )}
                <p className="text-xs text-slate-400 dark:text-slate-500">
                  {formData.isAvailable ? '✅ Available' : '❌ Out of Stock'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SellProduct;