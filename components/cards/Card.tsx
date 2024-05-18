import Image from "next/image";
import React from "react";
import Button from "../shared/Button";
import Progress from "../shared/Progress";

const Card = ({ img, progress1, progress2, progress3 }: any) => {
  console.log({ progress1, progress2, progress3 });

  return (
    <div className="relative min-h-full min-w-full p-[20px]">
      <div className="flex h-full flex-col justify-between">
        <Image
          src={`/images/${img}`}
          alt="Your Image Description"
          layout="fill"
          className="-z-20 object-cover"
        />
        <div className="absolute left-0 top-0 -z-10 size-full bg-gradient-to-bl from-transparent to-black opacity-70"></div>
        <div className="-z-20">
          <Image src="/images/logo.png" alt="logo" width={64} height={11} />
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="text-wrap text-lg font-medium leading-snug">
            Unleash Your Data, Dominate Your Game: In-Depth Stats, Unrivalled
            Insights
          </h3>
          <div className="flex items-end justify-between">
            <Button />
            <Progress
              progress1={progress1}
              progress2={progress2}
              progress3={progress3}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
