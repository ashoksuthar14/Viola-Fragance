import React from 'react';
import { useNavigate } from 'react-router-dom'; // Ensure correct import of useNavigate
// Adjust path as needed

const menPerfumes = [
  {
    id: 1,
    name: "Aqua Di Gio",
    tag: "Fresh & Invigorating",
    image: "src/assets/per1.png"
  },
  {
    id: 2,
    name: "Bleu de Chanel",
    tag: "Bold & Masculine",
    image: "src/assets/per1.png"
  },
  {
    id: 3,
    name: "Sauvage Dior",
    tag: "Woody & Spicy",
    image: "src/assets/per1.png"
  }
];

const MenProduct = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleNavigate = (perfume) => {
    // Pass the perfume object to the ProductInfo page via state
    navigate('/productinfo', { state: { product: perfume } });
  };

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-4xl font-bold">Men's Perfume Collection</h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {menPerfumes.map((perfume) => (
          <div
            key={perfume.id}
            className="relative group shadow-lg rounded-lg overflow-hidden bg-white transition-transform duration-500 hover:scale-105"
            onClick={() => handleNavigate(perfume)} // Set the navigation onClick
          >
            <img
              src={perfume.image}
              alt={perfume.name}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-white text-2xl font-bold mb-2">{perfume.name}</h3>
              <p className="text-white text-sm">{perfume.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenProduct;
