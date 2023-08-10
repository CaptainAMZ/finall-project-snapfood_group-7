"use client";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
const List =["فست فود", "ایرانی","کباب" ,"سالاد","بین الملل"]
function FilterSider({ cats }) {
  const router = useRouter()
  const searchParam = useSearchParams()
  const getSearch = searchParam.get("cat")
  const handler = (id)=>{
    router.push(`/service/restaurants?cat=${id}`)
    
  }

  return (
    <div className=" min-w-[240px] min-h-[375px] border shadow-[rgba(58,61,66,0.06)_0px_1px_0px,rgba(0,0,0,0.05)_0px_2px_8px_-2px] flex flex-col p-4 pb-5 rounded-xl border-solid border-[rgba(58,61,66,0.06)] sm:min-w-[178px] sm:h-[385px] mb-[8px]">
      <div className="w-full h-[70px] bg-[rgba(58,61,66,0.06)] flex items-center cursor-pointer p-[5px] rounded-lg sm:h-[45px]">
        <p className="text-sm font-bold mr-3">همه دسته بندی ها</p>
      </div>
      <div className="w-full h-full flex flex-col">
        <div className=" w-full h-[100%] flex-col flex items-center cursor-pointer justify-between   ">
          {cats.filter((item)=>List.includes(item.title)).map((item) => (
            <div
              className=" w-[100%] h-[55px] flex items-center justify-between mb-1"
              onClick={()=>handler(item.id)}

              key={item.id}
            >
              <div className="h-full">
                <div className="w-full h-full flex flex-row items-center justify-between  ">
                  <img
                    src={item.logo}
                    alt="logo"
                    className=" w-8 h-8 object-cover rounded-[50%]"
                  />
                  <p className=" text-[13px] font-vrg mr-3 text-zinc-900 ">
                    {item.title}
                  </p>
                </div>
              </div>
              <div>
                <img src="/images/iconarrowgray.png" alt="arrow" className="rotate-180" />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div className=" w-[95px] h-8 flex items-center ">
            <img src="tiger.jpg" alt="tiger" className=" w-8 h-8 object-cover rounded-[50%] " />
            <p className=" text-sm font-vrg mr-3 text-zinc-900 ">ایرانی</p>
          </div>
          <div><img src="/images/arrow.svg" alt="arrow" className="-rotate-90" /></div>
        </div>
        <div className="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div className=" w-[95px] h-8 flex items-center ">
            <img src="tiger.jpg" alt="tiger" className=" w-8 h-8 object-cover rounded-[50%]" />
            <p className=" text-sm font-vrg mr-3 text-zinc-900">کباب</p>
          </div>
          <div><img src="/images/arrow.svg" alt="arrow" className="-rotate-90" /></div>
        </div>
        <div className="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div className=" w-[95px] h-8 flex items-center ">
            <img src="tiger.jpg" alt="tiger" className=" w-8 h-8 object-cover rounded-[50%]" />
            <p className=" text-sm font-vrg mr-3 text-zinc-900">سالاد</p>
          </div>
          <div><img src="/images/arrow.svg" alt="arrow" className="-rotate-90" /></div>
        </div>
        <div className="w-full h-1/4 flex items-center cursor-pointer justify-between p-[5px]">
          <div className=" w-[95px] h-8 flex items-center ">
            <img src="tiger.jpg" alt="tiger" className=" w-8 h-8 object-cover rounded-[50%]" />
            <p className=" text-sm font-vrg mr-3 text-zinc-900">دریایی</p>
          </div>
          <div><img src="/images/arrow.svg" alt="arrow" className="-rotate-90" /></div>
        </div> */}
      </div>
    </div>
  );
}

export default FilterSider;
