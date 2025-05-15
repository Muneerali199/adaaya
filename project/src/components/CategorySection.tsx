import React from 'react';

const categories = [
  {
    id: 1,
    name: 'Dresses',
    image: 'https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Elegant styles for every occasion'
  },
  {
    id: 2,
    name: 'Tops',
    image: 'https://images.pexels.com/photos/1661471/pexels-photo-1661471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Fresh styles to brighten your look'
  },
  {
    id: 3,
    name: 'Accessories',
    image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'Complete your outfit with our accessories'
  }
];

const CategorySection = () => {
  return (
    <section className="py-20 px-4 overflow-hidden bg-gradient-to-b from-pink-50/50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-4">Shop By Category</h2>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Explore our curated collections, designed with love for every young fashionista
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div 
              key={category.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                    e.currentTarget.src = `https://via.placeholder.com/1260x750?text=${category.name}`;
                  }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/80 opacity-80 group-hover:opacity-90 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-serif font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 mb-6 text-sm group-hover:opacity-100 opacity-0 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                  {category.description}
                </p>
                <button className="inline-block py-2 px-5 bg-white text-pink-600 rounded-full text-sm font-medium transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150">
                  Explore Collection
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;