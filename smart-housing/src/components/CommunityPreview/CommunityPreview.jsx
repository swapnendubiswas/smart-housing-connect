import React from 'react';
import { motion } from 'framer-motion';
import {
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaUserCircle,
  FaCalendarAlt,
  FaBullhorn,
  FaGift,
  FaMapMarkerAlt,
  FaClock,
  FaImage,
} from 'react-icons/fa';

const CommunityPreview = () => {
  const posts = [
    {
      id: 1,
      name: 'Priya Sharma',
      housing: 'Greenwood Towers',
      time: '2 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content: 'Beautiful sunset view from the terrace today! 🌅 The community garden is looking absolutely stunning.',
      image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&h=400&fit=crop&q=80',
      likes: 24,
      comments: 8,
      shares: 3,
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      housing: 'Lake Vista',
      time: '4 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=2',
      content: 'Lost my car keys near the clubhouse. If found please contact me. #LostAndFound',
      image: null,
      likes: 5,
      comments: 12,
      shares: 2,
    },
    {
      id: 3,
      name: 'Sneha Patel',
      housing: 'Park Residency',
      time: '6 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content: '🎉 Happy Diwali to all residents! Join us for the celebration at the community hall at 7 PM.',
      image: 'https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=600&h=400&fit=crop&q=80',
      likes: 42,
      comments: 15,
      shares: 8,
    },
    {
      id: 4,
      name: 'Amit Verma',
      housing: 'Riverside',
      time: '8 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=4',
      content: 'Blood donation camp tomorrow at the community center from 10 AM - 4 PM. Please come and support! 🩸',
      image: 'https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=600&h=400&fit=crop&q=80',
      likes: 31,
      comments: 9,
      shares: 6,
    },
    {
      id: 5,
      name: 'Vikram Singh',
      housing: 'Citylight',
      time: '12 hours ago',
      avatar: 'https://i.pravatar.cc/150?img=5',
      content: 'The new gym equipment has arrived! 🏋️‍♂️ Check out the upgraded fitness center.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop&q=80',
      likes: 18,
      comments: 6,
      shares: 4,
    },
    {
      id: 6,
      name: 'Ananya Reddy',
      housing: 'Lotus Apartments',
      time: '1 day ago',
      avatar: 'https://i.pravatar.cc/150?img=6',
      content: '📚 Book club meeting this Sunday at 5 PM. We\'ll be discussing "The Alchemist". All are welcome!',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&h=400&fit=crop&q=80',
      likes: 15,
      comments: 7,
      shares: 2,
    },
  ];

  const quickActions = [
    {
      id: 1,
      icon: <FaCalendarAlt className="w-5 h-5" />,
      title: 'Upcoming Events',
      description: 'Diwali Celebration, Book Club, Yoga Session',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      icon: <FaBullhorn className="w-5 h-5" />,
      title: 'Society Notices',
      description: 'Water shutdown, Maintenance schedule, Meeting',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 3,
      icon: <FaGift className="w-5 h-5" />,
      title: 'Birthday Wishes',
      description: '5 residents celebrating this week! 🎂',
      gradient: 'from-amber-500 to-orange-400',
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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            COMMUNITY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Community{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Feed
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Stay connected with your neighbours and housing society.
          </p>
        </motion.div>

        {/* Quick Action Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10"
        >
          {quickActions.map((action) => (
            <motion.div
              key={action.id}
              whileHover={{ y: -4, scale: 1.02 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-4 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-r ${action.gradient} text-white shadow-lg`}>
                  {action.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    {action.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300">
                    {action.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Posts Feed */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="space-y-6"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="relative backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative z-10">
                {/* Post Header */}
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={post.avatar}
                    alt={post.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                      {post.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <FaMapMarkerAlt className="text-[10px]" />
                      <span>{post.housing}</span>
                      <span>•</span>
                      <FaClock className="text-[10px]" />
                      <span>{post.time}</span>
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <p className="text-sm text-slate-700 dark:text-slate-200 mb-3 leading-relaxed">
                  {post.content}
                </p>

                {/* Post Image */}
                {post.image && (
                  <div className="mb-3 rounded-xl overflow-hidden">
                    <img
                      src={post.image}
                      alt="Post"
                      className="w-full h-56 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Post Actions */}
                <div className="flex items-center gap-6 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                  <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-200 group">
                    <FaRegHeart className="group-hover:scale-110 transition-transform duration-200" />
                    <span>{post.likes}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 group">
                    <FaComment className="group-hover:scale-110 transition-transform duration-200" />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-sm text-slate-600 dark:text-slate-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 group">
                    <FaShare className="group-hover:scale-110 transition-transform duration-200" />
                    <span>{post.shares}</span>
                  </button>
                </div>
              </div>

              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 p-[1px] pointer-events-none transition-all duration-300 hover:from-blue-500/20 hover:via-purple-500/20 hover:to-pink-500/20">
                <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
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
          className="text-center mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl"
          >
            View All Posts →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunityPreview;