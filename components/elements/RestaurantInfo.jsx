import React from 'react'
import InfoTitle from './InfoTitle'
import FoodList from './FoodList'
export default function RestaurantInfo() {
  return (
    // <div className='w-full min-h-screen pt-[68px]  bg-surface-main lg:max-w-[1440px] m-auto '>
    // <div className='flex flex-col justify-center  lg:flex-row md:flex-row'>

    //     <div className='xs:flex xs:flex-col sm:flex sm:flex-row'>
    //       <div className='sm:flex-1 md:flex-none md:max-w-[240px]'>
    //         {/* Retaurant info Title section */}
    //         <InfoTitle/>
    //       </div>
    //     <div className='sm:flex-1 '>
    //         {/* Retaurant info Food List section */}
    //        {/* <FoodList/> */}
    //         <p>
    //         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt vel eius deleniti expedita non quisquam facilis dicta in mollitia debitis temporibus dignissimos aliquam dolor officia soluta esse, molestias voluptatum quidem quos, vero aspernatur assumenda pariatur porro! Animi cupiditate earum quasi quia ea dolore autem ullam, voluptas, saepe perferendis enim reiciendis!
    //         </p>

    //     </div>
    //     </div>
    //     <div className='px-4 md:max-w-[240px] '>
    //       <p>
    //     Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt vel eius deleniti expedita non quisquam facilis dicta in mollitia debitis temporibus dignissimos aliquam dolor officia soluta esse, molestias voluptatum quidem quos, vero aspernatur assumenda pariatur porro! Animi cupiditate earum quasi quia ea dolore autem ullam, voluptas, saepe perferendis enim reiciendis!

    //       </p>
    //     </div> 
    //     </div>
    // </div>

    <div className='flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:justify-center px-4 pt-[68px] lg:px-4 lg:mx-24'>
     <div className=' sm:w-[45%] md:flex-1 
     '>
      <div className='sticky top-0 right-0'>
        <InfoTitle/>
      </div>
     </div>
     <div className='sm:w-[45%] md:flex-3 lg:flex-[2] '>
       <FoodList/>
     </div>
     <div className='bg-green-400 md:flex-1'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum provident perferendis est aliquam delectus necessitatibus fugiat veniam recusandae porro. Maxime!
        </p>
     </div>
    </div>
    
  )
}
