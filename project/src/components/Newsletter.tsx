import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-pink-100 to-purple-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-pink-200 rounded-full opacity-60 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-200 rounded-full opacity-60 blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 flex flex-col justify-center">
              <h2 className="text-3xl font-serif font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
              <p className="text-gray-600 mb-6">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-300 focus:border-pink-500 outline-none transition-all"
                  />
                </div>
                
                <div className="flex items-center">
                  <input
                    id="offers"
                    name="offers"
                    type="checkbox"
                    className="h-4 w-4 text-pink-500 border-gray-300 rounded focus:ring-pink-400"
                  />
                  <label htmlFor="offers" className="ml-2 block text-sm text-gray-600">
                    I want to receive exclusive offers and promotions
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-pink-500 text-white font-medium py-3 px-4 rounded-lg hover:bg-pink-600 transition-colors duration-300 transform hover:scale-[1.02]"
                >
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-gray-500 text-sm mt-4">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </div>
            
            <div className="hidden md:block relative">
              <img
                src="https://images.pexels.com/photos/5693939/pexels-photo-5693939.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt="Young girl in fashionable outfit"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/30 to-purple-500/30 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;