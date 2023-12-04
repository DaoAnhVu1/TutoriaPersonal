import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { Video, X, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { currentUser } from "@/lib/current-user";
import StudentInProgressButton from "./in-progress-button";
import onlineLearning from "@/public/online-learning-1.jpg";
const StudentSchedule = async () => {
  const current = await currentUser();
  const allLearningSessions = await db.learningSession.findMany({
    where: {
      studentId: current?.id,
    },
    include: {
      tutor: true,
      student: true,
    },
  });
  const processingSessions = allLearningSessions.filter(
    (session) => session.status === "PROCESSING"
  );
  const inProgressSessions = allLearningSessions.filter(
    (session) => session.status === "INPROGRESS"
  );
  const completedSessions = allLearningSessions.filter(
    (session) => session.status === "COMPLETED" || session.status === "REJECTED"
  );
  return (
    <>
      <div
        style={{ backgroundImage: `url(${onlineLearning.src})` }}
        className="bg-cover bg-no-repeat bg-center bg-blend-multiply bg-fixed bg-neutral-400 h-[500px]"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="text-white m-auto text-center">
            <h1 className="text-5xl lg:text-9xl inter.className">
              <div className="mx-auto relative w-fit block after:block after:content-[''] after:absolute after:h-[5px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-500 after:origin-center">
                Your schedule
              </div>
            </h1>
          </div>
        </div>
      </div>
      <div className="min-h-[600px] flex flex-col items-center">
        <div className="flex justify-center items-center mt-10 w-full px-10 md:w-3/5">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="uppercase font-semibold text-xl">
                Schedule request ({processingSessions.length})
              </AccordionTrigger>
              <AccordionContent>
                {processingSessions.length == 0 && (
                  <div className="text-md">There is no request</div>
                )}
                {processingSessions.length !== 0 &&
                  processingSessions.map((session) => (
                    <Card key={session.id} className="mb-5">
                      <CardContent className="flex flex-col md:flex-row justify-between p-5">
                        <div className="flex flex-col items-center md:items-start justify-center">
                          <p>
                            <span className="font-semibold">Session Id:</span>{" "}
                            {session.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor Id:</span>{" "}
                            {session.tutor.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor name:</span>{" "}
                            {session.tutor.name}
                          </p>
                          <p>
                            <span className="font-semibold">Date:</span>{" "}
                            {session.date}{" "}
                          </p>
                        </div>
                        <div className="h-full flex gap-3 flex-col items-center mt-5 ">
                          <Button>Waiting for approval</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="uppercase font-semibold text-xl">
                In progress ({inProgressSessions.length})
              </AccordionTrigger>
              <AccordionContent>
                {inProgressSessions.length == 0 && (
                  <div className="text-md">There is no in progress session</div>
                )}
                {inProgressSessions.length !== 0 &&
                  inProgressSessions.map((session) => (
                    <Card key={session.id} className="mb-5">
                      <CardContent className="flex flex-col md:flex-row justify-between p-5">
                        <div className="flex flex-col items-center md:items-start justify-center">
                          <p>
                            <span className="font-semibold">Session Id:</span>{" "}
                            {session.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor Id:</span>{" "}
                            {session.tutor.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor name:</span>{" "}
                            {session.tutor.name}
                          </p>
                          <p>
                            <span className="font-semibold">Date:</span>{" "}
                            {session.date}{" "}
                          </p>
                        </div>
                        <div className="h-full flex gap-3 flex-col items-center mt-5 ">
                          <Button className="bg-green-600 w-1/2 md:w-full">
                            <Video className="mr-2" /> Join meeting
                          </Button>
                          <StudentInProgressButton />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="uppercase font-semibold text-xl">
                Completed ({completedSessions.length})
              </AccordionTrigger>
              <AccordionContent>
                {completedSessions.length == 0 && (
                  <div className="text-md">
                    There is no in completed session
                  </div>
                )}
                {completedSessions.length !== 0 &&
                  completedSessions.map((session) => (
                    <Card key={session.id} className="mb-5">
                      <CardContent className="flex flex-col md:flex-row justify-between p-5">
                        <div className="flex flex-col items-center md:items-start justify-center">
                          <p>
                            <span className="font-semibold">Session Id:</span>{" "}
                            {session.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor Id:</span>{" "}
                            {session.tutor.id}
                          </p>
                          <p>
                            <span className="font-semibold">Tutor name:</span>{" "}
                            {session.tutor.name}
                          </p>
                          <p>
                            <span className="font-semibold">Date:</span>{" "}
                            {session.date}{" "}
                          </p>
                        </div>
                        <div className="h-full flex gap-3 flex-col items-center mt-5 ">
                          {session.status === "COMPLETED" && (
                            <Button className="bg-green-600  w-1/2 md:w-full">
                              <Check className="mr-2" /> Completed
                            </Button>
                          )}
                          {session.status === "REJECTED" && (
                            <Button
                              variant={"destructive"}
                              className="w-1/2 md:w-full"
                            >
                              <X className="mr-2  " /> Rejected
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default StudentSchedule;
