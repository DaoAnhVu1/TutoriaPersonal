import { currentUser } from "@/lib/current-user";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";

import DisplaySubject from "@/components/tutorProfileComponents/display-subject";
import DisplayQualification from "../../../../components/tutorProfileComponents/display-qualification";
import DisplaySchedule from "../../../../components/tutorProfileComponents/display-schedule";

const TutorProfilePage = async () => {
  const user = await currentUser();

  const subjects = await db.usersSubjects.findMany({
    where: {
      userId: user?.id,
    },
    include: {
      subject: true,
    },
  });

  const allSubjects = await db.subject.findMany({
    where: {
      NOT: {
        id: {
          in: subjects.map((userSubject) => userSubject.subject.id),
        },
      },
    },
  });

  const qualifications = await db.qualification.findMany({
    where: {
      userId: user?.id,
    },
  });
  return (
    <div className="profile-container px-10">
      <div className="top-section mt-5 flex flex-col md:flex-row">
        <div className="avatar-container flex items-center flex-col gap-3">
          <div className="w-64 h-64 relative">
            <Image
              // @ts-ignore
              src={user?.imageUrl}
              fill
              alt="hello"
              className="rounded-full block"
            />
          </div>
          <h2 className="font-semibold text-4xl text-center">{user?.name}</h2>
          <Button className="w-full bg-green-600 mt-5">
            Change profile picture
          </Button>
          <h3 className="w-full">{user?.description}</h3>
          <div className="flex gap-2 items-center flex-wrap">
            <span>Subjects: </span>
            <DisplaySubject
              subjects={subjects}
              user={user}
              allSubjects={allSubjects}
            />
          </div>
        </div>

        <div className="description-container min-h-screen w-full mt-16 md:mt-0  ml-0 md:ml-16 flex flex-col gap-3">
          <h2 className="w-full font-semibold text-2xl">Qualification</h2>
          <div className="qualification-container flex justify-center">
            <DisplayQualification user={user} qualifications={qualifications} />
          </div>
          <div className="schedule-container mt-2">
            <h2 className="w-full font-semibold text-2xl">Schedule</h2>
            <DisplaySchedule />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorProfilePage;
