import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
const StudentInProgressButton = () => {
  return (
    <div className="w-full">
      <HoverCard>
        <HoverCardTrigger>
          <Button className="w-full">Complete</Button>
        </HoverCardTrigger>
        <HoverCardContent className="" side="right">
          After completing the session, click this
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default StudentInProgressButton;
