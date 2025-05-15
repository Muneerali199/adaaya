import React from 'react';
import { Link } from 'react-router-dom';

const Success: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">
        Thank you for your purchase! You'll receive an order confirmation soon.
      </p>
      <Link
        to="/collection"
        className="inline-flex items-center px-8 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition-all duration-300"
      >
        Continue Shopping
      </Link>
    </div>
  );
};

export default Success;