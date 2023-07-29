import React from 'react'
import Image from 'next/image'
import nanak from '../../public/images/images-home/nanak.jpg'
import Order from './OrderItem'
import OrderItem from './OrderItem'

export default function Orders() {
  return (

    // <div id='modal-root'>
      
    //     
    //        
    //       


    //    
    //     <div id='prev-order-bill-modal' className='none'></div>


    // </div>
  <div className='' >
    <div className='min-w-17.8125 w-21 absolute left-spacing-0  min-h-screen py-spacing-0 px-spacing-2 overflow-auto  shadow-shadows-modal animate-order max-h-90'>
                    
      <div className='mt-spacing-2 flex flex-col items-start '>

        <p className='font-vsb text-.75 leading-lineHeight-caption inline-block text-carbon-light text-start w-full'>
                                      سفارش های پیشین
        </p>
        
        <div className='mt-spacing-16 border-t-0.0625 border-r-0.0625 border-l-0.0625 border-carbon-alphaMedium rounded-t-xl'>
            <OrderItem/>
        </div>

      </div>

    </div>

  </div>  
    
  )
}
