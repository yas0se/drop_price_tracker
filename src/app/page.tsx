import React from 'react'
import Header from './components/header'


const HomePage = () => {
  return (
    <div>
      <Header/>
      <div className="relative bg-gradient-to-r from-purple-900 to-indigo-800 py-16 font-[sans-serif]">
  <div className="absolute inset-0">
    <img
      src="https://readymadeui.com/cardImg.webp"
      alt="Background Image"
      className="w-full h-full object-cover opacity-50"
    />
  </div>
  <div className="relative max-w-screen-xl mx-auto px-8 z-10 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
      Welcome to your Price Tracker
    </h1>
    <p className="text-lg md:text-xl mb-12">
      Experience excellence like never before with our exclusive
      services.
      <br />
      Press Get Started to add your first product to track.
    </p>
    <a
      type="button"
      className="bg-indigo-600 hover:bg-indigo-700 text-white text-base tracking-wide px-6 py-3 rounded-full transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
    href="/add-product"
    >
      Get Started
    </a>
  </div>
</div>

    </div>
  )
}

export default HomePage
