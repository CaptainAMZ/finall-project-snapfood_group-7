import React from "react";

const items = ["گرانترین", "ارزان ترین", "بالاترین امتیاز"];

const listItems = ["غذا", "نوشیدنی گرم", "نوشیدنی سرد", "کیک و دسر", "بستنی"];

const filterItems = [
  "دارای کوپن",
  "دارای تخفیف",
  "ارسال اکسپرس",
  "فودپرو",
  "ارسال رایگان",
];

const Rests = () => {
  return (
    <div className="flex flex-col">
      <div className="flex justify-end mb-8">
        <div className="relative py-[2px] flex items-center w-50 h-12 border-[1px] rounded-lg">
          <input
            className="min-w-[170px] border-l-[1px] outline-none border-[#CCCCCC] px-2"
            placeholder="به ترتیب پیش فرض"
            type="text"
          />
          <div className="p-2">
            <img
              className="w-2 h-[5px] cursor-pointer"
              src="/images/arrow-down.svg"
              alt="arrow down"
            />
          </div>
          <div className="hidden absolute z-999 left-0 right-0 top-[120%] border-[1px] rounded-sm border-[#CCCCCC]">
            <ul className="bg-white shadow-md py-1 space-y-1 ">
              {items.map((item) => (
                <li key={item} className="first:bg-blue-200 px-2 py-3 hover:bg-blue-200 rounded-sm cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className=" min-h-[700px] p-4 text-right shadow-sm rounded-sm space-y-4">
        <div
          className="mb-2 space-y-2 
        "
        >
          <h2 className="font-vmd text-sm h-12 bg-carbon-alphaLight rounded-md flex items-center px-3">
            همه دسته‌بندی‌ها
          </h2>
          <ul className="space-y-2 ">
            {listItems.map((item) => (
              <li key={item} className="flex py-2 font-vrg text-sm">
                <img
                  className="w-8 h-8 "
                  src="/images/pizza-logo.png"
                  alt="pizza logo"
                />
                <p className="mr-3">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="space-y-2 ">
            {filterItems.map((item) => (
              <li key={item} className="flex justify-between py-2 font-vrg text-sm">
                <p className="mr-3">{item}</p>
                <img
                  className="w-8 h-8 "
                  src="/images/pizza-logo.png"
                  alt="pizza logo"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        <div className="card  rounded-lg max-h-[400px] shadow-md overflow-hidden w-[100%] relative">
          <div className="relative topOfCard max-w-[300px] min-h-[380] shadow-md bg-red-400 rounded-md overflow-hidden">
            <div className="flex gap-2 px-2 py-1 absolute right-0 top-5 bg-white w-[95%] rounded-e-full">
              <img src="/images/off.svg" alt="" />
              <p className="truncate font-vrg text-[13px] text-accent2-dark">
                نوشابه بطری فانتا رایگان مخصوص سفارش اول
              </p>
            </div>
            <span className="absolute bottom-0 py-2 px-3 rounded-tl-2xl bg-white text-accent-dark font-vb text-sm">
              %۱۰
            </span>
            <img
              className="w-[100%] h-[170px] object-cover"
              src="/images/fastfood-1.jpg"
              alt=""
            />
          </div>
          <img
            className="shadow-md absolute top-[110px] right-1/2 translate-x-1/2 w-[82px] h-[82px] border-4 rounded-2xl border-white"
            src="/images/goldmom-logo.jpg"
            alt=""
          />
          <div className="text-center py-10 ">
            <h2 className="truncate mb-2 font-vb text-[19px] text-carbon-main">
              فست فود گلد مام (شعبه برق باباخانی)
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <img
                className="w-3 h-3"
                src="/images/icons8-star-40.png"
                alt=""
              />
              <span className="font-vsb text-[13px] text-carbon-main">۴.۲</span>
              <span className="font-vmd text-[11px] text-inactive-dark">
                (۸,۲۰۲ امتیاز)
              </span>
            </div>
            <p className="font-vl text-[13px] text-inactive-dark">
              فست‌فود، پیتزا، ساندویچ
            </p>
            <div className="flex gap-2 items-center justify-center mt-12">
              <img className="w-6 h-6" src="/images/warning-line.svg" alt="" />
              <p className="font-vmd text-[12px] text-alert-main">
                خارج از محدوده
              </p>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg max-h-[400px] shadow-md overflow-hidden w-[100%] relative">
          <div className="relative topOfCard max-w-[300px] min-h-[380] shadow-md bg-red-400 rounded-md overflow-hidden">
            <div className="flex gap-2 px-2 py-1 absolute right-0 top-5 bg-white w-[95%] rounded-e-full">
              <img src="/images/off.svg" alt="" />
              <p className="truncate font-vrg text-[13px] text-accent2-dark">
                نوشابه بطری فانتا رایگان مخصوص سفارش اول
              </p>
            </div>
            <span className="absolute bottom-0 py-2 px-3 rounded-tl-2xl bg-white text-accent-dark font-vb text-sm">
              %۱۰
            </span>
            <img
              className="w-[100%] h-[170px] object-cover"
              src="/images/fastfood-1.jpg"
              alt=""
            />
          </div>
          <img
            className="shadow-md absolute top-[110px] right-1/2 translate-x-1/2 w-[82px] h-[82px] border-4 rounded-2xl border-white"
            src="/images/goldmom-logo.jpg"
            alt=""
          />
          <div className="text-center py-10 ">
            <h2 className="truncate mb-2 font-vb text-[19px] text-carbon-main">
              فست فود گلد مام (شعبه برق باباخانی)
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <img
                className="w-3 h-3"
                src="/images/icons8-star-40.png"
                alt=""
              />
              <span className="font-vsb text-[13px] text-carbon-main">۴.۲</span>
              <span className="font-vmd text-[11px] text-inactive-dark">
                (۸,۲۰۲ امتیاز)
              </span>
            </div>
            <p className="font-vl text-[13px] text-inactive-dark">
              فست‌فود، پیتزا، ساندویچ
            </p>
            <div className="flex gap-2 items-center justify-center mt-12">
              <img className="w-6 h-6" src="/images/warning-line.svg" alt="" />
              <p className="font-vmd text-[12px] text-alert-main">
                خارج از محدوده
              </p>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg max-h-[400px] shadow-md overflow-hidden w-[100%] relative">
          <div className="relative topOfCard max-w-[300px] min-h-[380] shadow-md bg-red-400 rounded-md overflow-hidden">
            <div className="flex gap-2 px-2 py-1 absolute right-0 top-5 bg-white w-[95%] rounded-e-full">
              <img src="/images/off.svg" alt="" />
              <p className="truncate font-vrg text-[13px] text-accent2-dark">
                نوشابه بطری فانتا رایگان مخصوص سفارش اول
              </p>
            </div>
            <span className="absolute bottom-0 py-2 px-3 rounded-tl-2xl bg-white text-accent-dark font-vb text-sm">
              %۱۰
            </span>
            <img
              className="w-[100%] h-[170px] object-cover"
              src="/images/fastfood-1.jpg"
              alt=""
            />
          </div>
          <img
            className="shadow-md absolute top-[110px] right-1/2 translate-x-1/2 w-[82px] h-[82px] border-4 rounded-2xl border-white"
            src="/images/goldmom-logo.jpg"
            alt=""
          />
          <div className="text-center py-10 ">
            <h2 className="truncate mb-2 font-vb text-[19px] text-carbon-main">
              فست فود گلد مام (شعبه برق باباخانی)
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <img
                className="w-3 h-3"
                src="/images/icons8-star-40.png"
                alt=""
              />
              <span className="font-vsb text-[13px] text-carbon-main">۴.۲</span>
              <span className="font-vmd text-[11px] text-inactive-dark">
                (۸,۲۰۲ امتیاز)
              </span>
            </div>
            <p className="font-vl text-[13px] text-inactive-dark">
              فست‌فود، پیتزا، ساندویچ
            </p>
            <div className="flex gap-2 items-center justify-center mt-12">
              <img className="w-6 h-6" src="/images/warning-line.svg" alt="" />
              <p className="font-vmd text-[12px] text-alert-main">
                خارج از محدوده
              </p>
            </div>
          </div>
        </div>
        <div className="card  rounded-lg max-h-[400px] shadow-md overflow-hidden w-[100%] relative">
          <div className="relative topOfCard max-w-[300px] min-h-[380] shadow-md bg-red-400 rounded-md overflow-hidden">
            <div className="flex gap-2 px-2 py-1 absolute right-0 top-5 bg-white w-[95%] rounded-e-full">
              <img src="/images/off.svg" alt="" />
              <p className="truncate font-vrg text-[13px] text-accent2-dark">
                نوشابه بطری فانتا رایگان مخصوص سفارش اول
              </p>
            </div>
            <span className="absolute bottom-0 py-2 px-3 rounded-tl-2xl bg-white text-accent-dark font-vb text-sm">
              %۱۰
            </span>
            <img
              className="w-[100%] h-[170px] object-cover"
              src="/images/fastfood-1.jpg"
              alt=""
            />
          </div>
          <img
            className="shadow-md absolute top-[110px] right-1/2 translate-x-1/2 w-[82px] h-[82px] border-4 rounded-2xl border-white"
            src="/images/goldmom-logo.jpg"
            alt=""
          />
          <div className="text-center py-10 ">
            <h2 className="truncate mb-2 font-vb text-[19px] text-carbon-main">
              فست فود گلد مام (شعبه برق باباخانی)
            </h2>
            <div className="flex items-center justify-center gap-2 mb-1">
              <img
                className="w-3 h-3"
                src="/images/icons8-star-40.png"
                alt=""
              />
              <span className="font-vsb text-[13px] text-carbon-main">۴.۲</span>
              <span className="font-vmd text-[11px] text-inactive-dark">
                (۸,۲۰۲ امتیاز)
              </span>
            </div>
            <p className="font-vl text-[13px] text-inactive-dark">
              فست‌فود، پیتزا، ساندویچ
            </p>
            <div className="flex gap-2 items-center justify-center mt-12">
              <img className="w-6 h-6" src="/images/warning-line.svg" alt="" />
              <p className="font-vmd text-[12px] text-alert-main">
                خارج از محدوده
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rests;
