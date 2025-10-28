"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Machine {
  image: string;
}

const machines: Machine[] = [
  { image: "/images/machine1.jpg" },
  { image: "/images/machine2.jpg" },
  { image: "/images/machine3.jpg" },
  { image: "/images/machine4.jpg" },
];

const MachinesCarousel: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D257A] mb-10 tracking-wide drop-shadow-md">
          MACHINES
        </h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-8"
        >
          {machines.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <img
                  src={item.image}
                  alt={`Machine ${index + 1}`}
                  className="rounded-xl w-full h-64 md:h-72 object-cover shadow-lg hover:scale-105 transition-transform duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MachinesCarousel;
