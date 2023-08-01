import React from 'react'
import Image from 'next/image'
import AddFoodBtn from '../elements/AddFoodBtn'
export default function FoodModal({closeModal}) {


  const comment = [
    {
      id:1,
      name:"علی",
      date:"۱۶ خرداد ۱۴۰۲",
      point:"۵",
      text:"من خوراک کباب کوبیده سفارش دادم و خیلی خوشمزه بود.اگر با غذاهای خیلی چرب مشکلی نداید بهتون پیشنهاد میکنم امتحانش کنید",
      lable:"کباب کوبیده تک سیخ"
    },
    {
      id:2,
      name:"علی",
      date:"۱۶ خرداد ۱۴۰۲",
      point:"۵",
      text:"من خوراک کباب کوبیده سفارش دادم و خیلی خوشمزه بود.اگر با غذاهای خیلی چرب مشکلی نداید بهتون پیشنهاد میکنم امتحانش کنید",
      lable:"کباب کوبیده تک سیخ"
    },
    {
      id:3,
      name:"علی",
      date:"۱۶ خرداد ۱۴۰۲",
      point:"۵",
      text:"من خوراک کباب کوبیده سفارش دادم و خیلی خوشمزه بود.اگر با غذاهای خیلی چرب مشکلی نداید بهتون پیشنهاد میکنم امتحانش کنید",
      lable:"کباب کوبیده تک سیخ"
    },
 
  ]



  return (
    <div className='w-[42rem]  bg-surface-light max-h-[45rem] lg:max-h-[35rem] rounded-xl overflow-y-scroll'>
    <div className='block p-spacing-3 sticky top-0 right-[-2]  bg-surface-light '>
    <button className='cursor-pointer block w-full text-right px-spacing-1' onClick={closeModal}>
    <Image
          src="/images/icons8-close-24.png"
          width={20}
          height={20}
          alt=''
          className='object-cover  '/>
    </button>
    </div>
      
        <div className='flex  items-start justify-center pb-spacing-2 '>
          <div className='flex '>
          <div className=' min-w-[250px] text-center'>
          <Image
          src="/images/612c6182c8d3d.jpeg"
          width={250}
          height={250}
          alt=''
          className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  '/>
         </div>
          </div>
          <div className='flex flex-col px-2 w-[400px]'>
            <div className='flex items-center  justify-between mt-2 '>
            <h1 className='font-vb text-scales-default '>  هپی کمبو </h1>
            <div className='flex items-center border-borders-xs  rounded-md border-surface-dark p-[2px] '>
                  <div className='min-w-[15px]'>
                  <Image
                className='object-cover ml-spacing-1 '
                src="/images/icons8-star-40.png"
                width={15}
                height={15}
                alt=''
                />
                </div>
                <p className='text-scales-body font-vsb'>۴.۲</p>
            </div>
            </div>
            <div className='text-right mt-4 text-scales-body font-vmd text-gray-500'>
                <p >
                پیتزا رست بیف ۲۳ سانتی متری، سیب زمینی هات داگ فرایز، ۲ عدد نوشابه قوطی کوکا کولا
                </p>
            </div>
            <div>
            <div className='w-[100%] hover:bg-surface-main  transition-colors flex items-center justify-between  py-spacing-1 mb-spacing-2 mt-7'>
           <div className='flex items-center '>
            <div>
              <p className='text-scales-body font-vsb'>
              ۱۶,۰۵۰  تومان
              </p>
            </div>
           </div>
           <div className='text-center ml-spacing-1 bg-surface-main w-[25%] p-[4px] rounded-full text-accent-main border-borders-xs border-inactive-light  shadow-shadows-small hover:bg-accent-light hover:text-surface-main transition-colors'>
              <AddFoodBtn/>
           </div>
        </div>
            </div>
          </div>
        </div>
            <div className='text-right px-3 text-scales-large text-carbon-light font-vsb my-8'>
                <p>نظرات کاربران</p>
            </div>
            {
              comment.map(item =>(
            <div key={item.id} className='flex flex-col'>
          <div className='flex px-spacing-2'>
            <div className='flex-col w-[30%] text-right '>
                <p className='text-scales-body text-carbon-main'>{item.name}</p>
                <p className='text-scales-caption text-carbon-light my-spacing-1'> 
                {item.date}  
                </p>
                <div className='flex items-center border-borders-xs w-[40px] rounded-md border-surface-dark'>
                  <div className='min-w-[15px]'>
                  <Image
                className='object-cover ml-spacing-1 '
                src="/images/icons8-star-40.png"
                width={15}
                height={15}
                alt=''
                />
                </div>
                <p>{item.point}</p>
                </div>
            </div>
            <div className='flex-col'>
                <p className='font-vmd text-scales-body text-carbon-light text-right'>
                 {item.text}   
                </p>
                <div className='flex'>
                  <p className='font-vmd text-scales-caption mt-spacing-1 p-[8px] bg-surface-dark rounded-lg text-carbon-light'>
                      {item.lable} 
                  </p>
                </div>
            </div>
          </div>
           <div className='bg-surface-dark h-[1px] w-[100%] my-spacing-3'></div>
        </div>

              ))
            }
      </div>
 
  )
}
