"use client";

import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

// const styled = { createGlobalStyle }

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    
   
  }

  .slick-slider{
 

    /* width: 1300px; */
    // position: absolute;
    right: 29px;
    background: #0B0F1678;
    margin-top: -96px;
    padding: 73px 30px;
    margin-left: 120px;
    height:550px
  }
  .slick-next {
   top: -25px;
   left:56px; 
}
 .slick-prev {
   top: -25px;
  left:19px;
}
  .slick-slide>div{
    margin: 0 10%;
    height:550px;
  }
  .slick-slider>div:nth-child(1){
    margin-left: 10px;

  }
  .slick-list{
    margin-right: -50px;
  }
 
`;
export const Main = styled.div`
  /* height:100vh; */
  /* border: 1px solid red; */
  position: relative;
`;
export const SideBarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 13%;
  z-index: 1;
  background: red;
  height: 315px;
  width: 70px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: linear-gradient(1turn, #130b29, #5436a9, #5e47a1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0px;
  gap: 30px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const HomeContent = styled.div`
  /* height: 100vh; */
`;
