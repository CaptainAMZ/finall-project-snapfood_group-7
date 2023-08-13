"use client";

import CartResteurants from "@/components/elements/CartResteurants";
import Filter from "@/components/elements/Filter";
import FilterSider from "@/components/elements/FilterSider";
import StaticSider from "@/components/elements/StaticSider";
import { useState } from "react";

function MainServer({ restaurants, cats }) {
  const [productCards, setProductCards] = useState(restaurants);

  return (
    <div className="max-w-screen min-h-screen flex  flex-col p-4  xs:mx-[50px] bg-white  ">
      <div className="w-full md:pl-4 mb-4  ">
        <Filter
          restaurants={restaurants}
          setProductCards={setProductCards}
          productCards={productCards}
        />
      </div>
      <div className="xs:w-full flex flex-col sm:flex-row  ">
        <div className="sm:w-[45%]  lg:w-[23%] py-4 lg:h-[72%]  sm:h-[21%] md:h-[44%] sm:sticky sm: top-0">
          <div className="w-full  ">
            <FilterSider cats={cats} />
          </div>
          <div className="w-full  ">
            <StaticSider />
          </div>
        </div>
        <div className="  sm:w-[75%] sm:p-4 sm:flex sm:flex-col  md:flex-row  sm:flex-wrap  lg:w-[80%] ">
          <CartResteurants productCards={productCards} />
        </div>
      </div>
    </div>
  );
}

export default MainServer;
