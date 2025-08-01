import React, { useState } from 'react';
import Logo from '../assets/Orvion.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white px-16 py-4.5 w-[90%] mx-auto rounded-xl  shadow-sm mt-4 ">
        <div className=" mx-auto flex items-center justify-between space-x-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            {/* <div className="w-12 h-[100%] rounded-full flex items-center justify-center">
             <img src={Logo} alt="Logo" className="object-fill" />
            </div> */}
            <span className="text-2xl font-semibold text-gray-900">
              O<span className="text-blue-600 font-bold">rvion</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold transition-transform text-[1.1rem] ">Home</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold transition-transform text-[1.1rem]">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold transition-transform text-[1.1rem]">Our Processes</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold transition-transform text-[1.1rem]">About</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 hover:font-semibold transition-transform text-[1.1rem]">Contact</a>
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition-colors">
            Get Call
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          ></div>
          
          {/* Slide-out Menu */}
          <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden">
            <div className="p-4 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    space<span className="text-blue-600">lance</span>
                  </span>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="p-1 rounded hover:bg-gray-100"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <a href="#" className="block text-blue-600 font-medium py-2">Home</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Find work</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Find Freelancers</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Log In</a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 py-2">Sign Up</a>
              
              <div className="pt-4 border-t border-gray-100">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors">
                  Post a project
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;