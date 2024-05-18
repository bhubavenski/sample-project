import { socialLinks } from "@/constants";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-footer-gradiant box-border flex flex-col gap-5 px-5 py-8">
      <div className="flex justify-between ">
        <p>Privacy policy</p>
        <p>Support</p>
        <p>Developer API</p>
      </div>
      <div className="flex justify-between">
        <span className="flex">
          <p>2023 @ GamerStats</p>
        </span>

        <span className="flex gap-5">
          {socialLinks.map((item) => (
            <Image
              alt={item.title}
              src={`/images/${item.img}`}
              width={28}
              height={28}
              key={item.title}
            />
          ))}
        </span>
      </div>
    </div>
  );
};

export default Footer;
