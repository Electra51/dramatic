"use client";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {MdArrowDropDown} from "react-icons/md"
// import React, {useState,useEffect} from "react";
import { ButtonDiv, MovieText, MustWatchContainer } from "./MustElement";
import { TextHero } from "../HeroSection/HeroElement";

const MustWatch = ({ e }: any) => {
  console.log(e);
  //   const [mustData,setMustData]=useState([]);
  //   useEffect(()=>{
  // fetch("http://localhost:5000/products/recomend")
  // .then(res=>res.json()).then(data=>setMustData(data))
  //   },[mustData])

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <MustWatchContainer>
      <MovieText>MOVIES YOU MUST WATCH</MovieText>
      <ButtonDiv>Filter <MdArrowDropDown/></ButtonDiv>
      <Slider {...settings}>
        {e?.map((a: any, index: number) => (
          <Card
            key={index}
            data={a}
            // title={e.title} year={e.year} rating={e.rating}
          />
        ))}
      </Slider>
    </MustWatchContainer>
  );
};

export default MustWatch;
