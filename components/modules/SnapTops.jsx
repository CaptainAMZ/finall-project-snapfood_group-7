import React from "react";
import SnapSlider from "./SnapSlider";

const SnapTops = ({rests}) => {
  return (
    <div>
      <div className="w-full flex items-center justify-between mb-6 font-vb">
        <p className=" text-2xl">برترین ها</p>
        <p className="text-lg flex text-accent2-dark cursor-pointer">مشاهده همه<img className="rotate-90" src="/images/arrow-down-bold.svg" alt="" /></p>
      </div>
      <SnapSlider restaurants={rests} />
    </div>
  );
};

export default SnapTops;
