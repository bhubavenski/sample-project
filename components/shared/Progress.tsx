import React from "react";

const Progress = () => {
  return (
    <div className="flex items-end gap-5">
      <span className="rounded-full primary-gradient w-[50px] h-[10px]"></span>
      <span className="rounded-full inessential-gradient w-[10px] h-[10px]"></span>
      <span className="rounded-full inessential-gradient w-[10px] h-[10px]"></span>
    </div>
  );
};

export default Progress;
