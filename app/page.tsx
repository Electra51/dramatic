// "use client";
import Classic from "@/components/ClassicBox/Classic";
import Hero from "@/components/HeroSection/Hero";
import MustWatch from "@/components/MustWatchBox/MustWatch";
import RecommendD from "@/components/RecommendBox/RecommendD";
import Recommend from "@/components/RecommendBox/RecommendD";
import getAllProduct from "@/lib/getAllProduct";
import { HomeContent } from "@/styles/GlobalStyles";
import styled from "styled-components";

// async function getData() {
//   const res = await fetch("http://localhost:5000/products", {
//     cache: "no-cache",
//     next:{
//       revalidate:5
//     }
//   });

  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }

//   return await res.json();
// }

export default async function Page() {
  const data = await getAllProduct();
  // const result = JSON.stringify(data);
  // console.log(result);
  return (
    <HomeContent>
      <Hero />

      <MustWatch
        e={data?.filter((e: any, index: number) => e.category == "mustWatch")}
      />
       {/* <RecommendD
        e={data?.filter((e: any, index: number) => e.category == "recomend")}
      /> */}

      {/* {data?.filter((e: any, index: number) =>
        e.category == "mustWatch" ? <MustWatch  key={index} e={e}/> : e.category == "recomend"? <Recommend/>:<Classic/>
      )} */}
    </HomeContent>
  );
}
