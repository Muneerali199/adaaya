import React from 'react';
import Hero from '../components/Hero';
import CategorySection from '../components/CategorySection';
import FeaturedProducts from '../components/FeaturedProducts';
import NewArrivalsSection from '../components/NewArrivals';
import InstagramGallery from '../components/InstagramGallery';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <>
      <Hero />
      <CategorySection />
      <FeaturedProducts />
      <NewArrivalsSection />
      <InstagramGallery />
      <Newsletter />
    </>
  );
};

export default Home;