"use client"

import Image from 'next/image'


export default function RestaurantInfoModal({closeModal}) {

    

      

  return (
    <div className='w-[50rem] bg-surface-light'>
      <div className='block p-spacing-3'>
      <button className='cursor-pointer block w-full text-right px-spacing-1' onClick={closeModal}>X</button>
      </div>
        <div>
          <div className='flex items-center justify-between pb-spacing-2 px-spacing-2'>
            <div className='flex  gap-spacing-1'>
            <div className='pl-spacing-2 min-w-[100px]'  >
            <Image
            src="/images/5ced6a4b46383.png"
            width={100}
            height={100}
            alt=''
            className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  '/>
           </div>
              <div>
                  <h1 className='font-vb text-scales-xxlarge pb-spacing-1'>آشپزخانه صنعتی امیران</h1>
                  <p className='font-vrg text-scales-body pb-spacing-1'>ایرانی, سنتی, کباب, پیش‌غذای ایرانی</p>
                  <p className='font-vrg text-scales-caption'>
                  میدان سرگل، بلوار شمسی پور، رستوران دنده کباب ریژان
                  </p>
              </div>
            </div>
            <div className='rounded-md overflow-hidden '>
                <Image
                className='object-cover '
                src="/images/map.png"
                width={200}
                height={100}
                alt=''
                />
            </div>
          </div>
          <div className='flex justify-between items-center py-spacing-1 px-spacing-4'>
            <div className='flex flex-col items-center'>
            <Image
                className='object-cover '
                src="/images/icons8-clock-48.png"
                width={20}
                height={20}
                alt=''
                />
                <p className='font-vrg text-scales-caption pt-spacing-1'>ساعت کاری</p>
                <p className='font-vrg text-scales-caption font-bold pt-spacing-1'><span className='text-accent2-dark'>باز</span> امروز از ساعت ۱۱:۳۰ تا ۲۳:۵۹</p>
            </div>
            <div className='flex flex-col items-center'>
            <Image
                className='object-cover '
                src="/images/icons8-card-payment-32.png"
                width={30}
                height={30}
                alt=''
                />
                 <p className='font-vrg text-scales-caption pt-spacing-1'>شیوه‌های پرداخت</p>
                <p className='font-vrg text-scales-caption font-bold pt-spacing-1'>آنلاین، اعتبار جایزه خرید</p>
            </div>
            <div className='flex flex-col items-center'>
            <Image
                className='object-cover '
                src="/images/icons8-shopping-cart-40.png"
                width={20}
                height={20}
                alt=''
                />
                 <p className='font-vrg text-scales-caption pt-spacing-1'>حداقل سبد خرید</p>
                <p className='font-vrg text-scales-caption font-bold pt-spacing-1'>۳۰,۰۰۰ تومان</p>
            </div>
          </div>
        </div>
        <div className='px-spacing-2 flex gap-spacing-1'>
          <div className='flex flex-col justify-end'>
          <div className='flex items-center'>
          <Image
                className='object-cover ml-spacing-1 '
                src="/images/icons8-star-40.png"
                width={20}
                height={20}
                alt=''
                />
                <p className='font-vb mr-spacing-1 text-scales-xlarge'>۴.۴</p>
          </div>
          <div>
            <p className='font-vrg text-scales-caption'>از مجموع ۳,۹۷۳ امتیاز و ۶۲۷ نظر</p>
          </div>
          </div>
          <div>
          <Image
                className='object-cover '
                src="/images/chart.png"
                width={600}
                height={400}
                alt=''
                />
          </div>
        </div>
    </div>
  )
}
