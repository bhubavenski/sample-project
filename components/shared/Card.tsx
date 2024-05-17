import Image from "next/image";
import React from "react";
import Button from "./Button";
import Progress from "./Progress";

const Card = ({img}:any) => {
  return (
    <div className="min-w-full min-h-full relative p-[20px] border-black border-2">
      <div className=" flex flex-col justify-between h-full">
        <Image
          src={`/images/${img}`}
          alt="Your Image Description"
          layout="fill"
          className="object-cover -z-20"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-bl from-transparent to-black opacity-70 -z-10"></div>
        <div className="-z-20">
          <Image src="/images/logo.png" alt="logo" width={64} height={11} />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-[#F2F2F2] font-spartan text-lg leading-[120%] text-wrap">
            Unleash Your Data, Dominate Your Game: In-Depth Stats, Unrivalled
            Insights
          </h3>
          <div className="flex justify-between items-end">
            <Button />
            <Progress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
