import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../components/FeaturedProducts';
import ContactUs from '../components/ContactUs';
import AboutUs from '../components/AboutUs';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        style={{
          backgroundImage: 'url(/images/i-m-zion-Ya3r7oApP4g-unsplash.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
        className="text-white py-20 h-[80vh] flex items-center justify-center"
      >
        <div className="max-w-7xl mx-auto px-4 text-center bg-blue-50/10 w-full md:w-[50%] backdrop-blur-lg h-[60%] rounded-2xl p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-elegant mb-6">XE-Tech</h1>
          <p className="text-lg md:text-xl mb-8">Discover beautifully designed tech gadgets that combine style and functionality</p>
          <Link 
            to="/products" 
            className="relative inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-purple-600 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-200 transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 active:shadow-lg border-2 border-white mx-auto"
          >
            Shop Now
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Components */}
      <AboutUs />
      <FeaturedProducts />
      <ContactUs />
    </div>
  );
};

export default Home;