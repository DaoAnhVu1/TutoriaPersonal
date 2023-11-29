"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState, useEffect } from "react";
import { BookA, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SetupProfile = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleConfirm = () => {
    if (selectedOption === "tutor") {
      setIsConfirmed(true);
    }
  };
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  const dropIn = {
    hidden: { x: "-100vw" },
    visible: { x: "0" },
    exit: { x: "100vw" },
  };
  return (
    <>
      <div className="h-screen w-full flex items-center justify-center">
        <Card className={`${isConfirmed ? "hidden" : ""} w-1/2`}>
          <CardContent>
            <CardHeader>
              <CardTitle className="text-center text-3xl">
                Join as a student or tutor
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col gap-3 md:flex-row w-full">
              <div
                className={`flex-1 flex flex-col gap-2 rounded-lg cursor-pointer p-5 ${
                  selectedOption === "student"
                    ? "border-2 border-black"
                    : "border-2 border-gray-300 hover:border-black"
                }`}
                onClick={() => setSelectedOption("student")}
              >
                <div className="w-full flex justify-center">
                  <BookA className="w-16 h-16 block" />
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    I am a student trying to learn new things
                  </p>
                </div>
              </div>

              <div
                className={`flex-1 flex flex-col rounded-lg gap-2 cursor-pointer p-5 ${
                  selectedOption === "tutor"
                    ? "border-2 border-black"
                    : "border-2 border-gray-300 hover:border-black"
                }`}
                onClick={() => setSelectedOption("tutor")}
              >
                <div className="w-full flex justify-center">
                  <GraduationCap className="w-16 h-16 block" />
                </div>
                <div>
                  <p className="text-xl font-semibold">
                    I am a tutor and I want to share my knowledge
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-center mt-8">
              <Button className="w-1/2 bg-green-600" onClick={handleConfirm}>
                Confirm
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className={`${isConfirmed ? "" : "hidden"} w-1/2`}></Card>
      </div>
    </>
  );
};

export default SetupProfile;
