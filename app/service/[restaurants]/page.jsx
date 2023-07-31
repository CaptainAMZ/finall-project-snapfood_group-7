import React from "react";
import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";

function page() {
  return (
    <div className="main-container">
      <div className="filter-container">
        <Filter />
      </div>
      <div className="footer-container">
        <div className="slider-container">
          <div className="header-container">
            <FilterSider />
          </div>
          <div className="static-container">
            <StaticSider />
          </div>
        </div>
        <div className="card-container">
          <CartResteurants />
        </div>
      </div>
    </div>
  );
}

export default page;
