import React from "react";
import SnapSlider from "./SnapSlider";
import { getLocalData } from "@/lib/localdata";

const SnapTops = async () => {
  const { restaurants } = await getLocalData();
  return (
    <div>
      <div className="w-full flex items-center justify-between mb-6 font-vb">
        <p className=" text-2xl">برترین ها</p>
        <p className="text-lg flex text-accent2-dark cursor-pointer">
          مشاهده همه
          <img className="rotate-90" src="/images/arrow-down-bold.svg" alt="" />
        </p>
      </div>
      <SnapSlider restaurants={restaurants} />
    </div>
  );
};

export default SnapTops;
