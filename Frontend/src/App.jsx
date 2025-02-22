import React, { useEffect } from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Contact from "./components/Contact";
import About from "./components/About"; 
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);

  useEffect(() => {
    // Set background color to white for the whole body
    document.body.classList.add("bg-white");
    
    // Clean up the class when the component unmounts
    return () => {
      document.body.classList.remove("bg-white");
    };
  }, []);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/about" element={<About />} /> 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
