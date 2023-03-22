import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { numberOfProductsInCart } = useSelector((state) => state.cart);

  return (
    <nav className="bg-white shadow sticky top-0 z-10 mx-auto">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-evenly md:items-center ">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2  border-blue-500 " : ""
            }
          >
            <p className="text-xl font-bold text-gray-800 cursor-pointer">
              Home
            </p>
          </NavLink>

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

        <div id="searchBar" class="flex justify-center">
          <div class="xl:w-96">
            <div class="relative flex w-full flex-wrap items-stretch">
              <input
                type="search"
                class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-slate-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="button-addon3"
              />
              <button
                class="relative z-[2] rounded-r border-2 border-slate-500 px-6 py-2 text-xs font-medium uppercase text-primary transition duration-150 ease-in-out hover:bg-cyan-700 hover:text-white focus:outline-none focus:ring-0"
                type="button"
                id="button-addon3"
                data-te-ripple-init
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className={`md:flex ${isOpen ? "block" : "hidden"} mt-3 md:mt-0 `}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "border-b-2  border-blue-500 " : ""
            }
          >
            <p className="block mt-4 md:inline-block md:mt-0 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500 cursor-pointer rounded-lg px-2 ">
              All products
            </p>
          </NavLink>
          <NavLink
            to="/contactus"
            className={({ isActive }) =>
              isActive ? "border-b-2  border-blue-500 " : ""
            }
          >
            <p className="block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800 p-2 hover:text-gray-100 hover:bg-blue-500 cursor-pointer rounded-lg px-2 ">
              Contact us
            </p>
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive ? "border-b-2  border-blue-500 " : ""
            }
          >
            <button className="inline-block mt-4 md:inline-block md:mt-0 mr-6 text-gray-800  hover:text-gray-100 hover:bg-blue-400 cursor-pointer rounded-lg px-2 ">
              <AiOutlineShoppingCart className="h-[2rem] w-[2rem] rounded-full" />
              <div className=" rounded-full bg-cyan-700 h-[1.5rem] w-[1.5rem] text-white flex justify-center align-middle">
                {numberOfProductsInCart}
              </div>
            </button>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
