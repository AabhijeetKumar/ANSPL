import { useState } from "react";
import { motion } from "framer-motion";




const MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.34213419601!2d88.37104347777097!3d22.491343112772654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271182418b7a3%3A0x53056f60522302ca!2sAutomation%20Network%20%26%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1763968163554!5m2!1sen!2sin";

const COMPANY_ADDRESS = "Automation Network & Services Pvt. Ltd,3rd Floor, 44A, Shyama Pally, Jadavpur, Kolkata -700032";
const COMPANY_EMAIL = "contact@automationnetworks.com";
const COMPANY_PHONE = "+91 9830505000";
const FACTORY_ADDRESS = "Automation Network & Services Pvt. Ltd, Near Tarun Sangha Club, Ramchandrapur, Narendrapur, Kolkata -700103";


export default function ContactPg() {

  return (
    <div className="">
    <div className="w-full bg-white px-6 md:px-20 mt-24">
      {/* TOP TITLE */}
      <div className="text-center mb-12 pt-8">
        <h1 className="text-blue-600 text-4xl lg:text-5xl font-bold"> Contact Us </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Reaching us is effortless—visit, call, or email, and we’ll be ready to dive into
          your ideas the moment you connect.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* =============== LEFT SIDE FORM =============== */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          
<div className="w-full bg-white shadow-lg p-1 rounded-xl border border-blue-400 shadow-[0_0_20px_#60A5FA]">
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSesjTvuVZdOfJApixpqOYCHirTYmO0F7VkvAGBRY-HIBm5htw/viewform?embedded=true"
                width="100%"
                frameborder="0"
                className="h-150 md:h-180"
              >
                Loading…
              </iframe>
            </div>
        </motion.form>



        {/* =============== RIGHT SIDE SECTION =============== */}
        <div className="flex flex-col gap-5">

          {/* MAP */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full h-64 md:h-80 border border-blue-400 shadow-lg rounded-xl overflow-hidden"
          >
            <iframe
              src={MAP_URL}
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* ADDRESS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-3 w-full bg-white shadow-lg rounded-xl border border-blue-400"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Corporate Office</h2>

            <div className="space-y-2 text-gray-700">
              <p><strong>Address:</strong><br />{COMPANY_ADDRESS}</p>
              <p><strong>Email:</strong> {COMPANY_EMAIL}</p>
              <p><strong>Phone:</strong> {COMPANY_PHONE}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="p-3 w-full bg-white shadow-lg rounded-xl border border-blue-400"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Factory</h2>

            <div className="space-y-2 text-gray-700">
              <p><strong>Address:</strong><br />{FACTORY_ADDRESS}</p>
              <p><strong>Email:</strong> {COMPANY_EMAIL}</p>
              <p><strong>Phone:</strong> {COMPANY_PHONE}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}
