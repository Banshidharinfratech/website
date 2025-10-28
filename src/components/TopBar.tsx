"use client";


export default function TopBar() {
  return (
    <div className="bg-[#1E237E] text-white text-sm py-2 px-4 flex flex-wrap justify-between items-center">
      <div className="flex flex-wrap items-center gap-3">
        <span className="flex items-center gap-1">
          📍 Station Road, Gurudwara Gali, Opposite Budha Park, Patna —  800001
        </span>
        <span className="flex items-center gap-1">
          ✉️ enquiry@banshidharinfratech.com
        </span>
      </div>

      <div className="flex gap-4 text-lg">
        <a href="#" className="hover:text-blue-400"><i className="fab fa-twitter"></i></a>
        <a href="#" className="hover:text-blue-600"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-red-500"><i className="fab fa-pinterest"></i></a>
        <a href="#" className="hover:text-pink-500"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  );
}
