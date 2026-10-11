import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  // Yeh function check karega ke user kis page par hai, aur us link ko blue kar dega
  const isActive = (path) => {
    return location.pathname === path 
      ? "text-blue-400 font-bold" 
      : "text-gray-300 hover:text-white transition-colors";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold text-white flex items-center gap-2">
          🚚 SwiftLogistics <span className="text-blue-500">Pro</span>
        </Link>

        {/* Center Links (Home, About, etc.) */}
        <div className="hidden md:flex gap-8 font-medium">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About Us</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/help" className={isActive('/help')}>Help & FAQ</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
        </div>

        {/* Sign In Button */}
        <Link 
          to="/login" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
        >
          Sign In / Join
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;