import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaMoon, FaSun, FaBell, FaUser, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState('Kolkata');
  const [selectedHousing, setSelectedHousing] = useState('Greenwood Towers');

  // Dummy data for dropdowns
  const cities = ['Kolkata', 'Delhi', 'Mumbai', 'Bangalore', 'Hyderabad'];
  const housingOptions = {
    Kolkata: ['Greenwood Towers', 'Lake Vista', 'Park Residency', 'Riverside', 'Citylight'],
    Delhi: ['Lotus Apartments', 'Orchid Heights', 'Silver Oak', 'Palm Grove', 'Sunrise'],
    Mumbai: ['Ocean Pearl', 'Royal Palm', 'Skyline', 'Marina Bay', 'Tower 21'],
    Bangalore: ['Gardenia', 'Prestige Park', 'Embassy', 'Sobha', 'Brigade'],
    Hyderabad: ['Cyber City', 'Gachibowli', 'Hitech', 'Jubilee', 'Banjara'],
  };

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Complaints', path: '/complaints' },
    { name: 'Marketplace', path: '/marketplace' },
    { name: 'Community', path: '/community' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark class on html element
    document.documentElement.classList.toggle('dark');
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-900/70 border-b border-white/20 dark:border-slate-700/30 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <NavLink to="/" className="flex-shrink-0">
            <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              🏡 Smart Housing Connect
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-white/30 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-2 md:space-x-3">
            {/* City Dropdown */}
            <div className="hidden sm:block">
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedHousing(housingOptions[e.target.value][0]);
                }}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg px-2 py-1.5 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            {/* Housing Dropdown */}
            <div className="hidden sm:block">
              <select
                value={selectedHousing}
                onChange={(e) => setSelectedHousing(e.target.value)}
                className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg px-2 py-1.5 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200"
              >
                {housingOptions[selectedCity]?.map((housing) => (
                  <option key={housing} value={housing}>{housing}</option>
                ))}
              </select>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all duration-200 text-slate-700 dark:text-slate-200"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <FaSun className="w-4 h-4" /> : <FaMoon className="w-4 h-4" />}
            </button>

            {/* Notification Icon */}
            <button className="p-2 rounded-full hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all duration-200 text-slate-700 dark:text-slate-200 relative">
              <FaBell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {/* Profile Icon */}
            <button className="p-2 rounded-full hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all duration-200 text-slate-700 dark:text-slate-200">
              <FaUser className="w-4 h-4" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/30 dark:hover:bg-slate-800/50 transition-all duration-200 text-slate-700 dark:text-slate-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-slate-200/20 dark:border-slate-700/30">
            <div className="flex flex-col space-y-2">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={handleMobileMenuClose}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-blue-500/10 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-white/30 dark:hover:bg-slate-800/50 hover:text-blue-600 dark:hover:text-blue-400'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              {/* Mobile dropdowns */}
              <div className="flex flex-col space-y-2 px-4 pt-2">
                <select
                  value={selectedCity}
                  onChange={(e) => {
                    setSelectedCity(e.target.value);
                    setSelectedHousing(housingOptions[e.target.value][0]);
                  }}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {cities.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <select
                  value={selectedHousing}
                  onChange={(e) => setSelectedHousing(e.target.value)}
                  className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-lg px-3 py-2 text-sm text-slate-700 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                >
                  {housingOptions[selectedCity]?.map((housing) => (
                    <option key={housing} value={housing}>{housing}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;