import './globals.css'
import Image from 'next/image'
import Header from 'components/elements/Header.jsx'
import Nav from '@/components/elements/Nav'
import Category from '@/components/elements/Category'
import Application from '@/components/modules/Application'


export default function Home() {


   return (
      <>
         <main>
            <Category />
            <Application />
         </main>

      </>
   )
}
