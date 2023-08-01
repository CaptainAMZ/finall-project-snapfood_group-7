'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import search from '../../public/images/images-home/search-dark.svg'
import crossCircle from'../../public/images/images-home/cross-circle.svg'
import left from'../../public/images/images-home/left.svg'
import menu from'../../public/images/images-home/menu-4.svg'
import leftgreen from'../../public/images/images-home/left-green.svg'
import market from'../../public/images/images-home/market-stall.svg'
import pizza from '../../public/images/images-home/pizza.jpg'


export default function Search({modal}) {
    const icon = search;
    // const icon = crossCircle;
    // width ={20px} height ={20px}

    // useEffect(()=>{

    //     const show = (e)=>{

    //         e.target.focus()

    //     }

    // },[])
    return (

        <div className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16'>

            <div className='w-[95%] flex flex-col'>
                <div className='relative w-full flex items-center justify-center '>
                   
                    <Image className='absolute top-0 right-4  cursor-pointer pt-spacing-2' src={icon} width={17} height={17}/>
                    <input  type="text" className='outline-none focus:border-black w-full  h-12 py-spacing-16 pl-spacing-16 pr-spacing-5 border-[0.0625rem] border-carbon-alphaHigh rounded-[0.625rem] font-vrg 
                    leading-lineHeight-default'/>

                </div>

                <div className=' bg-white mt-spacing-11 rounded-[0.375rem]'>

                    {/* <div className='p-[1.125rem] cursor-pointer flex justify-between'> */}
{/* nothing
                        <span className='font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>
                                    عبارت مورد نظر خود را وارد کنید
                        </span> */}
{/* length input one
                        <span className='font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>
                                        
                                                جستجوی  مقدار ولیو
                        </span>

                        <Image src={left}/> */}



                    {/* </div> */}

                    {/* <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>
       //2                 <a >

                            <div className='p-[1.125rem] flex items-center '>

                                <Image className='ml-spacing-2' src={menu} width={20} height={20}/>

                                <div >
                                    <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                                        دسته بندی

                                        <p className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-spacing-1'>
                                           ساندویچ                                      </p>
                                    </span>

                                </div>
                            </div>
                        </a>


                    </div> */}


                    <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>

                        <div className='my-[1.125rem] flex items-center justify-between'>

                            <span  className=' mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main' >
                                            فروشگاه ها
                            </span>
                            <a >

                                <div className='ml-[0.75rem] flex items-center'>

                                        <span className=' mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main'>
                                                    
                                                
                                                    مشاهده همه

                                                    (23)
                                        </span>


                                        <Image src={leftgreen} width={22} />
                                </div>
                               
                            </a>



                        </div>

                        <a >

                        <div className='p-[1.125rem] flex items-center '>

                            <Image className='ml-spacing-2' src={market} width={20} height={20}/>

                            <div >
                                <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main '>
                                    پیتزا شیلا

                                    
                                </span>

                            </div>
                        </div>
                        </a>
                    </div>


                    <div className='flex flex-col border-b-[0.0625rem] border-surface-dark'>

                            <div className='mt-[1.125rem] flex items-center justify-between'>

                                <span  className=' mr-[0.75rem] font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main' >
                                    محصولات
                                </span>

                                <a >

                                        <div className='ml-[0.75rem] flex items-center'>

                                                <span className=' mr-[0.75rem] font-vsb text-[0.875rem] leading-lineHeight-caption text-accent2-main'>
                                                            
                                                        
                                                            مشاهده همه

                                                            (684)
                                                </span>


                                                <Image src={leftgreen} width={22} />
                                        </div>

                                     </a>

                            </div>

                            <a >

                                <div className='p-[1.125rem] flex flex-col'>
                                        <div className='flex items-center h-[5rem]'>
                                                <Image className='ml-spacing-2  ' src={pizza} width={56} height={56}/>

                                                <div className='flex flex-col  '>

                                                    <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main '>

                                                        پیتزا پنجره ای

                                                    </span>

                                                    <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mt-[0.75rem]'>

                                                        پیتزاپرپروک(تهرانپارس)

                                                    </span>
                                                </div>

                                        </div>

                                        <div className='flex justify-between items-center'>
                                                <div>

                                                    <p className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main  ml-[0.25rem]'>
                                                            پیک فروشنده
                                                    </p>

                                                   <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                                                            54,000
                                                            <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                                                    نومان
                                                            </span>
                                                   </span>

                                                </div>

                                                <div>
                                                <span className='inline-block font-vsb text-[0.875rem] leading-lineHeight-caption text-carbon-main'>

                                                       248,000
                                                        <span className='inline-block font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main mr-[0.25rem]'>
                                                                تومان                                                        </span>
                                                        </span>

                                                </div>

                                        </div>

                                </div>
                            </a>
    
                    </div>
                    

                </div>
            </div>
        </div>
    )
}