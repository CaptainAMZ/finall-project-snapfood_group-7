'use client'
import React from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux';
import OrderFoodName from './OrderFoodName';

export default function ModalOrder({ onClose }) {


  const { historyList, passID } = useSelector(state => state.history);

  const index = historyList.findIndex(item => item.id === passID);
  const { items, resName, totalPrice, deliveryCost, payment } = historyList[index]





  return (


    <div className=' w-[25rem] overflow-hidden  bg-white shadow-shadows-modal rounded-xl  m-auto '>
      <div className='relative w-full h-[56px] pl-[56px] flex justify-between items-center '>
        <button onClick={onClose} className='w-[56px] h-[56px]  py[1px] px[6px] flex justify-center items-center'>
          <Image className='cursor-pointer' src={"/images/images-home/cross.svg"} width={14} height={14} alt='cross' />
        </button>
      </div>

      <div className='flex flex-col'>
        <span className='font-vsb text-1.5 leading-lineHeight-xlarge text-carbon-main  my-spacing-11 mx-spacing-2'>
          فاکتور سفارش
        </span>

        <p className='mx-[1.125rem] mb-spacing-2 font-vrg text-vm leading-lineHeight-body carbon-light'>
          {resName}
        </p>

        <div>

          {items.map(item => <OrderFoodName key={item.key} infoFood={item} />)}

        </div>

        <div className='h-8 px-spacing-2 flex items-center justify-between'>
          <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>
            جمع کل
          </span>

          <div>
            <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>
              {totalPrice}
            </span>
            <span className=' mr-spacing-13 font-vrg text-vm leading-lineHeight-body carbon-light'>
              تومان
            </span>
          </div>
        </div>
        <div className='h-8 px-spacing-2 flex items-center justify-between'>
          <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>
            هزینه ارسال
          </span>

          <div>
            <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>
              {deliveryCost}
            </span>
            <span className=' mr-spacing-13 font-vrg text-vm leading-lineHeight-body carbon-light'>
              تومان
            </span>
          </div>
        </div>

        <div className='h-12 px-spacing-2 py-spacing-1 flex items-center justify-between border-[0.0625rem] border-solid border-carbon-alphaLight'>
          <span className=' font-vsb text-vm leading-lineHeight-body carbon-main'>
            مجموع
          </span>

          <div>
            <span className=' font-vsb text-vm leading-lineHeight-body carbon-light'>
              {payment}
            </span>

            <span className=' mr-spacing-13 font-vrg text-vm leading-lineHeight-body carbon-light'>
              تومان
            </span>
          </div>
        </div>
      </div>
    </div>

  )
}
