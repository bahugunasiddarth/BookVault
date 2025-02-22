import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const { fullname, email, password } = data;
      const response = await axios.post("http://localhost:4001/user/signup", {
        fullname,
        email,
        password,
      });

      if (response.data) {
        toast.success("Signup Successfully");
        localStorage.setItem("Users", JSON.stringify(response.data.user));
        navigate(from, { replace: true });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Signup failed");
      console.error(err);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-[500px] bg-white shadow-md rounded-lg p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Close Button */}
          <Link
            to="/"
            className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 text-lg"
          >
            ✕
          </Link>

          <h3 className="font-bold text-2xl text-center text-gray-800">Sign Up</h3>

          {/* Full Name Input */}
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white text-gray-900"
              {...register("fullname", { required: "Full name is required" })}
            />
            {errors.fullname && (
              <p className="text-sm text-red-500 mt-1">{errors.fullname.message}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white text-gray-900"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white text-gray-900"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <p className="text-center text-gray-600">
            Already have an account?{" "}
            <button
              className="text-blue-500 underline"
              onClick={() =>
                document.getElementById("my_modal_3").showModal()
              }
            >
              Login
            </button>
            <Login />
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
