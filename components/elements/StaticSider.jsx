import React from "react";


function StaticSider() {
  return (
    <div className="w-full  ">
      <div className="md:flex w-full h-[110px] mb-2 flex border shadow-[rgba(58,61,66,0.06)_0px_1px_0px] flex-col  rounded-xl border-solid border-[rgba(58,61,66,0.06)] hide p-3 ">
        <p className="w-full text-[rgb(58,61,66)] text-xs font-vl h-4 text-start mr-1">
          کلاس قیمتی
        </p>
        <div className="h-10 flex bg-[rgba(58,61,66,0.06)] cursor-pointer items-center w-full relative  mt-4 rounded-xl">
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

      <div className="w-full h-[300px] border bg-[white] shadow-[rgba(58,61,66,0.06)_0px_1px_0px,rgba(0,0,0,0.05)_0px_2px_8px_-2px] p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)]">
      <div className="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span className="text-md font-vrg text-gray-600">دارای کوپن</span>
        <label className="label-toggle">
          <input type="checkbox"  className="input-toggle"/>
          <span className="slider"></span>
        </label>
      </div>
      <div className="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span className="text-md font-vrg text-gray-600">دارای تخفیف</span>
        <label className="label-toggle">
          <input type="checkbox" className="input-toggle" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span className="text-md font-vrg text-gray-600">ارسال اکسپرس</span>
        <label className="label-toggle">
          <input type="checkbox" className="input-toggle" />
          <span className="slider"></span>
        </label>
      </div>
      <div className="w-full h-1/5 flex justify-between items-center border-b-[rgba(58,61,66,0.06)] border-b border-solid">
        <span className="text-md font-vrg text-gray-600">فود پرو</span>
        <label className="label-toggle">
          <input type="checkbox" className="input-toggle" />
          <span className="slider"></span>
        </label>
      </div>
      <div className=" w-full h-1/5 flex justify-between items-center">
        <span className="text-md font-vrg text-gray-600">رستوران های به صرفه</span>
        <label className="label-toggle">
          <input type="checkbox" className="input-toggle" />
          <span className="slider"></span>
        </label>
      </div>
    </div>
    </div>
  );
}

export default StaticSider;
