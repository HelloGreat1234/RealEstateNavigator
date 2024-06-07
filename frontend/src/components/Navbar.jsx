import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end items-center h-16">
          <div className="flex w-1/3">
            <div className="flex items-center">
              <a href="/" className="text-xl font-semibold text-gray-800">
                Lauda Becho
              </a>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                href="/"
                className="text-gray-800 text-lg hover:text-gray-600 px-3 py-2 rounded-md font-semibold"
              >
                Home
              </a>
              <a
                href="/contact"
                className="text-gray-800 text-lg hover:text-gray-600 px-3 py-2 rounded-md font-semibold"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center w-1/3">
            <div className="w-auto">
              <input
                type="text"
                name="search"
                placeholder="Search"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center w-1/3 justify-end">
            <a
              href="/login"
              className="text-gray-800 text-lg hover:text-gray-600 px-3 py-2 rounded-md font-semibold"
            >
              Login
            </a>
            <a
              href="/signup"
              className="text-gray-800 text-lg hover:text-gray-600 px-3 py-2 rounded-md font-semibold"
            >
              Signup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
