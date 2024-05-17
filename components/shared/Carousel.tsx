'use client'
import React from 'react'
import Card from "@/components/cards/Card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const images = [
    { id: 1, img: "img1.png" },
    { id: 2, img: "img2.png" },
    { id: 3, img: "img3.png" },
  ];
  

const Carousel = () => {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 5000 }),
      ]);
    
      return (
        <div
          className="max-w-[393px] overflow-hidden"
          ref={emblaRef}
        >
          <div className="min-w-full min-h-[270px] flex whitespace-nowrapx">
            {images.map((item) => (
              <Card img={item.img} key={item.img} />
            ))}
          </div>
        </div>
      );
}

export default Carousel