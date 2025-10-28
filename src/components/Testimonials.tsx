"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Raj Dikshit",
      role: "Contractor",
      text: "I was very impressed by the company service. The team was professional, reliable, and dedicated to delivering high-quality results.",
      img: "/assets/images/user.png",
    },
    {
      name: "Mrunalini Singh",
      role: "Contractor",
      text: "The company has exceeded our expectations. Their professionalism and commitment to quality are truly commendable.",
      img: "/assets/images/user.png",
    },
    {
      name: "Aditya Verma",
      role: "Project Manager",
      text: "Excellent experience! The communication, delivery, and overall work ethic were top-notch.",
      img: "/assets/images/user.png",
    },
  ];

  return (
    <section
      className="relative w-full py-16 bg-white bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/Background/testimonial-one-bg.jpg')",
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start justify-between gap-10">
        {/* Left: Text Section */}
        <div className="md:w-1/2">
          <p className="text-sm uppercase tracking-widest text-red-500 font-semibold mb-2">
            — Our Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 leading-tight">
            What They’re <br />
            Talking About <br />
            Company
          </h2>
        </div>

        {/* Right: Swiper Slider */}
        <div className="md:w-1/2 w-full">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500 }}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            className="pb-12"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white shadow-xl rounded-lg p-8 md:p-10">
                  <p className="text-gray-600 text-lg mb-6">{item.text}</p>

                  <h3 className="text-xl font-bold text-red-600">
                    {item.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-800 uppercase tracking-wide">
                    {item.role}
                  </p>

                  {/* Floating User Image */}
                  <div className="absolute -bottom-10 right-10 border-2 border-red-600 p-2 rounded-md bg-white">
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
