import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  FaSearch,
  FaUser,
  FaUsers,
  FaClock,
  FaCircle,
  FaCheck,
  FaCheckDouble,
  FaPaperPlane,
  FaSmile,
  FaPaperclip,
  FaImage,
  FaMicrophone,
  FaEllipsisV,
  FaPhoneAlt,
  FaVideo,
  FaFile,
  FaCamera,
  FaArrowLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
  FaHome,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaShare,
  FaBookmark,
  FaRegBookmark,
  FaImage as FaImageIcon,
  FaUserCircle,
  FaBuilding,
  FaRegClock,
  FaInfoCircle,
  FaThumbsUp,
  FaSmileWink,
  FaHandshake,
  FaQuestionCircle,
} from 'react-icons/fa';

const ChatPreview = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState(0);
  const [messageText, setMessageText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    'Hello! 👋',
    'Thank you! 🙏',
    "I'm interested! 😊",
    'Can we meet? 🤝',
    'That sounds great! 👍',
    'When are you free? 🕐',
  ];

  const chats = [
    {
      id: 1,
      name: 'Priya Sharma',
      flat: 'B-205',
      block: 'B',
      avatar: 'https://i.pravatar.cc/150?img=1',
      online: true,
      lastMessage: 'Great! See you at 7 PM then.',
      time: '10:30 AM',
      unread: 2,
      pinned: true,
      memberSince: '2022',
      sharedFiles: [
        { name: 'Document.pdf', size: '2.4 MB', icon: <FaFile /> },
        { name: 'Image.jpg', size: '1.8 MB', icon: <FaImageIcon /> },
      ],
      sharedImages: [
        'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?w=200&h=200&fit=crop',
        'https://images.pexels.com/photos/4110252/pexels-photo-4110252.jpeg?w=200&h=200&fit=crop',
        'https://images.pexels.com/photos/6991224/pexels-photo-6991224.jpeg?w=200&h=200&fit=crop',
      ],
      messages: [
        { id: 1, sender: 'them', text: 'Hi! Are you coming to the Diwali celebration?', time: '10:00 AM', seen: true },
        { id: 2, sender: 'me', text: 'Yes, I\'ll be there with my family.', time: '10:10 AM', seen: true },
        { id: 3, sender: 'them', text: 'Perfect! I\'ve booked a table for us.', time: '10:15 AM', seen: true },
        { id: 4, sender: 'me', text: 'That\'s great. What time should we arrive?', time: '10:20 AM', seen: true },
        { id: 5, sender: 'them', text: 'Great! See you at 7 PM then.', time: '10:30 AM', seen: false },
      ]
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      flat: 'C-312',
      block: 'C',
      avatar: 'https://i.pravatar.cc/150?img=2',
      online: false,
      lastMessage: 'Sure, I\'ll share the documents.',
      time: '9:15 AM',
      unread: 0,
      pinned: false,
      memberSince: '2021',
      sharedFiles: [
        { name: 'Agenda.pdf', size: '1.2 MB', icon: <FaFile /> },
      ],
      sharedImages: [
        'https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?w=200&h=200&fit=crop',
      ],
      messages: [
        { id: 1, sender: 'them', text: 'Can you send me the meeting agenda?', time: '9:00 AM', seen: true },
        { id: 2, sender: 'me', text: 'Sure, I\'ll share the documents.', time: '9:15 AM', seen: true },
      ]
    },
    {
      id: 3,
      name: 'Sneha Patel',
      flat: 'D-408',
      block: 'D',
      avatar: 'https://i.pravatar.cc/150?img=3',
      online: true,
      lastMessage: 'The garden looks beautiful today! 🌸',
      time: 'Yesterday',
      unread: 3,
      pinned: true,
      memberSince: '2023',
      sharedFiles: [
        { name: 'Garden_Photos.zip', size: '5.6 MB', icon: <FaFile /> },
        { name: 'Plant_List.pdf', size: '0.8 MB', icon: <FaFile /> },
      ],
      sharedImages: [
        'https://images.pexels.com/photos/158028/pexels-photo-158028.jpeg?w=200&h=200&fit=crop',
        'https://images.pexels.com/photos/1394365/pexels-photo-1394365.jpeg?w=200&h=200&fit=crop',
        'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?w=200&h=200&fit=crop',
      ],
      messages: [
        { id: 1, sender: 'them', text: 'Have you seen the new flowers in the garden?', time: 'Yesterday 5:00 PM', seen: true },
        { id: 2, sender: 'me', text: 'Not yet, I\'ll check them out.', time: 'Yesterday 5:10 PM', seen: true },
        { id: 3, sender: 'them', text: 'The garden looks beautiful today! 🌸', time: 'Yesterday 5:30 PM', seen: false },
      ]
    },
    {
      id: 4,
      name: 'Amit Verma',
      flat: 'E-501',
      block: 'E',
      avatar: 'https://i.pravatar.cc/150?img=4',
      online: false,
      lastMessage: 'I\'ll join the meeting at 3 PM.',
      time: 'Yesterday',
      unread: 0,
      pinned: false,
      memberSince: '2020',
      sharedFiles: [],
      sharedImages: [],
      messages: [
        { id: 1, sender: 'me', text: 'Can you make it to the meeting?', time: 'Yesterday 2:00 PM', seen: true },
        { id: 2, sender: 'them', text: 'I\'ll join the meeting at 3 PM.', time: 'Yesterday 2:30 PM', seen: true },
      ]
    },
    {
      id: 5,
      name: 'Ananya Reddy',
      flat: 'G-703',
      block: 'G',
      avatar: 'https://i.pravatar.cc/150?img=5',
      online: true,
      lastMessage: 'Thanks for the help! 🙏',
      time: 'Yesterday',
      unread: 1,
      pinned: false,
      memberSince: '2021',
      sharedFiles: [],
      sharedImages: [
        'https://images.pexels.com/photos/6991224/pexels-photo-6991224.jpeg?w=200&h=200&fit=crop',
      ],
      messages: [
        { id: 1, sender: 'them', text: 'Can you help me with the community event?', time: 'Yesterday 11:00 AM', seen: true },
        { id: 2, sender: 'me', text: 'Of course! What do you need?', time: 'Yesterday 11:15 AM', seen: true },
        { id: 3, sender: 'them', text: 'Thanks for the help! 🙏', time: 'Yesterday 12:00 PM', seen: false },
      ]
    },
  ];

  const currentChat = chats[selectedChat];
  const onlineResidents = chats.filter(chat => chat.online);

  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);

  const scrollToBottom = () => {
    setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSendMessage = () => {
    if (messageText.trim()) {
      const newMessage = {
        id: currentChat.messages.length + 1,
        sender: 'me',
        text: messageText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        seen: false
      };
      currentChat.messages.push(newMessage);
      setMessageText('');
      scrollToBottom();

      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        const reply = {
          id: currentChat.messages.length + 1,
          sender: 'them',
          text: '👍 Got it!',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          seen: false
        };
        currentChat.messages.push(reply);
        scrollToBottom();
      }, 2000);
    }
  };

  const handleQuickReply = (reply) => {
    setMessageText(reply);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
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

  const messageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
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
              Community Chat
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Connect instantly with your neighbors.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {onlineResidents.length} online
            </span>
          </div>
        </motion.div>

        {/* Chat Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}
        >
          {/* Left Sidebar - Chat List */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
          >
            <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
              <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 text-sm" />
                <input
                  type="text"
                  placeholder="Search chats..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none text-sm"
                />
              </div>
            </div>

            <div className="overflow-y-auto h-full pb-20">
              {chats.map((chat, index) => (
                <motion.button
                  key={chat.id}
                  whileHover={{ x: 4 }}
                  onClick={() => setSelectedChat(index)}
                  className={`w-full flex items-start gap-3 p-3 transition-all duration-200 ${
                    selectedChat === index
                      ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-l-4 border-blue-500'
                      : 'hover:bg-white/30 dark:hover:bg-slate-800/30'
                  }`}
                >
                  <div className="relative flex-shrink-0">
                    <img
                      src={chat.avatar}
                      alt={chat.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/30 shadow-lg"
                    />
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0 text-left">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-100 truncate">
                        {chat.name}
                      </h4>
                      <span className="text-[10px] text-slate-400 dark:text-slate-500 flex-shrink-0">
                        {chat.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs text-slate-500 dark:text-slate-400 truncate flex-1">
                        {chat.lastMessage}
                      </span>
                      {chat.unread > 0 && (
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] font-bold flex items-center justify-center">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-0.5">
                      <FaHome className="text-[8px] text-slate-400" />
                      <span className="text-[10px] text-slate-400">Flat {chat.flat}</span>
                    </div>
                  </div>
                  {chat.pinned && (
                    <FaChevronDown className="text-xs text-slate-400 flex-shrink-0" />
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Chat Window */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 flex flex-col"
          >
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between bg-white/30 dark:bg-slate-800/30">
              <Link to="/community/residents" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <img
                  src={currentChat.avatar}
                  alt={currentChat.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white/30 shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    {currentChat.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                    <span>Flat {currentChat.flat}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600" />
                    <span className="flex items-center gap-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${currentChat.online ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                      {currentChat.online ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </Link>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaPhoneAlt className="text-sm" />
                </button>
                <button className="p-2 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaVideo className="text-sm" />
                </button>
                <button className="p-2 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaEllipsisV className="text-sm" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              <AnimatePresence>
                {currentChat.messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[70%] ${message.sender === 'me' ? 'order-2' : 'order-1'}`}>
                      <div
                        className={`p-3 rounded-2xl ${
                          message.sender === 'me'
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-br-none'
                            : 'bg-white/50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-200 rounded-bl-none border border-white/20 dark:border-slate-700/20'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <div className={`flex items-center gap-1 mt-1 ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">
                          {message.time}
                        </span>
                        {message.sender === 'me' && (
                          <span className="text-[10px] text-blue-400">
                            {message.seen ? <FaCheckDouble /> : <FaCheck />}
                          </span>
                        )}
                      </div>
                    </div>
                    {message.sender === 'them' && (
                      <div className="order-1 mr-2 flex-shrink-0">
                        <img
                          src={currentChat.avatar}
                          alt={currentChat.name}
                          className="w-8 h-8 rounded-full object-cover border-2 border-white/30 shadow-lg"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="flex items-start gap-2"
                >
                  <img
                    src={currentChat.avatar}
                    alt={currentChat.name}
                    className="w-8 h-8 rounded-full object-cover border-2 border-white/30 shadow-lg flex-shrink-0"
                  />
                  <div className="bg-white/50 dark:bg-slate-800/50 p-3 rounded-2xl rounded-bl-none border border-white/20 dark:border-slate-700/20">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Reply Suggestions */}
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {quickReplies.slice(0, 4).map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="px-3 py-1 rounded-full text-xs bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-700/50 transition-colors"
                >
                  {reply}
                </button>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50 bg-white/30 dark:bg-slate-800/30">
              <div className="flex items-center gap-2">
                <button className="p-2.5 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaSmile className="text-lg" />
                </button>
                <button className="p-2.5 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaPaperclip className="text-lg" />
                </button>
                <button className="p-2.5 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaImage className="text-lg" />
                </button>
                <button className="p-2.5 rounded-xl hover:bg-white/30 dark:hover:bg-slate-800/30 transition-colors text-slate-600 dark:text-slate-300">
                  <FaCamera className="text-lg" />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 px-4 py-2.5 bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-slate-700 dark:text-slate-200 placeholder-slate-400 dark:placeholder-slate-500 outline-none text-sm"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  <FaPaperPlane className="text-lg" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Sidebar */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-3 backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50"
          >
            <div className="p-4 border-b border-slate-200/50 dark:border-slate-700/50">
              <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">Conversation Info</h3>
            </div>

            <div className="p-4 overflow-y-auto h-full pb-20">
              {/* Resident Profile */}
              <div className="text-center mb-4">
                <div className="relative inline-block">
                  <img
                    src={currentChat.avatar}
                    alt={currentChat.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-lg mx-auto"
                  />
                  {currentChat.online && (
                    <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-800" />
                  )}
                </div>
                <Link to="/community/residents" className="block hover:opacity-80 transition-opacity">
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100 mt-2">
                    {currentChat.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Flat {currentChat.flat}</p>
                  <span className={`inline-block px-2 py-0.5 rounded-full text-xs mt-1 ${
                    currentChat.online
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800/30 dark:text-slate-300'
                  }`}>
                    {currentChat.online ? '🟢 Online' : '⚪ Offline'}
                  </span>
                </Link>
              </div>

              {/* Resident Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-sm">
                  <FaBuilding className="text-blue-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Block</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">{currentChat.block}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-sm">
                  <FaHome className="text-purple-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Flat Number</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">{currentChat.flat}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20 text-sm">
                  <FaCalendarAlt className="text-amber-500 text-sm" />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Member Since</p>
                    <p className="font-medium text-slate-700 dark:text-slate-200">{currentChat.memberSince}</p>
                  </div>
                </div>
              </div>

              {/* Shared Files */}
              {currentChat.sharedFiles.length > 0 && (
                <div className="mb-4">
                  <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Shared Files</h5>
                  <div className="space-y-2">
                    {currentChat.sharedFiles.map((file, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 rounded-xl bg-white/30 dark:bg-slate-800/30 border border-white/20 dark:border-slate-700/20">
                        <span className="text-blue-500 text-sm">{file.icon}</span>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs text-slate-700 dark:text-slate-200 truncate">{file.name}</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500">{file.size}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Shared Images */}
              {currentChat.sharedImages.length > 0 && (
                <div>
                  <h5 className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-2">Shared Images</h5>
                  <div className="grid grid-cols-3 gap-2">
                    {currentChat.sharedImages.map((image, index) => (
                      <div key={index} className="aspect-square rounded-lg overflow-hidden border border-white/20 dark:border-slate-700/20">
                        <img src={image} alt={`Shared ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Actions */}
              <div className="mt-4 space-y-2">
                <Link
                  to="/community/residents"
                  className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  <FaUserCircle className="text-sm" />
                  View Profile
                </Link>
                <button className="w-full py-2 rounded-xl bg-white/50 dark:bg-slate-800/50 border border-slate-200/50 dark:border-slate-700/50 text-slate-700 dark:text-slate-200 text-sm font-medium hover:bg-white/70 dark:hover:bg-slate-700/50 transition-all duration-300 flex items-center justify-center gap-2">
                  <FaShare className="text-sm" />
                  Share Contact
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ChatPreview;