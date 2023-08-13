"use client";
import Image from "next/image";
import AddFoodBtn from "./AddFoodBtn";
import React, { memo, useCallback, useRef, useState } from "react";
import FoodModal from "../modules/FoodModal";
import defImg from "../../public/images/deflogo-1.jpg";



 function FoodCard({
  name,
  image = "/images/deflogo-1.jpg",
  price,
  rate,
  items,
  id,
  comment,
  desc,
  restId,
  basket,
}) {

  
  
  const [detail, setDetail] = useState([]);
 
      
  const detailpage = useCallback((product)=>{
    setDetail([{ ...product }]);
    handleOpenModal();
  },[]);

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = useCallback((e)=>{
    setOpenModal(true);
    document.body.style.overflow = "hidden";
  },[])
  const handleCloseModal = useCallback((e)=>{
    if (e.target.className.includes("CLOSE")) {
      setOpenModal(false);
      document.body.style.overflow = "auto";  
    }
  },[])
 

  const closeModalBtn = useCallback (()=>{
    setOpenModal(false);
    document.body.style.overflow = "auto";
  },[])

  return (
    <div className="font-vrg  md:w-[50%] border-l-borders-xs  border-b-[.5px] border-surface-dark">
      <div className="cursor-pointer">
        <div
          className=" font-vrg flex justify-between py-spacing-1 px-spacing-1 lg:px-spacing-2"
          onClick={() => detailpage({ items })}
        >
          <div className="mt-spacing-1 text-right flex-1">
            <h3 className="font-vmd text-scales-body text-surface-overlay">
              {name}
            </h3>
            <p className="text-right text-scales-caption w-[90%] text-slate-500">
              {desc}
            </p>
          </div>
          <div className="md:w-[100px] lg:w-[120px] max-w-[150px]">
            <Image
              className="object-cover rounded-xl"
              src={image || defImg}
              width={120}
              height={120}
              alt=""
            />
          </div>
        </div>
        <div className="w-[100%] hover:bg-surface-main transition-colors flex items-center justify-between px-spacing-2 py-spacing-1  mb-spacing-2 md:px-0 lg:px-spacing-2">
          <div className="flex items-center">
            <div>
              <p className="text-scales-body font-vsb">{price} تومان</p>
            </div>
          </div>
          <div>
            <AddFoodBtn id={id} price={price} name={name} basket={basket} restId={restId} />
          </div>
        </div>
      </div>
      <div>
         {
            openModal && (
              <div
                onClick={handleCloseModal}
                className="CLOSE fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-[100vh] z-50"
              >
                <FoodModal
                  desc={desc}
                  closeModal={closeModalBtn}
                  image={image}
                  name={name}
                  price={price}
                  rate={rate}
                  comment={comment}
                  id={id}
                  basket={basket}
                />
              </div>
            )
        }
      </div>
    </div>
  );
}


export default memo(FoodCard)