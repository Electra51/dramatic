import styled from "styled-components";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiFillCloseCircle } from 'react-icons/ai'
import Link from 'next/link'

export const Nav = styled.nav`
    height: 70px;
    background: linear-gradient(0.25turn, #000000BF, #6650A5BF);
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.25);
    
    @media screen and (max-width:960px){
        transition: 0.8s all ease;
    };
`

export const LogoContainer = styled.div`
    padding-left: 1rem;
`

export const NavLinkContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 407px;
    padding-left: 3rem;
    @media screen and (max-width:768px){
display: none ;
    }
`
export const NavRightContainer=styled.div`
display: flex;
    align-items: center;
    gap: 35px;
`
export const MobileIcon=styled.div`
display:none;
 @media screen and (max-width:768px){
    display: block;
    position: absolute;
    top: 13px;
    right:0;
    color: white;
    padding-right: 1rem;
    transform: translate(-100,60%);
    font-size: 1.8rem;
    cursor: pointer;
    
 }`
export const NavLeftContainer=styled.div`
display: flex;
    align-items: center;
    gap: 35px;
`

export const NavLink = styled(Link) <{ large?: boolean }>`
    text-decoration:none;
    display:flex;
    flex-direction: column;
    align-items:center;
    gap:1px;
    letter-spacing: 1px;
    font-size: ${props => props.large ? '1.5rem' : '1rem'};
    color: ${props => props.color || '#A1B1CB'};

    &:hover {
        color: #a6a2a2;
    }

    &.active {
        color: #FFFFFF;
        margin-top: 11px;
       
       .dot{
          height: 10px;
          width: 10px;
          background-color: #38BBD8;
          border-radius: 50%;
          display: inline-block;
        }
        
    }
    
`
export const SearchBar=styled.input`
       background:#3B567D;
       height:30px;
       color:white;
       padding-left:10px;
       width:200px;
       border:none;
       border-radius:30px;
       &:focus{
        outline: none;
       }
        &::placeholder,
  ::-webkit-input-placeholder {
    color: #A2B3CD;
    font-weight: 600;
  }
  :-ms-input-placeholder {
     color: #A2B3CD;
  }`

export const SearchContent=styled.div`
      position: relative;
      `
export const Avatar=styled.div`
     position:relative;
     padding-right:1rem`

export const Dot=styled.span`
     position:absolute;
     bottom:0px;
     right:1rem;
     height:10px;
     width:10px;
     border-radius:50%;
     background:#3BFF37;
     border:2px solid white`

export const MenuIcon = styled(GiHamburgerMenu)`
    cursor: pointer;
`

export const CloseIcon = styled(AiFillCloseCircle)`
    cursor: pointer;
`

export const OverlayMenu = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #132424;

    @media (min-width: 768px) {
        display: none;
    }
`

export const MenuLinkContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const CloseButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 1.5rem;
    position: absolute;
`