import React from "react";
import SSButton from "../elements/SSButton";

const SnapBusiness = () => {
  return (
    <section className=" py-40 w-100 sm:pb-20">
      <div className="px-[65px] sm:px-[52px] md:flex ">
        <div className="flex-1 flex flex-col justify-center md:w-[60%]">
          <h2 className="text-4xl font-vmd mb-10 text-surface-overlay">
            صاحب کسب و کار هستید؟
          </h2>
          <p className="text-[21px] font-vl w-[90%] mb-10 sm:w-[100%]">
            با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.
          </p>
          <SSButton
            w={190}
            cfs={18}
            h={48}
            content="ثبت نام فروشندگان"
            icon="./images/shopIcon.svg"
          />
        </div>
        <div className="hidden md:block w-[45%]">
          <img
            className="w-[350px] h-[330px] mb-10 mr-auto"
            src="./images/shop.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SnapBusiness;
