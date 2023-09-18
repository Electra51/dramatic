// import getProduct from '@/lib/getProduct';


import { Box, ExtraHeroContent, HeroButton, HeroButtons, HeroContent, Images, TextHero, TextType } from '@/components/HeroSection/HeroElement';
import { GetServerSidePropsContext } from 'next';
import Image from 'next/image';
import React from 'react'
import { BsPlayFill, BsPlus } from 'react-icons/bs';
import tamasa from "../../public/assets/images/tamasha.png";
import { AllImage, CastContainer, ContentDetails, TailerContent,MoreDetails,AllImageMenu } from '@/styles/DetailsStyle';
const ProductDetailPage = async({ params }: any) => {
  console.log(params.id)
  // const userData=await getProduct(params.id);
  // console.log(userData)
  const res = await fetch(`http://localhost:5000/products/${params.id}`)
  const dataData=await res.json();


  // const imgStyle={
  //   height:100%;
  //   width:100%;
  // }
  return (
    <div style={{color:"white"}}>
    
       
     <Image
      src={dataData.cover}
      alt="Picture of the author"
      sizes="100vw"
      style={{
        width: '100%',
        height: 'auto',
      }}
      width={500}
      height={300}
    />
    <HeroContent>
        <Image src={tamasa} alt="tamasa" height={120} width={380} />
        <p style={{ paddingLeft: "1rem" }}>
          Ved and Tara fall in love while on a holiday in Corsica and decide to
          keep their real identities undisclosed. Tara returns to Delhi and
          meets a new Ved, who is trying to discover his true self.
        </p>

        <TextType>
          <TextHero color="#FF2E00">GENRES</TextHero>
          <TextHero color="#FFFFFF">Romance, Drama</TextHero>
        </TextType>
        <HeroButtons>
          <a href={dataData.video} target="_blank" style={{textDecoration:"none",color:"white"}}>
            <HeroButton color="#5436A9">
            WATCH <BsPlayFill />
          </HeroButton>
          </a>
          <HeroButton color="#5C5C5C">
            MY LIST <BsPlus />
          </HeroButton>
        </HeroButtons>
        <ExtraHeroContent>
          <Image src={dataData.IMDb} alt="IMDb" height={30} width={50} />
          <TextHero font-weight="600" color="#FFC907">
           {dataData.rating}
          </TextHero>
          <Box>U/A</Box>
          <Box>4K</Box>
          <TextHero color="#959595">{dataData.year}</TextHero>
        </ExtraHeroContent>
         <TextType>
          <TextHero color="#FF2E00">AUDIO</TextHero>
          <TextHero color="#FFFFFF">English - Audio Description[Original]</TextHero>
        </TextType>
         <TextType>
          <TextHero color="#FF2E00">SUBTITLES</TextHero>
          <TextHero color="#FFFFFF">English,Hindi</TextHero>
        </TextType>
      </HeroContent>
   
   <ContentDetails>
    <TailerContent>
     <TextHero color="#FFFFFF">TRAILER</TextHero>
      <Image
      src={dataData.tailer}
      alt="Picture of the author"
      // sizes="100vw"
      // style={{
      //   width: '100%',
      //   height: 'auto',
      // }}
      width={300}
      height={150}
    />
    </TailerContent>
    <TailerContent>
     <TextHero color="#FFFFFF">CAST AND CREW INFO</TextHero>
     <AllImage>
      {
        dataData.casting?.map((cast:any,index:number)=><CastContainer><Image
      src={cast.img}
      alt="Picture of the author"
      // sizes="100vw"
      // style={{
      //   width: '100%',
      //   height: 'auto',
      // }}
      width={150}
      height={150}
    />
    <TextHero>{cast.name}</TextHero></CastContainer>)
      } </AllImage>
    </TailerContent>

   </ContentDetails>


<MoreDetails>
  
<TextHero color="#FFFFFF">More Movie</TextHero>
    <AllImageMenu>
      {
        dataData.more?.map((m:any,index:number)=> <Image
      src={m.imgMore}
      alt="Picture of the author"
      // sizes="100vw"
      // style={{
      //   width: '100%',
      //   height: 'auto',
      // }}
      width={300}
      height={150}
    />
   )
      } </AllImageMenu>
</MoreDetails>
  
    </div>
  )
}

export default ProductDetailPage;