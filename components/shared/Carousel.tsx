'use client'
import React from 'react'
import Card from "@/components/cards/Card";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
const images = [
    { id: 1, img: "img1.png", progress1: '50px',  progress2: '0px', progress3: '0px',},
    { id: 2, img: "img2.png", progress1: '0px',  progress2: '50px', progress3: '0px', },
    { id: 3, img: "img3.png", progress1: '0px',  progress2: '00px', progress3: '50px', },
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
              <Card img={item.img} key={item.img} progress1={item.progress1} progress2={item.progress2} progress3={item.progress3}/>
            ))}
          </div>
        </div>
      );
}

export default Carousel