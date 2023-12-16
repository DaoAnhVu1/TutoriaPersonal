"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import mainAnimation from "@/animation/student-main.json";
import { User } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HeroProps {
  user?: User | null;
}

export const Hero = ({ user }: HeroProps) => {
  const router = useRouter();
  return (
    <div className="hero-container flex flex-col-reverse lg:flex-row  px-10 gap-1 w-full min-h-[600px]">
      <motion.div
        className="flex-1 flex flex-col gap-1 justify-center pl-10"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-4xl font-bold lg:text-6xl text-center lg:text-left">
          Welcome, {user?.name}! Let&apos;s start with your first lesson of the
          day!
        </p>

        <p className="mt-5 text-md text-center lg:text-left">
          Make learning an engaging and rewarding experience!
        </p>
        <div className="flex flex-col lg:gap-5 lg:flex-row gap-0 w-full">
          <Link href={"/student/findtutor"}>
            <Button className="rounded-full bg-black lg:w-28 mt-5 cursor-pointer text-white font-semibold">
              Find Tutor
            </Button>
          </Link>
          <Link href={"/student/schedule"}>
            <Button className="rounded-full bg-green-600 lg:w-28 mt-5 cursor-pointer font-semibold hover:bg-green-500">
              My Schedule
            </Button>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="flex-1 flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Lottie animationData={mainAnimation} className="w-11/12" />
      </motion.div>
    </div>
  );
};
