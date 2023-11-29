import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { options } from "../api/auth/[...nextauth]/options";

const SetUpPage = async () => {
  const session = await getServerSession(options);
  return <></>;
};

export default SetUpPage;
