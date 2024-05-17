import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gradiant-primary justify-between shadow flex items-center box-border px-5 py-3">
      <div className="flex gap-[18px]">
        <Image alt="logo" src="images/logo.svg" width={31} height={31} />
        <span className="text-white">Gamer Stats</span>
      </div>
      <Avatar className="w-[32px] h-[32px]">
        <AvatarImage src="https://github.com/shadcn.png"/>
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default Navbar;
