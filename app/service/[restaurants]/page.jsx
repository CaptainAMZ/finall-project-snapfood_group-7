import React from "react";
import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";

function page() {
  return (
    <div className=" bg-red-400 h-screen w-screen flex flex-col p-4  ">
      
        
      
      <div  className="">
        <div >
          <div >
            <FilterSider />
          </div>
          <div className="p-4" >
            <StaticSider />
          </div>
        </div>
        <div >
          <CartResteurants />
        </div>
      </div>
    </div>
  );
}

export default page;
