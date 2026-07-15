import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBullhorn,
  FaExclamationTriangle,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaFilter,
  FaShieldAlt,
  FaSort,
  FaTag,
  FaUser,
  FaCalendarAlt,
  FaFilePdf,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperclip,
  FaArrowRight,
  FaBell,
  FaWrench,
  FaRegClock,
  FaEye,
  FaDownload,
  FaTimes,
  FaFileAlt,
  FaImage,
} from 'react-icons/fa';

const NoticeBoard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterPeriod, setFilterPeriod] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [bookmarkedNotices, setBookmarkedNotices] = useState([]);
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const itemsPerPage = 6;

  const notices = [
    {
      id: 1,
      title: 'Emergency Water Shutdown',
      category: 'Emergency',
      priority: 'Urgent',
      description: 'Due to pipeline burst near Block C, water supply will be shut off from 10 AM to 2 PM today. Please store water in advance. The maintenance team is working on the issue.',
      publishedBy: 'Society Management',
      publishedDate: '2024-01-20',
      expiryDate: '2024-01-21',
      hasAttachment: true,
      attachmentType: 'PDF',
      isPinned: true,
      isFeatured: true,
    },
    {
      id: 2,
      title: 'Diwali Celebration 2024',
      category: 'Events',
      priority: 'High',
      description: 'Join us for the grand Diwali celebration on October 24th at the Clubhouse from 7 PM. There will be food, music, and a fireworks display. Please RSVP by October 20th.',
      publishedBy: 'Events Committee',
      publishedDate: '2024-01-18',
      expiryDate: '2024-10-24',
      hasAttachment: false,
      isPinned: true,
      isFeatured: false,
    },
    {
      id: 3,
      title: 'Electricity Maintenance',
      category: 'Maintenance',
      priority: 'High',
      description: 'Scheduled maintenance of the main power supply line will occur on Tuesday, January 22nd from 9 AM to 5 PM. Power will be shut off in phases. Generators will be available for essential services.',
      publishedBy: 'Maintenance Department',
      publishedDate: '2024-01-17',
      expiryDate: '2024-01-22',
      hasAttachment: true,
      attachmentType: 'Document',
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 4,
      title: 'Blood Donation Camp',
      category: 'Health',
      priority: 'Medium',
      description: 'A blood donation camp will be organized on October 27th at the Community Hall from 9 AM to 4 PM. All residents are encouraged to participate and save lives.',
      publishedBy: 'Health & Wellness Team',
      publishedDate: '2024-01-16',
      expiryDate: '2024-10-27',
      hasAttachment: false,
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 5,
      title: 'New Gym Equipment',
      category: 'Facility',
      priority: 'Medium',
      description: 'We are happy to announce the installation of new gym equipment at the fitness center. New treadmills, a cable machine, and updated weight benches are now available.',
      publishedBy: 'Facility Management',
      publishedDate: '2024-01-15',
      expiryDate: '2024-02-15',
      hasAttachment: true,
      attachmentType: 'Image',
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 6,
      title: 'Security System Upgrade',
      category: 'Security',
      priority: 'High',
      description: 'The new security system has been installed at all entry gates. Please use your access cards for entry. This will help keep our community safe and secure.',
      publishedBy: 'Security Department',
      publishedDate: '2024-01-14',
      expiryDate: '2024-02-14',
      hasAttachment: true,
      attachmentType: 'PDF',
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 7,
      title: 'Garden Maintenance Schedule',
      category: 'Facility',
      priority: 'Low',
      description: 'Regular garden maintenance will be carried out every Wednesday and Saturday. Please keep your pets away during these hours. New plants have been added to the garden area.',
      publishedBy: 'Gardening Team',
      publishedDate: '2024-01-13',
      expiryDate: '2024-12-31',
      hasAttachment: false,
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 8,
      title: 'Parking Rules Update',
      category: 'Rules',
      priority: 'Medium',
      description: 'New parking rules will be effective from February 1st. Please ensure you park only in your designated spots. Violators will be fined. Visitor parking details have been updated.',
      publishedBy: 'Society Management',
      publishedDate: '2024-01-12',
      expiryDate: '2024-02-01',
      hasAttachment: true,
      attachmentType: 'Document',
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 9,
      title: 'Book Club Meeting',
      category: 'Events',
      priority: 'Low',
      description: 'Monthly book club meeting discussing "The Alchemist" on October 29th at 5 PM in the Library. All members and new readers are welcome to join.',
      publishedBy: 'Book Club',
      publishedDate: '2024-01-11',
      expiryDate: '2024-10-29',
      hasAttachment: false,
      isPinned: false,
      isFeatured: false,
    },
    {
      id: 10,
      title: 'Annual General Meeting',
      category: 'Meeting',
      priority: 'High',
      description: 'The Annual General Meeting of the society will be held on November 15th at 6 PM in the Community Hall. All members are requested to attend. Agenda items can be submitted by October 30th.',
      publishedBy: 'Society Management',
      publishedDate: '2024-01-10',
      expiryDate: '2024-11-15',
      hasAttachment: true,
      attachmentType: 'PDF',
      isPinned: true,
      isFeatured: false,
    },
  ];

  const stats = [
    { label: 'Active Notices', value: '8', icon: <FaBullhorn />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Important Notices', value: '4', icon: <FaExclamationTriangle />, gradient: 'from-amber-500 to-orange-400' },
    { label: 'Expired Notices', value: '2', icon: <FaClock />, gradient: 'from-slate-500 to-gray-400' },
    { label: 'Pinned Notices', value: '3', icon: <FaCheckCircle />, gradient: 'from-emerald-500 to-teal-400' },
  ];

  const categories = ['All', 'Emergency', 'Events', 'Maintenance', 'Health', 'Facility', 'Security', 'Rules', 'Meeting'];
  const periods = ['All', 'Today', 'This Week', 'This Month', 'Important'];

  const recentUpdates = [
    { title: 'Water shutdown extended', time: '2 hours ago' },
    { title: 'Diwali celebration details', time: '4 hours ago' },
    { title: 'New security guard shift', time: '1 day ago' },
  ];

  const toggleBookmark = (id) => {
    if (bookmarkedNotices.includes(id)) {
      setBookmarkedNotices(bookmarkedNotices.filter(item => item !== id));
    } else {
      setBookmarkedNotices([...bookmarkedNotices, id]);
    }
  };

  const getPriorityColor = (priority) => {
    const colors = {
      Urgent: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      High: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
      Medium: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      Low: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
    };
    return colors[priority] || 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300';
  };

  const getAttachmentIcon = (type) => {
    switch(type) {
      case 'PDF': return <FaFilePdf className="text-red-500" />;
      case 'Image': return <FaImage className="text-blue-500" />;
      case 'Document': return <FaFileAlt className="text-purple-500" />;
      default: return <FaPaperclip className="text-slate-400" />;
    }
  };

  const filteredNotices = notices.filter(notice => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          notice.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || notice.category === selectedCategory;
    const matchesPeriod = filterPeriod === 'All' ||
                          (filterPeriod === 'Important' && notice.priority === 'High' || notice.priority === 'Urgent') ||
                          true;
    return matchesSearch && matchesCategory && matchesPeriod;
  });

  const featuredNotice = notices.find(n => n.isFeatured);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNotices.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);

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

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const handleViewNotice = (notice) => {
    setSelectedNotice(notice);
    setShowModal(true);
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
              Notice Board
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Stay informed with official society announcements.
            </p>
          </div>
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

        {/* Featured Announcement Banner */}
        {featuredNotice && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 group"
          >
            <div className="relative p-6 bg-gradient-to-r from-blue-600/90 to-purple-600/90">
              <div className="relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/90 text-white mb-3">
                      📌 Featured Announcement
                    </span>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">{featuredNotice.title}</h2>
                    <p className="text-sm text-white/80 mb-3 max-w-2xl">{featuredNotice.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-xs" />
                        {featuredNotice.publishedBy}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-xs" />
                        {featuredNotice.publishedDate}
                      </span>
                      <span className={`px-2 py-0.5 rounded-full text-xs ${getPriorityColor(featuredNotice.priority)}`}>
                        {featuredNotice.priority}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => handleViewNotice(featuredNotice)}
                    className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300 flex items-center gap-2 flex-shrink-0"
                  >
                    <FaEye className="text-sm" />
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

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
              placeholder="Search notices..."
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
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="px-4 py-3 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none"
            >
              {periods.map((p) => (
                <option key={p} value={p}>{p}</option>
              ))}
            </select>
            <button className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaSort />
            </button>
          </div>
        </motion.div>

        {/* Notice Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {['All', 'Emergency', 'Events', 'Maintenance', 'Health', 'Facility', 'Security', 'Rules', 'Meeting'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Notices Grid */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-4"
            >
              {currentItems.map((notice) => (
                <motion.div
                  key={notice.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(notice.priority)}`}>
                          {notice.priority}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {notice.category}
                        </span>
                        {notice.isPinned && (
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                            📌 Pinned
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => toggleBookmark(notice.id)}
                          className="p-1.5 rounded-lg hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          {bookmarkedNotices.includes(notice.id) ? (
                            <FaBookmark className="text-blue-500 text-sm" />
                          ) : (
                            <FaRegBookmark className="text-slate-400 dark:text-slate-500 text-sm" />
                          )}
                        </button>
                        <button className="p-1.5 rounded-lg hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-400 dark:text-slate-500">
                          <FaShare className="text-sm" />
                        </button>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">
                      {notice.title}
                    </h4>

                    {/* Description */}
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                      {notice.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1">
                        <FaUser className="text-[10px]" />
                        {notice.publishedBy}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaCalendarAlt className="text-[10px]" />
                        {notice.publishedDate}
                      </span>
                      <span className="flex items-center gap-1">
                        <FaClock className="text-[10px]" />
                        Expires: {notice.expiryDate}
                      </span>
                      {notice.hasAttachment && (
                        <span className="flex items-center gap-1">
                          {getAttachmentIcon(notice.attachmentType)}
                          {notice.attachmentType}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-2 border-t border-slate-200/50 dark:border-slate-700/50">
                      <button
                        onClick={() => handleViewNotice(notice)}
                        className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-1"
                      >
                        <FaEye className="text-[10px]" />
                        Read More
                      </button>
                      {notice.hasAttachment && (
                        <button className="px-3 py-1.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-1">
                          <FaDownload className="text-[10px]" />
                          Download
                        </button>
                      )}
                      <button className="px-3 py-1.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 text-xs font-medium hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center gap-1">
                        <FaCheckCircle className="text-[10px]" />
                        Mark Read
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredNotices.length === 0 && (
              <div className="text-center py-12">
                <FaBullhorn className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400">No notices found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredNotices.length)} of {filteredNotices.length}
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
            {/* Recent Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaBell className="text-blue-500" />
                Recent Updates
              </h3>
              <div className="space-y-3">
                {recentUpdates.map((update, index) => (
                  <div key={index} className="p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{update.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{update.time}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Society Rules & Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-500" />
                Society Rules & Guidelines
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No loud noise after 10 PM
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Pets must be on leash in common areas
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Parking in designated spots only
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Keep common areas clean
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No unauthorized construction
                </li>
              </ul>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaClock className="text-purple-500" />
                Office Timings
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Monday - Friday</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Saturday</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Sunday</span>
                  <span className="font-medium text-red-600 dark:text-red-400">Closed</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Notice Details Modal */}
      <AnimatePresence>
        {showModal && selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-2xl w-full backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300"
              >
                <FaTimes className="text-lg" />
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(selectedNotice.priority)}`}>
                  {selectedNotice.priority}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {selectedNotice.category}
                </span>
                {selectedNotice.isPinned && (
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300">
                    📌 Pinned
                  </span>
                )}
              </div>

              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {selectedNotice.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                <span className="flex items-center gap-1">
                  <FaUser className="text-xs" />
                  {selectedNotice.publishedBy}
                </span>
                <span className="flex items-center gap-1">
                  <FaCalendarAlt className="text-xs" />
                  {selectedNotice.publishedDate}
                </span>
                <span className="flex items-center gap-1">
                  <FaClock className="text-xs" />
                  Expires: {selectedNotice.expiryDate}
                </span>
              </div>

              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                {selectedNotice.description}
              </p>

              {selectedNotice.hasAttachment && (
                <div className="p-4 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 mb-6">
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-2 flex items-center gap-2">
                    <FaPaperclip className="text-blue-500" />
                    Attachments
                  </h4>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 dark:bg-slate-700/50">
                    <div className="flex items-center gap-3">
                      {getAttachmentIcon(selectedNotice.attachmentType)}
                      <div>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-200">
                          Notice_{selectedNotice.id}.{selectedNotice.attachmentType?.toLowerCase()}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">2.4 MB</p>
                      </div>
                    </div>
                    <button className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                      <FaDownload className="text-sm" />
                    </button>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <button className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                  Download Notice
                </button>
                <button className="px-6 py-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300">
                  Share
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="px-6 py-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NoticeBoard;