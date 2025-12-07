import { motion } from "framer-motion";

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
          {/* Replace with actual image */}
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
          {/* Replace with actual image */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4 order-1 md:order-2"
        >
          <p className="text-lg leading-relaxed">
            With deep expertise across sectors—Steel Processing, Paper Machines, Printing,
            Converting, Packaging, Material Handling, and Cranes—we design and implement
            automation that drives measurable results.
          </p>
        </motion.div>
      </div>

      {/* Section 3 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4"
        >
          <p className="text-lg leading-relaxed">
            We also specialize in high-precision CNC and motion-control solutions tailored
            to the demanding needs of automotive manufacturing, material handling, and
            machine tool applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-80 bg-gray-300 rounded-xl shadow-lg"
        >
          {/* Replace with actual image */}
        </motion.div>
      </div>

      {/* Section 4 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full h-64 md:h-80 bg-gray-300 rounded-xl shadow-lg order-2 md:order-1"
        >
          {/* Replace with actual image */}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-4 order-1 md:order-2"
        >
          <p className="text-lg leading-relaxed">
            Innovation is not just our promise—it’s our foundation. We engineer solutions
            that propel industries toward the future of intelligent automation.
          </p>
        </motion.div>
      </div>

    </div>
    </div>
    </div>
    </div>
  );
}
