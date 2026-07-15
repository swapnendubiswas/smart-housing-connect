import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaFilter,
  FaSort,
  FaHeart,
  FaRegHeart,
  FaEye,
  FaStore,
  FaTag,
  FaUser,
  FaMapMarkerAlt,
  FaClock,
  FaPlus,
  FaList,
  FaStar,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaCouch,
  FaLaptop,
  FaCar,
  FaTv,
  FaBook,
  FaDumbbell,
  FaTshirt,
  FaEllipsisH,
  FaChartBar,
  FaBoxOpen,
  FaUsers,
  FaGift,
} from 'react-icons/fa';

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');
  const [likedItems, setLikedItems] = useState([]);

  const categories = [
    { name: 'All', icon: <FaStore /> },
    { name: 'Furniture', icon: <FaCouch /> },
    { name: 'Electronics', icon: <FaLaptop /> },
    { name: 'Vehicles', icon: <FaCar /> },
    { name: 'Home Appliances', icon: <FaTv /> },
    { name: 'Books', icon: <FaBook /> },
    { name: 'Sports', icon: <FaDumbbell /> },
    { name: 'Fashion', icon: <FaTshirt /> },
    { name: 'Others', icon: <FaEllipsisH /> },
  ];

  // All images are verified working URLs
  const products = [
    { id: 1, name: 'Premium Leather Sofa', price: '₹18,000', category: 'Furniture', seller: 'Priya Sharma', housing: 'Greenwood Towers', condition: 'Like New', time: '2 hours ago', image: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=300&fit=crop', rating: 4.5 },
    { id: 2, name: 'Gaming Laptop', price: '₹42,000', category: 'Electronics', seller: 'Rahul Verma', housing: 'Lake Vista', condition: 'Excellent', time: '4 hours ago', image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?w=400&h=300&fit=crop', rating: 5 },
    { id: 3, name: 'Mountain Bike', price: '₹8,000', category: 'Vehicles', seller: 'Amit Kumar', housing: 'Park Residency', condition: 'Good', time: '6 hours ago', image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?w=400&h=300&fit=crop', rating: 4 },
    { id: 4, name: 'Smart TV 55"', price: '₹28,000', category: 'Home Appliances', seller: 'Sneha Patel', housing: 'Riverside', condition: 'Like New', time: '8 hours ago', image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&q=80', rating: 4.5 },
    { id: 5, name: 'Book Collection', price: '₹2,500', category: 'Books', seller: 'Vikram Singh', housing: 'Citylight', condition: 'Good', time: '12 hours ago', image: 'https://images.pexels.com/photos/256450/pexels-photo-256450.jpeg?w=400&h=300&fit=crop', rating: 4 },
    { id: 6, name: 'Dumbbell Set', price: '₹3,500', category: 'Sports', seller: 'Ananya Reddy', housing: 'Lotus Apartments', condition: 'Like New', time: '1 day ago', image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?w=400&h=300&fit=crop', rating: 4.5 },
    { id: 7, name: '3BHK Flat', price: '₹85 Lakhs', category: 'Others', seller: 'Deepak Kumar', housing: 'Greenwood Towers', condition: 'Ready to Move', time: '2 days ago', image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=400&h=300&fit=crop', rating: 5 },
    { id: 8, name: 'Car Parking Slot', price: '₹2,50,000', category: 'Vehicles', seller: 'Meera Iyer', housing: 'Lake Vista', condition: 'Available', time: '2 days ago', image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&q=80', rating: 4 },
    { id: 9, name: 'Air Conditioner', price: '₹22,000', category: 'Home Appliances', seller: 'Ravi Sharma', housing: 'Park Residency', condition: 'Excellent', time: '3 days ago', image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=300&fit=crop&q=80', rating: 4.5 },
    { id: 10, name: 'Study Table', price: '₹5,500', category: 'Furniture', seller: 'Nina Gupta', housing: 'Riverside', condition: 'Good', time: '3 days ago', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400&h=300&fit=crop&q=80', rating: 4 },
    { id: 11, name: 'Bicycle', price: '₹6,500', category: 'Sports', seller: 'Rajesh Kumar', housing: 'Citylight', condition: 'Good', time: '4 days ago', image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=400&h=300&fit=crop&q=80', rating: 4 },
    { id: 12, name: 'Coffee Table', price: '₹4,200', category: 'Furniture', seller: 'Priya Sharma', housing: 'Lotus Apartments', condition: 'Like New', time: '5 days ago', image: 'https://images.unsplash.com/photo-1532372576444-dda954194ad6?w=400&h=300&fit=crop&q=80', rating: 4.5 },
  ];

  const stats = [
    { label: 'Total Products', value: '48', icon: <FaBoxOpen />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Products Sold', value: '28', icon: <FaChartBar />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Active Sellers', value: '36', icon: <FaUsers />, gradient: 'from-purple-500 to-pink-400' },
  ];

  const toggleLike = (id) => {
    if (likedItems.includes(id)) {
      setLikedItems(likedItems.filter(item => item !== id));
    } else {
      setLikedItems([...likedItems, id]);
    }
  };

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          product.seller.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 text-xs" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-400 text-xs" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs" />);
    }
    return stars;
  };

  const handleImageError = (e) => {
    e.target.src = "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?w=400&h=300&fit=crop";
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
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
              Marketplace
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Buy and sell products within your housing community.
            </p>
          </div>
          <Link
            to="/marketplace/sell"
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            <FaPlus className="text-sm" />
            Sell Product
          </Link>
        </motion.div>

        {/* Search Bar */}
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
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
            />
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaFilter />
            </button>
            <button className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaSort />
            </button>
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
                <FaList className="text-sm" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Category Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 gap-3 mb-8"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(category.name)}
              className={`p-3 rounded-xl backdrop-blur-xl border transition-all duration-300 flex flex-col items-center gap-1 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 shadow-lg shadow-blue-500/10'
                  : 'bg-white/50 dark:bg-slate-900/50 border-white/30 dark:border-slate-700/30 hover:bg-white/70 dark:hover:bg-slate-800/50 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50'
              }`}
            >
              <span className={`text-lg ${selectedCategory === category.name ? 'text-blue-500' : 'text-slate-600 dark:text-slate-300'}`}>
                {category.icon}
              </span>
              <span className={`text-xs font-medium ${selectedCategory === category.name ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-300'}`}>
                {category.name}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  {/* Product Image - Clickable */}
                  <Link to="/marketplace/product" className="block relative h-48 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 border border-white/20 dark:border-slate-700/20">
                        {product.category}
                      </span>
                    </div>
                    <Link
                      to="/marketplace/wishlist"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleLike(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:scale-110 transition-all duration-300"
                    >
                      {likedItems.includes(product.id) ? (
                        <FaHeart className="text-red-500 text-sm" />
                      ) : (
                        <FaRegHeart className="text-slate-600 dark:text-slate-300 text-sm" />
                      )}
                    </Link>
                    {product.condition === 'Like New' && (
                      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-full bg-emerald-500/90 text-white text-xs font-medium">
                        {product.condition}
                      </div>
                    )}
                  </Link>

                  {/* Product Info */}
                  <div className="p-4">
                    <Link to="/marketplace/product" className="block">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        {product.name}
                      </h4>
                    </Link>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                        ({product.rating})
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400">
                        {product.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <FaUser className="text-[10px]" />
                      <span>{product.seller}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <FaMapMarkerAlt className="text-[10px]" />
                      <span>{product.housing}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        to="/marketplace/product"
                        className="flex-1 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                      >
                        <FaEye className="text-xs" />
                        View Details
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <FaStore className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400">No products found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Marketplace Stats</h3>
              <div className="space-y-3">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-r ${stat.gradient} text-white text-sm shadow-lg`}>
                      {stat.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</p>
                      <p className="text-sm font-bold text-slate-700 dark:text-slate-200">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/marketplace/sell"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaPlus className="text-sm" />
                  Sell Product
                </Link>
                <Link
                  to="/marketplace/my-listings"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaList className="text-sm" />
                  My Listings
                </Link>
                <Link
                  to="/marketplace/wishlist"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-500 to-red-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaHeart className="text-sm" />
                  Wishlist
                </Link>
              </div>
            </motion.div>

            {/* Featured Sellers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Top Sellers</h3>
              <div className="space-y-3">
                {[
                  { name: 'Priya Sharma', items: '12', rating: '4.9' },
                  { name: 'Rahul Verma', items: '8', rating: '4.8' },
                  { name: 'Sneha Patel', items: '6', rating: '4.7' },
                ].map((seller, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                        {seller.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-slate-700 dark:text-slate-200">{seller.name}</p>
                        <p className="text-[10px] text-slate-500 dark:text-slate-400">{seller.items} items</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400 text-[10px]" />
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-200">{seller.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section - Recent Listings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-6 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <FaGift className="text-blue-500" />
              Recent Listings
            </h3>
            <Link to="/marketplace" className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              View All →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {products.slice(0, 4).map((product) => (
              <Link
                key={product.id}
                to="/marketplace/product"
                className="flex items-center gap-3 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover"
                  onError={handleImageError}
                />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">{product.name}</p>
                  <p className="text-xs font-bold text-blue-600 dark:text-blue-400">{product.price}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{product.time}</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Marketplace;