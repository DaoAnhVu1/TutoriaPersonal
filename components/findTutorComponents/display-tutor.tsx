import { Card, CardContent } from "@/components/ui/card";
import TutorCard from "./tutor-card";
import { UserSubjectsWithSubjects } from "@/type";
import { ScrollArea } from "@/components/ui/scroll-area";

interface DisplayTutorProps {
  tutors: any[];
  loading: boolean;
}
const DisplayTutor = ({ tutors, loading }: DisplayTutorProps) => {
  if (loading) {
    return <p className="h-[800px]">Loading...</p>;
  }
  return (
    <div className="w-full mt-10 h-[800px] md:mt-0">
      <h2 className="text-2xl font-semibold block md:hidden mb-5 md:mb-0">
        Available Tutors
      </h2>
      <ScrollArea className="h-[700px]">
        <div className="grid grid-cols-1 gap-5">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.id} tutorInfo={tutor} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default DisplayTutor;
