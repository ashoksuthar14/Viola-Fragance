import React, { useState, useEffect, useRef } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const ExploreSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [showText, setShowText] = useState(false);
  const sliderRef = useRef(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      text: "Explore breathtaking landscapes"
    },
    {
      url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      text: "Discover hidden natural wonders"
    },
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d",
      text: "Experience the beauty of forests"
    },
    {
      url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
      text: "Witness stunning sunsets"
    }
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHovering) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, isHovering]);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sliderRef.current.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        setShowText(true);
      } else {
        setShowText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden" ref={sliderRef}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${currentIndex === index ? "opacity-100" : "opacity-0"}`}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <img
            src={image.url}
            alt={`Explore ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-500 ${(isHovering || showText) && currentIndex === index ? "opacity-100" : "opacity-0"}`}
          >
            <p className="text-white text-3xl font-bold text-center">
              {image.text}
            </p>
          </div>
        </div>
      ))}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={prevSlide}
      >
        <BsChevronLeft size={24} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={nextSlide}
      >
        <BsChevronRight size={24} />
      </button>
    </div>
  );
};

export default ExploreSection;