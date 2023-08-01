import React from "react";

function StaticSider() {
  return (
    <div className="min-w-full">
      <div className="md:flex min-w-[325px] h-[110px] flex border shadow-[rgba(58,61,66,0.06)_0px_1px_0px] flex-col p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)] hide">
        <p className="w-full text-[rgb(58,61,66)] text-xs font-normal h-4 text-start">
          کلاس قیمتی
        </p>
        <div className="h-10 flex bg-[rgba(58,61,66,0.06)] cursor-pointer items-center w-full relative z-[-1] mt-4 rounded-xl">
          <div
            className="absolute  h-9 w-[25%] bg-white  z-[1] mr-[3px] rounded-xl ;
"
          ></div>
          <div className="w-3/12 flex items-center justify-center z-[2] p-2.5 ">
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

      <div class="min-w-[240px] h-[300px] border bg-[white] shadow-[rgba(58,61,66,0.06)_0px_1px_0px,rgba(0,0,0,0.05)_0px_2px_8px_-2px] p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)]">
      <div class="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span class="text">دارای کوپن</span>
        <label>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span class="text">دارای تخفیف</span>
        <label>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span class="text">ارسال اکسپرس</span>
        <label>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span class="text">فود پرو</span>
        <label>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
      <div class=" w-full h-1/5 flex justify-between items-center">
        <span class="text">رستوران های به صرفه</span>
        <label>
          <input type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </div>
    </div>
  );
}

export default StaticSider;
