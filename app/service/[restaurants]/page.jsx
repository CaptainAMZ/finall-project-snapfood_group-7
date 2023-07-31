import React from "react";
import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";

function page() {
  return (
    <div>
      <div>
        <Filter />
      </div>
      <div>
        <div>
          <CartResteurants />
        </div>
        <div>
          <div>
            <FilterSider />
          </div>
          <div>
            <StaticSider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
