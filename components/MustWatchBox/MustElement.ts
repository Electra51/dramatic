"use client";
import styled from "styled-components";

export const MustWatchContainer = styled.div`
  /* height: 70px;
    background: linear-gradient(0.25turn, #000000BF, #6650A5BF);
    display: flex;
    z-index:1;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25); */
  //   background: #000308 !important;
  position: relative;

  background: rgba(0, 0, 0, 0.25);
  /* @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }; */
`;

export const RecommendContainer = styled.div`
  /* height: 70px;
    background: linear-gradient(0.25turn, #000000BF, #6650A5BF);
    display: flex;
    z-index:1;
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25); */
  //   background: #000308 !important;
  

  background: rgba(0, 0, 0, 0.25);
  /* @media screen and (max-width:960px){
        transition: 0.8s all ease;
    }; */
`;

export const MovieText = styled.p`
  position: absolute;
  color: white;
  left: 134px;
  top: 12px;
`;

export const ButtonDiv = styled.button`
  position: absolute;
  color: white;
  right: 134px;
  top: 8px;
  z-index:99;
  color:white;
  background: #5c5c5c;
  padding:10px 20px;
  border-radius:10px;
  border:none;
  font-size:14px;
  font-weight:500
`;

export const TextTitle=styled.div`
 color: white;
  font-size: 16px;
  font-weight:600;
  text-decoration:none;
  text-decoration-style:none;
`