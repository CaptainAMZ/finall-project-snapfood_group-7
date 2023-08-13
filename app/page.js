import Header from "@/components/elements/Header";
import Nav from "@/components/elements/Nav";
import Categories from "@/components/elements/Categories";
import Application from "@/components/templates/Application";
import SnapApplication from "../components/modules/SnapApplication";
import SnapBusiness from "../components/modules/SnapBusiness";
import Cities from "../components/modules/Cities";
import Footer from "../components/modules/Footer";
// import CardSlider from '@/components/elements/CardSlider';
import "./globals.css";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: "  اسنپ فود | سفارش آنلاین غذا از تمامی",
  description: "سایت اسنپ فود",
  icons: {
    icon: "/favicon",
  },
};

export default async function Home() {
  return (
    <div>
      <div className="sticky transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-[1] w-full shadow-head">
        <Header />
        <Nav />
      </div>
      <div className="min-h-screen flex-col items-start bg-white">
        {/* <div></div> header + nav */}
        <div className=" grow w-full max-w-85.375 mx-auto p-[1rem] sm:p-[1.5rem] md:p-[2.5rem] ">
          <Categories />
          {/* <CardSlider restaurants={restaurants} /> */}
        </div>

        <div className="grow w-full max-w-85.375 mx-auto px-[1rem] sm:px-[1.5rem] md:px-[2.5rem]">
          <SnapApplication />
          <SnapBusiness />
        </div>

        <div className="border-t-2"></div>

        <Cities />
      </div>
    </div>
  );
}
