import Furnace from "../../Images/ProjectConsultingImg/Furnace.jpg"
import FCCM0 from "../../Images/VerticalsImg/FurnacesCCM0.webp"
import FCCM1 from "../../Images/VerticalsImg/FurnacesCCM1.jpg"

import PM0 from "../../Images/ProjectConsultingImg/PaperMill0.avif"
import PP0 from "../../Images/VerticalsImg/PulpPaper0.jpeg"
import PP1 from "../../Images/VerticalsImg/PulpPaper1.webp"

import WDP0 from "../../Images/ProjectConsultingImg/WireDrawingPlants0.jpg"
import WDP1 from "../../Images/ProjectConsultingImg/WireDrawingPlants1.jpg"
import pTMT0 from "../../Images/ProjectConsultingImg/TMT0.jpg"

export const projectConsulting = [
  {
    id: "paper-plants",
    title: "Paper Plants",
    description:
      "End‑to‑end project consulting for new and existing paper mills, including process design, machine selection, automation integration (Drives, PLC, DCS, SCADA), utility planning, and energy‑efficient production workflows. Our team ensures optimized fiber lines, stock preparation, and paper machine performance for maximum output and quality.",
    video: "/videos/paper-plants.mp4",
    images: [
      PM0, PP0, PP1
    ]
  },
  {
    id: "tmt-rolling-mills",
    title: "TMT Rolling Mills",
    description:
      "Comprehensive consulting for TMT bar production lines, covering furnace layout, mill configuration, automation strategy, power system design, and quenching (Thermex) system integration. We help achieve higher throughput, reduced energy consumption, and improved product consistency.",
    video: "/videos/tmt-rolling-mills.mp4",
    images: [
      pTMT0
    ]
  },
  {
    id: "furnaces-ccm",
    title: "Furnaces & CCM",
    description:
      "Expert project guidance for reheating furnaces and continuous casting machines. We provide design optimization, material flow planning, energy‑efficient combustion systems, automation architecture, and safety‑integrated control systems for smooth and reliable plant operation.",
    video: "/videos/furnaces-ccm.mp4",
    images: [
      Furnace, FCCM0, FCCM1
    ]
  },
  {
    id: "wire-drawing-plants",
    title: "Wire Drawing Plants",
    description:
      "Consulting services for ferrous and non‑ferrous wire drawing plants, including machinery layout, die passing schedule, automation selection, tension control optimization, and energy‑saving retrofits. We ensure smooth production flow and high‑precision wire output.",
    video: "/videos/wire-drawing.mp4",
    images: [
      WDP0, WDP1
    ]
  }
];
