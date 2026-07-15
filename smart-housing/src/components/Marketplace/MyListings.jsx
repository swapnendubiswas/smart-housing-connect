import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaPlus,
  FaSearch,
  FaFilter,
  FaSort,
  FaEdit,
  FaCheckCircle,
  FaTrash,
  FaEye,
  FaShare,
  FaHeart,
  FaRegHeart,
  FaStore,
  FaBoxOpen,
  FaChartLine,
  FaFileAlt,
  FaTag,
  FaMapMarkerAlt,
  FaClock,
  FaEllipsisV,
  FaChevronLeft,
  FaChevronRight,
  FaLightbulb,
  FaShieldAlt,
  FaTrophy,
} from 'react-icons/fa';

const MyListings = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const listings = [
    { id: 1, name: 'Premium Leather Sofa', category: 'Furniture', price: '₹18,000', status: 'Active', date: '2024-01-15', views: 45, likes: 12, image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&q=80' },
    { id: 2, name: 'Gaming Laptop', category: 'Electronics', price: '₹42,000', status: 'Sold', date: '2024-01-12', views: 78, likes: 23, image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&q=80' },
    { id: 3, name: 'Mountain Bike', category: 'Vehicles', price: '₹8,000', status: 'Draft', date: '2024-01-18', views: 0, likes: 0, image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop&q=80' },
    { id: 4, name: 'Smart TV 55"', category: 'Home Appliances', price: '₹28,000', status: 'Active', date: '2024-01-10', views: 56, likes: 18, image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&q=80' },
    { id: 5, name: 'Book Collection', category: 'Books', price: '₹2,500', status: 'Sold', date: '2024-01-08', views: 34, likes: 9, image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=300&fit=crop&q=80' },
    { id: 6, name: 'Dumbbell Set', category: 'Sports', price: '₹3,500', status: 'Active', date: '2024-01-14', views: 23, likes: 5, image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop&q=80' },
    { id: 7, name: '3BHK Flat', category: 'Others', price: '₹85 Lakhs', status: 'Active', date: '2024-01-16', views: 89, likes: 34, image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&q=80' },
    { id: 8, name: 'Car Parking Slot', category: 'Vehicles', price: '₹2,50,000', status: 'Draft', date: '2024-01-19', views: 0, likes: 0, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&q=80' },
  ];

  const stats = [
    { label: 'Total Listings', value: '8', icon: <FaStore />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Active Listings', value: '4', icon: <FaBoxOpen />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Sold Products', value: '2', icon: <FaChartLine />, gradient: 'from-purple-500 to-pink-400' },
    { label: 'Draft Listings', value: '2', icon: <FaFileAlt />, gradient: 'from-amber-500 to-orange-400' },
  ];

  const categories = ['All', 'Furniture', 'Electronics', 'Vehicles', 'Home Appliances', 'Books', 'Sports', 'Others'];
  const statuses = ['All', 'Active', 'Sold', 'Draft'];

  const getStatusColor = (status) => {
    const colors = {
      Active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
      Sold: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      Draft: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
    };
    return colors[status] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
  };

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || listing.category === selectedCategory;
    const matchesStatus = selectedStatus === 'All' || listing.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredListings.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredListings.length / itemsPerPage);

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
              My Listings
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Manage all your marketplace listings.
            </p>
          </div>
          <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <FaPlus className="text-sm" />
            Sell New Product
          </button>
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
              placeholder="Search your listings..."
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
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none"
            >
              {statuses.map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <button className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaSort />
            </button>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Listings Grid */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {currentItems.map((listing) => (
                <motion.div
                  key={listing.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  {/* Product Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(listing.status)}`}>
                        {listing.status}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-1">
                      <button className="p-1.5 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:scale-110 transition-all duration-300">
                        <FaEllipsisV className="text-xs text-slate-600 dark:text-slate-300" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1">
                      {listing.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaTag className="text-[10px]" />
                      <span>{listing.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <FaClock className="text-[10px]" />
                      <span>{listing.date}</span>
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        {listing.price}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <FaEye className="text-[10px]" />
                          {listing.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaHeart className="text-[10px] text-red-400" />
                          {listing.likes}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1">
                        <FaEdit className="text-[10px]" />
                        Edit
                      </button>
                      <button className="py-1.5 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium hover:bg-emerald-100 dark:hover:bg-emerald-900/30 transition-all duration-300 hover:scale-105 flex items-center gap-1">
                        <FaCheckCircle className="text-[10px]" />
                        Sold
                      </button>
                      <button className="py-1.5 px-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/30 text-red-600 dark:text-red-400 text-xs font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition-all duration-300 hover:scale-105 flex items-center gap-1">
                        <FaTrash className="text-[10px]" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <button className="flex-1 py-1 rounded-lg bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-1">
                        <FaEye className="text-[10px]" />
                        View
                      </button>
                      <button className="py-1 px-3 rounded-lg bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-1">
                        <FaShare className="text-[10px]" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredListings.length === 0 && (
              <div className="text-center py-12">
                <FaStore className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400">No listings found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredListings.length)} of {filteredListings.length}
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
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <motion.button
                  whileHover={{ scale: 1.02, x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaPlus className="text-sm" />
                  Sell New Product
                </motion.button>
                <button className="w-full py-2.5 px-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-2">
                  <FaTag className="text-sm" />
                  Manage Categories
                </button>
              </div>
            </motion.div>

            {/* Tips for Better Sales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaLightbulb className="text-amber-500" />
                Tips for Better Sales
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Use high-quality photos
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Set competitive pricing
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Write detailed descriptions
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Respond to inquiries quickly
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-blue-500 text-xs mt-1">•</span>
                  Share your listings on social
                </li>
              </ul>
            </motion.div>

            {/* Marketplace Rules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
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
                  Accurate item descriptions
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Reasonable pricing
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Respectful communication
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Community-focused selling
                </li>
              </ul>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaTrophy className="text-yellow-500" />
                Your Achievements
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Products Sold</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">2</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Active Listings</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">4</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Total Views</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">325</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyListings;