import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/user/login`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Logged in Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Users", JSON.stringify(res.data.user));
          }, 1000);
        }
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box p-8 rounded-lg shadow-lg bg-gray-50 max-w-md w-full border border-gray-200">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Close Button */}
            <button
              type="button"
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
            
            <h3 className="text-3xl font-semibold text-center text-gray-900">Login</h3>
            
            {/* Email */}
            <div>
              <label className="block text-gray-800 font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white text-gray-900"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            
            {/* Password */}
            <div>
              <label className="block text-gray-800 font-medium mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 outline-none shadow-sm bg-white text-gray-900"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            
            {/* Button */}
            <div className="flex flex-col space-y-4">
              <button className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-200 text-lg font-medium shadow-md">
                Login
              </button>
              <p className="text-center text-sm text-gray-700">
                Not registered? 
                <Link to="/signup" className="text-blue-600 underline ml-1 font-medium">Signup</Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
