import { Subject } from "@prisma/client";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
interface DisplayFilterProps {
  subjects: Subject[];
  validSubjects: Subject[];
  setValidSubjects: (selectedSubjects: Subject[]) => void;
}

const DisplayFilter = ({
  subjects,
  validSubjects,
  setValidSubjects,
}: DisplayFilterProps) => {
  return (
    <>
      <div className="mb-3 w-full">
        <h3 className="mb-3 sm:text-center md:text-start font-semibold text-lg">
          Search by name
        </h3>
        <div className="flex w-full max-w-sm items-center space-x-2">
          <Input
            className="block w-full "
            type="text"
            placeholder="Search by name"
          />
          <Button className="w-1/6">
            <Search className="w-full h-full" />
          </Button>
        </div>
      </div>
      <Separator className="w-full mb-3" />
      <div className="flex flex-col gap-2">
        <h3 className="mb-3 font-semibold text-lg">Filter by Subject</h3>
        {subjects.map((subject) => (
          <div key={subject.id}>
            <Checkbox
              className="mr-2"
              onCheckedChange={(checked) => {
                let newSubjectArray;
                if (checked) {
                  newSubjectArray = [...validSubjects, subject];
                } else {
                  newSubjectArray = validSubjects.filter(
                    (currentSubject) => currentSubject.id !== subject.id
                  );
                }
                setValidSubjects(newSubjectArray);
              }}
            />
            <Label>{subject.name}</Label>
          </div>
        ))}
      </div>
    </>
  );
};

export default DisplayFilter;
