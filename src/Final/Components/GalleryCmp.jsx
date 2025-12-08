
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";

//Images----------------------------------------------------->
import BA0 from "../Images/VerticalsImg/BuildingAutomation0.jpg"
import BA1 from"../Images/VerticalsImg/BuildingAutomation1.jpg"
import BA2 from"../Images/VerticalsImg/BuildingAutomation2.jpg"
import CP1 from "../Images/VerticalsImg/CoilProcessingLines1.webp"
import CP2 from "../Images/VerticalsImg/CoilProcessingLines2.jpg"
import CP3 from "../Images/VerticalsImg/CoilProcessingLines3.jpg"
import CS0 from "../Images/VerticalsImg/ColdStorageAutomation0.jpg"
import CS1 from "../Images/VerticalsImg/ColdStorageAutomation1.jpg"
import FCCM0 from "../Images/VerticalsImg/FurnacesCCM0.webp"
import FCCM1 from "../Images/VerticalsImg/FurnacesCCM1.jpg"
import PP0 from "../Images/VerticalsImg/PulpPaper0.jpeg"
import PP1 from "../Images/VerticalsImg/PulpPaper1.webp"
import PP2 from "../Images/VerticalsImg/PulpPaper2.jpg"
import SS0 from "../Images/VerticalsImg/SoftwareSCADA0.jpg"
import SS1 from "../Images/VerticalsImg/SoftwareSCADA1.jpg"
import TMT0 from "../Images/VerticalsImg/TMTRollingMills0.png"
import TMT1 from "../Images/VerticalsImg/TMTRollingMills1.webp"
import TMT2 from "../Images/VerticalsImg/TMTRollingMills2.jpg"
import TMT3 from "../Images/VerticalsImg/TMTRollingMills3.jpg"
import MMS0 from"../Images/VerticalsImg/MMS0.jpg"
import MMS1 from"../Images/VerticalsImg/MMS1.png"
import EMS0 from"../Images/VerticalsImg/EMS0.png"

import AC0 from "../Images/ProductsImg/ACDrive0.png"
import AC1 from "../Images/ProductsImg/ACDrive1.webp"
import AC2 from "../Images/ProductsImg/ACDrive2.jpg"
import BS0 from "../Images/ProductsImg/BalluffSiemens0.jpg"
import BS1 from "../Images/ProductsImg/BalluffSiemens1.jpg"
import BS2 from "../Images/ProductsImg/BalluffSiemens2.jpg"
import BS3 from "../Images/ProductsImg/BalluffSiemens3.jpg"
import LT0 from "../Images/ProductsImg/LTBusduct0.jpg"
import LT1 from "../Images/ProductsImg/LTBusduct1.jpg"
import LT2 from "../Images/ProductsImg/LTBusduct2.jpg"
import IPA0 from "../Images/ProductsImg/IPA0.avif"
import IPA1 from "../Images/ProductsImg/IPA1.jpg"

import ACB0 from "../Images/ServicesImg/ACB0.jpg"
import ACB1 from "../Images/ServicesImg/ACB1.png"
import ACB2 from "../Images/ServicesImg/ACB2.jpg"
import ACDC0 from "../Images/ServicesImg/ACDC0.avif"
import Panel0 from "../Images/ServicesImg/Panel0.jpg"
import SiteErection0 from "../Images/ServicesImg/SiteErection0.jpg"
import SiteErection1 from "../Images/ServicesImg/SiteErection1.jpg"
import SiteErection2 from "../Images/ServicesImg/SiteErection2.jpg"
import VCB0 from "../Images/ServicesImg/VCB0.avif"
import VCB1 from "../Images/ServicesImg/VCB1.jpg"

import Furnace from "../Images/ProjectConsultingImg/Furnace.jpg"
import PM0 from "../Images/ProjectConsultingImg/PaperMill0.avif"
import WDP0 from "../Images/ProjectConsultingImg/WireDrawingPlants0.jpg"
import WDP1 from "../Images/ProjectConsultingImg/WireDrawingPlants1.jpg"
import pTMT0 from "../Images/ProjectConsultingImg/TMT0.jpg"


const images = [
    BA0, BA1, BA2,
    CP1, CP2, CP3,
    CS0, CS1,
    FCCM0, FCCM1,
    MMS0, MMS1,
    PP0, PP1, PP2,
    SS0, SS1,
    TMT0, TMT1, TMT2, TMT3,

    AC0, AC1, AC2,
    BS0, BS1, EMS0, BS2, BS3,
    LT0, IPA0, IPA1,LT1, LT2,

    ACB0, ACB1, ACB2,
    ACDC0,
    Panel0, 
    SiteErection0, SiteErection1, SiteErection2,
    VCB0, VCB1,

    Furnace, PM0, WDP0, WDP1, pTMT0
]


export default function GalleryCmp() {
  return (
    <div className="px-5 md:px-25 py-5">

      {/* ========== Animated Page Title ========== */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center text-4xl md:text-5xl font-semibold m-10"
      >
        Gallery
      </motion.h1>

      {/* ========== YouTube-Style Fixed Card Grid ========== */}
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
    </div>
  );
}