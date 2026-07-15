import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUsers,
  FaHome,
  FaUserTie,
  FaCheckCircle,
  FaSearch,
  FaFilter,
  FaSort,
  FaUser,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPhoneAlt,
  FaEnvelope,
  FaCalendarAlt,
  FaUserPlus,
  FaComment,
  FaEye,
  FaChevronLeft,
  FaChevronRight,
  FaStar,
  FaRegStar,
  FaStarHalfAlt,
  FaGift,
  FaBuilding,
  FaShieldAlt,
  FaUserFriends,
  FaClock,
  FaPhone,
  FaAmbulance,
  FaFireExtinguisher,
} from 'react-icons/fa';

const ResidentDirectory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBlock, setSelectedBlock] = useState('All');
  const [selectedFloor, setSelectedFloor] = useState('All');
  const [selectedOccupation, setSelectedOccupation] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const residents = [
    { id: 1, name: 'Priya Sharma', flat: 'B-205', block: 'B', floor: '2', occupation: 'Software Engineer', phone: '+91 98765 43210', email: 'priya.sharma@email.com', memberSince: '2022', isVerified: true, familyMembers: 3, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=1', rating: 4.8 },
    { id: 2, name: 'Rajesh Kumar', flat: 'C-312', block: 'C', floor: '3', occupation: 'Doctor', phone: '+91 87654 32109', email: 'rajesh.kumar@email.com', memberSince: '2021', isVerified: true, familyMembers: 4, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=2', rating: 4.5 },
    { id: 3, name: 'Sneha Patel', flat: 'D-408', block: 'D', floor: '4', occupation: 'Teacher', phone: '+91 76543 21098', email: 'sneha.patel@email.com', memberSince: '2023', isVerified: true, familyMembers: 2, status: 'Tenant', avatar: 'https://i.pravatar.cc/150?img=3', rating: 4.9 },
    { id: 4, name: 'Amit Verma', flat: 'E-501', block: 'E', floor: '5', occupation: 'Lawyer', phone: '+91 65432 10987', email: 'amit.verma@email.com', memberSince: '2020', isVerified: true, familyMembers: 5, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=4', rating: 4.3 },
    { id: 5, name: 'Vikram Singh', flat: 'F-602', block: 'F', floor: '6', occupation: 'Business Owner', phone: '+91 54321 09876', email: 'vikram.singh@email.com', memberSince: '2022', isVerified: false, familyMembers: 2, status: 'Tenant', avatar: 'https://i.pravatar.cc/150?img=5', rating: 4.2 },
    { id: 6, name: 'Ananya Reddy', flat: 'G-703', block: 'G', floor: '7', occupation: 'Architect', phone: '+91 43210 98765', email: 'ananya.reddy@email.com', memberSince: '2021', isVerified: true, familyMembers: 4, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=6', rating: 4.7 },
    { id: 7, name: 'Deepak Kumar', flat: 'H-804', block: 'H', floor: '8', occupation: 'Banker', phone: '+91 32109 87654', email: 'deepak.kumar@email.com', memberSince: '2023', isVerified: false, familyMembers: 3, status: 'Tenant', avatar: 'https://i.pravatar.cc/150?img=7', rating: 4.1 },
    { id: 8, name: 'Meera Iyer', flat: 'I-905', block: 'I', floor: '9', occupation: 'Graphic Designer', phone: '+91 21098 76543', email: 'meera.iyer@email.com', memberSince: '2022', isVerified: true, familyMembers: 2, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=8', rating: 4.6 },
    { id: 9, name: 'Ravi Sharma', flat: 'A-101', block: 'A', floor: '1', occupation: 'Engineer', phone: '+91 10987 65432', email: 'ravi.sharma@email.com', memberSince: '2020', isVerified: true, familyMembers: 5, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=9', rating: 4.4 },
    { id: 10, name: 'Nina Gupta', flat: 'B-205', block: 'B', floor: '2', occupation: 'Professor', phone: '+91 09876 54321', email: 'nina.gupta@email.com', memberSince: '2021', isVerified: true, familyMembers: 3, status: 'Tenant', avatar: 'https://i.pravatar.cc/150?img=10', rating: 4.9 },
    { id: 11, name: 'Rahul Verma', flat: 'C-312', block: 'C', floor: '3', occupation: 'CA', phone: '+91 98765 43210', email: 'rahul.verma@email.com', memberSince: '2023', isVerified: false, familyMembers: 2, status: 'Tenant', avatar: 'https://i.pravatar.cc/150?img=11', rating: 4.0 },
    { id: 12, name: 'Anjali Singh', flat: 'D-408', block: 'D', floor: '4', occupation: 'HR Manager', phone: '+91 87654 32109', email: 'anjali.singh@email.com', memberSince: '2022', isVerified: true, familyMembers: 4, status: 'Owner', avatar: 'https://i.pravatar.cc/150?img=12', rating: 4.7 },
  ];

  const stats = [
    { label: 'Total Residents', value: '156', icon: <FaUsers />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Owners', value: '89', icon: <FaUserTie />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Tenants', value: '67', icon: <FaHome />, gradient: 'from-purple-500 to-pink-400' },
    { label: 'Family Members', value: '423', icon: <FaUserFriends />, gradient: 'from-amber-500 to-orange-400' },
  ];

  const blocks = ['All', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
  const floors = ['All', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const occupations = ['All', 'Software Engineer', 'Doctor', 'Teacher', 'Lawyer', 'Business Owner', 'Architect', 'Banker', 'Graphic Designer', 'Engineer', 'Professor', 'CA', 'HR Manager'];
  const statuses = ['All', 'Owner', 'Tenant'];

  const recentlyJoined = [
    { name: 'Anjali Singh', flat: 'D-408', joined: '2 days ago' },
    { name: 'Rahul Verma', flat: 'C-312', joined: '5 days ago' },
    { name: 'Deepak Kumar', flat: 'H-804', joined: '1 week ago' },
  ];

  const emergencyContacts = [
    { name: 'Security Control', number: '+91 98765 43210', icon: <FaShieldAlt /> },
    { name: 'Ambulance', number: '102', icon: <FaAmbulance /> },
    { name: 'Police', number: '100', icon: <FaPhone /> },
    { name: 'Fire Station', number: '101', icon: <FaFireExtinguisher /> },
  ];

  const filteredResidents = residents.filter(resident => {
    const matchesSearch = resident.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resident.flat.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resident.occupation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBlock = selectedBlock === 'All' || resident.block === selectedBlock;
    const matchesFloor = selectedFloor === 'All' || resident.floor === selectedFloor;
    const matchesOccupation = selectedOccupation === 'All' || resident.occupation === selectedOccupation;
    const matchesStatus = selectedStatus === 'All' || resident.status === selectedStatus;
    return matchesSearch && matchesBlock && matchesFloor && matchesOccupation && matchesStatus;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredResidents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredResidents.length / itemsPerPage);

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
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 text-xs" />);
    }
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 text-xs" />);
    }
    return stars;
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
              Resident Directory
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Find and connect with residents in your housing community.
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

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4 mb-6"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Search by name, flat number, or occupation..."
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
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <select
              value={selectedBlock}
              onChange={(e) => setSelectedBlock(e.target.value)}
              className="px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none text-sm"
            >
              <option value="All">All Blocks</option>
              {blocks.slice(1).map((block) => (
                <option key={block} value={block}>Block {block}</option>
              ))}
            </select>
            <select
              value={selectedFloor}
              onChange={(e) => setSelectedFloor(e.target.value)}
              className="px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none text-sm"
            >
              <option value="All">All Floors</option>
              {floors.slice(1).map((floor) => (
                <option key={floor} value={floor}>Floor {floor}</option>
              ))}
            </select>
            <select
              value={selectedOccupation}
              onChange={(e) => setSelectedOccupation(e.target.value)}
              className="px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none text-sm"
            >
              <option value="All">All Occupations</option>
              {occupations.slice(1).map((occ) => (
                <option key={occ} value={occ}>{occ}</option>
              ))}
            </select>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 outline-none appearance-none text-sm"
            >
              <option value="All">All Status</option>
              {statuses.slice(1).map((status) => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Resident Cards */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {currentItems.map((resident) => (
                <motion.div
                  key={resident.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  <div className="relative z-10 p-5">
                    {/* Profile Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className="relative">
                        <img
                          src={resident.avatar}
                          alt={resident.name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-white/30 shadow-lg"
                        />
                        {resident.isVerified && (
                          <FaCheckCircle className="absolute -bottom-0.5 -right-0.5 text-blue-500 text-sm bg-white rounded-full" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                            {resident.name}
                          </h4>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${resident.status === 'Owner' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300'}`}>
                            {resident.status}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <FaHome className="text-[10px]" />
                          <span>Flat {resident.flat}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                          <FaBuilding className="text-[10px]" />
                          <span>Block {resident.block}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                          <span>Floor {resident.floor}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          {renderStars(resident.rating)}
                          <span className="text-xs text-slate-500 dark:text-slate-400 ml-1">
                            ({resident.rating})
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-1.5 mb-3">
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FaBriefcase className="text-[10px] text-blue-500" />
                        <span>{resident.occupation}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FaUserFriends className="text-[10px] text-purple-500" />
                        <span>{resident.familyMembers} family members</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FaPhoneAlt className="text-[10px] text-emerald-500" />
                        <span className="opacity-50">{resident.phone.slice(0, 10)}****</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                        <FaEnvelope className="text-[10px] text-rose-500" />
                        <span className="opacity-50 truncate">{resident.email.slice(0, 8)}****</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                        <FaCalendarAlt className="text-[10px] text-amber-500" />
                        <span>Member since {resident.memberSince}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                      <button className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-1">
                        <FaEye className="text-[10px]" />
                        View Profile
                      </button>
                      <Link
                        to="/community/chat"
                        className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105"
                      >
                        <FaComment className="text-xs" />
                      </Link>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                        <FaPhoneAlt className="text-xs" />
                      </button>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300 hover:scale-105">
                        <FaEnvelope className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredResidents.length === 0 && (
              <div className="text-center py-12">
                <FaUsers className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400">No residents found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredResidents.length)} of {filteredResidents.length}
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
            {/* Recently Joined */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaUserPlus className="text-blue-500" />
                Recently Joined
              </h3>
              <div className="space-y-2">
                {recentlyJoined.map((resident, index) => (
                  <div key={index} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                      {resident.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{resident.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Flat {resident.flat}</p>
                      <p className="text-xs text-slate-400 dark:text-slate-500">{resident.joined}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Emergency Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-red-500/10 to-rose-500/10 dark:from-red-500/5 dark:to-rose-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-red-500" />
                Emergency Contacts
              </h3>
              <div className="space-y-2">
                {emergencyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center justify-between p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className="flex items-center gap-3">
                      <span className="text-red-500 text-sm">{contact.icon}</span>
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{contact.name}</span>
                    </div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-100">{contact.number}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaClock className="text-purple-500" />
                Office Timings
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Management Office</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Security</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">24/7</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Maintenance</span>
                  <span className="font-medium text-slate-700 dark:text-slate-200">7:00 AM - 9:00 PM</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResidentDirectory;