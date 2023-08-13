import Header from "@/components/elements/Header";
import MainServer from "@/components/elements/MainServer";
import Nav from "@/components/elements/Nav";
import Footer from "@/components/modules/Footer";
import { getLocalData } from "@/lib/localdata";

export const metadata = {
  title: " سفارش آنلاین غذا از رستوران های تهران",
  description: "سایت اسنپ فود",
};

async function page() {
  const { restaurants, cats } = await getLocalData();

  return (
    <>
      <div>
        {/* <div className=" sticky top-0 right-0 left-0 z-[1] w-full shadow-head">
        <Header />
      </div> */}
        <div className="transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-[20] w-full ">
          <Nav />
        </div>
        <MainServer restaurants={restaurants} cats={cats} />
      </div>
      
    </>
  );
}

export default page;
