"use client";
import { Subject, User } from "@prisma/client";
import { useEffect, useState } from "react";
import DisplayFilter from "./display-filter";
import DisplayTutor from "./display-tutor";
import axios from "axios";
import qs from "query-string";
import { Button } from "@/components/ui/button";

interface DisplayFindTutorProps {
  allSubjects: Subject[];
}

const DisplayFindTutor = ({ allSubjects }: DisplayFindTutorProps) => {
  const [validSubjects, setValidSubjects] = useState<Subject[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [matchedTutors, setMatchedTutors] = useState<User[]>([]);
  const [maxPage, setMaxPage] = useState<number>(1);

  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const subjectIds = validSubjects.map((subject) => subject.id);
      const url = qs.stringifyUrl({
        url: "/api/tutors",
        query: {
          pageNumber: pageNumber.toString(),
          ...(subjectIds.length > 0 && { subjectIds: subjectIds.join(",") }),
        },
      });
      const tutors = await axios.get(url);
      setMatchedTutors(tutors.data);
      setMaxPage(Math.ceil(tutors.data.length / itemsPerPage));
      setLoading(false);
    };
    fetchData();
  }, [validSubjects, pageNumber, maxPage]);

  return (
    <div className="display-find-tutor-container">
      <div className="w-full h-48 bg-gradient-to-r from-[#10b981] to-[#98EECC] flex justify-center items-center">
        <p className="text-white text-center text-5xl font-bold">
          Find your tutor
        </p>
      </div>
      <div className="title-container flex justify-between px-10 my-10">
        <h2 className="text-2xl font-semibold">Filter options</h2>
        <h2 className="text-2xl font-semibold hidden md:block">
          Available Tutors
        </h2>
      </div>
      <div className="flex flex-col md:flex-row px-10 mt-5">
        <div className="basis-1/4">
          <DisplayFilter
            subjects={allSubjects}
            validSubjects={validSubjects}
            setValidSubjects={setValidSubjects}
          />
        </div>
        <div className="basis-3/4 ml-0 md:ml-24">
          <DisplayTutor tutors={matchedTutors} loading={loading} />
          <div className="w-full flex justify-center items-center mt-5">
            <Button
              className="mr-3"
              onClick={() => {
                setPageNumber(pageNumber - 1);
              }}
              disabled={pageNumber <= 1}
            >
              Prev
            </Button>
            <span>{pageNumber}</span>
            <Button
              className="ml-3"
              onClick={() => {
                setPageNumber(pageNumber + 1);
              }}
              disabled={pageNumber >= maxPage}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayFindTutor;
