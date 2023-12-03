import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";

const ProfileLayout = async ({ children }: { children: React.ReactNode }) => {
  const current = await currentUser();
  if (!current) {
    return redirect("/");
  }
  return <>{children}</>;
};

export default ProfileLayout;
