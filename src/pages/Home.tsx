import Collectibles from "../components/Collectibles"
import CountDown from "../components/CountDown"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import styled from "styled-components"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <Container>
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