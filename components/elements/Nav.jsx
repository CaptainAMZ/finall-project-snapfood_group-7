import React from "react";
import Service from "./Service";
import food from "../../public/images/images-home/service-food.png";
import supermarket from "../../public/images/images-home/service-supermarket.png";
import cafe from "../../public/images/images-home/service-cafe.png";
import sweet from "../../public/images/images-home/service-sweet.png";
import icecream from "../../public/images/images-home/service-icecream.png";
import fruit from "../../public/images/images-home/service-fruit.png";
import bakery from "../../public/images/images-home/service-bakery.png";
import nut from "../../public/images/images-home/service-nut.png";
import other2 from "../../public/images/images-home/service-other2.png";
import meat from "../../public/images/images-home/service-meat.png";
import { getLocalData } from "@/lib/localdata";
export default async function Nav() {
   
  
  const {services} = await getLocalData();

  

  return (
    <nav  className="pt-spacing-2  overflow-x-auto scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 flex items-baseline bg-white ">
      {services.map((item) => (
        <Service service={item.service} img={item.img} link={'resturants'} />
      ))}
    </nav>
  );
}
