import React from "react";

function CartResteurants() {
  return (
    <div className="flex flex-col items-center pb-6 mb-8 bg-white cursor-pointer mt-12 min-w-[270px] h-[375px] rounded-xl shadow-lg sm:min-w-[310px] md:min-w-[250px]">
      <div className="w-full relative mb-8 min-h-[40%]">
        <img
          src="rick.png"
          alt="rick"
          className="w-full h-full object-cover rounded-s-xl"
        />
        <div className="w-24 h-24 absolute right-0 left-0 m-auto bg-white flex items-center justify-center rounded-lg   -bottom-5 shadow-shadows-high">
          <img
            src="tiger.jpg"
            alt="tiger"
            className="w-24 h-24 object-cover rounded-xl"
          />
        </div>
        <div className="absolute right-0 bg-white w-4/5 h-6 flex items-center justify-center top-5 rounded-tl-xl rounded-bl-xl">
          <span className="px-2">icon</span>
          <span className="font-vb overflow-hidden inline-block whitespace-no-wrap text-xs text-start text-ellipsis">
            {" "}
            و پیشنهاد های دیگر ارسال رایگان و 5% تخفیف برای کاربران PRO
          </span>
        </div>
        <div className="absolute bottom-0 right-0 bg-white py-1 px-3 rounded-tl-2xl">
          <span className="text-sm font-vb text-pink-600">5%</span>
        </div>
      </div>
      <div className="w-full flex items-center justify-between flex-col h-[60%]">
        <div className="w-full text-center mb-12">
          <h2 className="overflow-hidden text-lg font-vb mb-2 ">
            تله پیتزا (ستارخان)
          </h2>
          <div className="w-full flex justify-center mb-2">
            <i>satr</i>
            <span className="text-xs">4.2</span>
            <span className="text-xs">(14.264 امتیاز)</span>
          </div>
          <h3 className="text-xs">فست فود پیتزا ساندویچ</h3>
        </div>
        <footer className="flex justify-center">
          <div className="w-48 h-10 flex items-center justify-center rounded-[72px] shadow-shadows-medium">
            <i>icon</i>
            <p className="text-xs ml-2">پیک فروشنده</p>
            <p className="text-xs font-vb">14.900 تومان</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default CartResteurants;
