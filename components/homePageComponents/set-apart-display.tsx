"use client";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animation from "@/animation/main2.json";
import Image from "next/image";
import learn from "@/public/learn.jpeg";
import { Playpen_Sans } from "next/font/google";
const kalam = Playpen_Sans({ subsets: ["latin"], weight: ["700", "400"] });
const SetApartDisplay = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="why-container w-full flex flex-col-reverse md:flex-row px-0 md:px-24 mt-24"
    >
      <div className="w-full flex flex-col-reverse md:flex-row rounded-md overflow-hidden bg-[#12544f]">
        <div className="flex-1 h-[500px] relative flex items-center justify-center">
          <Image fill src={learn.src} className="object-cover" alt="alo" />
        </div>
        <div className="flex-1 flex flex-col pl-10 pt-10 pr-5 text-white">
          <h2 className={`${kalam.className} text-5xl font-semibold`}>
            What set us apart?
          </h2>
          <p className={`${kalam.className} text-xl mt-10`}>
            At{" "}
            <span className="text-green-600 uppercase font-semibold">
              Tutoria
            </span>
            , we are committed to revolutionizing online education. Here&apos;s
            what sets us apart: Our innovative approach combines cutting-edge
            technology with personalized learning experiences, ensuring that
            every student receives the tailored support they need to excel. With
            a team of dedicated educators and a dynamic curriculum, we strive to
            create an engaging and interactive environment that fosters a love
            for learning. Join us on this educational journey and experience the
            difference of learning with Tutoria.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default SetApartDisplay;
