import React from 'react';
//import Image from 'next/image';
//import { FaEnvelope } from 'react-icons/fa';

const Newsletter = () => {
 return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Subscribe to our newsletter</h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Sign up for our newsletter to receive updates on new hotels, promotions, and special offers.
          </p>
        </div>
        <div className="mt-12 sm:mt-16 md:mt-0">
          <div className="sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
            <div className="relative flex items-stretch bg-white rounded-lg shadow-lg overflow-hidden">
              <input
                type="email"
                name="email"
                id="email"
                className="w-full px-6 py-3 text-lg text-gray-700 bg-transparent border-0 focus:outline-none"
                placeholder="Enter your email here"
              />
              <button
                type="submit"
                className="flex items-center justify-center w-56 px-6 py-3 text-base font-medium text-white bg-blue-600 border border-transparent rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Newsletter;