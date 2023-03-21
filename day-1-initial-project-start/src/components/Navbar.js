import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBeer } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow sticky top-0 z-10">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center ">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <p className="text-xl font-bold text-gray-800 cursor-pointer">
              Home
            </p>
          </Link>
          <button
            className="md:hidden rounded-lg focus:outline-none focus:shadow-outline"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.293 13.293a1 1 0 0 1-1.414 0L10 11.414l-1.879 1.879a1 1 0 1 1-1.414-1.414L8.586 10 6.707 8.121a1 1 0 0 1 1.414-1.414L10 8.586l1.879-1.879a1 1 0 0 1 1.414 1.414L11.414 10l1.879 1.879a1 1 0 0 1 0 1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 9a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zM3 14a1 1 0 1 1 0-2h12a1 1 0 1 1 0 2H3z"
                />
              )}
            </svg>
          </button>
        </div>

        <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-3 md:mt-0 `}>
          <p className="block mt-4 md:inline-block md:mt-0 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500 cursor-pointer rounded-lg px-2 ">
            Account
          </p>

          <p className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500 cursor-pointer rounded-lg px-2 ">
            Shop
          </p>

          <button className="inline-block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800  hover:text-gray-100 hover:bg-blue-500 cursor-pointer rounded-lg px-2 ">
            <AiOutlineShoppingCart className="h-[2rem] w-[2rem] rounded-full" />
            <div className=" rounded-full bg-cyan-700 h-[1.5rem] w-[1.5rem] text-white flex justify-center align-middle">
              7
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
