// TODO: Refactor the code

import clsx from "clsx";
import React from "react";

const Progress = ({ progress1, progress2, progress3 }: any) => {
  console.log({ progress1, progress2, progress3 });
  const progressWidth1 = `${progress1}`;
  const progressWidth2 = `${progress2}`;
  const progressWidth3 = `${progress3}`;

  return (
    <div className="flex items-end gap-5">
      <span
        className={clsx(`rounded-full h-[10px]`, {
          "inessential-gradient": progress1 == "10px",
          "primary-gradient": progress1 != "10px",
        })}
        style={{ width: progressWidth1 }}
      ></span>
      <span
        className={clsx(`rounded-full w-[10px] h-[10px]`, {
          "inessential-gradient": progress2 == "10px",
          "primary-gradient": progress2 != "10px",
        })}
        style={{ width: progressWidth2 }}
      ></span>
      <span
        className={clsx(`rounded-full w-[10px] h-[10px]`, {
          "inessential-gradient": progress3 == "10px",
          "primary-gradient": progress3 != "10px",
        })}
        style={{ width: progressWidth3 }}
      ></span>
    </div>
  );
};

export default Progress;
