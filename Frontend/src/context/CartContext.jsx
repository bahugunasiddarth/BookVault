import { createContext, useContext, useState } from "react";

// Create the Cart Context
const CartContext = createContext();

// Cart Provider Component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Add item to cart
    const addToCart = (item) => {
        setCart((prevCart) => [...prevCart, item]);
    };

    // Calculate total cart value
    const totalValue = cart.reduce((acc, item) => acc + item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, totalValue }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom Hook for using CartContext
export const useCart = () => useContext(CartContext);
