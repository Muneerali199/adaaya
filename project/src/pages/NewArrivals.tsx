import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Gift } from 'lucide-react';

const newProducts = [
  {
    id: 1,
    name: 'Enchanted Garden Dress',
    price: 59.99,
    image: 'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg',
    description: 'A magical dress featuring delicate floral patterns and sparkly details.',
    colors: ['Pink', 'Purple', 'White'],
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y']
  },
  {
    id: 2,
    name: 'Rainbow Dreams Set',
    price: 44.99,
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg',
    description: 'Colorful two-piece set perfect for playtime and special occasions.',
    colors: ['Rainbow', 'Blue', 'Pink'],
    sizes: ['3-4Y', '5-6Y', '7-8Y']
  },
  {
    id: 3,
    name: 'Sparkle & Shine Top',
    price: 34.99,
    image: 'https://images.pexels.com/photos/6347885/pexels-photo-6347885.jpeg',
    description: 'Glittery top that brings magic to any outfit.',
    colors: ['Gold', 'Silver', 'Rose Gold'],
    sizes: ['4-5Y', '6-7Y', '8-9Y']
  }
];

const features = [
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Premium Quality',
    description: 'Made with the finest materials for comfort and durability'
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Fast Delivery',
    description: 'Quick shipping to bring the magic to your doorstep'
  },
  {
    icon: <Gift className="w-6 h-6" />,
    title: 'Special Packaging',
    description: 'Each item comes beautifully wrapped for an extra special touch'
  }
];

const NewArrivals = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-pink-100 to-purple-100 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-300 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-4">
              New Arrivals
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our latest collection of magical pieces designed to make every girl feel special
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-pink-100 text-pink-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Available Colors:</p>
                    <div className="flex gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="px-3 py-1 text-xs bg-pink-100 text-pink-600 rounded-full"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Available Sizes:</p>
                    <div className="flex flex-wrap gap-2">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-3 py-1 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-medium text-pink-500">${product.price}</span>
                    <button className="px-6 py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;