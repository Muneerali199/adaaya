import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 text-pink-400">STELLAZ</h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Creating magical fashion moments for every young girl. Our designs inspire confidence, joy, and self-expression.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Shop</h3>
            <ul className="space-y-3">
              {['New Arrivals', 'Best Sellers', 'Dresses', 'Tops', 'Accessories', 'Sale'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Info Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Information</h3>
            <ul className="space-y-3">
              {['About Us', 'Size Guide', 'Shipping Policy', 'Returns & Exchanges', 'Care Instructions', 'FAQs'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-pink-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Fashion Blvd, Style City, SC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-400">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-pink-400 flex-shrink-0" />
                <span className="text-gray-400">hello@stellaz.com</span>
              </li>
            </ul>
            
            {/* Opening Hours */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3 text-white">Customer Service Hours</h4>
              <p className="text-gray-400 text-sm">
                Monday to Friday: 9am - 6pm <br />
                Saturday: 10am - 4pm <br />
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 STELLAZ. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors">
              Shipping Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-pink-400 text-sm transition-colors">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;