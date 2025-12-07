import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

import "./styles.css";

import PP1 from "../../Images/VerticalsImg/PulpPaper1.webp"
import TMT0 from "../../Images/VerticalsImg/TMTRollingMills0.png"
import Furnace from "../../Images/ProjectConsultingImg/Furnace.jpg"
import CP2 from "../../Images/VerticalsImg/CoilProcessingLines2.jpg"
import BA0 from "../../Images/VerticalsImg/BuildingAutomation0.jpg"
import CS1 from "../../Images/VerticalsImg/ColdStorageAutomation1.jpg"
import SS0 from "../../Images/VerticalsImg/SoftwareSCADA0.jpg"
import EMS0 from"../../Images/VerticalsImg/EMS0.png"
import MMS0 from"../../Images/VerticalsImg/MMS0.jpg"


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1,
  },
  tablet_mobile: {
    breakpoint: { max: 1023, min: 0 }, // mobile + tab combined
    items: 2,
    slidesToSlide: 1,
  },
};

const sliderImageSrc = [
   {
    src: PP1,
    title: "Pulp & Paper",
    description: "Automation solutions for efficient pulp and paper production.",
  },
  {
    src: TMT0,
    title: "TMT Rolling Mills",
    description: "High-precision automation for modern TMT rolling operations.",
  },
  {
    src: Furnace,
    title: "Furnaces & CCM",
    description: "Integrated automation for furnaces and continuous casting machines.",
  },
  {
    src: CP2,
    title: "Coil Processing Lines",
    description: "Advanced control systems for coil processing and handling.",
  },
  {
    src: BA0,
    title: "Building Automation",
    description: "Smart automation solutions for efficient building management.",
  },
  {
    src: CS1,
    title: "Cold Storage Automation",
    description: "Reliable automation systems for temperature-controlled storage.",
  },
  {
    src: SS0,
    title: "Software & SCADA",
    description: "Custom SCADA and industrial software for plant monitoring.",
  },
  {
    src: EMS0,
    title: "EMS (Energy Management System)",
    description: "Energy management systems to optimize power consumption.",
  },
  {
    src: MMS0,
    title: "MMS (Machine Management System)",
    description: "Machine monitoring and management for improved productivity.",
  },
];


export default function Slider(){
return (
    <div className="relative w-full px-4 md:px-8 lg:px-20 py-12 overflow-hidden rounded-xl">

      {/* 🔹 Diagonal Lines Background */}
<motion.div
  className="absolute inset-0"
  initial={{ backgroundPosition: "0 0" }}
  animate={{ backgroundPosition: "200px 200px" }}
  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
  style={{
    backgroundImage:
      "repeating-linear-gradient(135deg, #e5e5e5 0px, #e5e5e5 2px, transparent 2px, transparent 12px)",
    backgroundSize: "100% 500%",  // seamless lines
    opacity: 0.6,
    pointerEvents: "none",
  }}
/>

{/* 🔹 Top & Bottom Fade Overlay */}
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    background:
      "linear-gradient(to bottom, white 0%, transparent 15%, transparent 85%, white 100%)",
  }}
/>


      {/* 🔹 Foreground Content */}
      <div className="relative z-10">
        <h1 className="pt-15 text-3xl lg:text-5xl font-semibold lg:text-left sm:text-center text-blue-600">
          This Is Where We Excel
        </h1>

        <p className="pt-2 text-gray-600 ">
          We specialize in providing Industrial Automation solutions using
          Drives, PLC, DCS, SCADA
        </p>


        <div className="pb-10 mt-5">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          swipeable={true}
          draggable={true}
          showDots={true}
          infinite={true}
          partialVisible={false}
          dotListClass="custom-dot-list-style"
         >
          {sliderImageSrc.map((item, index) => (
            <div
              key={index}
              className="slider m-2 border rounded-lg overflow-hidden bg-white shadow-md flex flex-col h-full"
            >
              <img
                className="h-52 md:h-64 lg:h-70 w-full object-cover"
                src={item.src}
                alt={item.title}
              />

              <div className="p-4 flex flex-col flex-grow">
                <h1 className="text-[#043f77] font-semibold text-center">
                  {item.title}
                </h1>

                <p className="text-gray-700 text-sm md:text-base mt-2 text-center flex-grow">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        </div>
      </div>
    </div>
  );
};

