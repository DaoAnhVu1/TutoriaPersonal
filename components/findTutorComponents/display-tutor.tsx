import { Card, CardContent } from "@/components/ui/card";
import TutorCard from "./tutor-card";
import { UserSubjectsWithSubjects } from "@/type";

interface DisplayTutorProps {
  tutors: any[];
  loading: boolean;
}
const DisplayTutor = ({ tutors, loading }: DisplayTutorProps) => {
  if (loading) {
    return <p className="h-[500px]">Loading...</p>;
  }
  return (
    <div className="w-full mt-10 md:mt-0">
      <h2 className="text-2xl font-semibold block md:hidden">
        Available Tutors
      </h2>
      <div className="grid grid-cols-1 gap-5">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutorInfo={tutor} />
        ))}
      </div>
    </div>
  );
};

export default DisplayTutor;
