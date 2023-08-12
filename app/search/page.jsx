import Header from "@/components/elements/Header";
import React from "react";
import { getLocalData } from "../../lib/localdata";
import SearchProductCard from "@/components/elements/SearchProductCard";
import Card from "@/components/elements/Card";
import Link from "next/link";
import Nav from "@/components/elements/Nav";

export default async function page({ searchParams }) {
  const { foods, restaurants } = await getLocalData();

  const searchValue = searchParams.search;

  const filteredFoods = foods.filter((item) => item.name.includes(searchValue));

  const filteredRestaurants = restaurants.filter((item) =>
    item.name.includes(searchValue)
  );
  // console.log(filteredFoods);
  return (
    <>
      <div className="position fixed transform translate-y-0 transition all 0.3s ease-in 0s top-0 right-0 left-0 z-[20] w-full shadow-head">
        <Header />
      </div>
      <Nav />
      <main className="min-w-[80vh] pt-[4.25rem] pb-[1.5rem] px-[1.5rem] mx-auto my-0 max-w-[85.375rem]">
        {!!filteredRestaurants.length && (
          <section className="mb-[3.75rem]">
            <header className="flex justify-between">
              <h2 className="font-vb text-scales-body leading-lineHeight-body  text-carbon-main ">
                نتایج جست و جو برای "{searchValue}" در نام فروشندگان
              </h2>

              <Link href={"#"}>
                <p className="font-vb text-scales-body leading-lineHeight-body  text-accent2-main">
                  مشاهده همه فروشندگان
                </p>
              </Link>
            </header>
            <div className="mt-[1.5625rem] w-[calc(100%+1.5rem)] m-[calc(-0.75rem)] flex flex-wrap">
              {filteredRestaurants.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          </section>
        )}

        {!!filteredFoods.length && (
          <section className="mb-[3.75rem]">
            <header className="flex justify-between">
              <h2 className="font-vb text-scales-body leading-lineHeight-body  text-carbon-main ">
                نتایج جست و جو برای "{searchValue}" در بین محصولات
              </h2>

              <Link href={"#"}>
                <p className="font-vb text-scales-body leading-lineHeight-body  text-accent2-main">
                  مشاهده همه محصولات
                </p>
              </Link>
            </header>
            <div className="mt-[1.5625rem] w-[calc(100%+1.5rem)] m-[calc(-0.75rem)] flex flex-wrap">
              {filteredFoods.map((item) => (
                <SearchProductCard key={item.id} item={item} restaurants={restaurants} />
              ))}
            </div>
          </section>
        )}

        <div className="p-[2rem] m-[3.75rem]"></div>
      </main>
    </>
  );
}
