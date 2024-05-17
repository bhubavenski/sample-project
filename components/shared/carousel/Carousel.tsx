import React from "react";
import Card from "../Card";

const images = ["img1.png", "img2.png", "img3.png"];
//animate-loop-scroll
const Carousel = () => {
  return (
    <div className="border-purple-400 border-2 max-w-[393px] overflow-hidden box-border p-2 flex">
      <div className="max-w-full min-h-[270px]  flex gap-2 border-red-600 border-2 whitespace-nowrap">
        {images.map((img) => (
          <Card img={img} key={img}/>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
