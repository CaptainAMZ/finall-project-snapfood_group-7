import React from "react";
import SnapSlider from "./SnapSlider";

const SnapTops = async ({title , data}) => {
  return (
    <div className="mb-10">
      <div className="w-full flex items-center justify-between mb-6 font-vb">
        <p className=" text-2xl text-carbon-main">{title}</p>
        <p className="text-lg flex text-accent2-main cursor-pointer items-center gap-2">
          مشاهده همه
          <img className="rotate-90 w-5 h-5" src="/images/arrow-left-bold.svg" alt="arrow" />
        </p>
      </div>
      <SnapSlider data={data} />
    </div>
  );
};

export default SnapTops;
