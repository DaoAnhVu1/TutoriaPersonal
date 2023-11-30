import { currentUser } from "@/lib/current-user";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import DisplaySubject from "../../../../components/tutorProfileComponents/display-subject";
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
  return (
    <div className="profile-container px-10">
      <div className="top-section mt-5 flex">
        <div className="avatar-container flex flex-col gap-3">
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
          <h3>{user?.description}</h3>
          <div className="flex gap-2 items-center flex-wrap">
            <span>Subjects: </span>
            <DisplaySubject
              subjects={subjects}
              user={user}
              allSubjects={allSubjects}
            />{" "}
          </div>
        </div>

        <div className="description-container w-full ml-16 flex flex-col gap-3"></div>
      </div>
    </div>
  );
};

export default TutorProfilePage;
