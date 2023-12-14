import React from "react";
import "./infinite-scoll.css";

const academicSubjects = [
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Literature",
  "History",
  "Geography",
  "Economics",
  "Psychology",
];

const InfiniteScroll = () => {
  return (
    <>
      <div className="logos mx-24">
        {Array.from({ length: 2 }).map((_, slideIndex) => (
          <div className="logos-slide" key={slideIndex}>
            {academicSubjects.map((subject, subjectIndex) => (
              <span
                key={subjectIndex}
                className={`overflow-hidden text-2xl px-5 font-semibold uppercase ${
                  subjectIndex % 2 === 0 ? "text-green-600" : ""
                }`}
              >
                {subject}
              </span>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default InfiniteScroll;
