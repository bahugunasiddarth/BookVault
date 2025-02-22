import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Fetch book data from an API or use mock data
    const mockBooks = [
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      {
        id: 1,
        name: "Book 1",
        price: 20,
        edition: "1st Edition",
        image: "https://i.ibb.co/nT5d0Nk/eng.png",
        category: "Fiction",
        title: "A great fiction book",
      },
      
    ];

    setBook(mockBooks);
  }, []);

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    console.log("Added to cart:", item);
  };

  return (
    <>
      <div className="bg-white max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;