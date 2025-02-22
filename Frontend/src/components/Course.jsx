import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { motion } from "framer-motion"; // Import motion from framer-motion

function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
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
      <div className="bg-white max-w-screen-2xl container mx-auto px-4 md:px-20 py-16">
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