import { useNavigate } from "react-router-dom";

import logoimg from "./ANSPLlogo.png";
import automationimg from "./automation.png";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-black text-gray-100 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-10 text-left">


        {/* ======================= 2️⃣ SITEMAP ======================= */}
        <div className="relative ">
          <h3 className="text-white text-xl font-semibold mb-4">Sitemap</h3>
          <ul className="space-y-2">
            <li>
              <a
                onClick={() => navigate("/")}
                className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => navigate("/aboutus")}
                className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
              >
                About Us
              </a>
            </li>

            <li>
              <a
                onClick={() => navigate("/contactus")}
                className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                onClick={() => navigate("/gallery")}
                className="hover:text-white hover:underline underline-offset-4 cursor-pointer"
              >
                Gallery
              </a>
            </li>
          </ul>

          {/* Mobile Divider */}
          <div className="md:hidden w-full h-[1px] bg-white mt-6"></div>
        </div>


        
        {/* ======================= 1️⃣ QUICK LINKS ======================= */}
        <div className="relative">
          <h3 className="text-white text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:text-white "
              >
                Verticals
              </a>

              <ul className="mt-2 ml-5 space-y-1 text-sm text-gray-200">
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/pulp-paper")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Pulp & Paper
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/tmt-rolling-mills")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    TMT Rolling Mills
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/furnaces-ccm")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Furnaces & CCM
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/coil-processing-lines")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Coil Processing Lines
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/building-automation")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Building Automation
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/cold-storage-automation")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Cold Storage Automation
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/software-scada")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Software & SCADA
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/ems-energy-management")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    EMS (Energy Management System)
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/verticals/mms-machine-management")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    MMS (Machine Management System)
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="hover:text-white"
              >
                Products
              </a>

              <ul className="mt-2 ml-5 space-y-1 text-sm text-gray-200">
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/ac-drive")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    AC Drive
                  </a>
                </li>
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/dc-drive")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    DC Drive
                  </a>
                </li>
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/balluff-siemens")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Balluff Siemens
                  </a>
                </li>
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/ipa-weighing-solutions")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    IPA Weighing Solutions
                  </a>
                </li>
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/botted-panels")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Bott ed Panels (PCC, MCC, Control Desk)
                  </a>
                </li>
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/products/lt-busduct")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    LT Busduct
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="hover:text-white "
              >
                Services
              </a>

              <ul className="mt-2 ml-5 space-y-1 text-sm text-gray-200">
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/services/ac-dc-drive-repairing")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    AC/DC Drive Repairing
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/services/acb-maintenance-servicing")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    ACB Maintenance & Servicing
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/services/vcb-maintenance-servicing")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    VCB (11kV/33kV) Maintenance & Servicing
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/services/site-erection-commissioning")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Site Erection & Commissioning
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                className="hover:text-white "
              >
                Project Consulting
              </a>

              <ul className="mt-2 ml-5 space-y-1 text-sm text-gray-200">
                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/projectconsulting/paper-plants")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Paper Plants
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/projectconsulting/tmt-rolling-mills")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    TMT Rolling Mills
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/projectconsulting/furnaces-ccm")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Furnaces & CCM
                  </a>
                </li>

                <li>
                  -{" "}
                  <a 
                  onClick={() => navigate("/projectconsulting/wire-drawing-plants")}
                  className="hover:text-white hover:underline underline-offset-4 cursor-pointer">
                    Wire Drawing Plants
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          {/* Mobile Divider */}
          <div className="md:hidden w-full h-[1px] bg-white mt-6"></div>
        </div>

        

        {/* ======================= 3️⃣ CORPORATE OFFICE ======================= */}
        <div className="relative space-y-4">
          <h3 className="text-white text-xl font-semibold mb-4">Visit US</h3>
          <div>
            <h2 className="font-semibold ">📍 Corporate Office</h2>
            <ul className="">
              <li className="pt-2">Automation Network & Services Pvt. Ltd, 3rd Floor, 44A, Shyama Pally, Jadavpur, Kolkata -700032</li>

              <li className="pt-1">
                📧{" "}
                <a
                  href="mailto:contact@automationnetwork.com"
                  className="hover:text-white hover:underline underline-offset-4 "
                >
                  contact@automationnetwork.com
                </a>
              </li>

              <li className="pt-1">
                📞{" "}
                <a
                  href="tel:+919830505000"
                  className="hover:text-white hover:underline underline-offset-4"
                >
                  +91-9830505000
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold ">📍 Factory</h2>
          <ul className="">
            <li className="pt-2">Automation Network & Services Pvt. Ltd, Near Tarun Sangha Club, Ramchandrapur, Narendrapur, Kolkata -700103 </li>


            <li className="pt-1">
              📞{" "}
              <a
                href="tel:+919830505000"
                className="hover:text-white hover:underline underline-offset-4"
              >
               +91-9830505000
              </a>
            </li>
          </ul>
          </div>


        </div>

        {/* ======================= 4️⃣ LOGO + SOCIAL ICONS ======================= */}
        <div className="flex flex-col items-center pb-4  ">
          <img src={logoimg} alt="Logo" className="h-25 mb-2" />

          <div className="flex gap-5 text-2xl mt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition transform duration-300 hover:scale-125"
            >
              <FaFacebook />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition transform duration-300 hover:scale-125"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-400 transition transform duration-300 hover:scale-125"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition transform duration-300 hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT LINE */}
      <div className="text-center text-gray-300 text-sm mt-6">
        © {new Date().getFullYear()} Automation Networks. All Rights Reserved.
      </div>
    </footer>
  );
}
