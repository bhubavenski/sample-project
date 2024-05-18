import Image from "next/image";
import React from "react";

const studios = [
  {
    id: 1,
    img: "/images/epicgames.png",
    text: "Epic Games",
  },
  {
    id: 2,
    img: "/images/steam.png",
    text: "Steam",
  },
  {
    id: 3,
    img: "/images/ubisoft.png",
    text: "Ubisoft",
  },
  // {
  //     id: 4,
  //     img: ,
  //     text: 'Riot Games'
  // },
];

const DiscoverUni = () => {
  return (
    <div className="bg-gradiant-secondaary box-border px-5 py-6">
      <div className="flex gap-4">
        <span className=" text-lg">
          Discover gaming universe
        </span>
        <span>Learn more</span>
      </div>

      <div className="flex gap-1 items-center mt-3">
        {studios.map((studio) => (
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
