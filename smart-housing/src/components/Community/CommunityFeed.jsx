import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaUser,
  FaHome,
  FaClock,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaImage,
  FaPoll,
  FaPaperPlane,
  FaCalendarAlt,
  FaBullhorn,
  FaGift,
  FaUsers,
  FaMapMarkerAlt,
  FaChevronRight,
  FaEllipsisH,
  FaSearch,
  FaFilter,
  FaFire,
  FaHashtag,
  FaPlus,
  FaCamera,
  FaVideo,
  FaFileAlt,
  FaSmile,
  FaUserPlus,
  FaUserCircle,
  FaBell,
  FaExclamationTriangle,
} from 'react-icons/fa';

const CommunityFeed = () => {
  const [likedPosts, setLikedPosts] = useState([]);
  const [savedPosts, setSavedPosts] = useState([]);
  const [postText, setPostText] = useState('');
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [activeTab, setActiveTab] = useState('All');

  const posts = [
    {
      id: 1,
      name: 'Priya Sharma',
      flat: 'B-205',
      time: '2 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=1',
      text: 'Beautiful sunset view from the terrace today! 🌅 The community garden is looking absolutely stunning with all the new flowers blooming. So grateful to live in such a wonderful community!',
      image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?w=600&h=400&fit=crop',
      likes: 24,
      comments: 8,
      shares: 3,
      category: 'Lifestyle',
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      flat: 'C-312',
      time: '4 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=2',
      text: 'Lost my car keys near the clubhouse. If found please contact me. They have a black leather keychain with a silver car emblem. #LostAndFound',
      image: null,
      likes: 5,
      comments: 12,
      shares: 2,
      category: 'Lost & Found',
    },
    {
      id: 3,
      name: 'Sneha Patel',
      flat: 'D-408',
      time: '6 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=3',
      text: '🎉 Happy Diwali to all residents! Join us for the celebration at the community hall at 7 PM. There will be food, music, and a fireworks display. Everyone is welcome!',
      image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?w=600&h=400&fit=crop',
      likes: 42,
      comments: 15,
      shares: 8,
      category: 'Events',
    },
    {
      id: 4,
      name: 'Amit Verma',
      flat: 'E-501',
      time: '8 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=4',
      text: 'Blood donation camp tomorrow at the community center from 10 AM - 4 PM. Please come and support this noble cause! 🩸 Every donation saves lives.',
      image: 'https://images.pexels.com/photos/6991224/pexels-photo-6991224.jpeg?w=600&h=400&fit=crop',
      likes: 31,
      comments: 9,
      shares: 6,
      category: 'Health',
    },
    {
      id: 5,
      name: 'Vikram Singh',
      flat: 'F-602',
      time: '12 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=5',
      text: 'The new gym equipment has arrived! 🏋️‍♂️ Check out the upgraded fitness center. We now have new treadmills, a cable machine, and updated weight benches.',
      image: 'https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg?w=600&h=400&fit=crop',
      likes: 18,
      comments: 6,
      shares: 4,
      category: 'Announcement',
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      flat: 'G-703',
      time: '1 day ago',
      avatar: 'https://i.pravatar.cc/150?img=6',
      text: '📚 Book club meeting this Sunday at 5 PM. We\'ll be discussing "The Alchemist" by Paulo Coelho. All are welcome to join! Bring your thoughts and opinions.',
      image: 'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?w=600&h=400&fit=crop',
      likes: 15,
      comments: 7,
      shares: 2,
      category: 'Events',
    },
  ];

  const categories = ['All', 'Lifestyle', 'Events', 'Announcement', 'Health', 'Lost & Found'];

  const trendingTopics = [
    { tag: '#DiwaliCelebration', posts: 23 },
    { tag: '#BloodDonation', posts: 15 },
    { tag: '#NewGym', posts: 12 },
    { tag: '#BookClub', posts: 8 },
  ];

  const communityStats = {
    totalMembers: 156,
    postsToday: 12,
    activeUsers: 45,
    eventsThisMonth: 5,
  };

  const popularResidents = [
    { name: 'Priya Sharma', flat: 'B-205', posts: 28, avatar: 'https://i.pravatar.cc/150?img=1' },
    { name: 'Rajesh Kumar', flat: 'C-312', posts: 22, avatar: 'https://i.pravatar.cc/150?img=2' },
    { name: 'Sneha Patel', flat: 'D-408', posts: 19, avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  const upcomingEvents = [
    { name: 'Diwali Celebration', date: 'Oct 24, 2024', time: '7:00 PM', location: 'Clubhouse' },
    { name: 'Blood Donation Camp', date: 'Oct 27, 2024', time: '9:00 AM', location: 'Community Hall' },
    { name: 'Book Club Meeting', date: 'Oct 29, 2024', time: '5:00 PM', location: 'Library' },
  ];

  const latestNotices = [
    { id: 1, title: 'Emergency Water Shutdown', priority: 'Urgent', date: '2024-01-20', description: 'Water supply will be shut off from 10 AM to 2 PM today...' },
    { id: 2, title: 'Diwali Celebration 2024', priority: 'High', date: '2024-01-18', description: 'Join us for the grand Diwali celebration on October 24th...' },
    { id: 3, title: 'Electricity Maintenance', priority: 'High', date: '2024-01-17', description: 'Scheduled maintenance on Tuesday, January 22nd...' },
  ];

  const stories = [
    { name: 'Priya', avatar: 'https://i.pravatar.cc/150?img=1', seen: false },
    { name: 'Rajesh', avatar: 'https://i.pravatar.cc/150?img=2', seen: false },
    { name: 'Sneha', avatar: 'https://i.pravatar.cc/150?img=3', seen: true },
    { name: 'Amit', avatar: 'https://i.pravatar.cc/150?img=4', seen: true },
    { name: 'Vikram', avatar: 'https://i.pravatar.cc/150?img=5', seen: true },
  ];

  const toggleLike = (id) => {
    if (likedPosts.includes(id)) {
      setLikedPosts(likedPosts.filter(item => item !== id));
    } else {
      setLikedPosts([...likedPosts, id]);
    }
  };

  const toggleSave = (id) => {
    if (savedPosts.includes(id)) {
      setSavedPosts(savedPosts.filter(item => item !== id));
    } else {
      setSavedPosts([...savedPosts, id]);
    }
  };

  const handlePost = () => {
    if (postText.trim()) {
      alert('Post shared successfully!');
      setPostText('');
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
              Community Feed
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Connect with your neighbors and stay updated.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm" />
              <input
                type="text"
                placeholder="Search posts..."
                className="pl-10 pr-4 py-2.5 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none text-sm w-48 sm:w-56"
              />
            </div>
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaFilter />
            </button>
          </div>
        </motion.div>

        {/* Stories Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6 p-4 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
        >
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <div className="flex flex-col items-center gap-1 flex-shrink-0">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-2xl shadow-lg shadow-blue-500/25 cursor-pointer hover:scale-105 transition-all duration-300">
                <FaPlus />
              </div>
              <span className="text-xs text-slate-500 dark:text-slate-400">Add Story</span>
            </div>
            {stories.map((story, index) => (
              <div key={index} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
                <div className={`w-16 h-16 rounded-full p-0.5 ${story.seen ? 'bg-slate-300 dark:bg-slate-600' : 'bg-gradient-to-r from-blue-500 to-purple-600'}`}>
                  <img
                    src={story.avatar}
                    alt={story.name}
                    className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-900"
                  />
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-blue-500 transition-colors">{story.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6"
        >
          {[
            { label: 'Total Members', value: communityStats.totalMembers, icon: <FaUsers />, gradient: 'from-blue-500 to-cyan-400' },
            { label: 'Posts Today', value: communityStats.postsToday, icon: <FaPaperPlane />, gradient: 'from-purple-500 to-pink-400' },
            { label: 'Active Users', value: communityStats.activeUsers, icon: <FaUserCircle />, gradient: 'from-emerald-500 to-teal-400' },
            { label: 'Events This Month', value: communityStats.eventsThisMonth, icon: <FaCalendarAlt />, gradient: 'from-amber-500 to-orange-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
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

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeTab === category
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Create Post Shortcut */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/25">
                  S
                </div>
                <input
                  type="text"
                  placeholder="What's on your mind?"
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  className="flex-1 px-4 py-2.5 bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
                />
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FaImage className="text-emerald-500" />
                    Photo
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FaVideo className="text-purple-500" />
                    Video
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FaPoll className="text-amber-500" />
                    Poll
                  </button>
                  <button className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
                    <FaSmile className="text-rose-500" />
                    Feelings
                  </button>
                </div>
                <Link
                  to="/community/create"
                  className="px-4 py-1.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Create Post
                </Link>
              </div>
            </motion.div>

            {/* Posts */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Gradient border on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20">
                    <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                  </div>

                  <div className="relative z-10">
                    {/* Post Header */}
                    <div className="flex items-start gap-3 mb-3">
                      <img
                        src={post.avatar}
                        alt={post.name}
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                            {post.name}
                          </h4>
                          <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                          <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                            <FaHome className="text-[10px]" />
                            {post.flat}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            {post.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-500">
                          <FaClock className="text-[10px]" />
                          <span>{post.time}</span>
                        </div>
                      </div>
                      <button className="p-1.5 rounded-full hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-400 dark:text-slate-500">
                        <FaEllipsisH className="text-sm" />
                      </button>
                    </div>

                    {/* Post Content */}
                    <p className="text-sm text-slate-700 dark:text-slate-200 mb-3 leading-relaxed">
                      {post.text}
                    </p>

                    {/* Post Image */}
                    {post.image && (
                      <div className="mb-3 rounded-xl overflow-hidden">
                        <img
                          src={post.image}
                          alt="Post"
                          className="w-full h-auto max-h-80 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="flex items-center gap-6 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 text-sm transition-colors duration-200 group ${
                          likedPosts.includes(post.id)
                            ? 'text-red-500'
                            : 'text-slate-600 dark:text-slate-300 hover:text-red-500'
                        }`}
                      >
                        {likedPosts.includes(post.id) ? (
                          <FaHeart className="group-hover:scale-110 transition-transform duration-200" />
                        ) : (
                          <FaRegHeart className="group-hover:scale-110 transition-transform duration-200" />
                        )}
                        <span>{likedPosts.includes(post.id) ? post.likes + 1 : post.likes}</span>
                      </button>
                      <Link
                        to="/community/post"
                        className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 group"
                      >
                        <FaComment className="group-hover:scale-110 transition-transform duration-200" />
                        <span>{post.comments}</span>
                      </Link>
                      <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 group">
                        <FaShare className="group-hover:scale-110 transition-transform duration-200" />
                        <span>{post.shares}</span>
                      </button>
                      <button
                        onClick={() => toggleSave(post.id)}
                        className={`ml-auto text-sm transition-colors duration-200 ${
                          savedPosts.includes(post.id)
                            ? 'text-blue-500'
                            : 'text-slate-400 dark:text-slate-500 hover:text-blue-500'
                        }`}
                      >
                        {savedPosts.includes(post.id) ? (
                          <FaBookmark className="text-lg" />
                        ) : (
                          <FaRegBookmark className="text-lg" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            {showLoadMore && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowLoadMore(false)}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Load More Posts
                </motion.button>
              </motion.div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/community/create"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaPlus className="text-sm" />
                  Create Post
                </Link>
                <Link
                  to="/community/events"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaCalendarAlt className="text-sm" />
                  Upcoming Events
                </Link>
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <FaUserPlus className="text-sm" />
                  Invite Neighbors
                </button>
              </div>
            </motion.div>

            {/* Trending Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaFire className="text-orange-500" />
                Trending Topics
              </h3>
              <div className="space-y-2">
                {trendingTopics.map((topic, index) => (
                  <div key={index} className="flex items-center justify-between p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className="flex items-center gap-2">
                      <FaHashtag className="text-blue-500 text-xs" />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-200">{topic.tag}</span>
                    </div>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{topic.posts} posts</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Popular Residents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <FaUsers className="text-blue-500" />
                  Popular Residents
                </h3>
                <Link to="/community/residents" className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  View All →
                </Link>
              </div>
              <div className="space-y-2">
                {popularResidents.map((resident, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 group">
                    <img
                      src={resident.avatar}
                      alt={resident.name}
                      className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
                    />
                    <div className="flex-1">
                      <Link to="/community/residents" className="text-sm font-medium text-slate-800 dark:text-slate-100 hover:text-blue-500 transition-colors">
                        {resident.name}
                      </Link>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Flat {resident.flat}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-400 dark:text-slate-500">{resident.posts} posts</span>
                      <Link
                        to="/community/chat"
                        className="p-1.5 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 text-slate-400 hover:text-blue-500 transition-colors"
                      >
                        <FaComment className="text-xs" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-500" />
                  Upcoming Events
                </h3>
                <Link to="/community/events" className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{event.name}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{event.date} • {event.time}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 flex items-center gap-1">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {event.location}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Notice Board Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 dark:from-amber-500/5 dark:to-orange-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2">
                  <FaBell className="text-amber-500" />
                  Notice Board
                </h3>
                <Link to="/community/notices" className="text-xs text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                  View All
                </Link>
              </div>
              <div className="space-y-3">
                {latestNotices.map((notice, index) => (
                  <div key={index} className="p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{notice.title}</p>
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${getPriorityColor(notice.priority)}`}>
                        {notice.priority}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{notice.description}</p>
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 flex items-center gap-1">
                      <FaCalendarAlt className="text-[8px]" />
                      {notice.date}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityFeed;