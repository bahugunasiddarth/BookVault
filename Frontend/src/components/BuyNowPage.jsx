import React from "react";
import { useCart } from "../context/CartContext"; // Import useCart to access cart items

function BuyNowPage() {
  const { cart } = useCart(); // Access the cart from the CartContext

  // Group identical items and calculate their total price
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice += item.price;
    } else {
      acc.push({ ...item, quantity: 1, totalPrice: item.price });
    }
    return acc;
  }, []);

  // Calculate the total price of all items in the cart
  const totalPrice = groupedCart.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Checkout
        </h1>
        <div className="bg-white dark:bg-slate-800 shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Your Cart
          </h2>
          {groupedCart.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">Your cart is empty.</p>
          ) : (
            <div>
              {groupedCart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 py-4"
                >
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg mr-4"
                    />
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.category}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      ${item.totalPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Total
                  </h3>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    ${totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-700 dark:hover:bg-green-600"
                  onClick={() => alert("Proceeding to payment...")}
                >
                  Proceed to Payment
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BuyNowPage;