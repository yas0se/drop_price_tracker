import React from 'react'
import Header from '../components/header'

const AboutPage = () => {
  return (
    <div>
      <Header />
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600">Our WebSite</span>
            </h2>
            <p className="text-gray-700">
              At Price Tracker, our mission is simple yet ambitious:
              to make online shopping smarter and more cost-effective for everyone.
              We understand how frustrating it can be to track price changes across various e-commerce sites.
              That's why we created an innovative solution to help you monitor price drops on your favorite
              products, all while providing an intuitive and enjoyable user experience.
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AboutPage
