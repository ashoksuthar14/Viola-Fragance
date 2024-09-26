import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-70"
        autoPlay
        muted
        loop
      >
        <source src="src\assets\herovideo1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        {/* Reactive Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-8 hover:animate-shake">
          Viola Fragrance
        </h1>

        {/* Button */}
        <button className="bg-[#060606] hover:bg-purple-700 text-white py-3 px-6 rounded-lg text-xl transition duration-300 ease-in-out">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
