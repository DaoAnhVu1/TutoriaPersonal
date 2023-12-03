"use client";
import { useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import axios from "axios";

const ScheduleModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const [loading, setLoading] = useState(false);
  const [dateString, setDateString] = useState("");
  const modalOpen = isOpen && type === "schedule";
  const [availableTimeId, setAvailableTimeId] = useState<any>("");
  const handleClose = () => {
    setDateString("");
    setAvailableTimeId("");
    onClose();
  };

  useEffect(() => {
    async function fetchDate() {
      setLoading(true);
      console.log("called");
      if (availableTimeId !== "") {
        const earlistDate = await axios.get(
          `/api/availabletimes/earlistDate?availableTimeId=${availableTimeId}`
        );
        setDateString(earlistDate.data.formattedDate);
      }
      setLoading(false);
    }
    fetchDate();
  }, [availableTimeId]);

  const tutorInfo = data.tutorInfo;

  const daysOfWeekMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  return (
    <Dialog open={modalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            Schedule a session with {tutorInfo && tutorInfo.tutorName}
          </DialogTitle>
        </DialogHeader>
        <div>
          <Select
            onValueChange={(value) => {
              setAvailableTimeId(value);
            }}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a day" />
            </SelectTrigger>
            <SelectContent className="w-full">
              <SelectGroup>
                {tutorInfo &&
                  tutorInfo.availableTimes &&
                  tutorInfo.availableTimes.map((availableTime: any) => (
                    // @ts-ignore
                    <SelectItem key={availableTime.id} value={availableTime.id}>
                      {
                        // @ts-ignore
                        `${daysOfWeekMap[availableTime.weekDay]}  (${
                          availableTime.startTime
                        }-${availableTime.endTime})`
                      }
                    </SelectItem>
                  ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <h3 className="mt-3">
          {!loading && dateString !== "" ? (
            <>Your schedule will be on: {dateString}</>
          ) : (
            <>The earlist date available will be display here</>
          )}
        </h3>
        <DialogFooter>
          <Button disabled={loading}>Submit</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
