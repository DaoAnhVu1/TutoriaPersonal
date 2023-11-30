import DisplayFindTutor from "@/components/findTutorComponents/display-find-tutor";
import { db } from "@/lib/db";
const StudentFindTutorPage = async () => {
  const allSubjects = await db.subject.findMany({});
  return <DisplayFindTutor allSubjects={allSubjects} />;
};

export default StudentFindTutorPage;
