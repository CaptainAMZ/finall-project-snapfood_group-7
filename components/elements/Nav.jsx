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

export default function Nav() {
  const services = [
    { service: "رستوران", img: food },
    { service: "سویرمارکت", img: supermarket },
    { service: "کافه", img: cafe },
    { service: "شیرینی", img: sweet },
    { service: "نانوایی", img: bakery },
    { service: "میوه", img: fruit },
    { service: "آبمیوه بستنی", img: icecream},
    { service: "آجیل", img: nut },
    { service: "پروتئین", img: meat },
    { service: "سایر", img: other2},
  ];

  return (
    <nav  className="pt-spacing-2 over overflow-x-auto flex items-baseline bg-white ">
      {services.map((item) => (
        <Service service={item.service} img={item.img} />
      ))}
    </nav>
  );
}
