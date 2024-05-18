import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import Progress from "../shared/Progress";

const Card = ({ img, progress1, progress2, progress3}: any) => {
  console.log({progress1, progress2, progress3})

  return (
    <div className="min-w-full min-h-full relative p-[20px]">
      <div className="flex flex-col justify-between h-full">
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
          <h3 className="text-lg leading-snug font-medium text-wrap">
            Unleash Your Data, Dominate Your Game: In-Depth Stats, Unrivalled
            Insights
          </h3>
          <div className="flex justify-between items-end">
            <Button />
            <Progress progress1={progress1} progress2={progress2} progress3={progress3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
