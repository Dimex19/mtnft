import Collectibles from "../components/Collectibles"
import CountDown from "../components/CountDown"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import Header from "../components/Header"

const Home = () => {
  return (
    <Container>
        <Header/>
        <Hero/>
        <Marquee/>
        <CountDown/>
        <Collectibles/>
        <Newsletter/>
        <hr />
        <Footer/>
    </Container>
  )
}

export default Home

const Container = styled.div`
  /* max-width: 1440px; */
  margin: auto;
  background-color: black;
`