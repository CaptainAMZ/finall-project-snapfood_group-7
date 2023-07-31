import React from 'react'

function PreOrderModal() {
  return (
    <div className='relative w-0 h-0 leading-[1.15rem]'>
        <div className='absolute -top-14 w-[16.8rem] min-h-[3rem] p-0 flex flex-col items-center overflow-hidden text-carbon-main shadow-shadows-high rounded-lg bg-white leading-[1.15rem]'>
            <div className='flex flex-row flex-nowrap justify-between items-center w-[calc(100%-32px)] px-4 py-3.5 grow leading-[1.15rem]'>
                <div className='flex flex-row flex-nowrap justify-center items-center leading-[1.15rem]'>
                    <svg 
                        width="1.125rem" 
                        height="1.125rem" 
                        viewBox="0 0 18 18" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className='ml-4 leading-[1.15rem]'>
                        <path 
                            fill-rule="evenodd" 
                            clip-rule="evenodd" 
                            d="M8.99984 0.666504C13.6022 0.666504 17.3332 4.39746 17.3332 8.99984C17.3332 13.6022 13.6022 17.3332 8.99984 17.3332C4.39746 17.3332 0.666504 13.6022 0.666504 8.99984C0.666504 4.39746 4.39746 0.666504 8.99984 0.666504ZM8.99984 2.33317C5.31794 2.33317 2.33317 5.31794 2.33317 8.99984C2.33317 12.6817 5.31794 15.6665 8.99984 15.6665C12.6817 15.6665 15.6665 12.6817 15.6665 8.99984C15.6665 5.31794 12.6817 2.33317 8.99984 2.33317ZM8.99984 3.99984C9.4272 3.99984 9.77943 4.32154 9.82756 4.73599L9.83317 4.83317L9.83317 8.72984L11.9197 9.94669C12.2889 10.162 12.431 10.6174 12.2638 10.9996L12.2197 11.0864C12.0043 11.4555 11.549 11.5977 11.1667 11.4304L11.0799 11.3863L8.57995 9.92799C8.35238 9.79524 8.2027 9.56393 8.17225 9.306L8.1665 9.20817L8.1665 4.83317C8.1665 4.37293 8.5396 3.99984 8.99984 3.99984Z" 
                            fill="#676A70">
                        </path>
                    </svg>
                    <p className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>زمان دریافت سفارش</p>
                </div>
                <div role='button' className='flex flex-row flex-nowrap justify-center items-center w-5 h-5 cursor-pointer leading-[1.15rem]'>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1rem" 
                        height="0.5625rem" 
                        viewBox="0 0 16 9" 
                        fill="#00B862"
                        className='leading-[1.15rem] cursor-pointer'>
                        <path d="M0.705389 8.70536C1.09466 9.09463 1.72569 9.09497 2.11539 8.70612L8 2.82997L13.8846 8.70612C14.2743 9.09497 14.9053 9.09463 15.2946 8.70536C15.6842 8.31578 15.6842 7.68416 15.2946 7.29459L8.70711 0.707078C8.31659 0.316554 7.68342 0.316554 7.2929 0.707078L0.705389 7.29459C0.315816 7.68416 0.315816 8.31578 0.705389 8.70536Z">
                        </path>
                    </svg>
                </div>
            </div>
            <div role='button' className='flex flex-row flex-nowrap justify-between items-center w-[calc(100%-32px)] px-4 py-3.5 grow leading-[1.15rem] cursor-pointer'>
                <label 
                    dir="rtl" 
                    className='inline-flex items-center select-none cursor-pointer leading-[1.15rem]'>
                    <svg 
                        width="1.375rem" 
                        height="1.375rem" 
                        viewBox="0 0 22 22" 
                        version="1.1"
                        className='rounded-[50%] leading-[1.15rem]'>
                        <g 
                            stroke="none" 
                            stroke-width="1" 
                            fill="none" 
                            fill-rule="evenodd"
                            className='leading-[1.15rem]'>
                            <path 
                                d="M3,0 C1.34315,0 0,1.34315 0,3 L0,19 C0,20.6569 1.34315,22 3,22 L19,22 C20.6569,22 22,20.6569 22,19 L22,3 C22,1.34315 20.6569,0 19,0 L3,0 Z M17.2071,6.79289 C17.5976,7.18342 17.5976,7.81658 17.2071,8.20711 L10.2071,15.2071 C9.81658,15.5976 9.18342,15.5976 8.79289,15.2071 L4.79289,11.2071 C4.40237,10.8166 4.40237,10.1834 4.79289,9.79289 C5.18342,9.40237 5.81658,9.40237 6.20711,9.79289 L9.5,13.0858 L15.7929,6.79289 C16.1834,6.40237 16.8166,6.40237 17.2071,6.79289 Z" 
                                id="Shape" 
                                fill="" 
                                fill-rule="nonzero">
                            </path>
                            <rect id="border" stroke="rgba(58, 61, 66, 0.12)" stroke-width="2" x="1" y="1" width="20" height="20" rx="50%"></rect>
                        </g>
                    </svg>
                    <div className='flex flex-col flex-nowrap mr-[16.83px] cursor-pointer'>
                        <p className='inline-block w-auto h-auto p-0 m-0 font-vb text-scales-caption leading-lineHeight-caption text-carbon-main'>سریع‌ترین زمان ممکن</p>
                        <p className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>ارسال سریع بعد از ثبت سفارش</p>
                    </div>
                </label>
                <svg 
                    width="1.25rem" 
                    height="1.25rem" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className='leading-[1.15rem]'>
                    <path 
                        fill-rule="evenodd" 
                        clip-rule="evenodd" 
                        d="M15.5003 10.1667C15.8685 10.4429 15.9431 10.9652 15.667 11.3334L14.167 13.3334H15.8337C16.1493 13.3334 16.4379 13.5117 16.579 13.794C16.7202 14.0764 16.6897 14.4142 16.5003 14.6667L14.0003 18C13.7242 18.3682 13.2019 18.4429 12.8337 18.1667C12.4655 17.8906 12.3909 17.3682 12.667 17L14.167 15H12.5003C12.1847 15 11.8961 14.8217 11.755 14.5394C11.6138 14.2571 11.6443 13.9192 11.8337 13.6667L14.3337 10.3334C14.6098 9.96519 15.1321 9.89057 15.5003 10.1667Z" fill="#FFCE00"></path><path d="M12.1572 1.95046C10.7442 1.57185 9.25646 1.57185 7.8435 1.95045C6.43054 2.32906 5.14213 3.07292 4.10777 4.10728C3.07341 5.14164 2.32955 6.43005 1.95094 7.84301C1.57234 9.25597 1.57234 10.7437 1.95094 12.1567C2.32955 13.5696 3.07341 14.858 4.10777 15.8924C5.14213 16.9268 6.43054 17.6706 7.8435 18.0492C8.28805 18.1683 8.745 17.9045 8.86412 17.46C8.98324 17.0154 8.71942 16.5585 8.27486 16.4393C7.1445 16.1365 6.11377 15.5414 5.28628 14.7139C4.45879 13.8864 3.8637 12.8557 3.56082 11.7253C3.25794 10.5949 3.25794 9.40475 3.56082 8.27438C3.8637 7.14401 4.45879 6.11328 5.28628 5.28579C6.11377 4.4583 7.1445 3.86321 8.27487 3.56033C9.40524 3.25745 10.5954 3.25745 11.7258 3.56033C12.8562 3.86321 13.8869 4.45831 14.7144 5.28579C15.5419 6.11328 16.137 7.14401 16.4398 8.27438C16.5589 8.71893 17.0159 8.98275 17.4605 8.86363C17.905 8.74452 18.1688 8.28757 18.0497 7.84301C17.6711 6.43005 16.9272 5.14164 15.8929 4.10728C14.8585 3.07292 13.5701 2.32906 12.1572 1.95046Z" 
                        fill="#676A70">
                    </path>
                    <path d="M10.0003 4.99984C9.57296 4.99984 9.22074 5.32154 9.1726 5.73599L9.16699 5.83317V9.72984L7.08043 10.9467C6.71129 11.162 6.56914 11.6174 6.73638 11.9996L6.78051 12.0864C6.99585 12.4555 7.4512 12.5977 7.83345 12.4304L7.92022 12.3863L10.4202 10.928C10.6478 10.7952 10.7975 10.5639 10.8279 10.306L10.8337 10.2082L10.8337 5.83317C10.8337 5.37293 10.4606 4.99984 10.0003 4.99984Z" fill="#676A70"></path>
                </svg>
            </div>
            <hr className='w-full h-0 m-0 border-carbon-alphaLight border-solid border-t-[1px] grow overflow-visible leading-[1.15rem]'></hr>
            <div role='button' className='flex flex-row flex-nowrap justify-between items-center w-[calc(100%-32px)] px-4 py-3.5 grow leading-[1.15rem] cursor-pointer'>
                <label 
                    dir="rtl" 
                    className='inline-flex items-center select-none cursor-pointer leading-[1.15rem]'>
                    <svg 
                        width="1.375rem" 
                        height="1.375rem" 
                        viewBox="0 0 22 22" 
                        version="1.1"
                        className='leading-[1.15rem]'>
                        <g 
                            stroke="none" 
                            stroke-width="1" 
                            fill="none" 
                            fill-rule="evenodd"
                            className='leading-[1.15rem]'>
                            <path 
                                d="M3,0 C1.34315,0 0,1.34315 0,3 L0,19 C0,20.6569 1.34315,22 3,22 L19,22 C20.6569,22 22,20.6569 22,19 L22,3 C22,1.34315 20.6569,0 19,0 L3,0 Z M17.2071,6.79289 C17.5976,7.18342 17.5976,7.81658 17.2071,8.20711 L10.2071,15.2071 C9.81658,15.5976 9.18342,15.5976 8.79289,15.2071 L4.79289,11.2071 C4.40237,10.8166 4.40237,10.1834 4.79289,9.79289 C5.18342,9.40237 5.81658,9.40237 6.20711,9.79289 L9.5,13.0858 L15.7929,6.79289 C16.1834,6.40237 16.8166,6.40237 17.2071,6.79289 Z" 
                                id="Shape" 
                                fill="" 
                                fill-rule="nonzero">
                            </path>
                            <rect id="border" stroke="rgba(58, 61, 66, 0.12)" stroke-width="2" x="1" y="1" width="20" height="20" rx="50%"></rect>
                        </g>
                    </svg>
                    <div className='flex flex-col flex-nowrap mr-[16.83px] cursor-pointer'>
                        <p className='inline-block w-auto h-auto p-0 m-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>زمان دیگر</p>
                    </div>
                </label>
            </div>
        </div>
    </div>
  )
}

export default PreOrderModal