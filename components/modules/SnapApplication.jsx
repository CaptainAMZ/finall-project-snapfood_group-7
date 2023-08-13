import React from "react";
import SSButton from "../elements/SSButton";

const imgs = [
    { src: 1, alt: "myket" },
    { src: 2, alt: "bazaar" },
    { src: 3, alt: "sib app" },
    { src: 4, alt: "iapps" },
  ];

const SnapApplication = () => {
  return (
    <section className="mt-44 px-4 w-100 min-h-[600px] bg-surface-dark md:flex md:px-20 md:rounded-br-[100px]">
      <div className="px-2 py-spacing-8 md:w-[45%]">
        <h1 className="w-[90%] text-4xl leading-lineHeight-xlarge font-vmd text-carbon-main mb-10 ">
          اپلیکیشن اسنپ‌فود
        </h1>
        <p className="w-[98%] font-vrg text-[16px] leading-8 text-carbon-light mb-10">
          با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
          کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده
          و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
        </p>
        <div>
          <p className="text-carbon-light font-vmd text-sm">
            برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
          </p>
          <form className="max-w-[288px] mt-1.5 flex rounded-lg bg-white items-center overflow-hidden mb-10 ">
            <input
              placeholder="09*********"
              type="text"
              className="px-2 w-[168px] h-[48px]"
            />
            <SSButton content="دریافت لینک" cfs={14} w={108} h={32} />
          </form>
          <div className="mb-10 flex flex-wrap flex-col gap-2 sm:flex-row sm:gap-4 ">
            {imgs.map((item) => (
              <img
                key={item.alt}
                className="w-[132px] h-[36px]"
                src={`./images/social-${item.src}.svg`}
                alt={item.alt}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-[55%] relative">
        <img
          className="w-[450px] h-[630px] absolute -top-36 left-2"
          src="./images/phones.png"
          alt="phone"
        />
      </div>
    </section>
  );
};

export default SnapApplication;
