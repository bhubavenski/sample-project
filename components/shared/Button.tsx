import Image from "next/image";
import React from "react";

const Button = () => {
  return (
    <button className="flex px-6 py-3 justify-center items-center gap-2 rounded-md bg-[#5653FF]">
      <span className="text-lg font-medium ">Get Started</span>
      <Image
        alt="Get started"
        src="/images/ArrowRight.png"
        width={14}
        height={14}
      />
    </button>
  );
};

export default Button;
