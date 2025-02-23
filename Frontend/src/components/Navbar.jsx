import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import Login from "./Login";
import Logout from "./Logout";
import { useAuth } from "../context/AuthProvider";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  const { totalValue, cart, addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleBuyNow = () => {
    navigate("/buy-now");
  };

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

  const navItems = (
    <>
      <li>
        <a href="/" className={location.pathname === "/" ? "text-blue-500" : ""}>
          Home
        </a>
      </li>
      <li>
        <a href="/course" className={location.pathname === "/course" ? "text-blue-500" : ""}>
          Course
        </a>
      </li>
      <li>
        <a href="/contact" className={location.pathname === "/contact" ? "text-blue-500" : ""}>
          Contact
        </a>
      </li>
      <li>
        <a href="/about" className={location.pathname === "/about" ? "text-blue-500" : ""}>
          About
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-2 px-4 bg-white text-black fixed top-0 left-0 right-0 z-50 ${
        sticky
          ? "sticky-navbar shadow-md bg-white text-black duration-300 transition-all ease-in-out"
          : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="text-2xl font-bold cursor-pointer">
            BookVault
          </a>
        </div>
        <div className="navbar-end space-x-3">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navItems}</ul>
          </div>
          <div className="hidden md:block">
            <label className="px-3 py-2 border rounded-md flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none rounded-md px-1 bg-white text-black"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <div className="flex items-center space-x-3">
            <div className="group relative flex items-center space-x-2 cursor-pointer">
              <div className="relative">
                <FaShoppingCart className="w-6 h-6 text-gray-700 hover:text-black transition-colors duration-300" />
                {groupedCart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">
                    {groupedCart.reduce((total, item) => total + item.quantity, 0)}
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-1">
                <span className="text-gray-700 group-hover:text-black transition-colors duration-300">
                  ${totalValue.toFixed(2)}
                </span>
              </div>
              <div className="group relative">
                <div className="cursor-pointer"></div>
                <div className="absolute top-full right-0 mt-2 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
                  <div className="p-4">
                    {groupedCart.length === 0 ? (
                      <p className="text-gray-500">Your cart is empty.</p>
                    ) : (
                      <>
                        <h3 className="font-semibold mb-2">Cart Items</h3>
                        <ul>
                          {groupedCart.map((item, index) => (
                            <li key={index} className="flex justify-between py-1">
                              <span>{item.name} ({item.quantity})</span>
                              <span>${item.totalPrice.toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="border-t pt-2 mt-2">
                          <p className="font-semibold">
                            Total: ${totalValue.toFixed(2)}
                          </p>
                        </div>
                        <button
                          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                          onClick={handleBuyNow}
                        >
                          Buy Now
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {authUser ? (
              <Logout />
            ) : (
              <div>
                <a
                  className="bg-black text-white px-3 py-2 rounded-md hover:bg-gray-800 duration-300 cursor-pointer"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </a>
                <Login />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;