import { Button } from "@/components/ui/button";
import { Sparkle } from "lucide-react";

interface WriteReviewButtonProps {
  sessionId: string;
}

const WriteReviewButton = ({ sessionId }: WriteReviewButtonProps) => {
  return (
    <Button className="w-1/2 md:w-36">
      <Sparkle className="mr-2" /> Review
    </Button>
  );
};

export default WriteReviewButton;
