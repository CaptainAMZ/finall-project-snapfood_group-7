'use-client'


import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import OrderItem from './OrderItem'
import ModalOrder from './ModalOrder'
import { useSelector } from 'react-redux'



export default function Orders() {

  const { historyList } = useSelector(state => state.history);
  const [modal, setModal] = useState(false);

  const closeModalHandler = useCallback((e) => {
    e.stopPropagation();
    const targetClass = e.target.className;
    if (targetClass.includes('CLOSE-ICON')) {
      setModal(false);
    }
    setModal(false);

  }, [])
 



  return (
    <>
      <div className=' scroll-hide bg-white min-w-[21rem] sm:min-w-[24rem] md:min-w-[27rem]  w-21 absolute left-spacing-0  min-h-screen py-spacing-0 px-spacing-2 overflow-y-scroll shadow-shadows-modal animate-order max-h-[100px]'>

        <div className='mt-spacing-2 flex flex-col items-start w-full'>

          <p className='font-vb text-.75 leading-lineHeight-caption inline-block text-carbon-light text-start w-full'>
            سفارش های پیشین
          </p>

          <div className='mt-spacing-16 border-t-[0.0625rem] border-r-[0.0625rem] border-l-[0.0625rem] border-carbon-alphaMedium rounded-t-xl  w-full'>
            {historyList.map(item => <OrderItem key={item.id} setmodal={setModal}  info={item} />)}

          </div>

          <button className='h-[3.75rem] mt-spacing-11 mx-auto mb-spacing-0 inline-flex justify-center items-center cursor-pointer transition-all 
          w-auto min-w-[6.6875rem] shadow-shadows-medium  border-accent2-alphaLight border-[0.09375rem] rounded-[3rem] py[1px] px-[6px]'>

            <Image src="/images/images-home/clock.svg" width={17} height={18} alt='clock' />

            <p className='mr-spacing-1 font-vsb text-vm leading-lineHeight-body text-accent2-main inline-block tracking-tight'>
              مشاهده همه سفارش ها
            </p>
          </button>

        </div>

      </div>
      {modal && <div className=' CLOSE-ICON  sticky  inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-full z-999 m-auto'>

        <ModalOrder onClose={closeModalHandler} />
      </div>}

    </>

  )




}
