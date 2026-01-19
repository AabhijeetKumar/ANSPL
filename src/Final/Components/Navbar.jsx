import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


import logo from "./ANSPLlogo.png";
import automationimg from "./automation.png";


import { useNavigate } from "react-router-dom";

// Custom Icons
const Menu = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <path
      d="M3 6h18M3 12h18M3 18h18"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const X = () => (
  <svg width="28" height="28" viewBox="0 0 24 24">
    <path
      d="M6 6l12 12M6 18L18 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronDown = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      fill="none"
    />
  </svg>
);

export default function Navbar() {
  const navigate = useNavigate();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/50 backdrop-blur shadow-md py-4 md:py-0">
    
      <div className="flex items-center justify-between px-4 md:px-8 lg:px-15 ">
       
       
        {/*<-------------------- Logo ----------------------> */}
        <div className="flex ">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
            <img src={logo} alt="Logo" className="h-10 md:h-15 object-contain" />
        </div>

    
        <div
          className="cursor-pointer py-3"
          onClick={() => {
            navigate("/");
          }}
        > 
            <img src={automationimg} alt="Logo" className="h-10 md:h-18 object-contain" />
        </div>
       </div>
        
        
        {/*<-------------------------- Desktop Menu ------------------------->*/}
        <div className="hidden lg:flex space-x-6 text-lg font-medium">

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 ">
              <a onClick={() => navigate("/")} className=" cursor-pointer"> Home</a>
            </button>

          </div>


          {/* Vertical Solutions */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600 ">
              Verticals <ChevronDown />
            </button>

            {/* Dropdown */}
            <div
              className="absolute left-0 bg-white shadow-xl rounded-lg p-4 space-y-2 min-w-85 z-[60] 
                            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                            transition-all duration-400 pointer-events-none group-hover:pointer-events-auto"
            >
              <a onClick={() => navigate("/verticals/pulp-paper")} className="block hover:text-blue-600 cursor-pointer">
                Pulp & Paper
              </a>
              <a onClick={() => navigate("/verticals/tmt-rolling-mills")} className="block hover:text-blue-600 cursor-pointer">
                TMT Rolling Mills
              </a>
              <a onClick={() => navigate("/verticals/furnaces-ccm")} className="block hover:text-blue-600 cursor-pointer">
                Furnaces & CCM
              </a>
              <a onClick={() => navigate("/verticals/coil-processing-lines")} className="block hover:text-blue-600 cursor-pointer">
                Coil Processing Lines
              </a>
              <a onClick={() => navigate("/verticals/building-automation")} className="block hover:text-blue-600 cursor-pointer">
                Building Automation
              </a>
              <a onClick={() => navigate("/verticals/cold-storage-automation")} className="block hover:text-blue-600 cursor-pointer">
                Cold Storage Automation
              </a>
              <a onClick={() => navigate("/verticals/software-scada")} className="block hover:text-blue-600 cursor-pointer">
                Software & SCADA
              </a>
              <a onClick={() => navigate("/verticals/ems-energy-management")} className="block hover:text-blue-600 cursor-pointer">
                EMS (Energy Management System)
              </a>
              <a onClick={() => navigate("/verticals/mms-machine-management")} className="block hover:text-blue-600 cursor-pointer">
                MMS (Machine Management System)
              </a>
            </div>
          </div>





          {/* Products */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Products <ChevronDown />
            </button>

            <div
              className="absolute left-0 bg-white shadow-xl rounded-lg p-4 space-y-2 min-w-90 z-[60]
                            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                            transition-all duration-400  pointer-events-none group-hover:pointer-events-auto"
            >
              <a
                onClick={() => navigate("/products/ac-drive")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                AC Drive
              </a>
              <a
                onClick={() => navigate("/products/dc-drive")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                DC Drive
              </a>
              <a
                onClick={() => navigate("/products/balluff-siemens")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Balluff Siemens
              </a>
              <a
                onClick={() => navigate("/products/ipa-weighing-solutions")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                IPA Weighing Solutions
              </a>
              <a
                onClick={() => navigate("/products/botted-panels")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Bolted Panel (PCC, MCC, Control Desk)
              </a>
              <a
                onClick={() => navigate("/products/lt-busduct")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                LT Busduct
              </a>
            </div>
          </div>




          {/* SERVICES */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Services <ChevronDown />
            </button>

            <div
              className="absolute left-0 bg-white shadow-xl rounded-lg p-4 space-y-2 min-w-95 z-[60]
                            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                            transition-all duration-400  pointer-events-none group-hover:pointer-events-auto"
            >
              <a
                onClick={() => navigate("/services/ac-dc-drive-repairing")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                AC/DC Drive Repairing
              </a>
              <a
                onClick={() => navigate("/services/acb-maintenance-servicing")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                ACB Maintenance & Servicing
              </a>
              <a
                onClick={() => navigate("/services/vcb-maintenance-servicing")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                VCB (11kV/33kV) Maintenance & Servicing
              </a>
              <a
                onClick={() => navigate("/services/site-erection-commissioning")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Site Erection & Commissioning
              </a>
            </div>
          </div>





          {/* PROJECT CONSULTING */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-600">
              Project Consulting <ChevronDown />
            </button>

            <div
              className="absolute left-0  bg-white shadow-xl rounded-lg p-4 space-y-2 min-w-50 z-[60]
                            opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 
                            transition-all duration-400  pointer-events-none group-hover:pointer-events-auto"
            >
              <a
                onClick={() => navigate("/projectconsulting/paper-plants")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Paper Plants
              </a>
              <a
                onClick={() => navigate("/projectconsulting/tmt-rolling-mills")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                TMT Rolling Mills
              </a>
              <a
                onClick={() => navigate("/projectconsulting/furnaces-ccm")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Furnaces & CCM
              </a>
              <a
                onClick={() => navigate("/projectconsulting/wire-drawing-plants")}
                className="block hover:text-blue-600 cursor-pointer"
              >
                Wire Drawing Plants
              </a>
            </div>
          </div>



          <a onClick={() => navigate("/aboutus")} className="hover:text-blue-600 cursor-pointer">About Us</a>
          <div className=" hover:text-[#FF852E]">
            <a onClick={() => navigate("/gallery")} className=" cursor-pointer"> Gallery</a>
          </div>

            {/* 
          <a
            onClick={() => navigate("/contactus")}
            className="hover:text-blue-600 cursor-pointer"
          >
            Contact Us
          </a> */}
        </div>



        {/* <-------------------------MOBILE----------------------------------------------> */}

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full bg-white shadow-lg px-6 py-6 space-y-5 z-[60]"
          >

            <a
              onClick={() => {
                navigate("/");
                setMobileOpen(false);
              }}
              className="block text-lg font-semibold"
            >
              Home
            </a>


            {/* Vertical */}
            <div>
              <button
                onClick={() => toggleDropdown("vertical")}
                className="flex justify-between w-full text-lg font-semibold"
              >
                Vertical <ChevronDown />
              </button>

              <AnimatePresence>
                {openDropdown === "vertical" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <a
                      onClick={() => {
                        navigate("/verticals/pulp-paper");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Pulp & Paper
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/tmt-rolling-mills");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      TMT Rolling Mills
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/furnaces-ccm");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Furnaces & CCM
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/coil-processing-lines");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Coil Processing Lines
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/building-automation");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Building Automation
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/cold-storage-automation");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Cold Storage Automation
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/software-scada");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Software & SCADA
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/ems-energy-management");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      EMS (Energy Management System)
                    </a>
                    <a
                      onClick={() => {
                        navigate("/verticals/mms-machine-management");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      MMS (Machine Management System)
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>





            {/* Products */}
            <div>
              <button
                onClick={() => toggleDropdown("products")}
                className="flex justify-between w-full text-lg font-semibold"
              >
                Products <ChevronDown />
              </button>

              <AnimatePresence>
                {openDropdown === "products" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <a
                      onClick={() => {
                        navigate("/products/ac-drive");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      AC Drive
                    </a>
                    <a
                      onClick={() => {
                        navigate("/products/dc-drive");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      DC Drive
                    </a>
                    <a
                      onClick={() => {
                        navigate("/products/balluff-siemens");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Balluff Siemens
                    </a>
                    <a
                      onClick={() => {
                        navigate("/products/ipa-weighing-solutions");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      IPA Weighing Solutions
                    </a>
                    <a
                      onClick={() => {
                        navigate("/products/botted-panels");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Bolted Panel (PCC, MCC, Control Desk)
                    </a>
                    <a
                      onClick={() => {
                        navigate("/products/lt-busduct");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      LT Busduct
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>






            {/* Services */}
            <div>
              <button
                onClick={() => toggleDropdown("services")}
                className="flex justify-between w-full text-lg font-semibold"
              >
                Services <ChevronDown />
              </button>

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <a
                      onClick={() => {
                        navigate("/services/ac-dc-drive-repairing");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      AC/DC Drive Repairing
                    </a>
                    <a
                      onClick={() => {
                        navigate("/services/acb-maintenance-servicing");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      ACB Maintenance & Servicing
                    </a>
                    <a
                      onClick={() => {
                        navigate("/services/vcb-maintenance-servicing");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      VCB (11kV/33kV) Maintenance & Servicing
                    </a>
                    <a
                      onClick={() => {
                        navigate("/services/site-erection-commissioning");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Site Erection & Commissioning
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>




            {/* Project Consulting */}
            <div>
              <button
                onClick={() => toggleDropdown("projectConsulting")}
                className="flex justify-between w-full text-lg font-semibold"
              >
                Project Consulting <ChevronDown />
              </button>

              <AnimatePresence>
                {openDropdown === "projectConsulting" && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="ml-4 mt-2 space-y-2 overflow-hidden"
                  >
                    <a
                      onClick={() => {
                        navigate("/projectConsulting/paper-plants");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Paper Plants
                    </a>
                    <a
                      onClick={() => {
                        navigate("/projectConsulting/tmt-rolling-mills");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      TMT Rolling Mills
                    </a>
                    <a
                      onClick={() => {
                        navigate("/projectConsulting/furnaces-ccm");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Furnaces & CCM
                    </a>
                    <a
                      onClick={() => {
                        navigate("/projectConsulting/wire-drawing-plants");
                        setMobileOpen(false);
                      }}
                      className="block"
                    >
                      Wire Drawing Plants
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>




            <a
              onClick={() => {
                navigate("/aboutus");
                setMobileOpen(false);
              }}
              className="block text-lg font-semibold"
            >
              About Us
            </a>

            <a
              onClick={() => {
                navigate("/contactus");
                setMobileOpen(false);
              }}
              className="block text-lg font-semibold"
            >
              Contact Us
            </a>

            <a
              onClick={() => {
                navigate("/gallery");
                setMobileOpen(false);
              }}
              className="block text-lg font-semibold"
            >
              Gallery
            </a>


            
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
