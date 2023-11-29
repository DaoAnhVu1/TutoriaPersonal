"use client";
import { Button } from "@/components/ui/button";
import { useModal } from "@/hooks/use-modal";
import { signIn, useSession } from "next-auth/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
const Header = () => {
  const { onOpen } = useModal();
  const user = useSession().data?.user;
  return (
    <header className="h-20 flex justify-between p-5">
      <div>
        <h1 className="font-bold text-2xl text-green-600 ">Tutoria</h1>
      </div>
      <div>
        {!!user && (
          <Avatar
            className="cursor-pointer"
            onClick={() => onOpen("profile", { user })}
          >
            {/* @ts-ignore */}
            <AvatarImage src={user?.image} />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        )}
        {!user && (
          <Button
            className="rounded-full bg-green-600 w-28 cursor-pointer"
            onClick={() => onOpen("signIn")}
          >
            Login
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;
