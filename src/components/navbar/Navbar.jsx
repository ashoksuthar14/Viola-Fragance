import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#060606] text-[#F5F5F5] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <h1 className="text-xl font-bold">Viola Fragrance</h1>
          {!isMobile && (
            <div className="hidden md:flex space-x-4">
              <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Explore">
                Explore
              </button>
              <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Product">
                Product
              </button>
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {!isMobile ? (
            <>
              <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Search">
                <FaSearch />
              </button>
              <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Shopping Cart">
                <FaShoppingCart />
              </button>
              <button className="hover:text-purple-400 transition-colors duration-300" aria-label="User Account">
                <FaUser />
              </button>
            </>
          ) : (
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          )}
        </div>
      </div>

      {isMobile && isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2">
          <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Explore">
            Explore
          </button>
          <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Product">
            Product
          </button>
          <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Search">
            <FaSearch className="inline mr-2" /> Search
          </button>
          <button className="hover:text-purple-400 transition-colors duration-300" aria-label="Shopping Cart">
            <FaShoppingCart className="inline mr-2" /> Cart
          </button>
          <button className="hover:text-purple-400 transition-colors duration-300" aria-label="User Account">
            <FaUser className="inline mr-2" /> Account
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;