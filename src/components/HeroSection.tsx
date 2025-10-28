"use client";

import Image from "next/image";
import {
  ClipboardCheck,
} from "lucide-react";

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-gray-50 to-white px-4 sm:px-6 lg:px-20 py-10 lg:py-20 gap-10">
      
      {/* Left side image */}
      <div className="relative w-full lg:w-1/2 flex justify-center">
        <Image
          src="/assets/images/pilingside1.png"
          alt="Heavy machinery"
          width={600}
          height={500}
          className="rounded-2xl shadow-lg object-cover w-full h-auto max-w-[600px]"
          priority
        />

        {/* Floating stats card */}
        <div className="absolute top-3 left-3 sm:top-5 sm:left-5 bg-white rounded-xl shadow-md p-3 sm:p-4 flex items-center gap-2 sm:gap-3">
          <ClipboardCheck className="text-blue-700 w-6 h-6 sm:w-8 sm:h-8" />
          <div>
            <p className="text-blue-700 font-bold text-lg sm:text-xl leading-none">
              40
            </p>
            <p className="text-gray-600 text-xs sm:text-sm leading-tight">
              Industry Projects Completed
            </p>
          </div>
        </div>
      </div>

      {/* Right side text */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-4 sm:space-y-6">
        <h4 className="uppercase tracking-wide text-xs sm:text-sm text-red-600 font-medium">
          Welcome to company
        </h4>

        <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-blue-900 leading-snug">
          Banshidhar Infratech
        </h1>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          We like to introduce ourselves as an organization solely dedicated into
          Rental service of medium to large sized heavy-duty hydraulic telescopic,
          Crawler Cranes and Tower Cranes with capacity ranging from 20 Ton to 450 Ton
          & Boomlifts ranging from 40 Feet to 210 Feet.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          The company has a registered office in Patna having above 8 years of
          experience and more than 5 operational sites across India.
        </p>

        <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
          The company provides crane rental services to major heavy industries in sectors
          like Power (Wind, Thermal, Hydro & Nuclear Energy), Cement, Steel Refinery,
          and Metro projects.{" "}
          <b>
            Today, Banshidhar Infratech is a major player in supplying heavy-duty cranes in
            heavy lift projects.
          </b>
        </p>
      </div>
    </section>
  );
}
