import React from "react";
import Service from "./Service";
import { getLocalData } from "@/lib/localdata";
export default async function Nav() {


  const { services } = await getLocalData();



  return (
    <nav className="pt-spacing-2  overflow-x-auto scrollbar-thin  scrollbar-thumb-gray-400 scrollbar-track-gray-300 flex items-baseline bg-white ">
      {services.map((item) => (
        <Service key={item.id} service={item.service} img={item.img} link={'/service/restaurants'} />
      ))}
    </nav>
  );
}
