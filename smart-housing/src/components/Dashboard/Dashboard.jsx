import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBell,
  FaUserCircle,
  FaClipboardList,
  FaCheckCircle,
  FaStore,
  FaUsers,
  FaArrowUp,
  FaArrowDown,
  FaPlus,
  FaHome,
  FaExclamationTriangle,
  FaPhoneAlt,
  FaUser,
  FaCalendarAlt,
  FaBuilding,
  FaCar,
  FaChair,
  FaBicycle,
  FaEye,
} from 'react-icons/fa';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Dashboard = () => {
  const [counts, setCounts] = useState({
    pending: 0,
    resolved: 0,
    listings: 0,
    members: 0,
  });

  useEffect(() => {
    const animateCounts = () => {
      const targets = { pending: 12, resolved: 38, listings: 24, members: 156 };
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        setCounts({
          pending: Math.floor(targets.pending * progress),
          resolved: Math.floor(targets.resolved * progress),
          listings: Math.floor(targets.listings * progress),
          members: Math.floor(targets.members * progress),
        });
        if (currentStep >= steps) {
          clearInterval(timer);
          setCounts(targets);
        }
      }, interval);
    };
    animateCounts();
  }, []);

  const complaintData = [
    { name: 'Jan', Pending: 8, Resolved: 12, 'In Progress': 4, Rejected: 2 },
    { name: 'Feb', Pending: 6, Resolved: 15, 'In Progress': 5, Rejected: 1 },
    { name: 'Mar', Pending: 10, Resolved: 18, 'In Progress': 3, Rejected: 3 },
    { name: 'Apr', Pending: 4, Resolved: 22, 'In Progress': 7, Rejected: 2 },
    { name: 'May', Pending: 7, Resolved: 25, 'In Progress': 6, Rejected: 1 },
    { name: 'Jun', Pending: 12, Resolved: 38, 'In Progress': 8, Rejected: 4 },
  ];

  const recentComplaints = [
    { id: 'C-1001', category: 'Water Supply', resident: 'Rajesh Kumar', status: 'Resolved', priority: 'High', date: '2024-01-15' },
    { id: 'C-1002', category: 'Electricity', resident: 'Priya Sharma', status: 'In Progress', priority: 'Urgent', date: '2024-01-16' },
    { id: 'C-1003', category: 'Garbage', resident: 'Amit Verma', status: 'Pending', priority: 'Medium', date: '2024-01-14' },
    { id: 'C-1004', category: 'Lift', resident: 'Sneha Patel', status: 'Resolved', priority: 'High', date: '2024-01-17' },
    { id: 'C-1005', category: 'Security', resident: 'Vikram Singh', status: 'In Progress', priority: 'Urgent', date: '2024-01-13' },
  ];

  const communityUpdates = [
    '🎉 Diwali celebration this Saturday at 7 PM',
    '📢 Water supply maintenance on Monday, 10 AM - 2 PM',
    '🩸 Blood donation camp on Sunday, 9 AM - 4 PM',
    '📚 Book club meeting this Sunday at 5 PM',
    '🏋️ New gym equipment installed in the fitness center',
  ];

  const notices = [
    { title: 'Emergency Alert', message: 'Pipe burst near Block C', time: '2 hours ago' },
    { title: 'Water Shutdown', message: 'Water supply off 10am-2pm tomorrow', time: '4 hours ago' },
    { title: 'Electricity Maintenance', message: 'Power cut 9am-5pm on Tuesday', time: '1 day ago' },
    { title: 'Festival Event', message: 'Diwali celebration in clubhouse', time: '2 days ago' },
  ];

  const upcomingEvents = [
    { name: 'Diwali Celebration', date: 'Oct 24, 2024', location: 'Clubhouse', time: '7:00 PM' },
    { name: 'Blood Donation Camp', date: 'Oct 27, 2024', location: 'Community Hall', time: '9:00 AM' },
    { name: 'Book Club Meeting', date: 'Oct 29, 2024', location: 'Library', time: '5:00 PM' },
  ];

  const marketplaceItems = [
    { title: '3BHK Flat', price: '₹85 Lakhs', category: 'Property', icon: <FaBuilding /> },
    { title: 'Sofa Set', price: '₹18,000', category: 'Furniture', icon: <FaChair /> },
    { title: 'Car Parking', price: '₹2,50,000', category: 'Parking', icon: <FaCar /> },
    { title: 'Bicycle', price: '₹8,000', category: 'Vehicles', icon: <FaBicycle /> },
  ];

  const getStatusColor = (status) => {
    const colors = {
      Pending: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      'In Progress': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      Resolved: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
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
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4"
        >
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100">
              Good Morning, <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Swapnendu</span> 👋
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-800/50 transition-all duration-200">
              <FaBell className="text-slate-600 dark:text-slate-300 text-lg" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold shadow-lg shadow-blue-500/25">
              <FaUserCircle className="text-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {[
            { label: 'Pending Complaints', value: counts.pending, icon: <FaClipboardList />, trend: '+2', trendUp: true, gradient: 'from-amber-500 to-orange-400' },
            { label: 'Resolved Complaints', value: counts.resolved, icon: <FaCheckCircle />, trend: '+8', trendUp: true, gradient: 'from-emerald-500 to-teal-400' },
            { label: 'Marketplace Listings', value: counts.listings, icon: <FaStore />, trend: '+3', trendUp: true, gradient: 'from-blue-500 to-cyan-400' },
            { label: 'Community Members', value: counts.members, icon: <FaUsers />, trend: '+12', trendUp: true, gradient: 'from-purple-500 to-pink-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${stat.gradient} opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}>
                    {stat.icon}
                  </div>
                  <span className={`text-xs font-medium ${stat.trendUp ? 'text-emerald-500' : 'text-red-500'} flex items-center gap-0.5`}>
                    {stat.trendUp ? <FaArrowUp className="text-[10px]" /> : <FaArrowDown className="text-[10px]" />}
                    {stat.trend}
                  </span>
                </div>
                <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Charts & Tables */}
          <div className="lg:col-span-2 space-y-6">
            {/* Complaint Analytics Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Complaint Analytics</h3>
              <ResponsiveContainer width="100%" height={280}>
                <BarChart data={complaintData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Pending" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="In Progress" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Resolved" fill="#10b981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Rejected" fill="#ef4444" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Recent Complaints Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-x-auto"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Recent Complaints</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left text-slate-500 dark:text-slate-400 border-b border-slate-200/50 dark:border-slate-700/50">
                    <th className="pb-2 font-medium">ID</th>
                    <th className="pb-2 font-medium">Category</th>
                    <th className="pb-2 font-medium">Resident</th>
                    <th className="pb-2 font-medium">Status</th>
                    <th className="pb-2 font-medium">Priority</th>
                    <th className="pb-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentComplaints.map((complaint) => (
                    <tr key={complaint.id} className="border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 text-slate-600 dark:text-slate-300 font-medium">{complaint.id}</td>
                      <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.category}</td>
                      <td className="py-3 text-slate-600 dark:text-slate-300">{complaint.resident}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(complaint.status)}`}>
                          {complaint.status}
                        </span>
                      </td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority}
                        </span>
                      </td>
                      <td className="py-3 text-slate-500 dark:text-slate-400 text-xs">{complaint.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Quick Actions</h3>
              <div className="space-y-2">
                {[
                  { label: 'Report Complaint', icon: <FaPlus />, gradient: 'from-blue-500 to-cyan-400' },
                  { label: 'Marketplace', icon: <FaStore />, gradient: 'from-purple-500 to-pink-400' },
                  { label: 'Community Feed', icon: <FaUsers />, gradient: 'from-emerald-500 to-teal-400' },
                  { label: 'Emergency SOS', icon: <FaExclamationTriangle />, gradient: 'from-red-500 to-rose-400' },
                  { label: 'Profile', icon: <FaUser />, gradient: 'from-amber-500 to-orange-400' },
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-2.5 px-4 rounded-xl bg-gradient-to-r ${action.gradient} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2`}
                  >
                    {action.icon}
                    {action.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Community Updates */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Community Updates</h3>
              <ul className="space-y-3">
                {communityUpdates.map((update, index) => (
                  <li key={index} className="text-sm text-slate-600 dark:text-slate-300 border-b border-slate-200/50 dark:border-slate-700/50 pb-2 last:border-0 last:pb-0">
                    {update}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Notice Board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Notice Board</h3>
              <ul className="space-y-3">
                {notices.map((notice, index) => (
                  <li key={index} className="border-b border-slate-200/50 dark:border-slate-700/50 pb-2 last:border-0 last:pb-0">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{notice.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{notice.message}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{notice.time}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Upcoming Events & Marketplace Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="flex items-center gap-4 p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg shadow-blue-500/25">
                    <FaCalendarAlt />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{event.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.date} • {event.time}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">{event.location}</p>
                  </div>
                  <button className="p-2 rounded-full hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors">
                    <FaEye className="text-slate-400 dark:text-slate-500" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Marketplace Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Marketplace Preview</h3>
              <button className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">View All →</button>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {marketplaceItems.map((item, index) => (
                <div key={index} className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-lg shadow-lg shadow-blue-500/25 mb-2">
                    {item.icon}
                  </div>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{item.title}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{item.category}</p>
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 mt-1">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;