import React from 'react';
import { motion } from 'framer-motion';
import { FaStore, FaUser, FaMapMarkerAlt, FaEye } from 'react-icons/fa';

const MarketplacePreview = () => {
  const products = [
    {
      id: 1,
      title: 'Sofa Set',
      price: '₹18,000',
      condition: 'Like New',
      category: 'Furniture',
      seller: 'Priya Sharma',
      housing: 'Greenwood Towers',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop&q=80',
      gradient: 'from-blue-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Car Parking Slot',
      price: '₹2,50,000',
      condition: 'Available',
      category: 'Parking',
      seller: 'Rahul Verma',
      housing: 'Lake Vista',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&h=300&fit=crop&q=80',
      gradient: 'from-purple-500 to-pink-400',
    },
    {
      id: 3,
      title: '3BHK Flat',
      price: '₹85 Lakhs',
      condition: 'Ready to Move',
      category: 'Property',
      seller: 'Amit Kumar',
      housing: 'Park Residency',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop&q=80',
      gradient: 'from-amber-500 to-orange-400',
    },
    {
      id: 4,
      title: 'Laptop',
      price: '₹42,000',
      condition: 'Excellent',
      category: 'Electronics',
      seller: 'Sneha Patel',
      housing: 'Riverside',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=300&fit=crop&q=80',
      gradient: 'from-emerald-500 to-teal-400',
    },
    {
      id: 5,
      title: 'Bicycle',
      price: '₹8,000',
      condition: 'Good',
      category: 'Vehicles',
      seller: 'Vikram Singh',
      housing: 'Citylight',
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=400&h=300&fit=crop&q=80',
      gradient: 'from-red-500 to-rose-400',
    },
    {
      id: 6,
      title: 'Smart TV',
      price: '₹28,000',
      condition: 'Like New',
      category: 'Electronics',
      seller: 'Ananya Reddy',
      housing: 'Lotus Apartments',
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=300&fit=crop&q=80',
      gradient: 'from-indigo-500 to-violet-400',
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

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 dark:bg-blue-400/10 text-blue-600 dark:text-blue-400 text-sm font-medium tracking-wider mb-4">
            MARKETPLACE
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Community{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Marketplace
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Buy, sell or rent items safely within your residential complex.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
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
                  background: `linear-gradient(135deg, ${product.gradient.split(' ')[0]}, ${product.gradient.split(' ')[2]})`,
                }}
              />

              {/* Card */}
              <div className="relative h-full backdrop-blur-xl bg-white/50 dark:bg-slate-900/50 border border-white/30 dark:border-slate-700/30 rounded-2xl overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-slate-800/50 hover:shadow-2xl transition-all duration-300">
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, ${product.gradient.split(' ')[0]}, ${product.gradient.split(' ')[2]})`,
                  }}
                >
                  <div className="h-full w-full rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl" />
                </div>

                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${product.gradient} text-white shadow-lg`}>
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 relative z-10">
                  {/* Title & Price */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                      {product.title}
                    </h3>
                    <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      {product.price}
                    </span>
                  </div>

                  {/* Condition Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {product.condition}
                    </span>
                  </div>

                  {/* Seller & Housing */}
                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <FaUser className="text-xs text-blue-500" />
                      <span>{product.seller}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <FaMapMarkerAlt className="text-xs text-purple-500" />
                      <span>{product.housing}</span>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-2.5 rounded-xl bg-gradient-to-r ${product.gradient} text-white font-medium text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2`}
                  >
                    <FaEye className="text-xs" />
                    View Details
                  </motion.button>
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
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:shadow-2xl flex items-center gap-2 mx-auto"
          >
            <FaStore className="text-lg" />
            Explore Marketplace
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketplacePreview;