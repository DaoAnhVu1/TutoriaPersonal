import { currentUser } from "@/lib/current-user";
import { redirect } from "next/navigation";
import Header from "@/components/header";
import Footer from "@/components/footer";

const TutorLayout = async ({ children }: { children: React.ReactNode }) => {
  const current = await currentUser();
  if (current?.role !== "TUTOR") {
    return redirect("/");
  }
  console.log(current);
  return (
    <div>
      <Header user={current} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default TutorLayout;
