import React from "react";

function Filter() {
  return (
    <div className="w-full h-full bg-white flex  justify-end  ">
      <div className="w-56 h-12 flex flex-col  text-base items-center justify-center ">
        <div className="w-full h-full flex items-center rounded-md rounded-tl-md rounded-bl-md border border-solid border-carbon-alphaLight hover:shadow-[rgb(38,132,255)_0px_0px_0px_1px]  border-[rgb(38,132,255)]">
          <textarea
            className="flex items-center justify-center text-[rgb(51,51,51)]  resize-none overflow-hidden text-start mx-0.5 my-0 px-2 py-0 border-[none] outline-none"
            placeholder="به ترتیب پیش فرض"
            cols="20"
            rows="1"
            wrap="soft"
          ></textarea>
          <div className="rotate-180 w-px h-9 bg-[rgb(204,204,204)] mx-0 my-2"></div>
          <div className="w-[30px] text-center">
            <div className="w-full self-center px-1 py-0 flex justify-center">
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>
        <div className="w-full rounded mt-1.5 z-10 hidden">
          <div className=" w-full rounded px-0 py-1 border-[0.8px] border-solid border-[rgba(24,25,28,0.06)] z-50">
            <div className="w-full h-[35px] flex items-center pr-2  hover:bg-[rgba(23,111,135,0.485)]">
              بالاترین امتیاز
            </div>
            <div className="w-full h-[35px] flex items-center pr-2  hover:bg-[rgba(23,111,135,0.485)]">
              گران ترین
            </div>
            <div className="w-full h-[35px] flex items-center pr-2  hover:bg-[rgba(23,111,135,0.485)]">
              ارزان ترین
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
