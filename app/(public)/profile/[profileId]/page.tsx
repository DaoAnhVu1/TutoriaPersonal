import Image from "next/image";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
} from "@/components/ui/table";

interface ProfilePageProps {
  params: {
    profileId: string;
  };
}

const ProfilePage = async ({ params }: ProfilePageProps) => {
  const user = await db.user.findUnique({
    where: {
      id: params.profileId,
    },
  });

  if (!user) {
    return <>404 not found this id</>;
  }

  const userSubjects = await db.usersSubjects.findMany({
    where: {
      userId: params.profileId,
    },
    include: {
      subject: true,
    },
  });

  const qualifications = await db.qualification.findMany({
    where: {
      userId: params.profileId,
    },
  });

  const availableTimes = await db.availableTime.findMany({
    where: {
      userId: params.profileId,
    },
    orderBy: [{ weekDay: "asc" }],
  });

  const daysOfWeekMap = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };

  return (
    <>
      <Header user={user} />
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
            <h3 className="w-full mt-5">{user?.description}</h3>
            <div className="flex gap-2 w-full items-center justify-start flex-wrap">
              <span>Subjects: </span>
              {userSubjects.map((subject) => (
                <Badge key={subject.subject.id} className="w-fit h-6">
                  {subject.subject.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="description-container min-h-[800px] w-full mt-16 md:mt-0  ml-0 md:ml-16 flex flex-col gap-3">
            <h2 className="w-full font-semibold text-2xl">Qualification</h2>
            <div className="qualification-container flex justify-center">
              <ScrollArea className="w-full whitespace-nowrap rounded-md border">
                <div className="flex w-max space-x-4 p-4">
                  {qualifications.map((qualification) => (
                    <div
                      className="overflow-hidden rounded-md shrink-0"
                      key={qualification.id}
                    >
                      <Image
                        src={qualification.imageUrl}
                        alt="haha"
                        className="aspect-[4/4] rounded-md  object-cover"
                        width={200}
                        height={200}
                      />
                      <p className="text-center mt-1">
                        {qualification.qualification_name}
                      </p>
                    </div>
                  ))}
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>
            <div className="schedule-container mt-2">
              <div className="flex justify-between">
                <h2 className="font-semibold text-2xl ">Available time</h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Index</TableHead>
                    <TableHead>Start time</TableHead>
                    <TableHead>End time</TableHead>
                    <TableHead>Weekday</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {availableTimes.length === 0 ? (
                    <></>
                  ) : (
                    <>
                      {availableTimes.map((availableTime, index) => (
                        <TableRow key={availableTime.id}>
                          <TableCell className="font-medium">
                            AT0{index}
                          </TableCell>
                          <TableCell>{availableTime.startTime}</TableCell>
                          <TableCell>{availableTime.endTime}</TableCell>
                          <TableCell>
                            {/* @ts-ignore */}
                            {daysOfWeekMap[availableTime.weekDay]}
                          </TableCell>
                        </TableRow>
                      ))}
                    </>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
