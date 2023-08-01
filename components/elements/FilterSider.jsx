import React from "react";

function FilterSider() {
  return (
    <div class=" min-w-[240px] h-[385px] border shadow-[rgba(58,61,66,0.06)_0px_1px_0px,rgba(0,0,0,0.05)_0px_2px_8px_-2px] flex flex-col p-4 rounded-xl border-solid border-[rgba(58,61,66,0.06)] sm:min-w-[178px] sm:h-[385px]">
      <div class="w-full h-[50px] bg-[rgba(58,61,66,0.06)] flex items-center cursor-pointer p-[5px] rounded-lg sm:h-[45px]">
        <p class="text-sm font-bold mr-3">همه دسته بندی ها</p>
      </div>
      <div class="w-full h-[336px] flex flex-col">
        <div class=" w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div class=" w-[95px] h-8 flex items-center justify-between">
            <img src="tiger.jpg" alt="tiger" class="image" />
            <p lang="option-text">فست فود</p>
          </div>
          <div>icon</div>
        </div>
        <div class="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div class=" w-[95px] h-8 flex items-center justify-between">
            <img src="tiger.jpg" alt="tiger" class="w-8 h-8 object-cover rounded-[50%]" />
            <p lang="w-[50px] h-5">فست فود</p>
          </div>
          <div>icon</div>
        </div>
        <div class="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div class=" w-[95px] h-8 flex items-center justify-between">
            <img src="tiger.jpg" alt="tiger" class="w-8 h-8 object-cover rounded-[50%]" />
            <p lang="w-[50px] h-5">فست فود</p>
          </div>
          <div>icon</div>
        </div>
        <div class="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div class=" w-[95px] h-8 flex items-center justify-between">
            <img src="tiger.jpg" alt="tiger" class="w-8 h-8 object-cover rounded-[50%]" />
            <p lang="w-[50px] h-5">فست فود</p>
          </div>
          <div>icon</div>
        </div>
        <div class="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div class=" w-[95px] h-8 flex items-center justify-between">
            <img src="tiger.jpg" alt="tiger" class="w-8 h-8 object-cover rounded-[50%]" />
            <p lang="w-[50px] h-5">فست فود</p>
          </div>
          <div>icon</div>
        </div>
      </div>
    </div>
  );
}

export default FilterSider;
