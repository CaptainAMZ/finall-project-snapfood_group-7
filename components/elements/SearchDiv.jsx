'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import search from '../../public/images/images-home/search.svg'
import Search from './Search'
// import { useRouter } from 'next/router'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useRouter } from 'next/navigation'
 
import { usePathname, useSearchParams } from 'next/navigation'
 

export default function SearchDiv({foods,cats,restaurants}) {
    const [modal , setModal] = useState(false);
    
  
   const location = window.location;
    const path = location.pathname;
    // console.log(location);
    let restaurantName;
    
    let text='';
    let id;
    switch(path) {
      case '/':
        text = 'اسنپ فود'
      case '/service/restaurants':
        text = 'رستوران'
      case `/service/restaurants/1`:
        id=1;
         restaurantName=restaurants.filter((item)=>item.id === id)[0].name
        text =restaurantName;
        case `/service/restaurants/2`:
        id=2;
         restaurantName=restaurants.filter((item)=>item.id === id)[0].name
        text =restaurantName;
        case `/service/restaurants/3`:
          id=3;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/4`:
          id=4;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/5`:
          id=5;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/6`:
          id=6;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/7`:
          id=7;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/8`:
          id=8;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
          case `/service/restaurants/9`:
          id=9;
          restaurantName=restaurants.filter((item)=>item.id === id)[0].name
          text =restaurantName;
      // default:
      //   text = 'اسنپ فود'
    }
  //  if(path=== '/'){
  //    text = 'اسنپ فود'
  //  }else if(path ==='/service/restaurants'){
  //   text = 'رستوران'
  //  }else if(path === `/service/restaurants/1` ||path === `/service/restaurants/2` ||path === `/service/restaurants/3` ||path === `/service/restaurants/4` ||path === `/service/restaurants/5`
  //  ||path === `/service/restaurants/6` ||path === `/service/restaurants/7` ||path === `/service/restaurants/8` ||path === `/service/restaurants/9` ){
  //   text= 'shila'
  //  }
  
   
 

    const closeModalHandler =(e) =>{
     const targetClass=  e.target.className;
    if(targetClass.includes('CLOSE') ){
      setModal(false);
      document.body.style.overflow = 'scroll';
     
    }
    
        

    }

    const openModalHandler = (e)=>{
        setModal(true)
        
       
        document.body.style.overflow = 'hidden';

       
    }


  return (
    <>

        <div onClick={openModalHandler}className="flex items-center end-spacing-0 w-spacing-15  p-spacing-2 absolute m-auto max-h-spacing-6 rounded-lgg left-spacing-0 md:right-spacing-0 md:w-29 md:bg-surface-dark ">
            <Image
              className="ml-spacing-1"
              src={"/images/images-home/search.svg"}
              width={18}
              height={18}
              alt="search"
            />
            <p className="hidden md:inline-block md:text-inactive-dark md:text-start md:font-vrg md:leading-lineHeight-default md:tracking-tighter">
              جست و جو در {text}
            </p>
          </div>

          {modal &&<div onClick={closeModalHandler} className='CLOSE  fixed inset-spacing-0 bg-black-alphaMedium flex items-center justify-center w-full h-screen z-50 '> 
                    <Search foods={foods} cats={cats} restaurants={restaurants} />
          </div> }
    </>
  )
}
