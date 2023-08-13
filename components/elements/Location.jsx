import React from 'react'
import Image from 'next/image'

export default function Location() {
    return (
        <div className="me-spacing-12 flex cursor-pointer">
            <div className="flex justify-center items-baseline ">
                <span
                    className="pt-spacing-13 font-vrg text-vsm leading-lineHeight-tiny inline-block text-surface-overlay min-w-29 max-w-29 opacity-60 truncate w-auto 
                                sm:max-w-[calc(57vw-85px)] sm:min-w-9.375"
                >
                    ابوذر، پرستار، امیر حسین معماری
                </span>
                <Image
                    className="ms-spacing-14 mt-spacing-11 "
                    src={"/images/images-home/down.svg"}
                    width={19}
                    height={17}
                    alt="down"
                />
            </div>
        </div>
    )
}
