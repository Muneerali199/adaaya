import React from 'react';
import { motion } from 'framer-motion';
import { Timer, Percent, Tag } from 'lucide-react';

const saleProducts = [
  {
    id: 1,
    name: 'Summer Breeze Dress',
    price: 29.99,
    originalPrice: 49.99,
    discount: 40,
    image: 'https://images.pexels.com/photos/6347535/pexels-photo-6347535.jpeg',
    timeLeft: '2 days'
  },
  {
    id: 2,
    name: 'Sparkle Party Set',
    price: 34.99,
    originalPrice: 59.99,
    discount: 42,
    image: 'https://images.pexels.com/photos/5693892/pexels-photo-5693892.jpeg',
    timeLeft: '3 days'
  },
  {
    id: 3,
    name: 'Rainbow Tulle Skirt',
    price: 19.99,
    originalPrice: 39.99,
    discount: 50,
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg',
    timeLeft: '1 day'
  },
  {
    id: 4,
    name: 'Butterfly Hair Clips Set',
    price: 9.99,
    originalPrice: 24.99,
    discount: 60,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg',
    timeLeft: '4 days'
  },
  {
    id: 5,
    name: 'Magical Princess Dress',
    price: 39.99,
    originalPrice: 79.99,
    discount: 50,
    image: 'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg',
    timeLeft: '2 days'
  },
  {
    id: 6,
    name: 'Glitter Dreams Top',
    price: 14.99,
    originalPrice: 29.99,
    discount: 50,
    image: 'https://images.pexels.com/photos/6347885/pexels-photo-6347885.jpeg',
    timeLeft: '5 days'
  }
];

const Sale = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Sale Banner */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Summer Sale
            </h1>
            <p className="text-xl md:text-2xl text-pink-100 mb-8">
              Up to 60% off on selected items
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Timer className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">Limited Time</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Percent className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">Big Savings</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-lg">
                <Tag className="w-6 h-6 mb-2 mx-auto" />
                <p className="text-sm">Best Deals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Sale Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {saleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group"
              >
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute top-4 left-4 bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    -{product.discount}%
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Timer className="w-4 h-4 mr-1" />
                    {product.timeLeft}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-medium text-pink-500">${product.price}</span>
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  </div>
                  <button className="w-full py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">
            Don't Miss Out!
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter to stay updated with our latest sales and special offers
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button className="px-6 py-3 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sale;