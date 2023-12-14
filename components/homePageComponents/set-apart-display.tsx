"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "@/animation/main2.json";
const SetApartDisplay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="why-container w-full flex flex-col-reverse md:flex-row  px-0 md:px-24 mb-8"
    >
      <div className="flex-1 flex items-center justify-center">
        <Lottie animationData={animation} />
      </div>
      <div className="flex-1 flex justify-center  flex-col ">
        <p className="font-bold text-4xl text-center">What sets us apart?</p>
        <p className="text-xl mt-2 text-center">
          At{" "}
          <span className="text-green-600 uppercase font-semibold">
            Tutoria
          </span>
          , we are committed to revolutionizing online education. Here&apos;s
          what sets us apart:
        </p>
        <ul className="mt-2 text-xl flex flex-col items-center gap-2">
          <li>Simple, straight foward process.</li>
          <li>Detailed information about tutor.</li>
          <li>Live session on the platform.</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default SetApartDisplay;
