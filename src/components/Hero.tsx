import styled, { keyframes } from 'styled-components'
import Header from './Header'
import HeroImg from '../assets/images/illustration.png'

const Hero:React.FC = () => {
  return (
    <Container>
      <Header/>
      <Wrapper>
        <h1>Mountain NFT Collectibles</h1>
        <img src={HeroImg} alt="" />
      </Wrapper>
    </Container>
  )
}

export default Hero

const popIn = keyframes`
  0% {
      opacity: 0;
      transform: translate(-4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
`
const rotate = keyframes`
  0% {
      opacity: 1;
      transform: rotate(0deg);
    }
    100% {
      opacity: 1;
      transform: rotate(360deg);
    }
`
const Container = styled.div`
  position: relative;
  padding: 20px 50px;
  height: 100vh;
  background-color: black;

  @media (max-width: 870px) {
    height: 50%;
  }

  @media (max-width: 450px){
    padding: 10px;
    height: 100vh !important;
  }

  
`

const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */

  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

  }
  @media (max-width: 795px) {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    }
  h1 {
    color: white;
    font-size: 64px;
    margin: auto;
    /* border: 2px solid white; */
    animation: ${popIn} 1s ease-in 0.2s forwards;

    @media (max-width: 450px) {
      font-size: 48px;
      order: 2;
      margin-top: 0px;
    }
    @media (max-width: 870px) {
      margin-top: 0;
      margin: auto;
      font-size: 42px;
    }
    @media (max-width: 920px) {
      font-size: 48px;
    }
    @media (max-width: 795px) {
      order: 2;
      font-size: 48px;
    }
    
  }
  img {
    width: 766px;
    height: 766px;
    z-index: 100;
    /* margin: auto; */
    /* border: 2px solid white; */
    animation: ${popIn} 1s ease-in 0.4s forwards;

    /* animation: rotate 5s  linear infinite; */

    @media (max-width: 450px) {
    width: 300px;
    height: 420px;
    order: 1;
    margin-right: 20px;
    }
    
    @media (max-width: 870px) {
        transform: scale(0.5, 0.55) !important;
    }
    @media (max-width: 1070px) {
        transform: scale(0.8, 0.85) !important;
    }
    @media (max-width: 1020px) {
        transform: scale(0.55, 0.6) !important;
    }
    @media (max-width: 820px) {
        transform: scale(0.4, 0.45) !important;
    }
    @media (max-width: 795px) {
      order: 1;
      transform: scale(0.55, 0.6) !important;
    }
    @media (max-width: 450px) {
      order: 1;
      transform: scale(1) !important;
    }
    
  }

  
`