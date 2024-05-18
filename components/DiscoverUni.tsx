import Image from "next/image";
import React from "react";
import { studioAds } from "@/constants";

const DiscoverUni = () => {
  return (
    <div className="bg-gradiant-secondaary box-border px-5 py-6">
      <div className="flex gap-4">
        <span className=" text-lg">
          Discover gaming universe
        </span>
        <span>Learn more</span>
      </div>

      <div className="flex whitespace-nowrap white gap-1 items-center mt-3">
        {studioAds.map((studio) => (
          <span
            key={studio.id}
            className="flex flex-col gap-3 items-center w-[111px]"
          >
            <Image alt={studio.text} src={studio.img} width={55} height={55} />
            <p>{studio.text}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default DiscoverUni;
