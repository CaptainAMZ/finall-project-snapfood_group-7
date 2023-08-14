
import RestaurantInfo from "@/components/elements/RestaurantInfo";
import React from "react";
import { getLocalData } from '@/lib/localdata';



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
      <div className="bg-body-color">
      <RestaurantInfo params={params} />
      </div>
    </>
  );
}
