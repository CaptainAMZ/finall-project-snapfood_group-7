'use client'
import React, { useEffect,useRef } from 'react'
import Image from 'next/image'
import searchDark from '../../public/images/images-home/search-dark.svg'
import crossCircle from'../../public/images/images-home/cross-circle.svg'
import left from'../../public/images/images-home/left.svg'





import SearchCategory from './SearchCategory'
import SearchMarket from './SearchMarket'
import SearchFood from './SearchFood'
import SearchProduct from './SearchProduct'


export default function Search() {
    const icon = searchDark;
    // const icon = crossCircle;
    // width ={20px} height ={20px}
    const INPUT = useRef()
    useEffect(()=>{

        INPUT.current.focus();

       

    },[])



    return (

        <div className='fixed top-0 flex justify-center w-[31vw] min-w-[18.75rem] m-auto py-spacing-16'>

            <div className='w-[95%] flex flex-col'>
                <div className='relative w-full flex items-center justify-center '>
                   
                    <Image className='absolute top-0 right-4  cursor-pointer pt-spacing-2' src={'./images/images-home/search-dark.svg'} width={17} height={17}/>
                    <input ref={INPUT} type="text" className='outline-none focus:border-black w-full  h-12 py-spacing-16 pl-spacing-16 pr-spacing-5 border-[0.0625rem] border-carbon-alphaHigh rounded-[0.625rem] font-vrg 
                    leading-lineHeight-default'/>

                </div>

                <div className=' bg-white mt-spacing-11 rounded-[0.375rem]'>

                    <div className='p-[1.125rem] cursor-pointer flex justify-between'> 
{/* nothing */}
                        <span className='font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>
                                    عبارت مورد نظر خود را وارد کنید
                        </span>
{/* length input one
                        <span className='font-vrg text-[0.875rem] leading-lineHeight-caption text-carbon-main'>
                                        
                                                جستجوی  مقدار ولیو
                        </span>

                        <Image src={left}/> */}



                    </div>

                   {/* <SearchCategory category={'ساندویچ'}/>


                    <SearchMarket resturantName={'پیتزا شیلا'}/>


                    

                            
                    <SearchProduct/> */}
                            
                          
    
                    
                    

                </div>
            </div>
        </div>
    )
}