
import React from 'react'
import Category from "@/components/elements/Category";
import { getLocalData } from '../../lib/localdata'

export default async function Categories() {

  const { cats } = await getLocalData();




  return (
    <div className="flex-col items-start mb-spacing-8  ">
      <p className="font-vb font-bold leading-lineHeight-default inline-block text-carbon-light text-start mb-spacing-4 w-full ">
        دسته بندی ها
      </p>

      <div className="mb-spacing-4 w-[calc(100% + 2rem)] m-[calc(-1rem)] flex flex-wrap">
        {cats.map((item) => {
          return (
            <Category key={item.id} type={item.title} img={item.img} link={item.id} />
          );
        }
        )}
      </div>
    </div>
  )
}
