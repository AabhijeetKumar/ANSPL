import { useParams } from "react-router-dom";
import { verticals } from "./verticals";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function VerticalItems() {
  const navigate = useNavigate();

  const { productId } = useParams();
  const product = verticals.find((p) => p.id === productId);

  if (!product)
    return <h2 className="p-10 text-center text-white">Vertical Not Found</h2>;

  return (
    <div className=" mt-24">
      {/* Page Title */}
      <h1 className="text-center text-4xl md:text-5xl font-bold tracking-wide py-12">
        VERTICALS
      </h1>

      {/* SECTION 1 — TEXT + VIDEO */}
      <div
        className="w-full bg-black flex flex-col md:flex-row gap-10 py-2 px-6 md:py-0 md:px-20 
     h-auto md:h-120"
      >
        {/* Left 1/2: Text */}
        <motion.div
    className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    <h1 className="text-white text-3xl md:text-4xl font-semibold">
      {product.title}
    </h1>
    <p className="text-gray-300 text-lg leading-relaxed">
      {product.description}
    </p>
  </motion.div>

        {/* Right 1/2: Video */}
        <video
          src={product.video}
          className="
      w-full md:w-1/2 
      h-50 md:h-full 
      object-cover border border-gray-800
    "
          autoPlay
          loop
          muted
        />
      </div>

      {/* SECTION 2 — IMAGES GRID + BUTTON */}
      <div className="w-full px-6 md:px-20 py-12">
        {/* Images Grid */}
        <div
          className="
          grid 
          grid-cols-2 
          md:grid-cols-3 
          gap-6
        "
        >
          {product.images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full h-48 rounded-xl overflow-hidden border border-gray-800"
            >
              <img
                src={img}
                alt={`${product.title}-${index}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>

        {/* Gallery Button */}
        <div className="flex justify-center mt-10">
          <div className="flex items-center gap-4">
            {/* GALLERY TEXT */}
            <motion.span
              className=" text-xl font-semibold tracking-wide border-b-2 border-yellow-400 pb-1"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Visit Our Gallery
            </motion.span>

            {/* ARROW BUTTON */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate("/gallery")}
              className="
                p-3 
                rounded-full 
                bg-white/30  
                shadow-md 
                flex items-center justify-center
                border border-white/20
              "
            >
              <FiArrowRight className="text-yellow-400 text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
