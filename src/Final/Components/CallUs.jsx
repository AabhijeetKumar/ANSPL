import { motion } from "framer-motion";

export default function CallUs() {
  return (
    <>
      <motion.div
        className="
        flex flex-col justify-center items-center text-center
        bg-yellow-300 text-black
        py-20 px-6"
        initial={{ opacity: 0.1 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1
          className="
          text-3xl        /* mobile */
          md:text-4xl     /* tablet */
          lg:text-5xl     /* large desktops */
          font-semibold leading-snug
        "
        >
          Vision Without Action Is Merely a Dream.
        </h1>

        <div className="pt-8 w-full flex justify-center px-10 md:px-16">
          <button
            type="button"
            className="
      rounded-lg
      cursor-pointer
      w-full sm:w-auto
      text-base sm:text-lg
      px-4 py-3 sm:px-6 sm:py-4

      /* Desktop default (outline button) */
      lg:border lg:border-[#043f77] lg:text-[#043f77] lg:bg-transparent

      /* Mobile & Tablet default (filled button) */
      bg-black  text-white
      
      /* Hover effects for desktop */
      hover:bg-black hover:text-white

      /* Scale animation */
      transition-transform duration-200
      hover:scale-105 active:scale-95
    "
          >
            Talk To Us: <a href="tel:+919830505000"> +91 9830505000</a>
          </button>
        </div>
      </motion.div>
    </>
  );
}
