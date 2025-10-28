import { Phone, MessageCircle } from "lucide-react";

export default function SidebarButtons() {
  return (
    <div
      className="
        fixed z-50 flex flex-row space-x-2
        right-[-140px] top-1/2 -translate-y-1/2 rotate-90
        transition-all duration-300 ease-in-out

        /* Laptop/Desktop (rotated, side position) */
        md:right-[-120px] md:rotate-90
        lg:right-[-130px]
        xl:right-[-140px]

        /* Mobile/Tablet (bottom right vertical stack) */
        sm:rotate-0 sm:right-4 sm:bottom-6 sm:top-auto sm:flex-col sm:space-x-0 sm:space-y-2
      "
    >
      {/* Enquiry Button */}
      <a
        href="#enquiry"
        className="
          bg-red-600 text-white px-3 py-2 rounded-t-md
          hover:bg-red-700 flex items-center gap-2
          sm:rounded-md sm:w-36 sm:justify-center
        "
      >
        Enquiry
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/916202557765"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-green-600 text-white px-3 py-2 rounded-t-md
          hover:bg-green-700 flex items-center gap-2
          sm:rounded-md sm:w-36 sm:justify-center
        "
      >
        <MessageCircle className="w-4 h-4" /> WhatsApp
      </a>

      {/* Phone Button */}
      <a
        href="tel:+916202557765"
        className="
          bg-sky-600 text-white px-3 py-2 rounded-t-md
          hover:bg-sky-700 flex items-center gap-2
          sm:rounded-md sm:w-36 sm:justify-center
        "
      >
        <Phone className="w-4 h-4" /> Phone
      </a>
    </div>
  );
}
