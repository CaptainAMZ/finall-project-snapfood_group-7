import React from "react";
import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";

function page() {
  return (
    <div className=" max-w-screen flex flex-col m-6  overflow-hidden">
      <div className=" flex items-center mb-8" >
        <Filter />
      </div>
      <div className="w-full p-4">
        <div className="flex flex-col">
          <div>
            <FilterSider />
          </div>
          <div >
            <StaticSider />
          </div>
        </div>
        <div className=" w-full">
          <CartResteurants/>
          <CartResteurants/>
        </div>
      </div>
    </div>
  );
}

export default page;
