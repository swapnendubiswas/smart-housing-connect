import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaUsers,
  FaSearch,
  FaFilter,
  FaShare,
  FaPlus,
  FaCheckCircle,
  FaUser,
  FaGift,
  FaChevronRight,
  FaChevronLeft,
  FaCalendarPlus,
  FaEye,
  FaTag,
  FaEllipsisH,
  FaTicketAlt,
  FaUserCheck,
  FaUserPlus,
  FaInfoCircle,
  FaClipboardList,
  FaRegClock,
} from 'react-icons/fa';

const Events = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filterPeriod, setFilterPeriod] = useState('Upcoming');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const events = [
    {
      id: 1,
      name: 'Diwali Celebration 2024',
      category: 'Festival',
      date: '2024-10-24',
      time: '7:00 PM - 10:00 PM',
      venue: 'Clubhouse, Ground Floor',
      organizer: 'Society Events Committee',
      participants: 78,
      maxSeats: 100,
      seatsAvailable: 22,
      description: 'Join us for a spectacular Diwali celebration with food, music, and fireworks. Traditional attire encouraged! The event will feature a cultural program, dance performances, and a grand fireworks display. Food stalls will serve traditional delicacies.',
      rules: '• Traditional attire encouraged\n• No outside food allowed\n• Children under 12 must be accompanied by adults\n• Registration closes on October 22',
      contactPerson: 'Rajesh Kumar - +91 98765 43210',
      image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: true,
    },
    {
      id: 2,
      name: 'Blood Donation Camp',
      category: 'Health',
      date: '2024-10-27',
      time: '9:00 AM - 4:00 PM',
      venue: 'Community Hall, Block A',
      organizer: 'Health & Wellness Team',
      participants: 45,
      maxSeats: 60,
      seatsAvailable: 15,
      description: 'Donate blood and save lives. All residents are encouraged to participate. Free health check-up included. A team of medical professionals will be present to ensure a safe donation process. Light refreshments will be provided.',
      rules: '• Participants must be between 18-65 years\n• Minimum weight: 50 kg\n• No recent surgeries or medications\n• Bring valid ID proof',
      contactPerson: 'Dr. Sneha Patel - +91 87654 32109',
      image: 'https://images.pexels.com/photos/6991224/pexels-photo-6991224.jpeg?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: false,
    },
    {
      id: 3,
      name: 'Book Club Meeting',
      category: 'Workshop',
      date: '2024-10-29',
      time: '5:00 PM - 7:00 PM',
      venue: 'Library, Tower 2',
      organizer: 'Book Club Members',
      participants: 23,
      maxSeats: 30,
      seatsAvailable: 7,
      description: 'Monthly book club meeting discussing "The Alchemist" by Paulo Coelho. New members welcome! Join us for an engaging discussion about this inspiring book. Light refreshments will be served.',
      rules: '• Read the assigned book before the meeting\n• Bring your copy of the book\n• Be prepared to share your thoughts',
      contactPerson: 'Ananya Reddy - +91 76543 21098',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: false,
    },
    {
      id: 4,
      name: 'Yoga Session',
      category: 'Workshop',
      date: '2024-11-02',
      time: '6:00 AM - 7:30 AM',
      venue: 'Community Park',
      organizer: 'Wellness Committee',
      participants: 34,
      maxSeats: 50,
      seatsAvailable: 16,
      description: 'Start your day with energizing yoga and meditation. All skill levels welcome. Bring your own mat. The session will include various yoga asanas, breathing exercises, and meditation techniques.',
      rules: '• Bring your own yoga mat\n• Wear comfortable clothes\n• Arrive 10 minutes early\n• No heavy breakfast before session',
      contactPerson: 'Vikram Singh - +91 65432 10987',
      image: 'https://images.pexels.com/photos/1544367567-0f2fcb009e0b?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: false,
    },
    {
      id: 5,
      name: 'Kids Art Workshop',
      category: 'Workshop',
      date: '2024-11-05',
      time: '10:00 AM - 12:00 PM',
      venue: 'Activity Room, Block B',
      organizer: 'Kids Club',
      participants: 18,
      maxSeats: 25,
      seatsAvailable: 7,
      description: 'Art workshop for children aged 5-12. Painting, crafts, and creative activities. All materials provided. Children will learn various art techniques and create beautiful masterpieces.',
      rules: '• Age group: 5-12 years\n• All materials provided\n• Parents must sign consent form',
      contactPerson: 'Meera Iyer - +91 54321 09876',
      image: 'https://images.pexels.com/photos/1513364774-60967b0f800f?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: false,
    },
    {
      id: 6,
      name: 'Community Potluck Dinner',
      category: 'Cultural',
      date: '2024-11-10',
      time: '7:00 PM - 9:30 PM',
      venue: 'Clubhouse Terrace',
      organizer: 'Social Committee',
      participants: 56,
      maxSeats: 80,
      seatsAvailable: 24,
      description: 'Bring your favorite dish and enjoy an evening of food and fellowship with neighbors. A great opportunity to socialize and enjoy diverse cuisines from around the world.',
      rules: '• Bring a dish to share\n• Label your dish with ingredients\n• No alcohol allowed\n• Register to confirm attendance',
      contactPerson: 'Amit Verma - +91 43210 98765',
      image: 'https://images.pexels.com/photos/1555939594-58d7cb561ad1?w=600&h=400&fit=crop',
      status: 'upcoming',
      isFeatured: false,
    },
    {
      id: 7,
      name: 'Independence Day Celebration',
      category: 'Festival',
      date: '2024-08-15',
      time: '8:00 AM - 11:00 AM',
      venue: 'Community Ground',
      organizer: 'Society Management',
      participants: 120,
      maxSeats: 150,
      seatsAvailable: 30,
      description: 'Flag hoisting ceremony followed by cultural programs and breakfast. Patriotic dress encouraged. A grand celebration of our nation\'s independence with cultural performances and activities.',
      rules: '• Patriotic attire encouraged\n• Arrive by 7:45 AM\n• No outside flags allowed',
      contactPerson: 'Rajesh Kumar - +91 98765 43210',
      image: 'https://images.pexels.com/photos/1532372576444-dda954194ad6?w=600&h=400&fit=crop',
      status: 'completed',
      isFeatured: false,
    },
    {
      id: 8,
      name: 'Annual Sports Day',
      category: 'Sports',
      date: '2024-09-20',
      time: '7:00 AM - 5:00 PM',
      venue: 'Sports Complex',
      organizer: 'Sports Committee',
      participants: 95,
      maxSeats: 120,
      seatsAvailable: 25,
      description: 'Annual sports day with various events for all age groups. Prizes and certificates for winners. Events include athletics, team sports, and fun games for families.',
      rules: '• Register for specific events\n• Sports shoes required\n• No outside participants',
      contactPerson: 'Vikram Singh - +91 65432 10987',
      image: 'https://images.pexels.com/photos/1461896836934-bd7a4b2f0a8f?w=600&h=400&fit=crop',
      status: 'completed',
      isFeatured: false,
    },
  ];

  const stats = [
    { label: 'Total Events', value: '8', icon: <FaCalendarAlt />, gradient: 'from-blue-500 to-cyan-400' },
    { label: 'Upcoming', value: '6', icon: <FaClock />, gradient: 'from-emerald-500 to-teal-400' },
    { label: 'Registered', value: '469', icon: <FaUserCheck />, gradient: 'from-purple-500 to-pink-400' },
    { label: 'Completed', value: '2', icon: <FaCheckCircle />, gradient: 'from-amber-500 to-orange-400' },
  ];

  const categories = ['All', 'Cultural', 'Sports', 'Meetings', 'Festival', 'Workshop', 'Health'];
  const periods = ['Upcoming', 'Today', 'This Week', 'This Month'];

  const featuredEvent = events.find(e => e.isFeatured);

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          event.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || event.category === selectedCategory;
    const matchesPeriod = filterPeriod === 'Upcoming' ? event.status === 'upcoming' :
                          filterPeriod === 'Today' ? event.date === new Date().toISOString().slice(0,10) :
                          filterPeriod === 'This Week' ? true :
                          filterPeriod === 'This Month' ? true : true;
    return matchesSearch && matchesCategory && matchesPeriod;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);

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
    e.target.src = "https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?w=600&h=400&fit=crop";
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
              Community Events
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Stay updated with upcoming events in your housing community.
            </p>
          </div>
          <button className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center gap-2">
            <FaPlus className="text-sm" />
            Create Event
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

        {/* Featured Event Banner */}
        {featuredEvent && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mb-6 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 group"
          >
            <div className="relative h-56 sm:h-64">
              <img
                src={featuredEvent.image}
                alt={featuredEvent.name}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
              <div className="absolute inset-0 flex items-center p-6 sm:p-8">
                <div className="max-w-xl text-white">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-amber-500/90 text-white mb-3">
                    🌟 Featured Event
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-2">{featuredEvent.name}</h2>
                  <p className="text-sm text-white/80 mb-3">{featuredEvent.description.slice(0, 120)}...</p>
                  <div className="flex flex-wrap items-center gap-3 text-sm text-white/70">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-xs" />
                      {featuredEvent.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaClock className="text-xs" />
                      {featuredEvent.time}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt className="text-xs" />
                      {featuredEvent.venue}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <button className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                      Register Now
                    </button>
                    <Link
                      to="/community/events"
                      className="px-4 py-1.5 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium hover:bg-white/30 transition-all duration-300"
                    >
                      View Details
                    </Link>
                  </div>
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
              placeholder="Search events..."
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
              {periods.map((period) => (
                <option key={period} value={period}>{period}</option>
              ))}
            </select>
            <button className="p-3 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaFilter />
            </button>
          </div>
        </motion.div>

        {/* Event Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {['All', 'Cultural', 'Sports', 'Meetings', 'Festival', 'Workshop', 'Health'].map((cat) => (
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

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Events Cards */}
          <div className="lg:col-span-3">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4"
            >
              {currentItems.map((event) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  whileHover={{ y: -6 }}
                  className="group relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  {/* Event Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={handleImageError}
                    />
                    <div className="absolute top-3 left-3 flex gap-1">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-700 dark:text-slate-200 border border-white/20 dark:border-slate-700/20">
                        {event.category}
                      </span>
                      {event.status === 'upcoming' ? (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/90 text-white backdrop-blur-sm">
                          Upcoming
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-500/90 text-white backdrop-blur-sm">
                          Completed
                        </span>
                      )}
                    </div>
                    <button className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm hover:scale-110 transition-all duration-300">
                      <FaEllipsisH className="text-slate-600 dark:text-slate-300 text-sm" />
                    </button>
                  </div>

                  {/* Event Info */}
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-1 line-clamp-1">
                      {event.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaCalendarAlt className="text-[10px]" />
                      <span>{event.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <FaClock className="text-[10px]" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaMapMarkerAlt className="text-[10px]" />
                      <span className="truncate">{event.venue}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
                      <FaUser className="text-[10px]" />
                      <span className="truncate">{event.organizer}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <FaTicketAlt className="text-[10px]" />
                      <span>{event.seatsAvailable} seats available</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                      <span>{event.participants} registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="flex-1 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105">
                        Register
                      </button>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300">
                        <FaEye className="text-xs" />
                      </button>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300">
                        <FaShare className="text-xs" />
                      </button>
                      <button className="py-1.5 px-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-all duration-300">
                        <FaCalendarPlus className="text-xs" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <FaCalendarAlt className="text-4xl text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                <p className="text-slate-500 dark:text-slate-400">No events found</p>
                <p className="text-sm text-slate-400 dark:text-slate-500">Try adjusting your search or filters</p>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-200/50 dark:border-slate-700/50">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredEvents.length)} of {filteredEvents.length}
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
            {/* Event Details Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaInfoCircle className="text-blue-500" />
                Event Details
              </h3>
              <div className="space-y-3 text-sm">
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Description</p>
                  <p className="text-slate-700 dark:text-slate-200 mt-1">
                    {featuredEvent ? featuredEvent.description.slice(0, 100) + '...' : 'No featured event'}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Rules</p>
                  <p className="text-slate-700 dark:text-slate-200 mt-1 whitespace-pre-line">
                    {featuredEvent ? featuredEvent.rules : 'No rules available'}
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Contact Person</p>
                  <p className="text-slate-700 dark:text-slate-200 mt-1">
                    {featuredEvent ? featuredEvent.contactPerson : 'No contact available'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Event Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaClipboardList className="text-purple-500" />
                Event Statistics
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Total Events</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">8</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Upcoming</span>
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">6</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-200/50 dark:border-slate-700/50">
                  <span className="text-slate-500 dark:text-slate-400">Registered</span>
                  <span className="font-medium text-blue-600 dark:text-blue-400">469</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-500 dark:text-slate-400">Completed</span>
                  <span className="font-medium text-slate-700 dark:text-slate-300">2</span>
                </div>
              </div>
            </motion.div>

            {/* Upcoming Events Quick View */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaRegClock className="text-amber-500" />
                Upcoming Events
              </h3>
              <div className="space-y-2">
                {events.filter(e => e.status === 'upcoming').slice(0, 3).map((event, index) => (
                  <div key={index} className="p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{event.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.date} • {event.time}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                        <FaMapMarkerAlt className="text-[10px]" />
                        {event.venue}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Past Events Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-6 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
              <FaCheckCircle className="text-emerald-500" />
              Past Events
            </h3>
            <button className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
              View All →
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {events.filter(e => e.status === 'completed').map((event) => (
              <div key={event.id} className="flex items-center gap-3 p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={event.image}
                    alt={event.name}
                    className="w-full h-full object-cover"
                    onError={handleImageError}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700 dark:text-slate-200 truncate">{event.name}</p>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">{event.date}</p>
                  <p className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <FaUsers className="text-[8px]" />
                    {event.participants} participants
                  </p>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  Completed
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Events;