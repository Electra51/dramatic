import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillHeart, AiOutlineEye } from "react-icons/ai";
import { TextTitle } from "./MustElement";
// import IMDb from "../../public/IMDb.png";
// type cardProps = {
//   data: string[];
// };
const Card = ({ data }: any) => {
  console.log("hi", data);
  return (
    <div>
     <Link href={`/${data._id}`}>
      <div>
        <Image src={data?.image} alt="db" height={400} width={300}/>
        
          <TextTitle >{data.title}</TextTitle>
        
         <div>
          <p style={{ fontWeight: "600",color:"white" }}>{data.year}</p>
        </div>
       <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", gap:"5",color:"white"}}>
         <div style={{display:"flex",alignItems:"center", gap:"5"}}>
          <Image src={data?.IMDb} alt="" height={15} width={30}/>
          <p>{data?.rating}</p>
        </div>
         <div style={{display:"flex",alignItems:"center", gap:"5",color:"white"}}>
         
         <AiOutlineEye/>
         <AiFillHeart/>
        </div>
       </div>
      </div>
      </Link>
    </div>
  );
};

export default Card;
