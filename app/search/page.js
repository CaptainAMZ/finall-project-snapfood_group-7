import { getLocalData } from "../../lib/localdata";
import SearchPage from "@/components/modules/SearchPage";

export const metadata = { title: " جست و جو در میان محصولات و فروشگاه ها" }



export default async function page() {
  const { foods, restaurants, services } = await getLocalData();
  return (
    <SearchPage services={services} foods={foods} restaurants={restaurants} />
  );
}
