import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Signup from "./components/Signup";
import Navbar from "./components/Navbar"; 
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import { CartProvider } from "./context/CartContext";
import BuyNowPage from "./components/BuyNowPage";

function App() {
  const [authUser] = useAuth(); 

  useEffect(() => {
    document.body.classList.add("bg-white");
    return () => document.body.classList.remove("bg-white");
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white">
      <CartProvider>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/buy-now" element={<BuyNowPage />} />
      </Routes>
      <Toaster />
      </CartProvider>
    </div>
  );
}

export default App;
