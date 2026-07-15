import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaArrowLeft,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaPaperPlane,
  FaFlag,
  FaUser,
  FaHome,
  FaClock,
  FaCheckCircle,
  FaImage,
  FaChevronLeft,
  FaChevronRight,
  FaThumbsUp,
  FaReply,
  FaSmile,
  FaCalendarAlt,
  FaBullhorn,
  FaUsers,
  FaShieldAlt,
  FaEllipsisH,
  FaMapMarkerAlt,
  FaRegClock,
  FaPaperclip,
  FaVideo,
} from 'react-icons/fa';

const PostDetails = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likedComments, setLikedComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const post = {
    id: 1,
    name: 'Priya Sharma',
    flat: 'B-205',
    housing: 'Greenwood Towers',
    time: '2 hours ago',
    avatar: 'https://i.pravatar.cc/150?img=1',
    isVerified: true,
    title: 'Beautiful Sunset & Community Garden Update 🌅',
    description: 'The sunset from the terrace today was absolutely breathtaking! 🌅 The community garden is looking more beautiful than ever with all the new flowers blooming. We have planted roses, marigolds, and jasmine this season. The fragrance in the evening is just magical. So grateful to live in such a wonderful community where we can enjoy these little moments of joy together. Thank you to all the residents who contributed to making our garden so special! 🌸🌺',
    images: [
      'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?w=800&h=500&fit=crop',
      'https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenery-158028.jpeg?w=800&h=500&fit=crop',
      'https://images.pexels.com/photos/1394365/pexels-photo-1394365.jpeg?w=800&h=500&fit=crop',
    ],
    likes: 24,
    comments: 8,
    shares: 3,
    category: 'Lifestyle',
  };

  const comments = [
    { id: 1, name: 'Rajesh Kumar', flat: 'C-312', avatar: 'https://i.pravatar.cc/150?img=2', time: '30 min ago', text: 'Absolutely beautiful! The garden looks stunning. 🌸', likes: 5 },
    { id: 2, name: 'Sneha Patel', flat: 'D-408', avatar: 'https://i.pravatar.cc/150?img=3', time: '45 min ago', text: 'Can we have more of these flowers? I would love to help with the gardening!', likes: 3 },
    { id: 3, name: 'Amit Verma', flat: 'E-501', avatar: 'https://i.pravatar.cc/150?img=4', time: '1 hour ago', text: 'The sunset view is mesmerizing. Great photo! 📸', likes: 7 },
    { id: 4, name: 'Vikram Singh', flat: 'F-602', avatar: 'https://i.pravatar.cc/150?img=5', time: '1.5 hours ago', text: 'I love how our community comes together for such beautiful moments.', likes: 4 },
    { id: 5, name: 'Ananya Reddy', flat: 'G-703', avatar: 'https://i.pravatar.cc/150?img=6', time: '2 hours ago', text: 'The fragrance of jasmine in the evening is the best part! 🌙', likes: 6 },
  ];

  const relatedPosts = [
    { id: 1, title: 'Diwali Celebration Photos', comments: 25, likes: 48, image: 'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?w=400&h=250&fit=crop' },
    { id: 2, title: 'New Gym Equipment Arrival', comments: 18, likes: 35, image: 'https://images.pexels.com/photos/4498156/pexels-photo-4498156.jpeg?w=400&h=250&fit=crop' },
    { id: 3, title: 'Blood Donation Camp Update', comments: 12, likes: 28, image: 'https://images.pexels.com/photos/6991224/pexels-photo-6991224.jpeg?w=400&h=250&fit=crop' },
  ];

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const toggleCommentLike = (id) => {
    if (likedComments.includes(id)) {
      setLikedComments(likedComments.filter(item => item !== id));
    } else {
      setLikedComments([...likedComments, id]);
    }
  };

  const handleComment = () => {
    if (commentText.trim()) {
      alert('Comment posted successfully!');
      setCommentText('');
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % post.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + post.images.length) % post.images.length);
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

  const handleImageError = (e) => {
    e.target.src = "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?w=800&h=500&fit=crop";
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
          className="flex items-center justify-between mb-6"
        >
          <div className="flex items-center gap-3">
            <Link to="/community" className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaArrowLeft />
            </Link>
            <h1 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100">
              Community Post
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-slate-600 dark:text-slate-300">
              <FaShare />
            </button>
            <button
              onClick={toggleBookmark}
              className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300"
            >
              {isBookmarked ? (
                <FaBookmark className="text-blue-500" />
              ) : (
                <FaRegBookmark className="text-slate-600 dark:text-slate-300" />
              )}
            </button>
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 text-red-500">
              <FaFlag />
            </button>
          </div>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Post */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              {/* Post Header */}
              <div className="flex items-start gap-3 mb-4">
                <img
                  src={post.avatar}
                  alt={post.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                      {post.name}
                    </h4>
                    {post.isVerified && (
                      <FaCheckCircle className="text-blue-500 text-sm" />
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <FaHome className="text-[10px]" />
                    <span>{post.flat}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <FaMapMarkerAlt className="text-[10px]" />
                    <span>{post.housing}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <FaClock className="text-[10px]" />
                    <span>{post.time}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[10px]">
                      {post.category}
                    </span>
                  </div>
                </div>
                <button className="p-1.5 rounded-full hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-400 dark:text-slate-500">
                  <FaEllipsisH className="text-sm" />
                </button>
              </div>

              {/* Post Title */}
              <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3">
                {post.title}
              </h2>

              {/* Post Description */}
              <p className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed mb-4">
                {post.description}
              </p>

              {/* Images Carousel */}
              {post.images.length > 0 && (
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <div className="relative aspect-video">
                    <img
                      src={post.images[currentImageIndex]}
                      alt={`Post image ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      onError={handleImageError}
                    />
                    {post.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
                        >
                          <FaChevronLeft className="text-sm text-slate-700 dark:text-slate-200" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-lg hover:scale-110 transition-all duration-300"
                        >
                          <FaChevronRight className="text-sm text-slate-700 dark:text-slate-200" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {post.images.map((_, idx) => (
                            <button
                              key={idx}
                              onClick={() => setCurrentImageIndex(idx)}
                              className={`h-1.5 rounded-full transition-all duration-300 ${
                                idx === currentImageIndex
                                  ? 'w-6 bg-white'
                                  : 'w-1.5 bg-white/50 hover:bg-white/70'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {/* Post Stats */}
              <div className="flex items-center gap-6 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <FaHeart className="text-red-400" />
                  {post.likes}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <FaComment className="text-blue-400" />
                  {post.comments}
                </span>
                <span className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400">
                  <FaShare className="text-purple-400" />
                  {post.shares}
                </span>
              </div>

              {/* Post Actions */}
              <div className="flex items-center gap-4 pt-3 border-t border-slate-200/50 dark:border-slate-700/50">
                <button
                  onClick={toggleLike}
                  className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 ${
                    isLiked
                      ? 'text-red-500'
                      : 'text-slate-600 dark:text-slate-300 hover:text-red-500'
                  }`}
                >
                  {isLiked ? <FaHeart /> : <FaRegHeart />}
                  {isLiked ? 'Liked' : 'Like'}
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-500 transition-colors duration-200">
                  <FaComment />
                  Comment
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-purple-500 transition-colors duration-200">
                  <FaShare />
                  Share
                </button>
                <button className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-red-500 transition-colors duration-200 ml-auto">
                  <FaFlag className="text-sm" />
                  Report
                </button>
              </div>
            </motion.div>

            {/* Comments Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
                <FaComment className="text-blue-500" />
                Comments ({post.comments})
              </h3>

              <div className="space-y-4">
                {comments.map((comment) => (
                  <motion.div
                    key={comment.id}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    className="p-3 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={comment.avatar}
                        alt={comment.name}
                        className="w-8 h-8 rounded-full object-cover border-2 border-white/30"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h5 className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                            {comment.name}
                          </h5>
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            Flat {comment.flat}
                          </span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">•</span>
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            {comment.time}
                          </span>
                        </div>
                        <p className="text-sm text-slate-700 dark:text-slate-200 mt-1">
                          {comment.text}
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                          <button
                            onClick={() => toggleCommentLike(comment.id)}
                            className={`flex items-center gap-1 text-xs transition-colors duration-200 ${
                              likedComments.includes(comment.id)
                                ? 'text-red-500'
                                : 'text-slate-400 dark:text-slate-500 hover:text-red-500'
                            }`}
                          >
                            {likedComments.includes(comment.id) ? (
                              <FaHeart className="text-xs" />
                            ) : (
                              <FaRegHeart className="text-xs" />
                            )}
                            <span>{likedComments.includes(comment.id) ? comment.likes + 1 : comment.likes}</span>
                          </button>
                          <button className="flex items-center gap-1 text-xs text-slate-400 dark:text-slate-500 hover:text-blue-500 transition-colors duration-200">
                            <FaReply className="text-xs" />
                            Reply
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Related Posts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaFire className="text-orange-500" />
                Related Posts
              </h3>
              <div className="space-y-3">
                {relatedPosts.map((post, index) => (
                  <Link
                    key={index}
                    to="/community/post"
                    className="block p-2.5 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-16 h-16 rounded-lg object-cover"
                        onError={handleImageError}
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-slate-800 dark:text-slate-100 line-clamp-2">
                          {post.title}
                        </p>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span className="flex items-center gap-1">
                            <FaHeart className="text-red-400 text-[10px]" />
                            {post.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <FaComment className="text-blue-400 text-[10px]" />
                            {post.comments}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Community Guidelines */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/5 dark:to-purple-500/5 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3 flex items-center gap-2">
                <FaShieldAlt className="text-emerald-500" />
                Community Guidelines
              </h3>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Be respectful and kind
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  No offensive content
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Respect privacy
                </li>
                <li className="flex items-start gap-2 text-slate-600 dark:text-slate-300">
                  <span className="text-emerald-500 text-xs mt-1">✓</span>
                  Keep it constructive
                </li>
              </ul>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -4 }}
              className="backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl p-5 shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Link
                  to="/community"
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
                >
                  <FaArrowLeft className="text-sm" />
                  Back to Community
                </Link>
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <FaShare className="text-sm" />
                  Share Post
                </button>
                <button className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-500 to-rose-400 text-white text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                  <FaFlag className="text-sm" />
                  Report Post
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Comment Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="fixed bottom-0 left-0 right-0 z-20 p-4 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-t border-white/20 dark:border-slate-700/20"
        >
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs shadow-lg shadow-blue-500/25">
              S
            </div>
            <input
              type="text"
              placeholder="Write a comment..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="flex-1 px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none"
            />
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors">
              <FaSmile />
            </button>
            <button className="p-2.5 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 hover:bg-white/70 dark:hover:bg-slate-700/50 transition-colors">
              <FaPaperclip />
            </button>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComment}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 flex items-center gap-2"
            >
              <FaPaperPlane className="text-sm" />
              Send
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom spacing for fixed comment input */}
        <div className="h-20" />
      </div>
    </div>
  );
};

export default PostDetails;