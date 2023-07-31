import React from "react";

function StaticSider() {
  return (
    <div class=" min-w-[325px] h-[110px] flex border shadow-[rgba(58,61,66,0.06)_0px_1px_0px] flex-col p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)] xs:hidden sm:hidden md:inline">
      <p class="w-full text-[rgb(58,61,66)] text-xs font-normal h-4 text-start">
        کلاس قیمتی
      </p>
      <div class="h-10 flex bg-[rgba(58,61,66,0.06)] cursor-pointer items-center w-full relative z-[-1] mt-4 rounded-xl">
        <div class="absolute h-9 min-w-[20px] bg-white delay-[0s] duration-[0.1s] transition-all ease-[ease] z-[1] mr-[3px] rounded-xl "></div>
        <div class="w-3/12 flex items-center justify-center z-[2] p-2.5">
          <p class="text-[rgb(0,184,98)]">همه</p>
        </div>
        <div class="w-3/12 flex items-center justify-center z-[2] p-2.5">
          <p class="text">اقتصادی</p>
        </div>
        <div class="w-3/12 flex items-center justify-center z-[2] p-2.5">
          <p class="text">متوسط</p>
        </div>
        <div class="w-3/12 flex items-center justify-center z-[2] p-2.5">
          <p class="text">گران</p>
        </div>
      </div>
    </div>
    
  );
}

export default StaticSider;
