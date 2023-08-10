'use client'


import React from "react";
import Image from "next/image";
import nanak from "../../public/images/images-home/nanak.jpg";
import factor from "../../public/images/images-home/factor.svg";
import cycle from "../../public/images/images-home/cycle.svg";
import ModalOrder from "./ModalOrder";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { passID } from "@/redux/orderHistorySlice";
import { useSelector } from 'react-redux';

export default function OrderItem({setmodal,modal,info}) {
   
  console.log('info',info);
   const dispatch = useDispatch()
   const handlerInfo=(id)=>{
      dispatch(passID(id))
      console.log('id',id);
      setmodal(true)
   }


  //  const {historyList,userId,passID} =useSelector(state=>state.orderHistory);
  // const index = historyList.findIndex(item=>item.id === passID)
  // // const {items,id,totalPrice} = info 
  // const {resName,foodName,price,count,dateHour,dateMounth} = historyList[index]
   const {items,resName,id,dataHour,dataMounth,totalPrice,tax,deliveryPay,total} = info 
   
  
  //  console.log('item',items);













    // const [modal , setModal] = useState(false);
  // const closeModalHandler =(e) =>{
  //   const targetClass=  e.target.className;
  //   if( targetClass.includes('CLOSE-ICON') ){
  //     setModal(false);
      
     
  //   }

    
  // setModal(false);  

  //   }

  //   const openModalHandler = (e)=>{
  //       setModal(true)
       
        

       
  //   }
  return (
   
<>
  
     <div className="pt-spacing-16 px-spacing-0 pb-spacing-1 border-b-[0.0625rem] border-carbon-alphaLight flex justify-center ">
      <div className="w-[calc(100%-2rem)] flex flex-col ">
        <div className="flex  items-center">
          <div className="w-spacing-6 max-h-spacing-6 cursor-pointer flex-col">
            <Image className="rounded w-full max-h-full" src={nanak} />
          </div>
          <div className="mr-spacing-2 flex flex-col">
            <p className="cursor-pointer font-vxb leading-lineHeight-body text-scales-body inline-block text-carbon-main text-start">
              {resName}
            </p>
            <div className="flex">
              <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main">
                دوشنبه 26 تیر
              </p>
              <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main mr-spacing-2">
                19:03
              </p>
            </div>
          </div>
        </div>

        <div className="h-[32px] mt-spacing-2 px-spacing-1 rounded bg-accent2-alphaLight flex justify-between items-center">
          <p className="font-vrg text-scales-tiny leading-lineHeight-tiny text-carbon-main ">
            نظرتان را درباره این سفارش به اشتراک بگذارید.
          </p>
          <p className="font-vxb text-scales-caption leading-lineHeight-caption text-accent2-main cursor-pointer ml-spacing-11">
            ثبت نظر
          </p>
        </div>

        <div className="mt-spacing-16 mb-spacing-1 flex justify-center">
        <button  onClick={()=>handlerInfo(id)}  className=" flex-1 h-[32px] ml-spacing-2 inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid  rounded-0.375 bg-carbon-alphaLight bg-clip-padding py-spacing-17 px-spacing-18">
          <Image src={factor} width={16} height={16} />
          <p className="mr-spacing-1  font-vxb text-scales-body leading-lineHeight-body text-carbon-main text-start inline-block flex-0">
            مشاهده فاکتور
          </p>
        </button>

        <button className=" flex-1 h-[32px]  inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid  rounded-0.375 bg-carbon-alphaLight  bg-clip-padding py-spacing-17 px-spacing-18">
          <Image src={"/images/images-home/cycle.svg"} width={16} height={16} />
          <p className="mr-spacing-1  font-vxb text-scales-body  leading-lineHeight-body text-carbon-main text-start inline-block flex-0">
            سفارش مجدد
          </p>
        </button>
      </div>
      </div>

     
    </div>

    

  
  </> 
   
    
    
  
  

   )
}
