"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { gameImgs } from "@/constants";
import Image from "next/image";

const Slider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ axis: "y", loop: true }, [
    Autoplay({ playOnInit: false, delay: 500 }),
  ]);

  return (
    <section className="box-border p-2">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="rounded-lg flex flex-col gap-5 max-h-[300px]">
          {gameImgs.map((item) => (
            <div className="relative min-h-[143px] rounded-lg overflow-hidden">
              <Image
                src={`/images/${item.img}`}
                alt="Your Image Description"
                layout="fill"
                className="object-cover -z-20"
              />
              <div className="flex box-border w-full game-card p-2 justify-center items-center absolute bottom-0 bg-black">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
