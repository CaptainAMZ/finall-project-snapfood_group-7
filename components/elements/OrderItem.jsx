'use client'


import React, { useCallback } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { passID } from "@/redux/orderHistorySlice";


export default function OrderItem({ setmodal, modal, info }) {


  const dispatch = useDispatch();
  const handlerInfo = useCallback((id) => {
    dispatch(passID(id))
    setmodal(true)
  }, [])



  const { resName, id, dateHour, dateMonth, dateMin, dateDay, logo, dateDate } = info;
  return (

    <>

      <div className="pt-spacing-16 px-spacing-0 pb-spacing-1 border-b-[0.0625rem] border-carbon-alphaLight flex justify-center ">
        <div className="w-[calc(100%-2rem)] flex flex-col ">
          <div className="flex  items-center">
            <div className="w-spacing-6 max-h-spacing-6 cursor-pointer flex-col">
              <Image className="rounded w-full max-h-full" src={logo} width={100} height={100} alt="logo" />
            </div>
            <div className="mr-spacing-2 flex flex-col">
              <p className="cursor-pointer font-vxb leading-lineHeight-body text-scales-body inline-block text-carbon-main text-start">
                {resName}
              </p>
              <div className="flex mt-1">
                <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main">
                  {dateDay} {dateDate} {dateMonth}
                </p>
                <p className="font-vrg text-.75 leading-lineHeight-caption text-carbon-main mr-spacing-2 ">
                  {dateHour}:{dateMin}
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
            <button onClick={() => handlerInfo(id)} className=" flex-1 h-[32px] ml-spacing-2 inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid  rounded-0.375 bg-carbon-alphaLight bg-clip-padding py-spacing-17 px-spacing-18">
              <Image src='/images/images-home/factor.svg' width={16} height={16} alt="factor" />
              <p className="mr-spacing-1  font-vxb text-scales-body leading-lineHeight-body text-carbon-main text-start inline-block flex-0">
                مشاهده فاکتور
              </p>
            </button>

            <button className=" flex-1 h-[32px]  inline-flex items-center justify-center min-w-6.6875 transition-all w-auto border-0.09375 border-solid  rounded-0.375 bg-carbon-alphaLight  bg-clip-padding py-spacing-17 px-spacing-18">
              <Image src="/images/images-home/cycle.svg" width={16} height={16} alt="cycle" />
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
