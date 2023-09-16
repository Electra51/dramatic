
import React from 'react'
import img from "../../public/MovieWallpaper.png"
import IMDb from "../../public/assets/images/IMDb.png"
import tamasa from "../../public/assets/images/tamasha.png"
import { HeroButton, HeroButtons, HeroContent, Images, TextHero, TextType,ExtraHeroContent,Box } from './HeroElement'
import Image from 'next/image'
import { BsPlayFill, BsPlus } from 'react-icons/bs'

const Hero = () => {
  return (
    <div>
    <Images
      src={img}
      alt='image'
      layout='fill'
      objectFit='cover'
      />
    <HeroContent>
        <Image src={tamasa} alt='tamasa' height={120} width={380}/>
        <p style={{paddingLeft:"1rem"}}>Ved and Tara fall in love while on a holiday in Corsica and decide to keep their real identities undisclosed. Tara returns to Delhi and meets a new Ved, who is trying to discover his true self.</p>

      <TextType> 
        <TextHero color='#FF2E00'>GENRES</TextHero>
        <TextHero color='#FFFFFF'>Romance, Drama</TextHero>
      </TextType>
      <HeroButtons>
          <HeroButton color="#5436A9">WATCH <BsPlayFill/></HeroButton>
          <HeroButton color='#5C5C5C'>MY LIST <BsPlus/></HeroButton>
      </HeroButtons>
      <ExtraHeroContent>
          <Image src={IMDb} alt="IMDb" height={30} width={50}/>
          <TextHero font-weight='600' color='#FFC907'>7.6</TextHero>
          <Box>U/A</Box>
           <Box>4K</Box>
           <TextHero color='#959595'>2015</TextHero>
      </ExtraHeroContent>
    </HeroContent>
    </div>
  )
}

export default Hero