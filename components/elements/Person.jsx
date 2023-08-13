import React from 'react'
import Image from 'next/image'

export default function Person() {
    return (
        <div className="p-spacing-2 cursor-pointer items-baseline flex">
            <Image
                className=" block cursor-pointer"
                src={"/images/images-home/person.svg"}
                width={17}
                height={17}
                alt="person"
            />

        </div>
    )
}
