
import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

import img1 from "./img/image1.jpg";
import img2 from "./img/image2.png";
import img3 from "./img/image3.jpg";
import img4 from "./img/image4.png";
import img5 from "./img/image5.png";
import img6 from "./img/image6.jpg";
import img7 from "./img/image7.png";
import img8 from "./img/image8.jpg";
import img9 from "./img/image9.png";
import img10 from "./img/image10.png";
import img11 from "./img/image11.png";
import img12 from "./img/image12.jpg";
import img13 from "./img/image13.jpg";
import img14 from "./img/image14.jpg";
import img15 from "./img/image15.png";
import img16 from "./img/image16.jpg";

const client = [
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16, 
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16,
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16, 
  img1, img2, img3, img4,
  img5, img6, img7, img8,
  img9, img10, img11, img12,
  img13, img14, img15, img16
];

export default function Carousel() {
  const controls = useAnimation();
  const trackRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (trackRef.current) {
      setWidth(trackRef.current.scrollWidth / 2); 
    }

    controls.start({
      x: -width,
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity,
      },
    });
  }, [width, controls]);

  return (
    <div className="w-full overflow-hidden py-20 pb-40  bg-white">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold text-gray-800 mb-10">
       Meet Our Clients
      </h1>

      <motion.div
        ref={trackRef}
        animate={controls}
        className="flex gap-6"
      >
        {[...client, ...client].map((src, i) => (
          <div
            key={i}
            className="min-w-[150px] flex items-center justify-center bg-white p-4 shadow-md rounded-xl border border-gray-200"
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
