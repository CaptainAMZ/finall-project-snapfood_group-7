
'use client'

import React, { use, useState } from 'react'
import PageSides from './PageSides'
import { Provider } from 'react-redux';
import { store } from '@/redux';


export default function PageSliderWrapper({ restaurants}) {

     
    
  return (

        <>
        <Provider store={store}>
        <PageSides restaurants={restaurants}/>  
        </Provider>
        </>
  )
}



