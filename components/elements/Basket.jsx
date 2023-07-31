import React from 'react'

function Basket() {
  return (
    <div>
        <form className='mt-spacing-1 pt-spacing-2 pb-spacing-[0.75rem] px-spacing-2 bg-surface-light border-[0.0625rem]  border-carbon-alphaLight rounded-lg leading-[1.15rem]'>
            <div className='h-spacing-3 mb-spacing-1 flex flex-row flex-nowrap justify-between items-center leading-[1.15rem]'>
                <div className='flex flex-row flex-nowrap leading-[1.15rem]'>
                    <p className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body leading-lineHeight-body text-carbon-light ml-1'>سبد خرید</p>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-light'>(۱)</span>
                </div>
                <button 
                    type="button" 
                    dir="rtl" 
                    className='inline-flex justify-center items-center w-spacing-4 h-spacing-4 min-w-auto p-0 m-0 font-vb text-scales-body border-borders-xs border-transparent rounded-[50%] shadow-none bg-clip-padding bg-transparent overflow-visible normal-case leading-[1.15rem] cursor-pointer transition-all ease-out duration-0 hover:bg-accent-alphaLight hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaMedium focus:outline-none focus:bg-transparent focus:border-accent-alphaHigh'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="0.75rem" 
                        height="0.875rem" 
                        viewBox="0 0 12 14" 
                        fill="#FA284B" 
                        role="button" 
                        tabindex="-1"
                        className='font-vb text-scales-body normal-case leading-[1.15rem] cursor-pointer'>
                        <path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z">
                        </path>
                    </svg>
                </button>
            </div>
            <div className='flex flex-col flex-nowrap px-0 py-2 border-b-[1px] border-carbon-alphaLight leading-[1.15rem]'>
                <div className='flex flex-row flex-nowrap justify-between items-center min-h-[2.5rem] leading-[1.15rem]'>
                    <span class="inline-block w-auto h-auto p-0 m-0 text-carbon-main font-vb text-scales-body leading-lineHeight-body"> دوبل برگر پنیری</span>
                </div>
                <div className='flex flex-row flex-nowrap justify-between items-center h-10 leading-[1.15rem]'>
                    <div className='inline-flex flex-col flex-nowrap leading-[1.15rem]'>
                        <div className='inline-flex flex-row flex-nowrap leading-[1.15rem]'>
                            <div className='inline-flex items-start flex-col flex-nowrap'>
                                <span className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'> 
                                    ۹۰,۰۰۰
                                    <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col flex-nowrap items-center m-0 leading-[1.15rem]'>
                        <div className='flex flex-row flex-nowrap justify-center items-center leading-[1.15rem]'>
                            <button 
                                type="button" 
                                dir="rtl" 
                                className='box-border inline-flex justify-center items-center w-spacing-4 h-spacing-4 min-w-[2rem] p-0 m-0 font-vb text-scales-body border-borders-xs border-transparent rounded-[50%] shadow-none bg-clip-padding bg-transparent overflow-visible normal-case leading-[1.15rem] cursor-pointer transition-all ease-out duration-0 hover:bg-carbon-alphaLight hover:border-carbon-alphaLight active:bg-carbon-alphaMedium active:border-carbon-alphaMedium focus:outline-none focus:bg-transparent focus:border-carbon-alphaHigh'>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="0.75rem" 
                                    height="0.875rem" 
                                    viewBox="0 0 12 14" 
                                    fill="#9C9FA3" 
                                    role="button"
                                    className='font-vb text-scales-body cursor-pointer'>
                                    <path d="M2.66667 3.00456V2.33789C2.66667 1.23332 3.5621 0.337891 4.66667 0.337891H7.33333C8.4379 0.337891 9.33333 1.23332 9.33333 2.33789V3.00456H11.3333C11.7015 3.00456 12 3.30303 12 3.67122C12 4.03941 11.7015 4.33789 11.3333 4.33789H10.6667V11.6712C10.6667 12.7758 9.77124 13.6712 8.66667 13.6712H3.33333C2.22876 13.6712 1.33333 12.7758 1.33333 11.6712V4.33789H0.666667C0.298477 4.33789 0 4.03941 0 3.67122C0 3.30303 0.298477 3.00456 0.666667 3.00456H2.66667ZM4 3.00456H8V2.33789C8 1.9697 7.70152 1.67122 7.33333 1.67122H4.66667C4.29848 1.67122 4 1.9697 4 2.33789V3.00456ZM9.33333 4.33789H2.66667V11.6712C2.66667 12.0394 2.96514 12.3379 3.33333 12.3379H8.66667C9.03486 12.3379 9.33333 12.0394 9.33333 11.6712V4.33789ZM4 7.00456C4 6.63637 4.29848 6.33789 4.66667 6.33789C5.03486 6.33789 5.33333 6.63637 5.33333 7.00456V10.3379C5.33333 10.7061 5.03486 11.0046 4.66667 11.0046C4.29848 11.0046 4 10.7061 4 10.3379V7.00456ZM6.66667 7.00456C6.66667 6.63637 6.96514 6.33789 7.33333 6.33789C7.70152 6.33789 8 6.63637 8 7.00456V10.3379C8 10.7061 7.70152 11.0046 7.33333 11.0046C6.96514 11.0046 6.66667 10.7061 6.66667 10.3379V7.00456Z">
                                    </path>
                                </svg>
                            </button>
                            <span className='inline-block w-spacing-6 h-auto p-0 m-0 text-center font-vb text-scales-body leading-lineHeight-body text-carbon-main'>۱</span>
                            <button 
                                type="button" 
                                dir="rtl"
                                className='box-border inline-flex justify-center items-center w-spacing-4 h-spacing-4 min-w-[2rem] p-0 m-0 font-vb text-scales-body bg-white border-borders-xs border-accent-alphaLight rounded-[50%] shadow-shadows-medium bg-clip-padding overflow-visible normal-case leading-[1.15rem] cursor-pointer transition-all ease-out duration-0 hover:bg-white hover:border-accent-alphaLight active:bg-accent-alphaMedium active:border-accent-alphaLight focus:outline-none focus:bg-white focus:border-accent-alphaLight'>
                                    <svg 
                                        width="10" 
                                        height="10" 
                                        viewBox="0 0 12 12" 
                                        fill="#FF00A6"
                                        className='font-vb text-scales-body cursor-pointer'>
                                        <path d="M7 5H11C11.5523 5 12 5.44772 12 6C12 6.55228 11.5523 7 11 7H7V11C7 11.5523 6.55228 12 6 12C5.44772 12 5 11.5523 5 11V7H1C0.447715 7 0 6.55228 0 6C0 5.44772 0.447715 5 1 5H5V1C5 0.447715 5.44772 0 6 0C6.55228 0 7 0.447715 7 1V5Z">
                                        </path>
                                    </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col flex-nowrap border-b-[1px] border-carbon-alphaLight leading-[1.15rem]'>
                <div className='h-8 flex flex-row flex-nowrap justify-between items-center leading-[1.15rem]'>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-main'>مجموع</span>
                    <div className='inline-flex flex-col flex-nowrap leading-[1.15rem]'>
                        <div className='inline-flex flex-row flex-nowrap leading-[1.15rem]'>
                            <div className='inline-flex flex-col flex-nowrap items-start leading-[1.15rem]'>
                                <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body text-carbon-main leading-lineHeight-body'> 
                                    ۹۰,۰۰۰  
                                    <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-8 flex flex-row flex-nowrap justify-between items-center leading-[1.15rem]'>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-main'>مالیات</span>
                    <div className='inline-flex flex-col flex-nowrap leading-[1.15rem]'>
                        <div className='inline-flex flex-row flex-nowrap leading-[1.15rem]'>
                            <div className='inline-flex flex-col flex-nowrap items-start leading-[1.15rem]'>
                                <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body text-carbon-main leading-lineHeight-body'> 
                                    رایگان 
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-8 flex flex-row flex-nowrap justify-between items-center leading-[1.15rem]'>
                    <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body leading-lineHeight-body text-carbon-main'>هزینه ارسال</span>
                    <div className='inline-flex flex-col flex-nowrap leading-[1.15rem]'>
                        <div className='inline-flex flex-row flex-nowrap leading-[1.15rem]'>
                            <div className='inline-flex flex-col flex-nowrap items-start leading-[1.15rem]'>
                                <span className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-body text-carbon-main leading-lineHeight-body'> 
                                    ۱۵,۰۰۰  
                                    <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row flex-nowrap justify-between items-center h-spacing-6 leading-[1.15rem]'>
                <p className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'>قابل پرداخت</p>
                <div className='inline-flex flex-col flex-nowrap leading-[1.15rem]'>
                    <div className='inline-flex flex-row flex-nowrap items-center leading-[1.15rem]'>
                        <div className='inline-flex flex-col flex-nowrap items-start leading-[1.15rem]'>
                            <span className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-body text-carbon-main leading-lineHeight-body'> 
                                ۱۰۵,۰۰۰ 
                                <span className='inline-block w-auto h-auto p-0 mr-1 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-light'>تومان</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <textarea 
                placeholder="توضیحات سفارش..." 
                name="description" 
                className='box-border inline-block w-full min-h-[calc(6rem)] mt-4 mb-[calc(1.75rem)] p-3 font-vrg text-scales-caption text-carbon-main  border-carbon-alphaMedium rounded-md resize-y overflow-auto leading-[1.15rem]'
                style={{fontSize:'100%'}}>
            </textarea>
            <div className='sticky bottom-0 w-full h-[7.5rem] min-h-[6.6875rem] bg-white leading-[1.15rem]'>
                <button 
                    type="submit"
                    // min-h-[6.6875rem]
                    className='box-border inline-flex justify-center items-center w-full h-12 p-0 mt-4 mb-auto border-borders-xs border-accent-main rounded-md bg-accent-main shadow-none text-white font-vb text-scales-large leading-[1.15rem] bg-clip-padding overflow-visible normal-case cursor-pointer transition-all ease-out duration-0 hover:bg-accent-light hover:border-accent-light active:bg-accent-dark active:border-accent-dark focus:outline-none focus:bg-accent-main focus:border-accent-alphaHigh' 
                    dir="rtl">
                        ثبت سفارش
                </button>
            </div>
        </form>
    </div>
  )
}

export default Basket