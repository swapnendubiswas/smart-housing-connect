import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaHeart,
  FaRegHeart,
  FaSearch,
  FaFilter,
  FaSort,
  FaEye,
  FaPhoneAlt,
  FaShare,
  FaTrash,
  FaStore,
  FaTag,
  FaUser,
  FaMapMarkerAlt,
  FaClock,
  FaShoppingCart,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaChevronLeft,
  FaChevronRight,
  FaBoxOpen,
  FaChartLine,
  FaFire,
  FaArrowRight,
  FaRupeeSign,
} from 'react-icons/fa';

const Wishlist = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Newest');
  const [viewMode, setViewMode] = useState('grid');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const wishlistItems = [
    { id: 1, name: 'Premium Leather Sofa', price: '₹18,000', originalPrice: '₹25,000', discount: '28%', category: 'Furniture', seller: 'Priya Sharma', housing: 'Greenwood Towers', time: '2 hours ago', availability: 'Available', rating: 4.5, condition: 'Like New', dateSaved: '2024-01-20', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=300&fit=crop' },
    { id: 2, name: 'Gaming Laptop', price: '₹42,000', originalPrice: '₹55,000', discount: '24%', category: 'Electronics', seller: 'Rahul Verma', housing: 'Lake Vista', time: '4 hours ago', availability: 'Available', rating: 5, condition: 'Excellent', dateSaved: '2024-01-19', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=400&h=300&fit=crop' },
    { id: 3, name: 'Smart TV 55"', price: '₹28,000', originalPrice: '₹38,000', discount: '26%', category: 'Home Appliances', seller: 'Sneha Patel', housing: 'Riverside', time: '8 hours ago', availability: 'Available', rating: 4.5, condition: 'Like New', dateSaved: '2024-01-18', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&q=80' },
    { id: 4, name: 'Mountain Bike', price: '₹8,000', originalPrice: '₹12,000', discount: '33%', category: 'Sports', seller: 'Vikram Singh', housing: 'Citylight', time: '12 hours ago', availability: 'Sold', rating: 4, condition: 'Good', dateSaved: '2024-01-17', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?w=400&h=300&fit=crop' },
    { id: 5, name: '3BHK Flat', price: '₹85 Lakhs', originalPrice: '₹95 Lakhs', discount: '11%', category: 'Others', seller: 'Deepak Kumar', housing: 'Greenwood Towers', time: '1 day ago', availability: 'Available', rating: 5, condition: 'Ready to Move', dateSaved: '2024-01-16', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=400&h=300&fit=crop' },
    { id: 6, name: 'Car Parking Slot', price: '₹2,50,000', originalPrice: '₹3,00,000', discount: '17%', category: 'Vehicles', seller: 'Meera Iyer', housing: 'Lake Vista', time: '2 days ago', availability: 'Available', rating: 4, condition: 'Available', dateSaved: '2024-01-15', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&q=80' },
    { id: 7, name: 'Study Table', price: '₹5,500', originalPrice: '₹7,500', discount: '27%', category: 'Furniture', seller: 'Nina Gupta', housing: 'Riverside', time: '3 days ago', availability: 'Available', rating: 4, condition: 'Good', dateSaved: '2024-01-14', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop&q=80' },
    { id: 8, name: 'Air Conditioner', price: '₹22,000', originalPrice: '₹30,000', discount: '27%', category: 'Home Appliances', seller: 'Ravi Sharma', housing: 'Park Residency', time: '3 days ago', availability: 'Sold', rating: 4.5, condition: 'Excellent', dateSaved: '2024-01-13', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop&q=80' },
    { id: 9, name: 'Book Collection', price: '₹2,500', originalPrice: '₹4,000', discount: '38%', category: 'Books', seller: 'Vikram Singh', housing: 'Citylight', time: '4 days ago', availability: 'Available', rating: 4, condition: 'Good', dateSaved: '2024-01-12', image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?w=400&h=300&fit=crop' },
    { id: 10, name: 'Coffee Table', price: '₹4,200', originalPrice: '₹6,000', discount: '30%', category: 'Furniture', seller: 'Priya Sharma', housing: 'Lotus Apartments', time: '5 days ago', availability: 'Available', rating: 4.5, condition: 'Like New', dateSaved: '2024-01-11', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad6?w=400&h=300&fit=crop&q=80' },
  ];

  const stats = [
    { label: 'Saved Products', value: '10', icon: <FaHeart />, gradient: 'from-rose-500 to-pink-400' },
    { label: 'Available Products', value: '7', icon: <FaBoxOpen />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Price Drops', value: '3', icon: <FaChartLine />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Favorite Categories', value: '5', icon: <FaFire />, gradient: 'from-amber-500 to-orange-400' },
  ];

  const categories = ['All', 'Furniture', 'Electronics', 'Home Appliances', 'Vehicles', 'Books', 'Sports', 'Others'];
  const sortOptions = ['Newest', 'Lowest Price', 'Highest Price'];

  const recommendedProducts = [
    { id: 1, name: 'Wooden Dining Table', price: '₹12,000', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad6?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.3 },
    { id: 2, name: 'Queen Size Bed', price: '₹22,000', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.7 },
    { id: 3, name: 'Bookshelf', price: '₹8,500', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop&q=80', category: 'Furniture', rating: 4.2 },
    { id: 4, name: 'Smart Watch', price: '₹15,000', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=300&fit=crop&q=80', category: 'Electronics', rating: 4.6 },
  ];

  const [wishlist, setWishlist] = useState(wishlistItems.map(item => item.id));

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(itemId => itemId !== id));
  };

  const filteredItems = wishlistItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory && wishlist.includes(item.id);
  });

  // Sort items
  const sortedItems = [...filteredItems].sort((a, b) => {
    switch (sortBy) {
      case 'Newest':
        return new Date(b.dateSaved) - new Date(a.dateSaved);
      case 'Lowest Price':
        return parseFloat(a.price.replace(/[₹,]/g, '')) - parseFloat(b.price.replace(/[₹,]/g, ''));
      case 'Highest Price':
        return parseFloat(b.price.replace(/[₹,]/g, '')) - parseFloat(a.price.replace(/[₹,]/g, ''));
      default:
        return 0;
    }
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  // Calculate total estimated value
  const totalValue = wishlistItems
    .filter(item => wishlist.includes(item.id))
    .reduce((sum, item) => {
      const price = parseFloat(item.price.replace(/[₹,]/g, ''));
      return sum + (isNaN(price) ? 0 : price);
    }, 0);

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-xs" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs" />);
    }
    return stars;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=300&fit=crop";
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 p-4 sm:p-6 lg:p-8">
      {/* Background decorative elements */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
              My Wishlist
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Products you've saved for later.
            </p>
          </div>
          <Link
            to="/marketplace"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FaShoppingCart className="text-sm" />
            Explore Marketplace
          </Link>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-1">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-r ${stat.gradient} text-white text-sm shadow-lg`}>
                    {stat.icon}
                  </div>
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

        {/* Wishlist Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-rose-500/10 to-pink-500/10 dark:from-rose-500/5 dark:to-pink-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-rose-500 to-pink-400 flex items-center justify-center text-white text-sm shadow-lg">
                <FaHeart />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total Saved Products</p>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-100">{wishlist.length}</p>
              </div>
            </div>
          </div>
          <div className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 dark:from-blue-500/5 dark:to-cyan-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white text-sm shadow-lg">
                <FaRupeeSign />
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">Total Estimated Value</p>
                <p className="text-xl font-bold text-slate-800 dark:text-slate-100">₹{totalValue.toLocaleString()}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-6"
        >
          <div className="relative flex-1 w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder="Search your wishlist..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none"
            >
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
            <div className="flex rounded-xl overflow-hidden border border-slate-200/50 dark:border-slate-700/50">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2.5 transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50'
                }`}
              >
                <FaStore className="text-sm" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2.5 transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                    : 'bg-white/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50'
                }`}
              >
                <FaHeart className="text-sm" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        {sortedItems.length > 0 ? (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-rose-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-rose-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  {/* Product Image */}
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                    <div className="absolute top-3 left-3 flex gap-1">
                      {item.discount && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/90 text-white backdrop-blur-sm">
                          {item.discount} OFF
                        </span>
                      )}
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200">
                        {item.category}
                      </span>
                    </div>
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                    >
                      <FaHeart className="text-red-500 text-sm" />
                    </button>
                    {item.availability === 'Sold' && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="px-4 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 text-sm font-bold text-slate-800 dark:text-slate-200">
                          Sold
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-1">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 line-clamp-1">
                        {item.name}
                      </h4>
                    </div>

                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(item.rating)}
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        ({item.rating})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaTag className="text-[10px]" />
                      <span>{item.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <FaClock className="text-[10px]" />
                      <span>{item.time}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {item.price}
                      </span>
                      {item.originalPrice && (
                        <span className="text-xs text-slate-400 dark:text-slate-500 line-through">
                          {item.originalPrice}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaUser className="text-[10px]" />
                      <span>{item.seller}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <FaMapMarkerAlt className="text-[10px]" />
                      <span>{item.housing}</span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {item.condition}
                      </span>
                      <span className="text-slate-400 dark:text-slate-500">•</span>
                      <span className="text-slate-400 dark:text-slate-500">
                        Saved: {item.dateSaved}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Link
                        to="/marketplace/product"
                        className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1"
                      >
                        <FaEye className="text-[10px]" />
                        View Details
                      </Link>
                      <Link
                        to="/community/chat"
                        className="py-1.5 px-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 hover:scale-105"
                      >
                        <FaPhoneAlt className="text-[10px]" />
                      </Link>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                        <FaShare className="text-[10px]" />
                      </button>
                      <button
                        onClick={() => removeFromWishlist(item.id)}
                        className="py-1.5 px-2.5 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-105"
                      >
                        <FaTrash className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, sortedItems.length)} of {sortedItems.length}
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronLeft className="text-xs" />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-8 h-8 rounded-xl text-sm font-medium transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                          : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 text-slate-600 dark:text-slate-300'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <FaChevronRight className="text-xs" />
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          // Empty State
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-12 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
          >
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-rose-500/20 to-pink-500/20 flex items-center justify-center mb-6">
                <FaHeart className="text-4xl text-rose-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                Your Wishlist is Empty
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md mb-6">
                Start exploring the marketplace and save your favorite products for later.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center gap-2"
              >
                <FaStore className="text-sm" />
                Explore Marketplace
                <FaArrowRight className="text-sm" />
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Recommended Products */}
        {sortedItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Recommended for You
              </h3>
              <Link to="/marketplace" className="text-sm text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {recommendedProducts.map((product) => (
                <Link
                  key={product.id}
                  to="/marketplace/product"
                  className="group backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                  </div>
                  <div className="p-3">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 line-clamp-1">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-1 mb-1">
                      {renderStars(product.rating)}
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{product.category}</p>
                    <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">{product.price}</p>
                    <button className="mt-2 w-full py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1">
                      <FaHeart className="text-[10px]" />
                      Add to Wishlist
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;