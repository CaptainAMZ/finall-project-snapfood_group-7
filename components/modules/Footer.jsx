import React from "react";
import StaticList from "../elements/StaticList";
import Image from "next/image";

const icons = ["telegram", "twitter", "instagram", "linkedin", "aparat"];

const list1 = [
  "درباره اسنپ‌فود",
  "همکاری با ما",
  "وبلاگ",
  "قوانین سایت",
  "حریم خصوصی",
  "ثبت نام فروشندگان",
];

const list2 = [
  "تماس با اسنپ‌فود",
  "پرسش‌های متداول",
  "ثبت شکایات",
  "اپلیکیشن موبایل",
];

const Footer = () => {
  return (

    <>
      <section className="bg-surface-main w-100 md:flex flex-wrap  ">
        <div className="flex p-9  md:p-12  ">
          <div className="flex-1 max-w-fit ml-6">
            <img
              className="w-20 h-20"
              src="/images/images-home/logo.svg"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-center pt-5 md:justify-start">
            <h3 className="text-[21px] font-vmd text-accent-main mb-1">
              اسنپ‌فود
            </h3>
            <p className="text-xs font-vrg">
              تجربه سفارش غذا، از زودفود تا اسنپ‌فود
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {icons.map((item) => (
                <div key={item} className="w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <img className="w-6 h-6" src={`/images/${item}.svg`} alt={item + "icon"} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:flex flex-1 lg:mr-[8rem]">
          <StaticList arr={list1} />
          <StaticList arr={list2} />
        </div>
        <div className="p-11 flex justify-end md:w-[100%]  lg:w-auto lg:pt-12">
          <img
            className="w-[70px] h-[70px]"
            src="/images/enamad.png"
            alt="enamad"
          />
          <img
            className="w-[70px] h-[70px]"
            src="/images/buisness.png"
            alt="buisness logo"
          />
        </div>
      </section>

      <div>
        <button className="fixed right-4 bottom-4 z-[1]  w-[3rem] h-[3rem] border-[0.09375rem] rounded-[50%] bg-accent-main flex items-center justify-center">
          <Image src={'/images/images-home/support.svg'} width={22} height={22} alt="support" />
        </button>
      </div>
    </>

  );
};

export default Footer;
