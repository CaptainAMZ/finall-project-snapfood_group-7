'use client'
import { useSearchParams } from "next/navigation";
import Card from "./Card";
 function CartResteurants({productCards}) {
  const searchParam = useSearchParams()
  const getSearch =Number(searchParam.get("cat")) 
  const filteredRestaurants = productCards.filter((item)=>{
    if(getSearch !="") return item.catId.includes(getSearch)
    else{return item}
  }) 
  return (
    <div>
      <div className=" md:flex md:flex-row md:flex-wrap ">
      {filteredRestaurants.map((item) => (
       
           <Card key={item.id} item={item}/>
        
      ))}
    </div>
    </div>
  );
}

export default CartResteurants;
