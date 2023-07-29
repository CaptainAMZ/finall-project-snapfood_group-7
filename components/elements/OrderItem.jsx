import React from "react";
import Image from "next/image";
import nanak from "../../public/images/images-home/nanak.jpg";
import factor from "../../public/images/images-home/factor.svg";
import cycle from "../../public/images/images-home/cycle.svg";

export default function OrderItem() {
  return (
    <div className="pt-spacing-16 px-spacing-0 pb-spacing-1 border-b-0.0625 border-carbon-alphaLight flex justify-center ">
      <div className="w-[calc(100%-2rem)] flex flex-col ">
        <div className="flex  items-center">
          <div className="w-spacing-6 max-h-spacing-6 cursor-pointer flex-col">
            <Image className="rounded w-full max-h-full" src={nanak} />
          </div>
          <div className="mr-spacing-2 flex flex-col">
            <p className="cursor-pointer font-vsb leading-lineHeight-body text-vm inline-block text-carbon-main text-start">
              نان و شیرینی نانک
            </p>
            <div className="flex">
              <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main">
                دوشنبه 26 تیر
              </p>
              <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main mr-spacing-2">
                19:03
              </p>
            </div>
          </div>
        </div>

        <div className="h-[32px] mt-spacing-2 px-spacing-1 rounded bg-accent2-alphaLight flex justify-between items-center">
          <p className="font-vrg text-vsm leading-lineHeight-tiny text-carbon-main ">
            نظرتان را درباره این سفارش به اشتراک بگذارید.
          </p>
          <p className="font-vxb text-.75 leading-lineHeight-caption text-accent2-main cursor-pointer ml-spacing-11">
            ثبت نظر
          </p>
        </div>

        <div className="mt-spacing-16 mb-spacing-1 flex justify-center">
        <button className=" flex-1 h-[32px] ml-spacing-2 inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid border-carbon-alphaLight rounded-0.375 bg-carbon-alphaLight bg-clip-padding py-spacing-17 px-spacing-18">
          <Image src={factor} width={16} height={16} />
          <p className="mr-spacing-1  font-vsb text-vm leading-lineHeight-body text-carbon-main text-start inline-block flex-0">
            مشاهده فاکتور
          </p>
        </button>

        <button className=" flex-1 h-[32px]  inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid border-carbon-alphaLight rounded-0.375 bg-carbon-alphaLight  bg-clip-padding py-spacing-17 px-spacing-18">
          <Image src={cycle} width={16} height={16} />
          <p className="mr-spacing-1  font-vsb text-vm leading-lineHeight-body text-carbon-main text-start inline-block flex-0">
            سفارش مجدد
          </p>
        </button>
      </div>
      </div>

     
    </div>
  );
}
