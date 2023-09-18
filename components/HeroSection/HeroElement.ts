"use client";

import styled from "styled-components";

export const Images = styled.div`
  background-image: url("/MovieWallpaper.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  position: relative;
`;

export const HeroContent = styled.div`
  position: absolute;
  left: 0;
  top: 0%;
  width: 100%;
  height: 100vh;
  padding-left: 6rem;
  padding-top: 4rem;
  width: 560px;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-image: linear-gradient(to right, #000000, #000000af, #c4c4c400);
`;

export const TextType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left: 1rem;
`;

export const HeroButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding-left: 1rem;
`;

export const HeroButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.color};
  border-radius: 30px;
  height: 50px;
  width: 130px;
  cursor:pointer ;
  text-align: center;
`;
export const TextHero = styled.p`
  color: ${(props) => props.color};
`;

export const ExtraHeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  padding-left: 1rem;
`;

export const Box = styled.div`
  padding: 3px 6px;
  border: 1px solid white;
  border-radius: 3px;
`;
