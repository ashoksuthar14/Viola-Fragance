import React, { useState, useEffect } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";  // Import useNavigate from react-router-dom

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();  // Initialize useNavigate hook

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

  // Function to navigate to Home when "Viola Fragrance" is clicked
  const handleHomeClick = () => {
    navigate("/");  // Navigates to homepage
  };

  // Function to scroll to Product section
  const handleProductClick = () => {
    document.getElementById("product").scrollIntoView({ behavior: "smooth" });
  };

  // Function to scroll to Explore section
  const handleExploreClick = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };

  // Function to navigate to UserDashboard when account button is clicked
  const handleAccountClick = () => {
    navigate("/user-dashboard");
  };

  // Function to navigate to Cart page when cart icon is clicked
  const handleCartClick = () => {
    navigate("/cart");
  };

  return (
    <nav className="bg-[#060606] text-[#F5F5F5] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          {/* Home Button */}
          <h1
            className="text-xl font-bold cursor-pointer"
            onClick={handleHomeClick}  // Handle Home button click
          >
            Viola Fragrance
          </h1>

          {/* Navbar Links for Desktop */}
          {!isMobile && (
            <div className="hidden md:flex space-x-4">
              <button
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="Product"
                onClick={handleProductClick}  // Scroll to Product Section
              >
                Product
              </button>
              <button
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="Explore"
                onClick={handleExploreClick}  // Scroll to Explore Section
              >
                Explore
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
              <button
                onClick={handleCartClick}  // Handle Cart button click
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="Shopping Cart"
              >
                <FaShoppingCart />
              </button>
              <button
                onClick={handleAccountClick}  // Handle Account button click
                className="hover:text-purple-400 transition-colors duration-300"
                aria-label="User Account"
              >
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

      {/* Navbar for Mobile View */}
      {isMobile && isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2">
          <button
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Product"
            onClick={handleProductClick}  // Scroll to Product Section
          >
            Product
          </button>
          <button
            className="hover:text-purple-400 transition-colors duration-300"
            aria-label="Explore"
            onClick={handleExploreClick}  // Scroll to Explore Section
          >
            Explore
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
