"use client";

import { useState } from "react";
import Image from "next/image";

interface Tab {
  id: string;
  title: string;
  content: string;
  image: string;
}

const tabs: Tab[] = [
  {
    id: "vision",
    title: "VISION",
    content:
      "We are committed to serve the interests of all our clients by being and establishing our position at the top within the country and be among the foremost companies across the India in our core business through exceptional business ethics.",
    image: "/assets/icons/slquality1.png",
  },
  {
    id: "mission",
    title: "MISSION",
    content:
      "To provide our clients with the ability to complete in a safe, economical, timely and efficient manner while ensuring a consistently positive and professional experience.",
    image: "/assets/icons/slquality2.png",
  },
  {
    id: "quality",
    title: "QUALITY POLICY",
    content:
      "We wish to delight our customers and exceeding their expectations by providing maintenance free Crane, Boomlifts. Tower Cranes and prompt service.",
    image: "/assets/icons/slquality.png"
  },
];

export default function VisionTabs() {
  const [activeTab, setActiveTab] = useState<string>("vision");

  const active = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs Header */}
        <div className="flex flex-wrap shadow-md ">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 text-center font-bold py-4 text-sm sm:text-base transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-white text-[#1A237E]"
                  : "bg-[#1A237E] text-white"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-[#FFF8F8] mt-6 rounded-md p-6 px-40 flex flex-col sm:flex-row items-center gap-20 shadow-sm">
          <div className="flex-shrink-0 w-60 h-60 relative">
            <Image
              src={active?.image || ""}
              alt={active?.title || ""}
              fill
              className="object-contain"
            />
          </div>
          <div className="text-gray-700 text-lg leading-relaxed sm:w-2/3">
            {active?.content}
          </div>
        </div>
      </div>
    </section>
  );
}
