import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { db } from "@/lib/db";
import { Card, CardContent } from "@/components/ui/card";
import { currentUser } from "@/lib/current-user";
import IncomingRequestButton from "./incoming-request-button";
import { Button } from "@/components/ui/button";
import { Video, X, Check } from "lucide-react";

const TutorSchedule = async () => {
  const current = await currentUser();
  const allLearningSessions = await db.learningSession.findMany({
    where: {
      tutorId: current?.id,
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
    <div className="min-h-[600px] flex flex-col items-center">
      <div className="w-full h-48 bg-gradient-to-r from-[#10b981] to-[#98EECC] flex justify-center items-center">
        <p className="text-white text-center text-5xl font-bold">
          Your schedule
        </p>
      </div>
      <div className="flex justify-center items-center mt-10 w-full px-10 md:w-3/5">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="uppercase font-semibold text-xl">
              Incoming Request ({processingSessions.length})
            </AccordionTrigger>
            <AccordionContent>
              {processingSessions.length == 0 && (
                <div className="text-md">There is no incoming request</div>
              )}
              {processingSessions.length !== 0 &&
                processingSessions.map((session) => (
                  <Card key={session.id} className="mb-5">
                    <CardContent className="flex flex-col md:flex-row justify-between p-5">
                      <div className="flex flex-col items-center md:items-start justify-center">
                        <p>
                          <span className="font-semibold">SessionId:</span>{" "}
                          {session.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student Id:</span>{" "}
                          {session.student.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student name:</span>{" "}
                          {session.student.name}
                        </p>
                        <p>
                          <span className="font-semibold">Date:</span>{" "}
                          {session.date}{" "}
                        </p>
                      </div>
                      <div className="h-full flex gap-3 flex-col items-center mt-5 ">
                        <IncomingRequestButton sessionId={session.id} />
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
                          <span className="font-semibold">SessionId:</span>{" "}
                          {session.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student Id:</span>{" "}
                          {session.student.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student name:</span>{" "}
                          {session.student.name}
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
                <div className="text-md">There is no in completed session</div>
              )}
              {completedSessions.length !== 0 &&
                completedSessions.map((session) => (
                  <Card key={session.id} className="mb-5">
                    <CardContent className="flex flex-col md:flex-row justify-between p-5">
                      <div className="flex flex-col items-center md:items-start justify-center">
                        <p>
                          <span className="font-semibold">SessionId:</span>{" "}
                          {session.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student Id:</span>{" "}
                          {session.student.id}
                        </p>
                        <p>
                          <span className="font-semibold">Student name:</span>{" "}
                          {session.student.name}
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
  );
};

export default TutorSchedule;
