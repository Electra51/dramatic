'use client';

import Navbar from '@/components/NavbarBox/Navbar';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem /* 24px */;
`;

const H1= styled.h1`
 font-size: 20px;
 color: red;
`;



export default function Page() {
  return (
    <Container>
      
        <H1> Styled with Styled Components</H1>
      </Container>
    
  );
}