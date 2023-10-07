import React from 'react';
import { Element } from "react-scroll";

import { useRouter } from 'next/navigation';
const Home = () => {
 const router = useRouter();

 const handleClick = () => {
    router.push('/hotel');
 };

 return (
    <Element name="header" className="mt-12">
    <div className="mmx-auto px-2 sm:px-6 lg:px-8 flex items-center justify-center">
    
      <div className="header mh-[30rem] w-screen rounded-xl p-[11.5rem] text-white">
        <h1 className="text-2xl font-bold mt-4">Discover Extraordinary Comfort in Hotels</h1>
        <p className="mt-2">Experience the best in accommodations, services, and pricing.</p>
        <button
          onClick={handleClick}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors"
        >
          Explore Hotels
        </button>
      </div>
      
    </div>
    </Element>
 );
};

export default Home;
