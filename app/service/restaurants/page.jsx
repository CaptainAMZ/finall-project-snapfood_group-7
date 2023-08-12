
import MainServer from "@/components/elements/MainServer";
import { getLocalData } from "@/lib/localdata";



export const metadata = {
  title: " سفارش آنلاین غذا از رستوران های تهران",
  description: "سایت اسنپ فود",
  
}

async function page() {
  const { restaurants ,cats} = await getLocalData();
  




  return (
   <MainServer restaurants={restaurants}  cats={cats} />
  );
}

export default page;
