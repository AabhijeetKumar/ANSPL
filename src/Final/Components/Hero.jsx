import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";


export default function Hero() {
  const navigate = useNavigate();

  return (
    <>
      {/* SECTION 1 */}
      <div className="mt-24 ">
        <div className="bg-blue-500">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="
        w-full py-3 
        bg-white/20 backdrop-blur-md shadow-md
        flex flex-col md:flex-row 
        items-center justify-center 
        gap-3 md:gap-10
        text-white text-sm md:text-base
       "
        >
          {/* Phone Section */}
          <div className="flex items-center gap-1">
            <motion.span
              whileHover={{
                scale: 1.2,
                filter: "drop-shadow(0 0 8px #00eaff)",
              }}
            >
              <FiPhone className="text-xl text-cyan-300 mx-2" />
            </motion.span>

            <div className="flex flex-col md:flex-row md:gap-1 items-center">
              {["+91-9830505000", "+91-9339505012", "+91-9564824342"].map(
                (phone, index) => (
                  <div key={index} className="flex items-center">
                    <motion.a
                      href={`tel:${phone.replace(/-/g, "")}`}
                      className="hover:underline"
                      whileHover={{ scale: 1.02 }}
                    >
                      {phone}
                    </motion.a>

                    {/* Separator • except last */}
                    {index < 2 && (
                      <span className="mx-2 text-white/70 select-none">|</span>
                    )}
                  </div>
                )
              )}
            </div>
          </div>

          {/* Email Section */}
          <div className="flex items-center gap-1">
            <motion.span
              whileHover={{
                scale: 1.2,
                filter: "drop-shadow(0 0 8px #ffdd4a)",
              }}
            >
              <FiMail className="text-xl text-yellow-300 mx-2 " />
            </motion.span>

            <div className="flex flex-col md:flex-row md:gap-1 items-center">
              {[
                "kiran@automationnetwork.net",
                "msupport@automationnetwork.net",
              ].map((email, index) => (
                <div key={index} className="flex items-center">
                  <motion.a
                    href={`mailto:${email}`}
                    className="hover:underline"
                    whileHover={{ scale: 1.02 }}
                  >
                    {email}
                  </motion.a>

                  {/* Separator • except last */}
                  {index < 1 && (
                    <span className="mx-2 text-white/70 select-none">|</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </div>

        <div
          className="bg-gradient-to-br from-blue-500 to-purple-700 text-white  px-6 lg:px-25 md:pb-20
                      flex flex-col lg:flex-row items-center justify-center gap-10 text-center lg:text-left"
        >
          {/* LEFT SECTION */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col items-center lg:items-start md:pb-20"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl lg:text-5xl font-semibold leading-snug py-5 md:py-15 lg:py-3">
              Streamlining Key Industries Globally With Transformative Factory
              Automation Solutions
            </h1>

            <p className="text-sm lg:text-lg max-w-[600px]">
              Optimising Crucial Production Processes With Top-Tier Integration
              Expertise
            </p>

            
          </motion.div>

          {/* RIGHT Form SECTION */}
          <motion.div
            className="w-full lg:w-1/2 flex mb-8 md:mb-0 justify-center "
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
            <div className="w-full flex justify-center bg-white/20 md:mt-15 md:ml-5 rounded-xl ">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSesjTvuVZdOfJApixpqOYCHirTYmO0F7VkvAGBRY-HIBm5htw/viewform?embedded=true"
                width="100%"
                frameborder="0"
                className="h-150 shadow-xl mt-5 mb-5"
              >
                Loading…
              </iframe>
            </div>
            
          </motion.div>
        </div>
      </div>



      {/* SECTION 2 */}
      <div>
      <motion.div
        className="text-white bg-black/85 flex justify-center flex-col text-center py-40 px-6 lg:px-40"
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-3xl lg:text-5xl font-semibold">
          Do More With Less
        </h1>
        <p className="pt-1 text-gray-100 text-sm lg:text-base">
          Reach peak performance with the power of Automation Network & Services.
        </p>
      </motion.div>
      </div>
    </>
  );
}
