import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Heart, Search, Menu, X, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/collection', label: 'Collection' },
    { path: '/new-arrivals', label: 'New Arrivals' },
    { path: '/sale', label: 'Sale' },
    { path: '/about', label: 'About' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-2 md:py-3' 
          : 'bg-transparent py-3 md:py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/" className="block">
              <h1 className={`text-xl md:text-2xl font-serif ${isScrolled ? 'text-pink-600' : 'text-white'} font-bold tracking-wider`}>
                Adaaya
              </h1>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  isScrolled 
                    ? isActive(item.path)
                      ? 'text-pink-600'
                      : 'text-gray-700 hover:text-pink-600'
                    : isActive(item.path)
                      ? 'text-pink-200'
                      : 'text-white hover:text-pink-200'
                } font-medium text-sm transition-colors`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          
          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-end">
            <button className={`${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>
              <Search size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>
              <User size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'}`}>
              <Heart size={20} />
            </button>
            <button className={`${isScrolled ? 'text-gray-700 hover:text-pink-600' : 'text-white hover:text-pink-200'} relative`}>
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} p-1`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 py-4 border-t border-pink-100">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-gray-700 hover:text-pink-600 font-medium py-1 ${
                    isActive(item.path) ? 'text-pink-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center space-x-6 mt-4 pt-4 border-t border-pink-100">
              <button className="text-gray-700 hover:text-pink-600">
                <Search size={20} />
              </button>
              <button className="text-gray-700 hover:text-pink-600">
                <User size={20} />
              </button>
              <button className="text-gray-700 hover:text-pink-600">
                <Heart size={20} />
              </button>
              <button className="text-gray-700 hover:text-pink-600 relative">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;