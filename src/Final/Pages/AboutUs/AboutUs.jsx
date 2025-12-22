import { motion } from "framer-motion";

import BA0 from "../../Images/VerticalsImg/BuildingAutomation0.jpg"
import SS0 from "../../Images/VerticalsImg/SoftwareSCADA0.jpg"


export default function AboutUs() {
  return (
    <div className="">
    <div className="bg-gradient-to-br from-blue-500 to-purple-700  p-5 pt-40 md:p-20 md:pt-40">
    <div className=" bg-white/20 backdrop-blur rounded-xl">
    <div className="w-full flex-col items-center py-10 px-4 md:px-10 lg:px-10 space-y-20 text-gray-100">

      {/* Section 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">   
            {/* text-[#003b5b] */}
            ABOUT US
          </h1>
          <p className="text-lg leading-relaxed">
            Welcome to Automation Network & Services Pvt Ltd. Our company thrives on the
            Spirit of Innovation, delivering next-generation Industrial Automation
            solutions that empower industries to operate smarter, faster, and more
            efficiently. By integrating advanced Drives, PLC, DCS, SCADA, and robust
            Database Management systems, we provide end-to-end automation that transforms
            complex processes into seamless, high-performance operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-80 bg-gray-300 rounded-xl shadow-lg"
        >
         <img src={BA0} alt="Building Automation" className="w-full h-full object-cover rounded-xl shadow-lg"/>
        </motion.div>
      </div>

      {/* Section 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-80 bg-gray-300 rounded-xl shadow-lg order-2 md:order-1"
        >
         <img src={SS0} alt="Software SCADA" className="w-full h-full object-cover rounded-xl shadow-lg"/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4 order-1 md:order-2"
        >
          <p className="text-lg leading-relaxed">
           With deep expertise across industrial automation, CNC, and motion-control systems, we engineer innovative, high-precision solutions that deliver measurable results and drive industries toward the future of intelligent automation.

          </p>
        </motion.div>
      </div>

      

    </div>
    </div>
    </div>
    </div>
  );
}
