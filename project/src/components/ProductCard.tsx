import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

interface ProductProps {
  product: {
    id: number;
    name: string;
    price: number;
    oldPrice?: number;
    image: string;
    category: string;
    isNew: boolean;
    isSale: boolean;
    discount: number;
  };
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="aspect-[3/4] overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Product Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-teal-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              New
            </span>
          )}
          
          {product.isSale && (
            <span className="bg-pink-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              {product.discount}% Off
            </span>
          )}
        </div>
        
        {/* Quick actions */}
        <div className={`absolute right-3 top-3 flex flex-col gap-2 transform transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className={`p-2 rounded-full shadow-md backdrop-blur-sm transition-colors ${
              isFavorite 
                ? 'bg-pink-500 text-white' 
                : 'bg-white/80 text-gray-700 hover:bg-pink-500 hover:text-white'
            }`}
          >
            <Heart size={18} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          
          <button className="p-2 rounded-full bg-white/80 text-gray-700 shadow-md backdrop-blur-sm hover:bg-pink-500 hover:text-white transition-colors">
            <Eye size={18} />
          </button>
        </div>
      </div>
      
      {/* Product Info */}
      <div className="mt-4 flex flex-col">
        <div>
          <h3 className="text-gray-700 font-medium">{product.name}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
        </div>
        
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-medium text-pink-600">${product.price.toFixed(2)}</span>
            {product.oldPrice && (
              <span className="text-sm text-gray-400 line-through">${product.oldPrice.toFixed(2)}</span>
            )}
          </div>
          
          <button 
            className={`p-2 rounded-full shadow-sm text-white bg-pink-500 transform transition-all duration-300 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      {/* Add to Cart Overlay */}
      <div 
        className={`absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
          isHovered ? 'opacity-0' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button className="bg-pink-500 text-white px-6 py-2 rounded-full font-medium transform hover:scale-105 transition-transform">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;