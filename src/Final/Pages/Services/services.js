import ACB0 from "../../Images/ServicesImg/ACB0.jpg"
import ACB1 from "../../Images/ServicesImg/ACB1.png"
import ACB2 from "../../Images/ServicesImg/ACB2.jpg"
import ACDC0 from "../../Images/ServicesImg/ACDC0.avif"
import Panel0 from "../../Images/ServicesImg/Panel0.jpg"
import SiteErection0 from "../../Images/ServicesImg/SiteErection0.jpg"
import SiteErection1 from "../../Images/ServicesImg/SiteErection1.jpg"
import SiteErection2 from "../../Images/ServicesImg/SiteErection2.jpg"
import VCB0 from "../../Images/ServicesImg/VCB0.avif"
import VCB1 from "../../Images/ServicesImg/VCB1.jpg"

export const services = [
  {
    id: "ac-dc-drive-repairing",
    title: "AC/DC Drive Repairing",
    description:
      "Comprehensive repair and refurbishment services for AC and DC drives, including fault diagnosis, component-level repair, firmware updates, and full performance testing to restore optimal efficiency and reliability.",
    video: "/videos/drive-repair.mp4",
    images: [
      ACDC0, Panel0
    ]
  },
  {
    id: "acb-maintenance-servicing",
    title: "ACB Maintenance & Servicing",
    description:
      "Professional Air Circuit Breaker (ACB) servicing including cleaning, lubrication, contact inspection, relay testing, interlock verification, and preventive maintenance to ensure safe and reliable power distribution.",
    video: "/videos/acb-maintenance.mp4",
    images: [
      ACB0, ACB1, ACB2
    ]
  },
  {
    id: "vcb-maintenance-servicing",
    title: "VCB (11kV/33kV) Maintenance & Servicing",
    description:
      "Specialized Vacuum Circuit Breaker (VCB) maintenance for 11kV and 33kV systems including mechanism overhauling, insulation testing, timing analysis, vacuum integrity checks, and complete functional validation.",
    video: "/videos/vcb-maintenance.mp4",
    images: [
      VCB0, VCB1
    ]
  },
  {
    id: "site-erection-commissioning",
    title: "Site Erection & Commissioning",
    description:
      "End-to-end onsite erection, installation, and commissioning of industrial automation systems, electrical panels, drives, sensors, and SCADA systems ensuring seamless integration and optimal system performance.",
    video: "/videos/site-commissioning.mp4",
    images: [
      SiteErection0, SiteErection1, SiteErection2
    ]
  }
];
