import React from "react";

function Cards({ item, onAddToCart }) {
  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(item); 
    }
  };

  return (
    <>
      <div className="mt-4 p-4 flex justify-center">
  <div className="card w-96 bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 dark:bg-gray-800 dark:text-white dark:border dark:border-gray-700">
    <figure className="h-48 flex items-center justify-center bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-300">
      <img src={item.image} alt={item.name} className="max-h-full max-w-full object-contain" />
    </figure>
    <div className="card-body p-4 flex flex-col justify-between">
      <h2 className="card-title flex items-center justify-between text-gray-900 dark:text-white">
        {item.name}
        <span className="badge bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded hover:bg-blue-200 hover:text-blue-900 transition-colors duration-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-100">
          {item.category}
        </span>
      </h2>
      <p className="text-gray-800 dark:text-gray-200 mt-2 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200">
        {item.title}
      </p>
      <div className="card-actions flex justify-between items-center mt-4">
        <span className="text-xl font-bold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
          ${item.price}
        </span>
        <div className="flex gap-3">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-700 dark:hover:bg-blue-600"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default Cards;