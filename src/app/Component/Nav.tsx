"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaSearch, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <div className="mt-3 mb-3">
        {/* Navbar Container */}
        <div className="flex items-center justify-between max-w-7xl mx-auto px-4">

          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <Image src="/images/logo.png" alt="logo" width={50} height={32} />
            <h2 className="text-[28px] md:text-[34px] font-bold">Furniro</h2>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <HiX
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <HiMenu
                className="text-2xl cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:space-x-8 md:w-auto md:bg-transparent">
            <li className="cursor-pointer font-bold hover:text-gray-600">Home</li>
            <li className="cursor-pointer font-bold hover:text-gray-600">Shop</li>
            <li className="cursor-pointer font-bold hover:text-gray-600">Blog</li>
            <li className="cursor-pointer font-bold hover:text-gray-600">Contact</li>
          </ul>

          {/* Desktop Icons - Fixed to one line */}
          <div className="hidden md:flex items-center space-x-4">
            <FaUser className="text-gray-700 cursor-pointer" />
            <FaSearch className="text-gray-700 cursor-pointer" />
            <FaHeart className="text-gray-700 cursor-pointer" />
            <FaCartShopping className="text-gray-700 cursor-pointer" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-100 w-full absolute left-0 top-[60px] z-50">
            <ul className="flex flex-col space-y-2 p-4">
              <li
                className="cursor-pointer font-bold py-2 px-4 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </li>
              <li
                className="cursor-pointer font-bold py-2 px-4 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </li>
              <li
                className="cursor-pointer font-bold py-2 px-4 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </li>
              <li
                className="cursor-pointer font-bold py-2 px-4 hover:bg-gray-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Nav;

