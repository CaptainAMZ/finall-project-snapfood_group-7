
import Categories from "@/components/elements/Categories";
import './globals.css'
import Category from '@/components/elements/Category'
import Application from '@/components/templates/Application'
<<<<<<< HEAD:app/page.js
import RestaurantInfo from "@/components/elements/RestaurantInfo";
import { Providers } from '../redux/GelobalRedux/provider'
=======

export const metadata = {
  title: " اسنپ فود | سفارش آنلاین",
  description: "سایت اسنپ فود",
  
}
>>>>>>> snap:app/(root)/page.js

export default function Home() {




   return (
      <div>
        <div className="min-h-screen flex-col items-start">
          {/* <div></div> header + nav */}
          <main className=" grow w-full max-w-85.375 mx-auto p-spacing-2 sm:p-spacing-3 md:p-spacing-5 lg:p-4">
              <Providers>
              <RestaurantInfo/>
              </Providers>
             
            {/* <Categories/>
            <Application /> */}

          </main>
        </div>
      </div>
   );

}
