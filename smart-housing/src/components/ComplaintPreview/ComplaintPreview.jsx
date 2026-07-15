import React from 'react';
import { motion } from 'framer-motion';
import {
  FaClipboardList,
  FaClock,
  FaSpinner,
  FaCheckCircle,
  FaExclamationTriangle,
  FaWater,
  FaBolt,
  FaTrash,
  FaBuilding,
  FaShieldAlt,
  FaParking,
  FaArrowRight,
} from 'react-icons/fa';

const ComplaintPreview = () => {
  const complaints = [
    {
      id: 'C-1001',
      category: 'Water Supply',
      icon: <FaWater className="w-4 h-4" />,
      resident: 'Rajesh Kumar',
      housing: 'Greenwood Towers',
      city: 'Kolkata',
      date: '2024-01-15',
      priority: 'High',
      status: 'Resolved',
      progress: 100,
      gradient: 'from-blue-500 to-cyan-400',
      statusColor: 'bg-green-500',
    },
    {
      id: 'C-1002',
      category: 'Electricity',
      icon: <FaBolt className="w-4 h-4" />,
      resident: 'Priya Sharma',
      housing: 'Lake Vista',
      city: 'Delhi',
      date: '2024-01-16',
      priority: 'Urgent',
      status: 'In Progress',
      progress: 60,
      gradient: 'from-purple-500 to-pink-400',
      statusColor: 'bg-blue-500',
    },
    {
      id: 'C-1003',
      category: 'Garbage Collection',
      icon: <FaTrash className="w-4 h-4" />,
      resident: 'Amit Verma',
      housing: 'Park Residency',
      city: 'Mumbai',
      date: '2024-01-14',
      priority: 'Medium',
      status: 'Pending',
      progress: 20,
      gradient: 'from-amber-500 to-orange-400',
      statusColor: 'bg-orange-500',
    },
    {
      id: 'C-1004',
      category: 'Lift Maintenance',
      icon: <FaBuilding className="w-4 h-4" />,
      resident: 'Sneha Patel',
      housing: 'Riverside',
      city: 'Bangalore',
      date: '2024-01-17',
      priority: 'High',
      status: 'Resolved',
      progress: 100,
      gradient: 'from-emerald-500 to-teal-400',
      statusColor: 'bg-green-500',
    },
    {
      id: 'C-1005',
      category: 'Security',
      icon: <FaShieldAlt className="w-4 h-4" />,
      resident: 'Vikram Singh',
      housing: 'Citylight',
      city: 'Hyderabad',
      date: '2024-01-13',
      priority: 'Urgent',
      status: 'In Progress',
      progress: 75,
      gradient: 'from-red-500 to-rose-400',
      statusColor: 'bg-blue-500',
    },
    {
      id: 'C-1006',
      category: 'Parking',
      icon: <FaParking className="w-4 h-4" />,
      resident: 'Ananya Reddy',
      housing: 'Lotus Apartments',
      city: 'Delhi',
      date: '2024-01-18',
      priority: 'Low',
      status: 'Pending',
      progress: 10,
      gradient: 'from-indigo-500 to-violet-400',
      statusColor: 'bg-orange-500',
    },
  ];

  const stats = [
    {
      label: 'Total Complaints',
      value: '48',
      icon: <FaClipboardList className="w-5 h-5" />,
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      label: 'Pending',
      value: '12',
      icon: <FaClock className="w-5 h-5" />,
      gradient: 'from-amber-500 to-orange-400',
    },
    {
      label: 'In Progress',
      value: '18',
      icon: <FaSpinner className="w-5 h-5" />,
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      label: 'Resolved',
      value: '18',
      icon: <FaCheckCircle className="w-5 h-5" />,
      gradient: 'from-emerald-500 to-teal-400',
    },
  ];

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

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1],
      },
    },
  };

  const getStatusBadge = (status) => {
    const colors = {
      Pending: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
      'In Progress': 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300',
      Resolved: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300',
    };
    return colors[status] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
  };

  const getPriorityBadge = (priority) => {
    const colors = {
      Low: 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300',
      Medium: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
      High: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300',
      Urgent: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300',
    };
    return colors[priority] || 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-300';
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background decorative elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            COMPLAINTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Live Complaint{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tracking
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Track complaints in real time with complete transparency.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 text-center shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2 bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-slate-800 dark:text-slate-100">
                {stat.value}
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Complaint Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {complaints.map((complaint) => (
            <motion.div
              key={complaint.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              {/* Glow effect behind card */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{
                  background: `linear-gradient(135deg, ${complaint.gradient.split(' ')[0]}, ${complaint.gradient.split(' ')[2]})`,
                }}
              />

              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${complaint.gradient.split(' ')[0]}, ${complaint.gradient.split(' ')[2]})`,
                  }}
                >
                  <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-xl flex items-center justify-center bg-gradient-to-r ${complaint.gradient} text-white shadow-lg`}>
                        {complaint.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                          {complaint.category}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          #{complaint.id}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityBadge(complaint.priority)}`}>
                        {complaint.priority}
                      </span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusBadge(complaint.status)}`}>
                        {complaint.status}
                      </span>
                    </div>
                  </div>

                  {/* Resident & Housing */}
                  <div className="space-y-1 mb-3">
                    <p className="text-sm text-slate-700 dark:text-slate-200">
                      {complaint.resident}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {complaint.housing}, {complaint.city}
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                      {complaint.date}
                    </p>
                  </div>

                  {/* Progress Timeline */}
                  <div className="mt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400">Progress</span>
                      <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                        {complaint.progress}%
                      </span>
                    </div>
                    <div className="relative h-1.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${complaint.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className={`absolute top-0 left-0 h-full rounded-full bg-gradient-to-r ${complaint.gradient}`}
                      />
                    </div>
                    <div className="flex justify-between mt-1.5">
                      {['Submitted', 'Assigned', 'In Progress', 'Resolved'].map((step, idx) => (
                        <div key={idx} className="flex flex-col items-center">
                          <div className={`w-1.5 h-1.5 rounded-full ${
                            idx * 33.33 <= complaint.progress
                              ? 'bg-blue-500'
                              : 'bg-slate-300 dark:bg-slate-600'
                          }`} />
                          <span className="text-[8px] text-slate-400 dark:text-slate-500 mt-0.5">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center gap-2 mx-auto"
          >
            View All Complaints
            <FaArrowRight className="text-sm" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplaintPreview;