import React from 'react'
import Image from 'next/image'
import cross from '../../public/images/images-home/cross.svg'

export default function ModalOrder({onClose}) {
  return (
    

            <div className=' w-[25rem] overflow-hidden  bg-white shadow-shadows-modal rounded-xl  m-auto '>
                <div className='relative w-full h-[56px] pl-[56px] flex justify-between items-center '>
                  <button onClick={onClose} className='w-[56px] h-[56px]  py[1px] px[6px] flex justify-center items-center'>
                        <Image className='cursor-pointer' src={"/images/images-home/cross.svg"} width={14} height={14}/>
                  </button>

                 
                </div>

                <div className='flex flex-col'>
                  <span className='font-vsb text-1.5 leading-lineHeight-xlarge text-carbon-main  my-spacing-11 mx-spacing-2'>
                       فاکتور سفارش
                  </span>

                  <p className='mx-[1.125rem] mb-spacing-2 font-vrg text-vm leading-lineHeight-body carbon-light'>

                              نان و شیرینی نانک
                  </p>

                  <div>

                    <div className=' h-12  px-spacing-2 border-b-[0.0625rem] border-solid border-carbon-alphaLight flex items-center justify-between'>
                      <span className='font-vrg text-vm leading-lineHeight-body carbon-light'>
                                شیرینی تر مخلوط نیم کیلویی
                      </span>

                      <div className='flex items-center flex-row-reverse'>
                        <div className='mr-spacing-13 inline-flex'>
                          <div className=' mr-spacing-13 inline-flex items-center'>
                            <div className='mr-spacing-13 '>
                              <span className='mr-spacing-13 font-vsb text-vm leading-lineHeight-body carbon-light '>
                                        70,000
                              </span>

                              <span className=' mr-spacing-13 font-vrg text-vm leading-lineHeight-body carbon-light '>
                                          تومان
                              </span>
                            </div>
                          </div>
                        </div>

                        <Image   className='cursor-pointer pt-spacing-11' src={"/images/images-home/cross.svg"} width={6} height={8}/>
                        <span className=' pt-spacing-11  mr-spacing-13 ml-spacing-13  font-vrg text-vm leading-lineHeight-body carbon-light'>
                                1
                        </span>
                      </div>
                    </div>

                  </div>

                  <div className='h-8 px-spacing-2 flex items-center justify-between'>
                    <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>



                                            جمع کل 
                    </span>

                    <div>
                          
                            
                              <span className=' font-vrg text-vm leading-lineHeight-body carbon-light'>
                                        70,000
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
                                       12,000
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
                                       82,000
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
