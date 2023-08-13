// 'use client'

import React from 'react'

// کامپوننت توضیحات سفارش
// see CardDetail.jsx

function Description() {
  return (
    <textarea 
        placeholder="توضیحات سفارش..." 
        name="description" 
        className='box-border inline-block w-full min-h-[calc(6rem)] mt-4 mb-[calc(1.75rem)] p-3 font-vrg text-scales-caption text-carbon-main border-[1px] border-carbon-alphaMedium rounded-md resize-y overflow-auto'
        style={{fontSize:'100%'}}>
    </textarea>
  )
}

export default Description