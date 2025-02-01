import styled from 'styled-components';
import Logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { MetaMaskInpageProvider } from "@metamask/providers";

const Header: React.FC = () => {
    const [accountAddress, setAccountAddress] = useState<string | null>(null);
    const [showHamburger, setShowHamburger] = useState<boolean | null>(false)
    const [showMenu, setShowMenu] = useState<boolean | null>(false)
    const connectButtonOnClick = async () => {
        try {
            const ethereum = window.ethereum as MetaMaskInpageProvider;
            if (!ethereum) {
                alert("MetaMask is not installed");
                return;
            }
            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            }) as string[];

            if (accounts && accounts.length > 0) {
                setAccountAddress(accounts[0]);
            }
        } catch (error: any) {
            alert(error.message || "Something went wrong");
        }
    };
    const hamburger = ()=> {
        console.log("hello!!!")
        setShowMenu(!showMenu)
        setShowHamburger(true)
    }

    return (
        <Container>
            <img src={Logo} alt="Logo" />
            <Links className={`nav-links ${showMenu ? "active" : ""}`}>
                <Link to="/" id='link'>Home</Link>
                <Link to="/collections" id='link'>Collections</Link>
                <Link to="/foundation" id='link'>Foundation</Link>
                <Button onClick={connectButtonOnClick}>
                    {accountAddress
                        ? `${accountAddress.slice(0, 4)}****${accountAddress.slice(-4)}`
                        : "Connect Wallet"}
                </Button>
            </Links>
            <HamContainer className={`hamburger ${showHamburger ? "close" : ""}`}  onClick={hamburger}>
                {/* {showHamburger ? <GiHamburgerMenu /> : `${setShowHamburger(true)} } */}
                <GiHamburgerMenu /> 
            </HamContainer>
        </Container>
    );
};

export default Header;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    height: 60px;
    width: 100vw;
    z-index: 1000;
    background-color: black;
    padding: 20px 50px;
    /* border: 2px solid white; */

    img {
        width: 75px;
        height: 36px;
        animation: name duration timing-function delay iteration-count direction fill-mode;
        animation: scaleY 3s infinite;

        @media (max-width: 450px) {
            width: 63px;
            height: 24px;
        }
        @keyframes scaleY {
            0% {
                transform: scaleX(1);
            }
            50% {
                transform: scaleX(1.5);
            }
            100% {
                transform: scaleX(1);
            }
        }
    }
`;

const Links = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    #link {
        text-decoration: none;
        color: white;
    }

    @media (max-width: 780px) {
        display: none;
        flex-direction: column;
        justify-content: flex-start;
        gap: 20px;
        position: absolute;
        top: 60px;
        /* border: 2px solid white; */
        width: 100vw;
        height: calc(100vh - 60px);
        background-color: black;
        z-index: 1000;
        transform: translateX(-30px);
        position: fixed;
    }
    &.active {
        display: flex;
        opacity: 1;
        /* transform: translateY(0); */
    }
`;

const HamContainer = styled.div`
    display: none;
    color: white;

    @media (max-width: 780px) {
        display: block;
        color: white;
        font-size: 24px;

        
    }
`;

const Button = styled.button`
    width: 200px;
    height: 40px;
`;
