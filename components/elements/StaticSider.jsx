import React from "react";

function StaticSider() {
  return (
    <div>
      <div className=" min-w-[325px] h-[110px] flex border shadow-[rgba(58,61,66,0.06)_0px_1px_0px] flex-col p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)] xs:hidden sm:hidden md:inline">
        <p className="w-full text-[rgb(58,61,66)] text-xs font-normal h-4 text-start">
          کلاس قیمتی
        </p>
        <div className="h-10 flex bg-[rgba(58,61,66,0.06)] cursor-pointer items-center w-full relative z-[-1] mt-4 rounded-xl">
          <div className="absolute h-9 w-[20px] bg-white delay-[0s] duration-[0.1s] transition-all ease-[ease] z-[1] mr-[3px] rounded-xl "></div>
          <div className="w-3/12 flex items-center justify-center z-[2] p-2.5">
            <p className="text-[rgb(0,184,98)]">همه</p>
          </div>
          <div className="w-3/12 flex items-center justify-center z-[2] p-2.5">
            <p className="text">اقتصادی</p>
          </div>
          <div className="w-3/12 flex items-center justify-center z-[2] p-2.5">
            <p className="text">متوسط</p>
          </div>
          <div className="w-3/12 flex items-center justify-center z-[2] p-2.5">
            <p className="text">گران</p>
          </div>
        </div>
      </div>
      <div className="main-container">
        <div className="option">
          <span className="text">دارای کوپن</span>
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="option">
          <span className="text">دارای تخفیف</span>
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="option">
          <span className="text">ارسال اکسپرس</span>
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="option">
          <span className="text">فود پرو</span>
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
        <div className="option2">
          <span className="text">رستوران های به صرفه</span>
          <label>
            <input type="checkbox" />
            <span className="slider"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default StaticSider;
