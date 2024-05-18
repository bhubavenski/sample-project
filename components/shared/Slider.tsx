"use client";

import React from "react";
import RecomendedGameCard from "../cards/RecomendedGameCard";

const Slider = () => {
  return (
    <section className="box-border overflow-hidden p-2">
      <div className="space-y-6">
        <RecomendedGameCard />
        <RecomendedGameCard />
      </div>
    </section>
  );
};

export default Slider;
