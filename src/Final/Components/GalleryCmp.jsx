
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

//Images----------------------------------------------------->
import BA0 from "../Images/VerticalsImg/BuildingAutomation0.jpg"
import BA1 from"../Images/VerticalsImg/BuildingAutomation1.jpg"
import BA2 from"../Images/VerticalsImg/BuildingAutomation2.jpg"
import CP2 from "../Images/VerticalsImg/CoilProcessingLines2.jpg"
import CP3 from "../Images/VerticalsImg/CoilProcessingLines3.jpg"
import CS0 from "../Images/VerticalsImg/ColdStorageAutomation0.jpg"
import CS1 from "../Images/VerticalsImg/ColdStorageAutomation1.jpg"
import FCCM0 from "../Images/VerticalsImg/FurnacesCCM0.webp"
import PP1 from "../Images/VerticalsImg/PulpPaper1.webp"
import MMS0 from"../Images/VerticalsImg/MMS0.jpg"
import Furnace from "../Images/ProjectConsultingImg/Furnace.jpg"
import PM0 from "../Images/ProjectConsultingImg/PaperMill0.avif"



const images = [
    BA0, BA1, BA2,
     CP2, CP3,
    CS0, CS1,
    FCCM0, PP1,
    MMS0,
    Furnace, PM0,
]


export default function GalleryCmp() {
  const navigate = useNavigate();
  return (
    <div className="px-5 pt-30 md:px-25 ">

      {/* ========== Animated Page Title ========== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-semibold mb-10"
      >
        Gallery
      </motion.h1>

      {/* ========== Fixed Card Grid ========== */}
      <div className="grid grid-cols-2  md:grid-cols-3  gap-4">
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.06,
              transition: { duration: 0.25, ease: "easeOut" },
            }}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* FIXED CARD SIZE (like YouTube thumbnails) */}
            <div className="w-full h-40 sm:h-44 md:h-48 lg:h-52 xl:h-56 overflow-hidden">
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        ))}
      </div>
      {/* Gallery Button */}
              <div className="flex justify-center mt-10">
                <div className="flex items-center gap-4">
                  {/* GALLERY TEXT */}
                  <motion.span
                    className=" text-xl font-semibold tracking-wide border-b-2 border-yellow-400 pb-1"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    Visit Our Gallery
                  </motion.span>
      
                  {/* ARROW BUTTON */}
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigate("/gallery")}
                    className="
                      p-3 
                      rounded-full 
                      bg-white/30  
                      shadow-md 
                      flex items-center justify-center
                      border border-white/20
                    "
                  >
                    <FiArrowRight className="text-yellow-400 text-xl" />
                  </motion.button>
                </div>
              </div>
    </div>
  );
}