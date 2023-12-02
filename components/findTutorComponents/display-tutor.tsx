import { Card, CardContent } from "@/components/ui/card";
import TutorCard from "./tutor-card";
import { UserSubjectsWithSubjects } from "@/type";
import { Skeleton } from "@/components/ui/skeleton";

interface DisplayTutorProps {
  tutors: any[];
  loading: boolean;
}
const DisplayTutor = ({ tutors, loading }: DisplayTutorProps) => {
  if (loading) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-12 w-full"/>
          <div className="space-y-5">
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-24 w-full" />
          </div>
        </div>
      </div>
    );
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
