import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";
import Spinner from "./Spinner"; // Ensure this is correctly imported

// FreeBookSlider Component
const FreeBookSlider = ({ books, loading, error }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: true },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="mt-10">
      {loading ? (
        <div className="flex justify-center items-center">
          <Spinner />
          <p className="text-gray-500 text-lg ml-4">Loading free books...</p>
        </div>
      ) : error ? (
        <p className="text-center text-red-600 text-lg">{error}</p>
      ) : books.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">No free books available at the moment.</p>
      ) : (
        <Slider {...settings}>
          {books.map((book) => (
            <div key={book.id} className="px-4">
              <Cards item={book} />
              <p className="text-center text-sm text-gray-600 mt-2">
                {book.title} by {book.author} | {book.duration} hrs
              </p>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

// Main Freebook Component
function Freebook() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);

  const fetchBooks = async () => {
    try {
      const response = await axios.get("http://localhost:4001/book");
      const freeBooks = response.data.filter((book) => book.category === "Free");
      setBooks(freeBooks);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("Failed to load books. Please check your internet connection or try again later.");
      if (retryCount < 3) {
        setTimeout(() => {
          setRetryCount(retryCount + 1);
          fetchBooks();
        }, 3000); // Retry after 3 seconds
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [retryCount]);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-10 bg-white shadow-lg rounded-lg">
      <div className="text-center">
        <h1 className="font-bold text-4xl text-gray-900 mb-6">Free Offered Courses</h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          Discover our handpicked collection of free courses to enhance your skills and knowledge. 
          Stay ahead in your career with expert-led educational content available at no cost.
        </p>
      </div>

      {/* Free Books Slider Section */}
      <div className="mt-10">
        <h2 className="font-bold text-2xl text-gray-800 mb-6">Free Books</h2>
        <FreeBookSlider books={books} loading={loading} error={error} />
      </div>
    </div>
  );
}

export default Freebook;