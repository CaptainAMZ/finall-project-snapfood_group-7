import React from "react";
import SSButton from "../elements/SSButton";
import StaticList from "../elements/StaticList";

const imgs = [
  { src: 1, alt: "myket" },
  { src: 2, alt: "bazaar" },
  { src: 3, alt: "sib app" },
  { src: 4, alt: "iapps" },
];

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

const cities = [
  "تهران",
  "مشهد",
  "کرج",
  "اصفهان",
  "شیراز",
  "تبریز",
  "قم",
  "اهواز",
  "رشت",
  "ارومیه",
  "یزد",
  "کرمان",
  "قزوین",
  "همدان",
  "اردبیل",
  "گرگان",
  "ساری",
  "کرمانشاه",
  "زنجان",
  "اسلامشهر",
  "اراک",
  "بوشهر",
  "شهر ری",
  "بندرعباس",
  "بجنورد",
  "یاسوج",
  "نیشابور",
  "شاهین شهر",
  "بابل",
  "کاشان",
  "خرم آباد",
  "دزفول",
  "بابلسر",
  "مرودشت",
  "قائم شهر",
  "شاهرود",
  "نجف آباد",
  "آمل",
  "سبزوار",
  "لاهیجان",
  "کیش",
  "ورامین",
  "آبادان",
  "سمنان",
  "سنندج",
  "گنبد کاووس",
  "پردیس",
  "شهرکرد",
  "بندر انزلی",
  "زاهدان",
  "بیرجند",
  "مراغه",
  "ایلام",
  "پاکدشت",
  "تربت حیدریه",
  "رباط کریم",
  "اندیشه",
  "سپاهان شهر",
  "شهریار",
  "پرند",
  "شهر قدس",
  "خمینی شهر",
  "قرچک",
  "لنگرود",
  "بروجرد",
  "ساوه",
  "اندیمشک",
  "محمود آباد",
  "لواسان",
  "هشتگرد",
  "بهارستان",
  "مرند",
  "نوشهر",
  "سلمان شهر",
  "نسیم شهر",
  "صدرا",
  "رودهن",
  "دماوند",
  "قوچان",
  "فولادشهر",
  "نور",
  "سهند",
  "تنکابن",
  "رامسر",
  "چالوس",
  "بومهن",
  "قشم",
  "گرمدره",
  "مبارکه",
  "خوی",
  "کازرون",
  "نکا",
  "رویان",
  "درود",
  "ملارد",
  "داراب",
  "بهشهر",
  "خرمشهر",
  "ایزدشهر",
  "طرقبه",
  "زرین شهر",
  "سرخ رود",
  "فریدونکنار",
  "ملایر",
  "کلارآباد",
  "صومعه سرا",
  "فومن",
  "تربت جام",
  "شهرضا",
  "فلاورجان",
  "زابل",
  "باقر شهر",
  "سنگر",
  "مارلیک",
  "میاندوآب",
  "رفسنجان",
  "لار",
  "آستانه اشرفیه",
  "چهارمحال بختیاری",
  "آران بیدگل",
  "شوشتر",
  "بم",
  "رودسر",
  "گرمسار",
  "میبد",
  "شیرگاه",
  "ماسال",
  "نقده",
  "فشم",
  "جاجرود",
  "سرعین",
  "طبس",
  "سیرجان",
  "جیرفت",
  "اسکو",
  "سراب",
  "شمشک",
  "تفت",
  "اردکان یزد",
  "بروجن",
  "رودهن",
  "چابهار",
  "نمک آبرود",
  "خمین",
  "علی آباد کتول",
  "کردکوی",
  "آستارا",
  "ویلاشهر",
];

const Application = () => {
  return (
    <div className="w-100 sm:w-[95%] sm:p-4 m-auto">
      <section className="px-2 w-100 min-h-[600px] bg-surface-dark md:flex md:px-20 md:rounded-br-[100px]">
        <div className="px-2 py-spacing-8 md:w-[45%]">
          <h1 className="w-[90%] text-4xl font-vmd text-carbon-main mb-10 leading-10">
            اپلیکیشن اسنپ‌فود
          </h1>
          <p className="w-[98%] font-vl text-[18px] leading-8 text-carbon-light mb-10">
            با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید
            رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را
            جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
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
      <section className="p-8 w-100 border-t-2 md:px-0">
        <h3 className="text-base font-vsb mb-8">اسنپ‌فود در شهرهای ایران</h3>
        <div className="flex flex-wrap">
          {cities.map((item) => (
            <p className="basis-1/3 p-1 text-[10px] font-vl text-inactive-dark sm:basis-1/4 md:basis-1/6 lg:basis-1/12">
              {item}
            </p>
          ))}
        </div>
      </section>
      <section className="w-100  md:flex flex-wrap">
        <div className="flex p-12">
          <div className="flex-1 max-w-fit ml-3">
            <img
              className="w-20 h-20"
              src="./images/images-home/logo.svg"
              alt=""
            />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <h3 className="text-[21px] font-vmd text-accent-main mb-1">
              اسنپ‌فود
            </h3>
            <p className="text-xs font-vl">
              تجربه سفارش غذا، از زودفود تا اسنپ‌فود
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {icons.map((item) => (
                <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-md">
                  <img src={`./images/${item}.svg`} alt={item + "icon"} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:flex flex-1">
          <StaticList arr={list1} />
          <StaticList arr={list2} />
        </div>
        <div className="p-12 flex justify-end md:w-[100%] md:pt-0 lg:w-auto lg:pt-12">
          <img
            className="w-[70px] h-[70px]"
            src="./images/enamad.png"
            alt="enamad"
          />
          <img
            className="w-[70px] h-[70px]"
            src="./images/buisness.png"
            alt="buisness logo"
          />
        </div>
      </section>
    </div>
  );
};

export default Application;
