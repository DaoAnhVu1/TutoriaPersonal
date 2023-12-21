"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookA, GraduationCap, CalendarCheck, Users } from "lucide-react";
import subject from "@/public/subject.jpeg";
import tutor from "@/public/tutor-card.jpeg";
import schedule from "@/public/schedule.jpeg";
import learn from "@/public/start_learn.jpeg";

const cardData = [
  {
    title: "Choose a subject",
    icon: <BookA className="w-32 h-32" />,
    image: subject.src,
  },
  {
    title: "Choose a tutor",
    icon: <GraduationCap className="w-32 h-32" />,
    image: tutor.src,
  },
  {
    title: "Scheduling",
    icon: <CalendarCheck className="w-32 h-32" />,
    image: schedule.src,
  },
  {
    title: "Start learning",
    icon: <Users className="w-32 h-32" />,
    image: learn.src,
  },
];

const CardsDisplay = () => {
  return (
    <>
      <h2 className="text-center text-black text-4xl font-bold mb-10 mt-10">
        The best way for online education
      </h2>
      <div className="card-container w-full flex justify-around items-center flex-col md:flex-row gap-10  px-0 md:px-24 mb-10">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="w-4/5 md:w-1/4 shadow-md rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.25 }}
            viewport={{ once: true }}
          >
            <Card
              className="h-72 flex flex-col justify-center transition bg-cover"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <CardContent className="w-full h-full flex flex-col justify-center bg-black bg-opacity-50">
                <CardTitle className="text-center text-xl text-white uppercase">{`${
                  index + 1
                }. ${card.title}`}</CardTitle>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardsDisplay;
