import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'VOX Creative', path: '/' },
    { name: 'VOX Agents', path: '#' },
    { name: 'VOX API', path: '#' },
    { name: 'Resources', path: '#' },
    { name: 'Enterprise', path: '#' },
    { name: 'Pricing', path: '/pricing' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-black/5">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 md:px-8 h-20">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-black">VOX</Link>
          <div className="hidden lg:flex gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`font-medium text-sm tracking-tight transition-colors ${
                  location.pathname === link.path 
                    ? 'text-black border-b-2 border-black pb-1' 
                    : 'text-tertiary hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login" className="font-medium text-sm tracking-tight text-tertiary hover:text-black px-4 py-2 transition-all">Login</Link>
            <Link 
              to="/login"
              className="bg-black text-white px-6 py-2.5 rounded-full font-semibold text-sm tracking-tight hover:opacity-90 transition-all inline-block"
            >
              Sign Up
            </Link>
          </div>
          
          <button 
            className="lg:hidden p-2 text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-black/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-lg tracking-tight transition-colors ${
                    location.pathname === link.path ? 'text-black' : 'text-tertiary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-black/5 my-2" />
              <Link 
                to="/login" 
                onClick={() => setIsMenuOpen(false)}
                className="font-medium text-lg tracking-tight text-tertiary"
              >
                Login
              </Link>
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="bg-black text-white px-6 py-4 rounded-full font-semibold text-center text-lg tracking-tight hover:opacity-90 transition-all"
              >
                Sign Up
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
