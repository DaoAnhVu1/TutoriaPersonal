import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
const DisplaySchedule = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="font-semibold text-2xl ">Your available time</h2>
        <Button className="bg-green-600">Add an available time</Button>
      </div>
      <Table>
        <TableCaption>A list of your available time (weekly)</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Index</TableHead>
            <TableHead>Start time</TableHead>
            <TableHead>End time</TableHead>
            <TableHead>Weekday</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">AT01</TableCell>
            <TableCell>13:00</TableCell>
            <TableCell>15:00</TableCell>
            <TableCell>Monday</TableCell>
            <TableCell>
              <Trash />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default DisplaySchedule;
