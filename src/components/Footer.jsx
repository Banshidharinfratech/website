"use client";
import { useState, useEffect } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when scrolled down 200px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#111] text-white py-10 relative overflow-hidden">
      {/* Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/site-footer-mape.png')",
        }}
      ></div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-wrap justify-between gap-10">
        {/* Logo & Social Icons */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* Logo */}
          <img
            src="/assets/icons/logo.png"
            alt="Banshidhar "
            className="w-36"
          />

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
            >
              <FaInstagram className="fab fa-instagram text-lg"></FaInstagram>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
            >
              <FaTwitter className="fab fa-twitter text-lg"></FaTwitter>
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
            >
              <FaFacebookF className="fab fa-facebook-f text-lg"></FaFacebookF>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black hover:bg-orange-500 p-3 rounded-full transition-colors duration-300"
            >
              <FaPinterest className="fab fa-pinterest text-lg"></FaPinterest>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="#" className="hover:text-red-500">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Equipments
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-red-500">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <ul className="space-y-3 text-gray-300">
            <li>
              📞{" "}
              <a
                href="tel:+916202557765"
                className="text-white font-semibold hover:underline"
              >
                +91 6202557765
              </a>
            </li>
            <li>
              ✉️{" "}
              <a
                href="mailto:enquiry@slgroupco.com"
                className="hover:text-red-500"
              >
                enquiry@slgroupco.com
              </a>
            </li>
            <li>
              📍 Station Road, Gurudwara Gali,
              <br />
              Opposite Budha Park, Patna — 800001
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-xl font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-gray-300">
            <li>Piling Foundation Services</li>
            <li>Piling Rig Rental Services</li>
            <li>Boom Lift Rental Services</li>
            <li>Piling Contractor</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="relative z-10 w-full justify-center items-center text-center text-gray-400 mt-10 border-t border-gray-700 pt-4 px-4 flex flex-col md:flex-row md:justify-center gap-2">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} All rights reserved by{" "}
          <span className="text-red-400 font-semibold">
            Banshidhar Infratech
          </span>
        </p>
      </div>

      {/* Scroll to Top Button */}
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 flex items-center justify-center bg-red-600 text-white text-2xl rounded-full shadow-lg hover:bg-red-700 cursor-pointer transition-all duration-300"
        >
          ↑
        </div>
      )}
    </footer>
  );
}
