import React from 'react';
import { Instagram } from 'lucide-react';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/5693887/pexels-photo-5693887.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 432,
    comments: 43
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/6347880/pexels-photo-6347880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 512,
    comments: 24
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5693892/pexels-photo-5693892.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 321,
    comments: 19
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/6347897/pexels-photo-6347897.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 289,
    comments: 32
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/6760550/pexels-photo-6760550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 345,
    comments: 27
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/5693883/pexels-photo-5693883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    likes: 432,
    comments: 38
  }
];

const InstagramGallery = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram size={24} className="text-pink-500" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">Follow Our Instagram</h2>
          </div>
          <p className="mt-2 text-gray-600 max-w-xl mx-auto">
            Get inspired by our community and share your style with #STELLAZ
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <div 
              key={post.id}
              className="group relative aspect-square overflow-hidden"
            >
              <img 
                src={post.image}
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-pink-900/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="text-white text-center">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                      </svg>
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                      </svg>
                      <span>{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="#" 
            className="inline-flex items-center text-pink-500 hover:text-pink-600 font-medium"
          >
            <Instagram size={18} className="mr-2" />
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;