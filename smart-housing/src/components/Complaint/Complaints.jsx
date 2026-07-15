import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaFilter,
  FaSort,
  FaPlus,
  FaEye,
  FaEdit,
  FaTrash,
  FaChevronLeft,
  FaChevronRight,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle,
  FaUser,
  FaBuilding,
  FaTag,
  FaCalendarAlt,
  FaUserTie,
  FaChartPie,
  FaBell,
  FaArrowUp,
  FaArrowDown,
} from 'react-icons/fa';

const Complaints = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriority, setSelectedPriority] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const itemsPerPage = 5;

  const complaints = [
    { id: 'C-1001', resident: 'Rajesh Kumar', flat: 'A-101', category: 'Water Supply', priority: 'High', status: 'Resolved', staff: 'John Doe', date: '2024-01-15' },
    { id: 'C-1002', resident: 'Priya Sharma', flat: 'B-205', category: 'Electricity', priority: 'Urgent', status: 'In Progress', staff: 'Jane Smith', date: '2024-01-16' },
    { id: 'C-1003', resident: 'Amit Verma', flat: 'C-312', category: 'Garbage', priority: 'Medium', status: 'Pending', staff: 'Unassigned', date: '2024-01-14' },
    { id: 'C-1004', resident: 'Sneha Patel', flat: 'D-408', category: 'Lift', priority: 'High', status: 'Resolved', staff: 'Mike Johnson', date: '2024-01-17' },
    { id: 'C-1005', resident: 'Vikram Singh', flat: 'E-501', category: 'Security', priority: 'Urgent', status: 'In Progress', staff: 'Sarah Wilson', date: '2024-01-13' },
    { id: 'C-1006', resident: 'Ananya Reddy', flat: 'F-602', category: 'Parking', priority: 'Low', status: 'Pending', staff: 'Unassigned', date: '2024-01-18' },
    { id: 'C-1007', resident: 'Deepak Kumar', flat: 'G-703', category: 'Water Supply', priority: 'Medium', status: 'Rejected', staff: 'John Doe', date: '2024-01-12' },
    { id: 'C-1008', resident: 'Meera Iyer', flat: 'H-804', category: 'Electricity', priority: 'High', status: 'Resolved', staff: 'Jane Smith', date: '2024-01-11' },
    { id: 'C-1009', resident: 'Ravi Sharma', flat: 'I-905', category: 'Garbage', priority: 'Low', status: 'Pending', staff: 'Unassigned', date: '2024-01-19' },
    { id: 'C-1010', resident: 'Nina Gupta', flat: 'J-1006', category: 'Lift', priority: 'Urgent', status: 'In Progress', staff: 'Mike Johnson', date: '2024-01-10' },
  ];

  const stats = [
    { label: 'Total Complaints', value: '48', icon: <FaClipboardList />, gradient: 'from-blue-500 to-cyan-400', trend: '+12%' },
    { label: 'Pending', value: '12', icon: <FaClock />, gradient: 'from-amber-500 to-orange-400', trend: '+3' },
    { label: 'Resolved', value: '18', icon: <FaCheckCircle />, gradient: 'from-emerald-500 to-teal-400', trend: '+8' },
    { label: 'In Progress', value: '10', icon: <FaExclamationTriangle />, gradient: 'from-purple-500 to-pink-400', trend: '+5' },
    { label: 'Rejected', value: '8', icon: <FaTimesCircle />, gradient: 'from-red-500 to-rose-400', trend: '-2' },
  ];

  const categories = ['All', 'Water Supply', 'Electricity', 'Garbage', 'Lift', 'Security', 'Parking'];
  const priorities = ['All', 'Low', 'Medium', 'High', 'Urgent'];
  const statuses = ['All', 'Pending', 'In Progress', 'Resolved', 'Rejected'];

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

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch = complaint.resident.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          complaint.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || complaint.category === selectedCategory;
    const matchesPriority = selectedPriority === 'All' || complaint.priority === selectedPriority;
    const matchesStatus = selectedStatus === 'All' || complaint.status === selectedStatus;
    return matchesSearch && matchesCategory && matchesPriority && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredComplaints.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredComplaints.length / itemsPerPage);

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
              Complaint Management
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">Track and manage all resident complaints</p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:flex-none">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search complaints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full sm:w-64 pl-10 pr-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300"
            >
              <FaFilter />
            </button>
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaSort />
            </button>
            <Link
              to="/complaints/new"
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              <FaPlus className="text-sm" />
              Add Complaint
            </Link>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-6"
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
                  <span className={`text-xs font-medium ${stat.trend.startsWith('+') ? 'text-emerald-500' : 'text-red-500'}`}>
                    {stat.trend}
                  </span>
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

        {/* Filter Section */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-6"
            >
              <div className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1 block">Category</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1 block">Priority</label>
                    <select
                      value={selectedPriority}
                      onChange={(e) => setSelectedPriority(e.target.value)}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none"
                    >
                      {priorities.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-medium text-slate-600 dark:text-slate-300 mb-1 block">Status</label>
                    <select
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="w-full px-3 py-2 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none"
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-end">
                    <button
                      onClick={() => {
                        setSelectedCategory('All');
                        setSelectedPriority('All');
                        setSelectedStatus('All');
                        setSearchTerm('');
                      }}
                      className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
                    >
                      Reset Filters
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Complaint Table */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-x-auto"
            >
              {currentItems.length === 0 ? (
                <div className="text-center py-12">
                  <FaClipboardList className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                  <p className="text-slate-500 dark:text-slate-400">No complaints found</p>
                  <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your filters</p>
                </div>
              ) : (
                <>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200/50 dark:border-slate-700/50">
                        <th className="pb-3 font-medium">ID</th>
                        <th className="pb-3 font-medium">Resident</th>
                        <th className="pb-3 font-medium">Flat</th>
                        <th className="pb-3 font-medium">Category</th>
                        <th className="pb-3 font-medium">Priority</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium">Staff</th>
                        <th className="pb-3 font-medium">Date</th>
                        <th className="pb-3 font-medium text-center">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentItems.map((complaint, index) => (
                        <motion.tr
                          key={complaint.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors"
                        >
                          <td className="py-3 text-slate-600 dark:text-slate-300 font-medium">{complaint.id}</td>
                          <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.resident}</td>
                          <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.flat}</td>
                          <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.category}</td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(complaint.priority)}`}>
                              {complaint.priority}
                            </span>
                          </td>
                          <td className="py-3">
                            <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(complaint.status)}`}>
                              {complaint.status}
                            </span>
                          </td>
                          <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.staff}</td>
                          <td className="py-3 text-slate-500 dark:text-slate-400 text-xs">{complaint.date}</td>
                          <td className="py-3">
                            <div className="flex items-center justify-center gap-1">
                              <Link
                                to="/complaints/details"
                                className="p-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-blue-600 dark:text-blue-400 transition-colors"
                              >
                                <FaEye className="text-xs" />
                              </Link>
                              <button className="p-1.5 rounded-lg hover:bg-amber-100 dark:hover:bg-amber-900/30 text-amber-600 dark:text-amber-400 transition-colors">
                                <FaEdit className="text-xs" />
                              </button>
                              <button className="p-1.5 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400 transition-colors">
                                <FaTrash className="text-xs" />
                              </button>
                            </div>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredComplaints.length)} of {filteredComplaints.length}
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
              )}
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Summary Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaChartPie className="text-blue-500" />
                Complaint Summary
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">High Priority</span>
                  <span className="font-medium text-red-600 dark:text-red-400">8</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Urgent</span>
                  <span className="font-medium text-rose-600 dark:text-rose-400">4</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Avg. Resolution Time</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">2.3 days</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-500 dark:text-slate-400">Response Rate</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">94%</span>
                </div>
              </div>
            </motion.div>

            {/* Recent Activity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaBell className="text-purple-500" />
                Recent Activity
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">C-1001 resolved by John Doe</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">C-1002 assigned to Jane Smith</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">4 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">C-1003 new complaint submitted</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">6 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-1.5"></div>
                  <div>
                    <p className="text-xs text-slate-600 dark:text-slate-300">C-1005 escalated to Urgent</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">1 day ago</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Today's Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaCalendarAlt className="text-pink-500" />
                Today's Updates
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">New Complaints</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">3</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Resolved</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">In Progress</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Pending</span>
                  <span className="font-medium text-amber-600 dark:text-amber-400">4</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;