import Image from "next/image";
import React from "react";

const RecomendedGameCard = () => {
  return (
    <div className="relative z-20 min-h-[143px] overflow-hidden rounded-lg">
      <Image
        src={`/images/img1.png`}
        alt="Your Image Description"
        layout="fill"
        className="-z-10 object-cover"
      />
      <div className="recomended-game-card-header flex-center absolute bottom-1 z-10 w-full">
        CSGO
      </div>
      <div className="recomended-game-card absolute size-full"></div>
    </div>
  );
};

export default RecomendedGameCard;
