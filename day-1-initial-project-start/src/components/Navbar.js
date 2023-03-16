import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-gray-800">
            React Ecommerce Store
          </p>
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

        <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-3 md:mt-0`}>
          <p className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500">
            Shop
          </p>
          <p className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500">
            Cart
          </p>
          <p className="block mt-4 md:inline-block md:mt-0 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500">
            Account
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
