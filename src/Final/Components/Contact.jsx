

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between px-5 py-20 md:px-50 md:py-60 gap-10">

      {/* Left Text */}
      <motion.h1
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-semibold text-center md:text-left text-blue-500 py-20 md:py-0"
      >
        Contact Us
      </motion.h1>

      {/* Glow Button — below text on mobile, right on desktop */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center md:justify-end md:w-auto pb-20 md:pb-0"
      >
        <div className="relative group">

          {/* Glow Background (unchanged) */}
          <div
            className="
              absolute inset-0 
              bg-blue-500/70 
              blur-2xl 
              rounded-full 
              scale-200 
              transition duration-300 
              group-hover:bg-blue-500
            "
          ></div>

          {/* Button */}
          <button
            onClick={() => navigate('/contactus')}
            className="
              relative z-10
              w-20 h-20
              flex items-center justify-center
              rounded-full
              backdrop-blur-xl
              bg-white/20
              border border-white/30
              shadow-lg
              transition duration-300
              group-hover:bg-white/30
              group-hover:scale-105
            "
          >
            <FiArrowRight className="text-3xl text-[#003b5b]" />
          </button>

        </div>
      </motion.div>
    </div>
  );
}
