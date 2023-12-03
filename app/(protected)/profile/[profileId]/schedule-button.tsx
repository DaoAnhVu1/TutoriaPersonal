"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import { AvailableTime } from "@prisma/client";

interface ScheduleButtonProps {
  tutorName: string;
  availableTimes: AvailableTime[];
}
const ScheduleButton = ({ tutorName, availableTimes }: ScheduleButtonProps) => {
  const { onOpen } = useModal();
  const tutorInfo = { tutorName, availableTimes };
  return (
    <Button
      className="w-full bg-green-600 text-lg"
      onClick={() => onOpen("schedule", { tutorInfo: tutorInfo })}
    >
      Schedule this tutor
    </Button>
  );
};

export default ScheduleButton;
