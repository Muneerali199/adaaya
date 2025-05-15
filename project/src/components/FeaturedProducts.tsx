import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Butterfly Dream Dress',
    price: 49.99,
    image: 'https://images.pexels.com/photos/5905933/pexels-photo-5905933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Dresses',
    isNew: true,
    isSale: false,
    discount: 0
  },
  {
    id: 2,
    name: 'Summer Breeze Top',
    price: 29.99,
    oldPrice: 39.99,
    image: 'https://images.pexels.com/photos/6347535/pexels-photo-6347535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Tops',
    isNew: false,
    isSale: true,
    discount: 25
  },
  {
    id: 3,
    name: 'Glitter Bow Hairband',
    price: 14.99,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Accessories',
    isNew: true,
    isSale: false,
    discount: 0
  },
  {
    id: 4,
    name: 'Blossom Pleated Skirt',
    price: 34.99,
    oldPrice: 44.99,
    image: 'https://images.pexels.com/photos/5706496/pexels-photo-5706496.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    category: 'Bottoms',
    isNew: false,
    isSale: true,
    discount: 22
  }
];

const FeaturedProducts = () => {
  const [activeTab, setActiveTab] = useState('All');
  
  const tabs = ['All', 'New Arrivals', 'Best Sellers', 'Sale'];
  
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Featured Products</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Discover our most popular styles that every girl loves
          </p>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-pink-500 text-white shadow-md'
                  : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* "View All" Button */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-3 bg-transparent border-2 border-pink-500 text-pink-500 rounded-full font-medium hover:bg-pink-500 hover:text-white transition-all duration-300">
            View All Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;