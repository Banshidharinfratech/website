"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Machine {
  image: string;
}

const machines: Machine[] = [
  { image: "/assets/images/boomlift.jpg" },
  { image: "/assets/images/mach12.jpg" },
  { image: "/assets/images/mach13.jpg" },
  { image: "/assets/images/pili.png" },
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
                {/* parent must have position:relative and a defined height for Image fill */}
                <div className="relative w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                  <Image
                    src={item.image}
                    alt={`Machine ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={index === 0}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default MachinesCarousel;
