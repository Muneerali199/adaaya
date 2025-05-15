import React, { useRef, useEffect } from 'react';

const newArrivals = [
  {
    id: 1,
    name: 'Floral Fantasy Dress',
    price: 54.99,
    image: 'https://images.pexels.com/photos/5560019/pexels-photo-5560019.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 2,
    name: 'Rainbow Delight Top',
    price: 32.99,
    image: 'https://images.pexels.com/photos/5693889/pexels-photo-5693889.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 3,
    name: 'Shimmer Party Set',
    price: 64.99,
    image: 'https://images.pexels.com/photos/6347885/pexels-photo-6347885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 4,
    name: 'Butterfly Bloom Hairclips',
    price: 19.99,
    image: 'https://images.pexels.com/photos/459957/pexels-photo-459957.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  },
  {
    id: 5,
    name: 'Sparkle Princess Shoes',
    price: 44.99,
    image: 'https://images.pexels.com/photos/6766284/pexels-photo-6766284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  }
];

const NewArrivals = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleScroll = () => {
    if (!containerRef.current) return;
    
    const items = containerRef.current.querySelectorAll('.arrival-item');
    const containerTop = containerRef.current.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;
    
    if (containerTop < triggerPoint) {
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 150);
      });
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <section className="py-20 px-4 bg-pink-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">New Arrivals</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Fresh styles just landed to elevate your wardrobe
          </p>
        </div>
        
        <div 
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {newArrivals.map((item, index) => (
            <div 
              key={item.id} 
              className={`arrival-item opacity-0 translate-y-12 transition-all duration-700 ease-out ${index % 2 === 0 ? 'delay-100' : 'delay-300'}`}
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-pink-600 font-medium">${item.price}</p>
                  
                  <button className="mt-4 w-full py-2.5 bg-pink-500 text-white rounded-lg font-medium hover:bg-pink-600 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;