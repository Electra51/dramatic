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
  height:100vh;`