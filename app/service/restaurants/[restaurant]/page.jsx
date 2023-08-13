
import Header from "@/components/elements/Header";
import RestaurantInfo from "@/components/elements/RestaurantInfo";
import React from "react";
import { getLocalData } from '@/lib/localdata';
import Footer from "@/components/modules/Footer";



export async function generateMetadata({ params }) {
 
  const id = params.restaurants
  
  const {restaurants} = await getLocalData();
  const res= restaurants.find(item => item.name)

  
  
 return {title :`${res.name}-سفارش آنلاین`,
           }
  
}

export default function page({ params }) {
  return (
    <>
      {/* <div className=" sticky top-0 right-0 left-0 z-[1] w-full shadow-head">
        <Header />
      </div> */}
      <div className="bg-body-color">
      <RestaurantInfo params={params} />
      </div>
      
    </>
  );
}
