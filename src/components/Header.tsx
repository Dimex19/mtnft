import styled from 'styled-components'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MetaMaskInpageProvider } from "@metamask/providers";



const Header:React.FC = ()=> {
    async function getAccount() {

        const ethereum = window.ethereum as MetaMaskInpageProvider;
        const accounts = await ethereum.request({
            method: "eth_requestAccounts",
        }) as string[] ;
        const account = accounts[0];
        return account;
    }
    const [accountAddress, setAccountAddress] = useState("")

    const connectButtonOnClick = ()=> {
        if (typeof window !== "undefined"  && window.ethereum) {
            getAccount().then((response) => {
                setAccountAddress(response)
            })
        } else {
            alert("Ethereum wallet is not available. Please install MetaMask.");
        }
    }
    return (
        <Container>
            <img src={Logo} alt="" />
            <Links>
                <Link to="/" id='link'>Home</Link>
                <Link to="/collections" id='link'>Collections</Link>
                <Link to="/foundation" id='link'>Foundation</Link>
                <Button onClick={connectButtonOnClick}>{!!accountAddress ? `${accountAddress.slice(0, 4)}****${accountAddress.slice(-4)}` : "Connect Wallet"}</Button>
            </Links>
            <HamContainer >
                <GiHamburgerMenu/>
            </HamContainer>
        </Container>
    )
}
export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* justify-content: center; */
    /* border: 1px solid red; */
    img {
        width: 75px;
        height: 36px;

        @media (max-width: 450px){
            width: 63px;
            height: 24px;
        }

    }
`
const Links = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid red; */
    
    #link {
        text-decoration: none;
    color: white;
    }
    @media (max-width: 450px) {
        display: none;
    }
`
const HamContainer = styled.div`
    display: none;

    @media (max-width: 450px){
        display: block;
        color: white;
        font-size: 24px;
    }
`
const Button = styled.button`
    width: 200px;
    height: 40px;
`