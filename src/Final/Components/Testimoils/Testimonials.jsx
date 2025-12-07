

import { motion } from "framer-motion";
import "./Tstyles.css";

const customers = [
  //1st Row
  { name: "Asha Patel", comment: "The team transformed our workflow — faster deliveries and fewer headaches." },
  { name: "Rahul Mehra", comment: "Exceptional service. Automation Networks saved us hours every week." },
  { name: "Priya Kapoor", comment: "Intuitive, reliable and fantastic support. Highly recommended!" },
  { name: "Vikram Singh", comment: "Our productivity shot up after the integration. Great ROI." },

  //1st row repeat customers
  { name: "Asha Patel", comment: "The team transformed our workflow — faster deliveries and fewer headaches." },
  { name: "Rahul Mehra", comment: "Exceptional service. Automation Networks saved us hours every week." },
  { name: "Priya Kapoor", comment: "Intuitive, reliable and fantastic support. Highly recommended!" },
  { name: "Vikram Singh", comment: "Our productivity shot up after the integration. Great ROI." },
  
  //2nd Row
  { name: "Sneha Rao", comment: "Easy to set up and the results were immediate." },
  { name: "Arjun Desai", comment: "Clean UI, powerful features. Exactly what we needed." },
  { name: "Neha Sharma", comment: "Automation reduced manual errors drastically." },
  { name: "Kabir Verma", comment: "A must-have for teams who want to scale without chaos." },
  //2nd row repeat customers
  { name: "Sneha Rao", comment: "Easy to set up and the results were immediate." },
  { name: "Arjun Desai", comment: "Clean UI, powerful features. Exactly what we needed." },
  { name: "Neha Sharma", comment: "Automation reduced manual errors drastically." },
  { name: "Kabir Verma", comment: "A must-have for teams who want to scale without chaos." },

];

// Split into 2 rows
const firstRow = customers.slice(0, Math.ceil(customers.length / 2));
const secondRow = customers.slice(Math.ceil(customers.length / 2));

export default function Testimonial() {
  return (
    <div className="py-16 w-full overflow-hidden bg-white">

      <h2 className="text-3xl lg:text-5xl text-center font-semibold text-gray-800 mb-12">
        Testimonials
      </h2>

      {/* ===== ROW 1 — Smooth Left to Right ===== */}
      <div className="overflow-hidden py-8">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 40,
            ease: "linear"
          }}
        >
          {[...firstRow, ...firstRow].map((c, i) => (
            <div
              key={i}
              // className="min-w-[350px] bg-white shadow-lg rounded-xl p-6 border border-gray-200"
              className="min-w-[350px] bg-white rounded-xl p-6 border border-blue-200 shadow-[0_0_18px_rgba(30,144,255,0.25)] transition-transform duration-300 hover:scale-110"

            >
              <div className="text-xl font-semibold text-gray-800">{c.name}</div>
              <div className="text-gray-600 mt-2">{c.comment}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="" />

      {/* ===== ROW 2 — Smooth Right to Left ===== */}
      <div className="overflow-hidden py-5">
        <motion.div
          className="flex gap-6"
          animate={{ x: ["-100%", "0%"] }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear"
          }}
        >
          {[...secondRow, ...secondRow].map((c, i) => (
            <div
              key={i}
              // className="min-w-[350px] bg-white shadow-lg rounded-xl p-6 border border-gray-200"
              className="min-w-[350px] bg-white rounded-xl p-6 border border-blue-200 shadow-[0_0_18px_rgba(30,144,255,0.25)] transition-transform duration-300 hover:scale-110"

            >
              <div className="text-xl font-semibold text-gray-800">{c.name}</div>
              <div className="text-gray-600 mt-2">{c.comment}</div>
            </div>
          ))}
        </motion.div>
      </div>

    </div>
  );
}



