
import React from "react";
import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";

function page() {
  return (
    <div className="max-w-screen h-auto flex p-6 flex-col overflow-x-hidden  ">
      <div className="w-full h-auto mb-8 md:pl-4 "  >
        <Filter />
      </div>
      <div className="xs:w-full flex flex-col sm:flex-row ">
        <div className="sm:w-[30%] p-4">
          <div className="w-full" >
            <FilterSider />
          </div>
          <div className="w-full" >
            <StaticSider />
          </div>
        </div>
        <div className="w-full  p-4  sm:flex  sm:flex-wrap     ">
          <CartResteurants/>
          <CartResteurants/>
          <CartResteurants/>
          <CartResteurants/>
        </div>
      </div>
    </div>
  );
}

export default page;
