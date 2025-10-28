"use client";
import { Phone, MessageCircle } from "lucide-react";

export default function Vide () {
  return (
    <div className="relative flex flex-col md:flex-row min-h-screen bg-gray-900 text-white">
      {/* Left Section */}
      <div className="relative flex-1 flex items-center justify-center p-6 bg-[url('/blueprint-bg.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-left max-w-lg">
          <div className="mb-6">
            <div className="relative w-24 h-24 bg-yellow-700/50 p-4 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.79 5.093 10.5 8l-3.71 2.907V5.093z" />
                </svg>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            We’re Building the Future and Restoring the Past
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 bg-white text-black flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-white shadow-xl p-8 rounded-md">
          <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">
            Get a Free Quote
          </h2>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-3 bg-gray-100 rounded-md" />
            <input type="email" placeholder="Email Address" className="p-3 bg-gray-100 rounded-md" />
            <input type="text" placeholder="Phone Number" className="p-3 bg-gray-100 rounded-md" />
            <textarea placeholder="Write something.." className="p-3 bg-gray-100 rounded-md" />
           
            <button className="bg-blue-900 text-white py-3 rounded-md hover:bg-blue-800 transition">
              Submit
            </button>
          </form>
        </div>
      </div>

     
     

      
    </div>
  );
}
