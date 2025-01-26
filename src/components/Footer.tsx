import styled from "styled-components"
import Logo from '../assets/images/logo.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaReddit } from "react-icons/fa";
import Solana from '../assets/images/solana.png'
import Opensea from '../assets/images/opensea.png'
import { Link } from "react-router-dom";


const Footer:React.FC = ()=> {
    return (
        <Container>
            <PushIt>
                <IconWrapper>
                    <FaInstagram/>
                    <FaGithub/>
                    <FaDiscord/>
                    <FaTwitter/>
                    <FaReddit/>
                </IconWrapper>
            </PushIt>
            <LogosWrapper>
                <img src={Logo} alt="" id="logo"/>
                <PowerWrapper>
                    <p>Powered by</p>
                    <Logos>
                        <img src={Solana} alt="" id="solana"/>
                        <img src={Opensea} alt="" id="opensea"/>
                    </Logos>
                </PowerWrapper>
            </LogosWrapper>
            <TextNavWrapper>
                <p>Copyright © 2022 MT Foundation Limited. All rights reserved.</p>
                <NavWrapper>
                    <Link to="" style={{ textDecoration: 'none', color: "white" }}>About</Link>
                    <Link to="" style={{ textDecoration: 'none', color: "white" }}>Privacy</Link>
                    <Link to="" style={{ textDecoration: 'none', color: "white" }}>Contact us</Link>
                    <Link to="" style={{ textDecoration: 'none', color: "white" }}>Disclaimer</Link>
                </NavWrapper>

            </TextNavWrapper>
        </Container>
    )
}
export default Footer

const Container = styled.div`
    /* border: 1px solid red; */
    padding: 50px;

    @media (max-width: 450px) {
        padding: 10px;
    }
`
const PushIt = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    justify-content: flex-end;
`
const IconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 184px;
    /* border: 1px solid red; */
    color: white;
    font-size: 24px;
    position: relative;
    right: 0px;
    margin-right: 0px;
    margin-bottom: 8px;
`
const LogosWrapper = styled.div`
    display: flex;
    margin-bottom: 61px;

    @media (max-width: 450px) {
        margin-top: 20px;
    } 
    #logo {
        width: 106px;
        height: 51px;
        margin-right: 32px;

        @media (max-width: 450px) {
            width: 75px;
            height: auto;
        } 
    }
`
const PowerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 290px;
    height: 55px;
    /* border: 1px solid red; */
    p {
        color: white;
        font-size: 16px;
    }
`
const Logos = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    #solana {
        height: 21px;
    }
    #opensea {
        height: 31px;
    }
`
const TextNavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;

    @media (max-width: 450px) {
        flex-direction: column-reverse;
    }
`
const NavWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 321px;

    @media (max-width: 450px) {
        margin-bottom: 30px;
    }
`