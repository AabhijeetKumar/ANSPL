import React from "react";
import whataAppLogo from "./img/whatsApp.png";

export default function FloatingWhatsAppButton() {
  const phoneNumber = "919830505000"; // ← your number
  const message = "Hello, I would like to know more about your services!";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        bottom-5 right-5 
        z-50
      "
    >
      <button
        className="
          bg-green-500
          //  #25D366 
          hover:bg-green-600 
          text-white 
          shadow-lg 
          rounded-full md:rounded-full 
          flex items-center 
          gap-2
           md:px-4
          md:py-2 
          transition-transform 
          duration-200 
          hover:scale-105
        "
      >
        {/* WhatsApp Icon */}
        <img
          src={whataAppLogo}
          alt="WhatsApp"
          className="w-13  md:w-10 md:h-10"
        />

        {/* Text visible only on desktop */}
        
        <span className="hidden md:inline font-semibold">
          WhatsApp
        </span>
      </button>
    </a>
  );
}

