"use client"

import Image from 'next/image'
import RComments from '../elements/RComments'


export default function RestaurantInfoModal({closeModal, name,address,logo,rate, comments,id,otherCats }) {

    

  
  return (
    
    <div className='font-vrg w-[46rem] bg-surface-light h-[40rem] rounded-xl  overflow-hidden'>
      <div className='block p-spacing-3'>
      <button onClick={closeModal}  className=' cursor-pointer block w-full text-right px-spacing-1' >
      <Image
            src="/images/icons8-close-24.png"
            width={20}
            height={20}
            alt=''
            className='object-cover  '/>
      </button>
      </div>
        <div className=''>
          <div className='flex items-center justify-between pb-spacing-2 px-spacing-2'>
            <div className='flex  gap-spacing-1'>
            <div className='pl-spacing-2 min-w-[100px]'  >
            <Image
            src={logo}
            width={100}
            height={100}
            alt=''
            className='object-cover rounded-xl borders-lg border-borders-xs border-surface-light  '/>
           </div>
              <div>
                  <h1 className='font-vb text-scales-xxlarge pb-spacing-1'> {name} </h1>
                  <p className='font-vrg text-scales-body pb-spacing-1'>{otherCats}</p>
                  <p className='font-vrg text-scales-caption'>
                    {address}
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
            <div className='flex flex-col items-center '>
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
        <div className=' max-h-[55%] mt-5 overflow-y-auto rounded-e-2xl '>
        <div className=' flex flex-col '>
          <div className='flex w-[100%] px-spacing-2'>
          <div className='flex flex-col justify-end w-[30%]'>
          <div className='flex items-center'>
          <Image
                className='object-cover ml-spacing-1 '
                src="/images/icons8-star-40.png"
                width={20}
                height={20}
                alt=''
                />
                <p className='font-vb mr-spacing-1 text-scales-xlarge'>{rate}</p>
          </div>
          <div>
            <p className='font-vrg text-scales-caption'>از مجموع ۳,۹۷۳ امتیاز و ۶۲۷ نظر</p>
          </div>
          </div>

          <div className='flex flex-col pr-spacing-2 w-[100%]'>
            <div className='flex items-center'>
          <div className=' flex justify-start'>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            </div>
            <div className=' flex-1 mr-spacing-1'>
                <div className='bg-surface-dark h-[2px]'>
                  <div className='bg-accent2-dark w-[60%] h-[2px]'></div>
                </div>
            </div>
          </div>
            <div className='flex items-center mt-spacing-1'>
          <div className=' flex  justify-end '>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
        
            </div>
            <div className=' flex-1 mr-spacing-1'>
                <div className='bg-surface-dark h-[2px]'>
                  <div className='bg-accent2-main w-[40%] h-[2px]'></div>
                </div>
            </div>
          </div>
            <div className='flex items-center mt-spacing-1'>
          <div className=' flex  justify-end '>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
        
            </div>
            <div className=' flex-1 mr-spacing-1'>
                <div className='bg-surface-dark h-[2px]'>
                  <div className='bg-accent2-light w-[40%] h-[2px]'></div>
                </div>
            </div>
          </div>
            <div className='flex items-center mt-spacing-1'>
          <div className=' flex  justify-end '>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            </div>
            <div className=' flex-1 mr-spacing-1'>
                <div className='bg-surface-dark h-[2px]'>
                  <div className='bg-attention-light w-[8%] h-[2px]'></div>
                </div>
            </div>
          </div>
            <div className='flex items-center mt-spacing-1'>
          <div className=' flex  justify-end '>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star opacity-0'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            <span className='star'>
          <Image
                className='object-cover  '
                src="/images/icons8-star-12.png"
                width={15}
                height={15}
                alt=''
                />
            </span>
            </div>
            <div className=' flex-1 mr-spacing-1'>
                <div className='bg-surface-dark h-[2px]'>
                  <div className='bg-alert-dark w-[5%] h-[2px]'></div>
                </div>
            </div>
          </div>
          </div>
          </div>


          <div className='flex h-[72px] p-spacing-2 my-spacing-1 '>
            <h2 className='flex-1 text-scales-large text-surface-overlay'>نظرات کاربران</h2>
            <div className='flex items-center justify-start w-[50%]  '>
              <p className='ml-spacing-1 text-scales-default'>به ترتیب</p>
              <div className='bg-surface-dark  text-center rounded-2xl flex justify-evenly  py-[4px] relative w-[80%] px-[4px] text-scales-default font-vrg '>
              <button className=' py-[6px] flex-1 bg-surface-light rounded-2xl text-accent2-light '> 
              جدیدترین
              </button>
              <button className='flex-1 '>مرتبط ترین</button>
              </div>
            </div>
          </div>

                {
                  comments.filter(items =>items.restId == id)
                  .map(({date,name,rate,desc,stuff,id}) =>(
                      <RComments 
                      key={id}
                      date={date}
                      name={name}
                      rate={rate}
                      desc={desc}
                      stuff={stuff}
                       />
                  ))
                }
        </div>
        </div>
       
       
    </div>
  )
}
