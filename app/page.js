import Header from '@/components/elements/Header';
import Nav from '@/components/elements/Nav';
import Categories from '@/components/elements/Categories';
import Application from '@/components/templates/Application';
import CardSlider from '@/components/elements/CardSlider';
import './globals.css'
import { getLocalData } from '@/lib/localdata';

export const metadata = {
  title: "  اسنپ فود | سفارش آنلاین غذا از تمامی",
  description: "سایت اسنپ فود",
  icons: {
    icon: '/favicon',
  },
}

export default async function Home() {

  const { restaurants } = await getLocalData()


  return (
    <div>
      <div className="position fixed transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-[1] w-full shadow-head">

        <Header />
        <Nav />
      </div>
      <div className="min-h-screen flex-col items-start">
        {/* <div></div> header + nav */}
        <main className=" grow w-full max-w-85.375 mx-auto p-spacing-2 sm:p-spacing-3 md:p-spacing-5 lg:p-4">
          <Categories />
          <CardSlider restaurants={restaurants} />
          <Application />
        </main>
      </div>
    </div>
  );

}
