import styled from "styled-components";
import Image from 'next/image'
export const Images = styled(Image)`
   /* position: inherit !important; */
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    color: transparent;
    z-index: -1;
`
export const HeroContent = styled.div`
  padding-left:6rem ;
  padding-top: 6rem;
  width: 560px;
  color:white;
  display:flex;
  flex-direction: column;
  gap: 20px;
`

export const TextType = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-left:1rem
`
export const HeroButtons = styled.div`
  display: flex; 
  align-items: center;
  gap: 10px;
  padding-left:1rem
`

export const HeroButton = styled.div`
  display: flex; 
  justify-content:center;
  align-items: center;
  gap: 8px;
  background: ${(props)=>props.color};
  border-radius: 30px;
  height: 50px;
  width:130px;
  text-align: center;
  
`
export const TextHero=styled.p`
     color:${(props)=>props.color};
     
     
`
export const ExtraHeroContent=styled.div`
display:flex;
align-items:center;
gap: 17px;
padding-left:1rem
`

export const Box=styled.div`
padding: 3px 6px;
border:1px solid white;
border-radius:3px`