import { useState } from 'react';
import { motion } from 'framer-motion';
import { Filter, ChevronDown } from 'lucide-react';

const categories = ['All', 'Dresses', 'Tops', 'Bottoms', 'Accessories'];
const sizes = ['All Sizes', '2-3Y', '4-5Y', '6-7Y', '8-9Y', '10-11Y'];
const colors = ['All Colors', 'Pink', 'Purple', 'Blue', 'White', 'Yellow'];
const sortOptions = ['Newest', 'Price: Low to High', 'Price: High to Low', 'Popular'];

// Conversion rate: 1 USD = 83 INR (adjust as needed)
const USD_TO_INR = 83;

const products = [
  {
    id: 1,
    name: 'Butterfly Dream Dress',
    price: 49.99,
    image: 'src/assets/product1.jpg',
    category: 'Dresses',
  },
  {
    id: 2,
    name: 'Rainbow Tulle Skirt',
    price: 34.99,
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg',
    category: 'Bottoms',
  },
  {
    id: 3,
    name: 'Sparkle Party Top',
    price: 29.99,
    image: 'https://images.pexels.com/photos/6347885/pexels-photo-6347885.jpeg',
    category: 'Tops',
  },
];

const Collection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Function to convert USD to INR
  const convertToINR = (usd: number) => (usd * USD_TO_INR).toFixed(2);

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="bg-pink-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 text-center mb-4">
            Our Collection
          </h1>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Discover our magical collection of girls' clothing, designed to inspire confidence and joy
          </p>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <motion.div
            className="lg:w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="flex items-center justify-between lg:justify-start gap-2 mb-6">
                <Filter size={20} className="text-gray-600" />
                <h2 className="font-medium text-gray-800">Filters</h2>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-800 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? 'bg-pink-500 text-white'
                          : 'hover:bg-pink-50 text-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-8">
                <h3 className="font-medium text-gray-800 mb-4">Size</h3>
                <div className="grid grid-cols-2 gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="px-3 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:border-pink-500 hover:text-pink-500 transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div>
                <h3 className="font-medium text-gray-800 mb-4">Color</h3>
                <div className="space-y-2">
                  {colors.map((color) => (
                    <button
                      key={color}
                      className="block w-full text-left px-3 py-2 text-gray-600 hover:text-pink-500 transition-colors"
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Sort Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
              <p className="text-gray-600">
                Showing <span className="font-medium text-gray-800">24</span> products
              </p>

              <div className="relative">
                <select
                  className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-gray-600 focus:outline-none focus:border-pink-500"
                >
                  {sortOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            {/* Products */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-medium text-gray-800 mb-2">{product.name}</h3>
                      <p className="text-pink-500 font-medium">₹{convertToINR(product.price)}</p>
                      <button className="mt-4 w-full py-2 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center px-8 py-3 border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;