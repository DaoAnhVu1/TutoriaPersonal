"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { BookA, GraduationCap, CalendarCheck, Users } from "lucide-react";

const cardData = [
  { title: "Choose a subject", icon: <BookA className="w-32 h-32" /> },
  { title: "Choose a tutor", icon: <GraduationCap className="w-32 h-32" /> },
  { title: "Scheduling", icon: <CalendarCheck className="w-32 h-32" /> },
  { title: "Start learning", icon: <Users className="w-32 h-32" /> },
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
            className="w-4/5 md:w-1/4 shadow-md"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.25 }}
            viewport={{ once: true }}
          >
            <Card className="h-72 flex flex-col justify-center hover:scale-105 transition">
              <CardContent>
                <div className="flex justify-center mb-5">{card.icon}</div>
                <CardTitle className="text-center text-xl">{`${index + 1}. ${
                  card.title
                }`}</CardTitle>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardsDisplay;
