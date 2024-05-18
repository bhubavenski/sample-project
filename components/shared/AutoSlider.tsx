import Image from "next/image";
import React from "react";
import { studioAds } from "@/constants";

const AutoSlider = () => {
  return (
    <div className="flex mt-3 mb-5 overflow-hidden gap-2">
      <div className="flex gap-2 animate-loop-scroll">
        {studioAds.map((studio: any) => (
          <Item studio={studio} />
        ))}
      </div>
      <div className="flex gap-2 animate-loop-scroll" aria-hidden='true'>
        {studioAds.map((studio: any) => (
          <Item studio={studio} />
        ))}
      </div>
    </div>
  );
};

const Item = ({ studio }: any) => {
  return (
    <span
      key={studio.id}
      className="flex flex-col gap-3 items-center min-w-[111px]"
    >
      <Image alt={studio.text} src={studio.img} width={55} height={55} />
      <p>{studio.text}</p>
    </span>
  );
};

export default AutoSlider;
