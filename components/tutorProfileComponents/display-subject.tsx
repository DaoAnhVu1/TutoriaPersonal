"use client";
import { UserSubjectsWithSubjects } from "@/type";
import { Badge } from "@/components/ui/badge";
import { useModal } from "@/hooks/use-modal";
import { Subject, User } from "@prisma/client";
import { Plus } from "lucide-react";

interface DisplaySubjectProps {
  subjects: any[];
  allSubjects: Subject[];
  user: User | null;
}
const DisplaySubject = ({
  subjects,
  allSubjects,
  user,
}: DisplaySubjectProps) => {
  const { onOpen } = useModal();
  return (
    <>
      {" "}
      {subjects.map((subject) => (
        <Badge key={subject.subject.id} className="w-fit h-6">
          {subject.subject.name}
        </Badge>
      ))}
      <Badge
        className="w-16 h-6 flex justify-center cursor-pointer"
        onClick={() => onOpen("addSubject", { user, allSubjects })}
      >
        <Plus />
      </Badge>
    </>
  );
};

export default DisplaySubject;
