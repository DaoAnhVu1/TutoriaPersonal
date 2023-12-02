import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Link from "next/link";
interface TutorCardProps {
  tutorInfo: any;
}

const TutorCard = ({ tutorInfo }: TutorCardProps) => {
  return (
    <Card>
      <CardContent className="p-5">
        <div className="card-header flex justify-between">
          <div className="flex">
            <Avatar className="h-16 w-16">
              <AvatarImage src={tutorInfo.imageUrl} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-xl text-green-600 font-semibold">
                {tutorInfo.name}
              </p>
            </div>
          </div>
          <div>
            <Link href={`/profile/${tutorInfo.id}`}>
              <Badge
                variant={"secondary"}
                className="text-lg mr-3 cursor-pointer"
              >
                Visit profile
              </Badge>
            </Link>

            <Badge className="text-lg font-semibold bg-green-600 cursor-pointer">
              Schedule this tutor
            </Badge>
          </div>
        </div>
        <p className="mt-3">
          <span className="font-semibold">${tutorInfo.costPerHour}</span>/hr
        </p>
        <p className="mt-3">{tutorInfo.description}</p>
        <ScrollArea className="mt-3 whitespace-nowrap">
          <div className="flex w-max ">
            {tutorInfo.subjects &&
              tutorInfo.subjects.map((subject: any) => (
                <Badge
                  key={subject.subject.id}
                  className="text-sm overflow-hidden mr-3"
                >
                  {subject.subject.name}
                </Badge>
              ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default TutorCard;
