import React from "react";

const Progress = ({progress1, progress2,progress3}:any) => {
  return (
    <div className="flex items-end gap-5">
      <span className={`rounded-full primary-gradient w-[${progress1}] h-[10px]`}></span>
      <span className={`rounded-full inessential-gradient w-[${progress2}] h-[10px]`}></span>
      <span className={`rounded-full inessential-gradient w-[${progress3}] h-[10px]`}></span>
    </div>
  );
};

export default Progress;
