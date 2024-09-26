import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // For left-right arrows

// Mock data for image sliders
const menImages = [
  "src/assets/per1.png",
  "src/assets/per1.png",
  "src/assets/per1.png",
  
];

const womenImages = [
  "src/assets/per1.png",
  "src/assets/per1.png",
  "src/assets/per1.png",
  
  
];

const ProductSection = () => {
  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);
  const navigate = useNavigate();

  // Auto slide every 5 seconds for Men's Perfume
  useEffect(() => {
    const menInterval = setInterval(() => {
      setMenIndex((prevIndex) => (prevIndex + 1) % menImages.length);
    }, 5000);
    return () => clearInterval(menInterval);
  }, []);

  // Auto slide every 5 seconds for Women's Perfume
  useEffect(() => {
    const womenInterval = setInterval(() => {
      setWomenIndex((prevIndex) => (prevIndex + 1) % womenImages.length);
    }, 5000);
    return () => clearInterval(womenInterval);
  }, []);

  // Navigation to respective product sections
  const handleNavigate = (gender) => {
    if (gender === "men") {
      navigate("/menproduct");
    } else {
      navigate("/femaleproduct");
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold mb-6">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Men's Perfume Section */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
            {/* Image Slider for Men's Perfume */}
            <img
              src={menImages[menIndex]}
              alt="Men Perfume"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              onClick={() => handleNavigate("men")} // Navigate to men's product page
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 transition-opacity"
              onClick={() => setMenIndex((menIndex - 1 + menImages.length) % menImages.length)}
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 transition-opacity"
              onClick={() => setMenIndex((menIndex + 1) % menImages.length)}
            >
              <FaChevronRight className="text-gray-700" />
            </button>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold mb-2">MEN Perfume</h3>
              <button
                onClick={() => handleNavigate("men")}
                className="text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>

          {/* Women's Perfume Section */}
          <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
            {/* Image Slider for Women's Perfume */}
            <img
              src={womenImages[womenIndex]}
              alt="Women Perfume"
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              onClick={() => handleNavigate("women")} // Navigate to women's product page
            />
            <button
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 transition-opacity"
              onClick={() => setWomenIndex((womenIndex - 1 + womenImages.length) % womenImages.length)}
            >
              <FaChevronLeft className="text-gray-700" />
            </button>
            <button
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md opacity-75 hover:opacity-100 transition-opacity"
              onClick={() => setWomenIndex((womenIndex + 1) % womenImages.length)}
            >
              <FaChevronRight className="text-gray-700" />
            </button>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold mb-2">WOMEN Perfume</h3>
              <button
                onClick={() => handleNavigate("women")}
                className="text-white bg-pink-500 px-4 py-2 rounded-full hover:bg-pink-600 transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSection;
