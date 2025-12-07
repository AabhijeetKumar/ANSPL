import BA0 from "../../Images/VerticalsImg/BuildingAutomation0.jpg"
import BA1 from"../../Images/VerticalsImg/BuildingAutomation1.jpg"
import BA2 from"../../Images/VerticalsImg/BuildingAutomation2.jpg"
import CP1 from "../../Images/VerticalsImg/CoilProcessingLines1.webp"
import CP2 from "../../Images/VerticalsImg/CoilProcessingLines2.jpg"
import CP3 from "../../Images/VerticalsImg/CoilProcessingLines3.jpg"
import CS0 from "../../Images/VerticalsImg/ColdStorageAutomation0.jpg"
import CS1 from "../../Images/VerticalsImg/ColdStorageAutomation1.jpg"
import FCCM0 from "../../Images/VerticalsImg/FurnacesCCM0.webp"
import FCCM1 from "../../Images/VerticalsImg/FurnacesCCM1.jpg"
import Furnace from "../../Images/ProjectConsultingImg/Furnace.jpg"
import PP0 from "../../Images/VerticalsImg/PulpPaper0.jpeg"
import PP1 from "../../Images/VerticalsImg/PulpPaper1.webp"
import PP2 from "../../Images/VerticalsImg/PulpPaper2.jpg"
import SS0 from "../../Images/VerticalsImg/SoftwareSCADA0.jpg"
import SS1 from "../../Images/VerticalsImg/SoftwareSCADA1.jpg"
import TMT0 from "../../Images/VerticalsImg/TMTRollingMills0.png"
import TMT1 from "../../Images/VerticalsImg/TMTRollingMills1.webp"
import TMT2 from "../../Images/VerticalsImg/TMTRollingMills2.jpg"
import TMT3 from "../../Images/VerticalsImg/TMTRollingMills3.jpg"
import MMS0 from"../../Images/VerticalsImg/MMS0.jpg"
import MMS1 from"../../Images/VerticalsImg/MMS1.png"
import EMS0 from"../../Images/VerticalsImg/EMS0.png"

export const verticals = [
  {
    id: "pulp-paper",
    title: "Pulp & Paper",
    description:
      "Automation solutions for Pulp & Paper industries enabling seamless control of pulping, bleaching, stock preparation, and paper machine operations. Our systems ensure consistent product quality, reduced downtime, energy efficiency, and complete production visibility through advanced SCADA and DCS integrations.",
    video: "/videos/pulp.mp4",
    images: [
      PP0, PP1, PP2
    ]
  },

  {
    id: "tmt-rolling-mills",
    title: "TMT Rolling Mills",
    description:
      "Advanced automation for TMT Rolling Mills covering reheating furnaces, rolling stands, shears, cooling beds, and cut-to-length systems. Our solutions deliver precise temperature control, improved rolling accuracy, higher mill throughput, and robust safety interlocks.",
    video: "/videos/tmt.mp4",
    images: [
      TMT0, TMT1, TMT2, TMT3
    ]
  },

  {
    id: "furnaces-ccm",
    title: "Furnaces & CCM",
    description:
      "High-performance control systems for industrial furnaces and CCM units. We provide accurate temperature profiling, billet casting control, mold oscillation management, ladle turrets, and hydraulic system automation to ensure defect-free casting and maximum operational reliability.",
    video: "/videos/furnace.mp4",
    images: [
      FCCM0, FCCM1, Furnace
    ]
  },

  {
    id: "coil-processing-lines",
    title: "Coil Processing Lines",
    description:
      "Automation for Slitting Lines, Cut-to-Length Lines, Skin-Pass Mills, Galvanizing Lines, and Tension Levelers. Our systems enhance coil flatness, thickness accuracy, line synchronization, and production speed with advanced PLC-SCADA and drive coordination.",
    video: "/videos/coil.mp4",
    images: [
      CP1, CP2, CP3
    ]
  },

  {
    id: "building-automation",
    title: "Building Automation",
    description:
      "Smart building automation covering HVAC, lighting, fire safety, access control, and energy monitoring. Our integrated solutions provide centralized control, improved occupant comfort, predictive maintenance, and significant energy savings in commercial and industrial buildings.",
    video: "/videos/building.mp4",
    images: [
      BA0, BA1, BA2
    ]
  },

  {
    id: "cold-storage-automation",
    title: "Cold Storage Automation",
    description:
      "End-to-end automation for cold storage facilities including refrigeration control, temperature monitoring, humidity control, conveyor automation, and energy optimization. Designed for food processing, pharma, and logistics industries requiring precise cold-chain management.",
    video: "/videos/cold-storage.mp4",
    images: [
      CS0, CS1
    ]
  },

  {
    id: "software-scada",
    title: "Software & SCADA",
    description:
      "Custom SCADA, IIoT dashboards, data acquisition systems, and industrial software tailored for real-time monitoring. Our robust platforms provide alarm management, trend analysis, reporting, predictive insights, and seamless connectivity with PLC, DCS, and ERP systems.",
    video: "/videos/scada.mp4",
    images: [
      SS0, SS1
    ]
  },

  {
    id: "ems-energy-management",
    title: "EMS (Energy Management System)",
    description:
      "Comprehensive EMS solutions delivering real-time energy monitoring, load analysis, power quality assessment, and demand optimization. Helps industries reduce energy costs, improve efficiency, and ensure compliance through intelligent reporting and actionable insights.",
    video: "/videos/ems.mp4",
    images: [
      EMS0
    ]
  },

  {
    id: "mms-machine-management",
    title: "MMS (Machine Management System)",
    description:
      "Machine Management System designed for monitoring machine health, production rates, downtimes, OEE, and operator efficiency. With predictive analytics and AI-assisted diagnostics, MMS helps industries achieve higher productivity and reduced maintenance downtime.",
    video: "/videos/mms.mp4",
    images: [
      MMS0, MMS1
    ]
  }
];
