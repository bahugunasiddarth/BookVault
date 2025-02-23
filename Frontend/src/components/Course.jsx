import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { motion } from "framer-motion"; 
import bgImg from "../assets/bg.jpg"

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/book`);
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  // Animation variants for the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Start hidden and slightly below
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, // Animate to visible
  };

  return (
    <>
   <div className="relative min-h-screen w-full flex items-center justify-center px-4 md:px-20 py-16">
  {/* Background Image with Overlay */}
  <div
    className="absolute inset-0 bg-black opacity-40"
    style={{
      backgroundImage: `url(${bgImg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "repeat",
    }}
  ></div>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    {book.map((item, index) => (
      <motion.div
        key={item.id}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: index * 0.1 }} // Stagger animations
      >
        <Cards item={item} />
      </motion.div>
    ))}
  </div>
</div>

    </>
  );
}

export default Course;