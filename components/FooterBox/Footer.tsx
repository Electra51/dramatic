import React from 'react'
import {
    BsFacebook,
    BsGlobe,
    BsInstagram,
    BsLinkedin,
    BsTwitter,
    BsYoutube
} from 'react-icons/bs'
import {
    Container,
    FooterText,
    Logo,
    SocialIconLink,
    SocialIcons,
    Text,
    WebsiteRights,
    Wrapper
} from './FooterElement'
import { MdKeyboardArrowDown } from 'react-icons/md'

type Props = {}

const Footer = (props: Props) => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                   <BsGlobe/>
                  <Text> English</Text>
                   <MdKeyboardArrowDown/>
                </Logo>

                <WebsiteRights>
                   <FooterText style={{fontSize:"15px", fontWeight:600, color:'white',marginBottom:"20px"}}>NAVIGATION</FooterText>
                    <FooterText>Home</FooterText>
                     <FooterText>FAQ</FooterText>
                      <FooterText>Investor Relations</FooterText>
                       <FooterText>Jobs</FooterText>
                        <FooterText>About Us</FooterText>
                        <FooterText>Help Center</FooterText>
                </WebsiteRights>
                  <WebsiteRights>
                   <FooterText style={{fontSize:"15px", fontWeight:600, color:'white',marginBottom:"20px"}}>LEGAL</FooterText>
                    <FooterText>Privacy Policy</FooterText>
                     <FooterText>Terms of services</FooterText>
                      <FooterText>Cookies Performance</FooterText>
                       <FooterText>Corporate Information</FooterText>
                        
                </WebsiteRights>
                  <WebsiteRights>
                   <FooterText style={{fontSize:"15px", fontWeight:600, color:'white',marginBottom:"20px"}}>TALK TO US</FooterText>
                    <FooterText>support@arcom.com</FooterText>
                     <FooterText>+78642242436435</FooterText>
                </WebsiteRights>
                  <WebsiteRights>
                   <FooterText style={{fontSize:"15px", fontWeight:600, color:'white',marginBottom:"20px"}}>FOLLOW US ON</FooterText>
                    <SocialIcons>
                    <SocialIconLink href='//www.linkedin.com' target="_blank" aria-label='Linkedin'>
                        <BsLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='//www.facebook.com' target="_blank" aria-label='facebook'>
                        <BsFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='//www.twitter.com' target="_blank" aria-label='Twitter'>
                        <BsTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='//www.yotube.com' target="_blank" >
                    </SocialIconLink>
                </SocialIcons> 
                       
                </WebsiteRights>

                {/* <SocialIcons>
                    <SocialIconLink href='//www.linkedin.com' target="_blank" aria-label='Linkedin'>
                        <BsLinkedin />
                    </SocialIconLink>
                    <SocialIconLink href='//www.instagram.com' target="_blank" aria-label='Instagram'>
                        <BsInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='//www.twitter.com' target="_blank" aria-label='Twitter'>
                        <BsTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='//www.yotube.com' target="_blank" aria-label='Youtube'>
                        <BsYoutube />
                    </SocialIconLink>
                </SocialIcons> */}
            </Wrapper>
            <Text>@2022 Dramatic.All Rights Reserve</Text>
        </Container>
    )
}

export default Footer