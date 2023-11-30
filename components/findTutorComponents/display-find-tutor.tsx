"use client";
import { Subject, User } from "@prisma/client";
import { useState } from "react";
import DisplayFilter from "./display-filter";
import DisplayTutor from "./display-tutor";

interface DisplayFindTutorProps {
  allSubjects: Subject[];
}

const DisplayFindTutor = ({ allSubjects }: DisplayFindTutorProps) => {
  const [validSubjects, setValidSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(true);
  const [matchedTutors, setMatchedTutors] = useState<User[]>([]);

  return (
    <div className="display-find-tutor-container mt-16">
      <div className="title-container flex justify-between px-10 mb-10">
        <h2 className="text-2xl font-semibold">Filter options</h2>
        <h2 className="text-2xl font-semibold">Available Tutors</h2>
      </div>
      <div className="flex flex-col md:flex-row px-10 mt-5">
        <div className="basis-1/4">
          <DisplayFilter
            subjects={allSubjects}
            validSubjects={validSubjects}
            setValidSubjects={setValidSubjects}
          />
        </div>
        <div className="basis-3/4 ml-0 md:ml-16">
          <DisplayTutor tutors={matchedTutors} />
        </div>
      </div>
    </div>
  );
};

export default DisplayFindTutor;
