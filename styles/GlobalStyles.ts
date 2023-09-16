import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

// const styled = { createGlobalStyle }

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700;800;900&display=swap');

  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
 
`
export const Main=styled.div`
  height:100vh;
  position:relative;
 `
export const SideBarContainer=styled.div`
position: fixed;
left: 0;
top: 13%;
z-index: 1;
background: red;
height: 315px;
width: 70px;
border-top-right-radius:25px;
border-bottom-right-radius: 25px;
background: linear-gradient(1turn, #130B29, #5436A9,#5E47A1);
display: flex;
flex-direction: column;
align-items: center;
padding:50px 0px;
gap: 30px;
cursor:pointer;
 @media (max-width: 768px) {
        display: none;
    }
`

