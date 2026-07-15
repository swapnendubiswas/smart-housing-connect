import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShare,
  FaHeart,
  FaRegHeart,
  FaUser,
  FaMapMarkerAlt,
  FaClock,
  FaTag,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaComment,
  FaShoppingCart,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaExpand,
  FaBox,
  FaCalendarAlt,
  FaInfoCircle,
  FaFileAlt,
  FaHome,
} from 'react-icons/fa';

const ProductDetails = () => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const product = {
    id: 1,
    name: 'Premium Leather Sofa Set',
    category: 'Furniture',
    price: '₹18,000',
    condition: 'Like New',
    description: 'This premium leather sofa set is in excellent condition with minimal use. It features high-quality genuine leather upholstery, sturdy wooden frame, and comfortable cushioning. The sofa set includes a 3-seater sofa, 2-seater sofa, and a single-seater armchair. Perfect for modern living rooms. The leather has been regularly maintained and conditioned. Comes with complementary throw pillows.',
    seller: 'Priya Sharma',
    housing: 'Greenwood Towers',
    city: 'Kolkata',
    postedDate: '2 hours ago',
    availability: 'Available',
    rating: 4.5,
    reviews: 12,
    memberSince: '2023',
    isVerified: true,
    specifications: {
      material: 'Genuine Leather',
      color: 'Dark Brown',
      dimensions: '3-Seater: 80" x 35" x 33"',
      weight: '85 kg',
      warranty: '6 Months',
    },
    reasonForSelling: 'Upgrading to a larger sectional sofa for our new home. This sofa is in perfect condition and has been well maintained with regular leather conditioning.',
    pickupLocation: 'Greenwood Towers, Block B, Flat 205, Kolkata - 700001',
    images: [
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/276575/pexels-photo-276575.jpeg?w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=800&h=600&fit=crop',
      'https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?w=800&h=600&fit=crop',
    ],
  };

  const similarProducts = [
    { id: 1, name: 'Wooden Dining Table', price: '₹12,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad6?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.3 },
    { id: 2, name: 'Queen Size Bed', price: '₹22,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.7 },
    { id: 3, name: 'Bookshelf', price: '₹8,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.2 },
    { id: 4, name: 'Coffee Table', price: '₹4,200', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad6?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.5 },
  ];

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

  const handleImageError = (e) => {
    e.target.src = "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=800&h=600&fit=crop";
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
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
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <Link to="/marketplace" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Product Details
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaShare />
            </button>
            <Link
              to="/marketplace/wishlist"
              onClick={(e) => {
                e.preventDefault();
                setIsWishlisted(!isWishlisted);
              }}
              className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300"
            >
              {isWishlisted ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-slate-600 dark:text-slate-300" />
              )}
            </Link>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section - Images */}
          <motion.div
            variants={slideLeftVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {/* Main Image Gallery */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
            >
              <div className="relative aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={handleImageError}
                />
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <FaChevronLeft className="text-sm text-slate-700 dark:text-slate-200" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
                    >
                      <FaChevronRight className="text-sm text-slate-700 dark:text-slate-200" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {product.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          className={`h-1.5 rounded-full transition-all duration-300 ${
                            idx === selectedImage
                              ? 'w-6 bg-white'
                              : 'w-1.5 bg-white/50 hover:bg-white/70'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
                <button
                  onClick={() => setIsZoomed(!isZoomed)}
                  className="absolute bottom-4 right-4 p-2.5 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm border border-white/20 dark:border-slate-700/20 shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <FaExpand className="text-slate-600 dark:text-slate-300 text-sm" />
                </button>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-500/90 text-white backdrop-blur-sm">
                    {product.condition}
                  </span>
                </div>
              </div>

              {/* Zoom Modal */}
              {isZoomed && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                  onClick={() => setIsZoomed(false)}
                >
                  <div className="relative max-w-5xl w-full">
                    <img
                      src={product.images[selectedImage]}
                      alt={product.name}
                      className="w-full h-auto max-h-[90vh] object-contain"
                      onError={handleImageError}
                    />
                    <button
                      onClick={() => setIsZoomed(false)}
                      className="absolute top-4 right-4 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
                    >
                      <FaExpand className="text-2xl" />
                    </button>
                  </div>
                </motion.div>
              )}
            </motion.div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-5 gap-3">
              {product.images.map((image, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? 'border-blue-500 shadow-lg shadow-blue-500/25'
                      : 'border-white/30 dark:border-slate-700/30 hover:border-blue-400/50'
                  }`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-blue-500/10" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right Section - Details */}
          <motion.div
            variants={slideRightVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
          >
            {/* Product Info Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                    {product.name}
                  </h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                      {product.category}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      {product.postedDate}
                    </span>
                  </div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {product.price}
                </span>
              </div>

              {/* Product Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-300">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Description */}
              <div className="mb-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Product Specifications */}
              <div className="mb-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                  <FaInfoCircle className="text-blue-500" />
                  Product Specifications
                </h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50 last:border-0">
                      <span className="text-slate-500 dark:text-slate-400 capitalize">{key}</span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reason for Selling */}
              <div className="mb-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <FaFileAlt className="text-purple-500" />
                  Reason for Selling
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {product.reasonForSelling}
                </p>
              </div>

              {/* Pickup Location */}
              <div className="mb-4 p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-emerald-500" />
                  Pickup Location
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {product.pickupLocation}
                </p>
              </div>

              {/* Seller Information Card */}
              <div className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25">
                  {product.seller.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                      {product.seller}
                    </p>
                    {product.isVerified && (
                      <FaCheckCircle className="text-blue-500 text-sm" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {product.housing}, {product.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-[10px]" />
                      Member since {product.memberSince}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-0.5">
                    {renderStars(product.rating)}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400 text-xs" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                    {product.rating}
                  </span>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-2 mb-4 p-2 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">
                  {product.availability}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <FaPhoneAlt className="text-sm" />
                  Call Seller
                </motion.button>
                <Link
                  to="/community/chat"
                  className="py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaComment className="text-sm" />
                  Chat with Seller
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-3">
                <Link
                  to="/marketplace/wishlist"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsWishlisted(!isWishlisted);
                  }}
                  className={`py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    isWishlisted
                      ? 'bg-rose-50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800/30 text-rose-600 dark:text-rose-400'
                      : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 hover:bg-white/70 dark:hover:bg-slate-700/50'
                  }`}
                >
                  {isWishlisted ? (
                    <>
                      <FaHeart className="text-sm" />
                      Wishlisted
                    </>
                  ) : (
                    <>
                      <FaRegHeart className="text-sm" />
                      Add to Wishlist
                    </>
                  )}
                </Link>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  className="py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  <FaShoppingCart className="text-sm" />
                  Buy Now
                </motion.button>
              </div>

              {/* Sell Similar Button */}
              <div className="mt-3">
                <Link
                  to="/marketplace/sell"
                  className="w-full py-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaTag className="text-sm" />
                  Sell Similar Product
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Similar Products Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
              Similar Products
            </h3>
            <Link to="/marketplace" className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {similarProducts.map((product) => (
              <Link
                key={product.id}
                to="/marketplace/product"
                className="group backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={handleImageError}
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-1 mb-1">
                    {renderStars(product.rating)}
                    <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400">
                    {product.price}
                  </p>
                  <button className="mt-2 w-full py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1">
                    <FaEye className="text-[10px]" />
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;