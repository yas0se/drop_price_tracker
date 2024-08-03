"use client";

import { useState } from 'react';
import HeaderServer from './HeaderServer';

const Header = async () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header className="flex shadow-sm py-3 px-4 sm:px-10 bg-white font-[sans-serif] min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        <a onClick={(e) => e.preventDefault()}>
          <img src="https://pricetrackerdata.com/priceTrackerLogo.png" alt="logo" className="w-36" />
        </a>

        <div
          id="collapseMenu"
          className={`${isMenuOpen ? 'block' : 'hidden'
            } max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li key="Home" className="max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300">
              <a href="/" className="text-black block text-[15px]">Home</a>
            </li>

            {['Products', 'Add-Product', 'About', 'Contact'].map((item) => (
              <li key={item} className="max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:after:absolute lg:after:bg-black lg:after:w-full lg:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300">
                <a href={`/${item.toLowerCase()}`} className="text-black block text-[15px]">{item}</a>
              </li>
            ))}
          </ul>

        </div>
        <div className="flex items-center max-sm:ml-auto space-x-6">
          <HeaderServer />
        </div>
      </div>
    </header>
  );
};

export default Header;
