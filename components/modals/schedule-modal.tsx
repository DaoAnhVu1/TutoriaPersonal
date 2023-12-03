import { useModal } from "@/hooks/use-modal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
} from "@/components/ui/select";

const ScheduleModal = () => {
  const { isOpen, type, onClose, data } = useModal();
  const modalOpen = isOpen && type === "schedule";
  const handleClose = () => {
    onClose();
  };

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
          <Select>
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
          The tutor&apos;s earliest available time will be shown here.
        </h3>
      </DialogContent>
    </Dialog>
  );
};

export default ScheduleModal;
