import "./globals.css";
import Image from "next/image";

import Category from "@/components/elements/Category";
import irani from "../public/images/images-home/irani.jpg";
import left from "../public/images/images-home/left.svg";

export default function Home() {
  const category = [
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
    { type: "ایرانی", img: irani },
  ];

  return (
    <div>
      <div className="min-h-screen flex-col items-start">
        <main className=" grow w-full max-w-85.375 mx-auto p-spacing-2 sm:p-spacing-3">
          <div className="flex-col items-start mb-spacing-8 ">
            <p className="font-vb font-bold leading-lineHeight-default inline-block text-carbon-light text-start mb-spacing-4 w-full ">
              دسته بندی ها
            </p>

            <div className="mb-spacing-4 w-[calc(100% + 2rem)] m-[calc(-1rem)] flex flex-wrap">
              {category.map((item) => {
                return (
                  <div className="basis-1/2 max-w-1/2  p-[calc(1rem)] sm:basis-1/3 max-w-1/3 " >
                    <a className="bg-transparent">
                      <div className="relative p-spacing-20 border border-solid border-white rounded-xl shadow-category cursor-pointer transition duration-200 flex bg-white ">
                        <Image src={item.img} className="border border-solid border-white rounded-xl w-full min-h-full object-fill"/>
                        <div className="absolute right-spacing-0 bottom-spacing-0 py-spacing-11 pr-spacing-2 pl-spacing-19 rounded-tl-xl rounded-br-xl bg-white flex items-center cursor-pointer">
                           <p className="ml-spacing-17 font-vrg text-1 leading-lineHeight-default text-carbon-main inline-block text-start cursor-pointer">
                              {item.type}

                           </p>

                           <Image src={left} width={17} height={20
                           } className="translate-x-spacing-0 transition ease-in-out duration-200 cursor-pointer "/>
                        </div>
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          {/* <Category/> */}
        </main>
      </div>
    </div>
  );
}
