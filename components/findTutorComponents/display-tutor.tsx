import { User } from "@prisma/client";

interface DisplayTutorProps {
  tutors: User[];
}
const DisplayTutor = ({ tutors }: DisplayTutorProps) => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>
    </div>
  );
};

export default DisplayTutor;
