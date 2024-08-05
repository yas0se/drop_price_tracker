"use client"
import React, { useState } from 'react';
import Header from '../components/header';

const AddProductPage = () => {
  const [productLink, setProductLink] = useState('');
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductLink(e.target.value);
  }

  return (
    <div>
      <Header />
      <div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Track Your Products in Real Time
          </h2>
          <p className="text-base text-gray-300">
            Stay informed about the latest price changes and availability of your by adding your Amazon product link.
          </p>
          <form action="/api/products" method="POST" className="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md max-w-xl mx-auto">
            <input
              type="url"
              name="url"
              value={productLink}
              onChange={handleInputChange}
              placeholder="Enter your product link"
              className="w-full bg-transparent py-3.5 px-4 text-gray-800 text-base focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#a91079] hover:bg-[#a91079e2] text-white text-base tracking-wide py-3.5 px-6 hover:shadow-md hover:transition-transform transition-transform hover:scale-105 focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
