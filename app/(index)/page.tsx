"use client";
import { Button } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";

const HomePage = () => {
  const session = useSession().data;
  return (
    <div>
      <Button onClick={() => signIn("google")}>Sign in</Button>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default HomePage;
