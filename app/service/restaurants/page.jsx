
import MainServer from "@/components/elements/MainServer";
import { getLocalData } from "@/lib/localdata";

async function page() {
  const { restaurants ,cats} = await getLocalData();
  




  return (
   <MainServer restaurants={restaurants}  cats={cats} />
  );
}

export default page;
