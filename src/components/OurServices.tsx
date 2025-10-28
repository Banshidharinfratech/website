"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  desc: string;
  img: string;
  color: string;
}

const services: Service[] = [
  {
    title: "Piling Foundation Services",
    desc: "We provide an entire range of Pile Foundation Services keep innovating them based.....",
    img: "/assets/images/piling3.png",
    color: "text-blue-900",
  },
  {
    title: "Piling Rig Rental Services",
    desc: "We deliver your products around the globe as and wherever required. The quality we.....",
    img: "/assets/images/cnc.jpg",
    color: "text-blue-900",
  },
  {
    title: "Boom Lift Rental Services",
    desc: "We are the leading prominent boom lift on hire service provider in India. Also, We provide.....",
    img: "/assets/images/boomlift.jpg",
    color: "text-red-600",
  },
  {
    title: "Piling Rig Contractor",
    desc: "We deal in providing the service of Piling Contractors Services on hire and on a rental basis. Our organization has.....",
    img: "/assets/images/pil-cont.jpg",
    color: "text-blue-900",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      {/* Heading */}
      <div className="text-center mb-10">
        <p className="uppercase text-gray-500 tracking-wide">
          — Services we’re offering
        </p>
        <h2 className="text-4xl font-extrabold text-blue-900 mt-2">
          Our Services
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div className="relative h-56 w-full">
              <Image
                src={service.img}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-5 flex flex-col justify-between h-48">
              <h3 className={`text-lg font-bold ${service.color}`}>
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 mb-4">{service.desc}</p>
              <ArrowRight
                size={20}
                className={`${service.color} font-bold`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
