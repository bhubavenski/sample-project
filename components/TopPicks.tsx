import React from "react";
import Slider from "./shared/Slider";

const TopPicks = () => {
  return (
    <section className="bg-gradiant-secondaary">
      <div className="flex justify-between mx-5 my-6">
        <span className="">Top Picks From Gamers</span>
        <span className="underline">View All</span>
      </div>

      <Slider/>
    </section>
  );
};

export default TopPicks;
