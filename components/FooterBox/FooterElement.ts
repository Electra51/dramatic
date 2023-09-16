import styled from "styled-components";

export const Container = styled.footer`
    background-color: #161214;
    width: 100%;
    min-height: 70px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 92%;
    padding: 30px 0px;
    gap: 70px;
    margin: 0.5rem auto 0 auto;
    @media (max-width: 820px) {
        flex-direction: column;
    }
`
export const Text=styled.h3`
     text-align:center;
     color:${(props)=>props.color};
     font-weight: 400;
     font-size:12px;
     padding-bottom: 6px;
`
export const FooterText=styled.p`
     font-size:12px;
    font-weight:400;
    color:white;
    margin-top: 7px;
     font-family: 'Montserrat', sans-serif;
`

export const Logo = styled.div`
    color: #fff;
    display:flex;
    justify-content: space-between;
    width: 100px;
    height: 26px;
    gap:6px;
    background: #362f33;
    padding:5px;
`

export const WebsiteRights = styled.div`
    color: #fff;
    flex: 1;
    display: block;
    gap:8px;
    @media (max-width: 820px) {
        margin: 1rem;
    }
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex: 1;

    @media (max-width: 820px) {
       width: 80%;
    }
`

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
   
`