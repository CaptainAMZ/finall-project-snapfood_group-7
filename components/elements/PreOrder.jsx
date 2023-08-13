


// کامپوننت دریافت در سریع ترین زمان ممکن
function PreOrder() {
    return (
        <div>
            {/* white bg container */}
            <div className='flex flex-row flex-nowrap justify-between items-center px-3 py-3.5 mb-2 bg-surface-light border-[1px] border-carbon-alphaLight rounded-lg'>
                {/* icon & info */}
                <div className='flex flex-row flex-nowrap justify-center items-center'>
                    <img src="/images/icon-preorder.svg" className='ml-4 w-5 h-5'/>
                    <p className='inline-block w-auto h-auto m-0 p-0 font-vrg text-scales-caption leading-lineHeight-caption text-carbon-main'>دریافت در سریع‌ترین زمان ممکن</p>
                </div>
                {/* reusable arrow button */}
                <img className="w-4 h-4" src="/images/arrow-down-bold.svg"/>
            </div>
            {/* <PreOrderModal/> */}
        </div>
    )
  }
  
  export default PreOrder