import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaStar } from "react-icons/fa"; // Import icons

const ProductInfo = () => {
  const location = useLocation();
  const { product } = location.state || {};

  const [quantity, setQuantity] = useState(1);
  const [newReview, setNewReview] = useState({ rating: 0, comment: "" });
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);

  // Tab State
  const [activeTab, setActiveTab] = useState("description");

  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (product.reviews) {
      setReviews(product.reviews);
    }
  }, [product.reviews]);

  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((totalRating / reviews.length).toFixed(1));
    } else {
      setAverageRating(0);
    }
  }, [reviews]);

  const handleQuantityChange = (newQuantity) => {
    setQuantity(Math.max(1, newQuantity));
  };

  const handleMouseEnter = () => {
    setIsZoomed(true);
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        {/* Left Column: Product Image with Zoom */}
        <div className="lg:w-1/2">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className={`w-full h-auto object-cover transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'}`}
              style={isZoomed ? { transformOrigin: `${mousePosition.x}% ${mousePosition.y}%` } : {}}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            />
          </div>
        </div>

        {/* Right Column: Tabs and Product Details */}
        <div className="lg:w-1/2 lg:pl-8 mt-8 lg:mt-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <h2 className="text-xl text-gray-600 mb-4">{product.tag}</h2>

          {/* Display Price and Discount */}
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold text-gray-900">
              ₹{product.discountedPrice || product.price}
            </span>
            {product.discountedPrice && (
              <>
                <span className="ml-4 text-lg line-through text-gray-500">₹{product.price}</span>
                <span className="ml-2 text-sm text-green-600">
                  Save {(((product.price - product.discountedPrice) / product.price) * 100).toFixed(0)}%
                </span>
              </>
            )}
          </div>

          {/* Average Rating */}
          <div className="flex items-center mb-4">
            {[...Array(Math.floor(averageRating))].map((_, index) => (
              <FaStar key={index} className="text-yellow-400" />
            ))}
            {averageRating % 1 !== 0 && <FaStar className="text-yellow-400 opacity-50" />}
            {[...Array(5 - Math.ceil(averageRating))].map((_, index) => (
              <FaStar key={index} className="text-gray-300" />
            ))}
            <span className="ml-2 text-gray-600">{averageRating} out of 5</span>
          </div>

          {/* Tab Navigation (Horizontal) */}
          <div className="flex space-x-6 border-b mb-4">
            <button
              className={`py-2 px-4 ${activeTab === "description" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 ${activeTab === "specifications" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`py-2 px-4 ${activeTab === "reviews" ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-600"}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            {activeTab === "description" && (
              <div>
                <p className="text-gray-700">{product.description || "No description available."}</p>
              </div>
            )}
            {activeTab === "specifications" && (
              <div>
                <ul className="list-disc list-inside text-gray-700">
                  <li><strong>Brand:</strong> {product.brand}</li>
                  <li><strong>Volume:</strong> {product.volume}</li>
                  <li><strong>Type:</strong> {product.type}</li>
                  <li><strong>Key Notes:</strong> {product.keyNotes}</li>
                </ul>
              </div>
            )}
            {activeTab === "reviews" && (
              <div>
                {reviews.length > 0 ? (
                  reviews.map((review) => (
                    <div key={review.id} className="mb-4">
                      <div className="flex items-center mb-1">
                        <span className="font-semibold mr-2">{review.user}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < review.rating ? "text-yellow-400" : "text-gray-300"} />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700">No reviews yet.</p>
                )}
              </div>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6 mt-6">
            <span className="mr-4">Quantity:</span>
            <button
              className="bg-gray-200 px-3 py-1 rounded-l"
              onClick={() => handleQuantityChange(quantity - 1)}
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
              className="w-16 text-center border-t border-b border-gray-200"
            />
            <button
              className="bg-gray-200 px-3 py-1 rounded-r"
              onClick={() => handleQuantityChange(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Action Buttons: Add to Cart and Wishlist */}
          <div className="flex space-x-4 mb-6">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-full flex items-center hover:bg-blue-600 transition-colors">
              <FaShoppingCart className="mr-2" /> Add to Cart
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-full flex items-center hover:bg-blue-500 hover:text-white transition-colors">
              <FaHeart className="mr-2" /> Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
