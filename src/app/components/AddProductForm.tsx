"use client"
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';
import Header from '../components/header';

const AddProductPage = () => {
  const [productLink, setProductLink] = useState('');
  const { data: session } = useSession();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductLink(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Empêche la soumission du formulaire par défaut

    if (!productLink) {
      alert('Please enter a product link');
      return;
    }

    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: productLink }),
      });

      if (response.ok) {
        const product = await response.json();
        alert('Product added successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Failed to add product. Please try again.');
    }
  };

  return (
    <div>
      <Header  />
      <div className="bg-[#2e0249] py-16 px-6 font-[sans-serif]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-white">
            Track Your Products in Real Time
          </h2>
          <p className="text-base text-gray-300">
            Stay informed about the latest price changes and availability of your by adding your Amazon product link.
          </p>
          <form onSubmit={handleSubmit} className="mt-12 flex items-center overflow-hidden bg-gray-50 rounded-md max-w-xl mx-auto">
            <input
              type="url"
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
