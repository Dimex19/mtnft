import styled from "styled-components";
import Logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import ConnectWallet from "./connectWallet";

const Header: React.FC = () => {
  const [showHamburger, setShowHamburger] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showConnectWallet, setShowConnectWallet] = useState<boolean>(false);
  const [userAccount, setUserAccount] = useState<string | null>(null); // Store connected wallet address

  const connectButtonOnClick = () => {
    setShowConnectWallet(!showConnectWallet);
  };

  const hamburger = () => {
    setShowMenu(!showMenu);
    setShowHamburger(true);
  };

  return (
    <Container>
      <img src={Logo} alt="Logo" />
      <Links className={`nav-links ${showMenu ? "active" : ""}`}>
        <Link to="/" id="link">
          Home
        </Link>
        <Link to="/collections" id="link">
          Collections
        </Link>
        <Link to="/foundation" id="link">
          Foundation
        </Link>
        <Button onClick={connectButtonOnClick}>
          {userAccount ? `${userAccount.slice(0, 5)}...${userAccount.slice(-4)}` : "Connect Wallet"}
        </Button>
      </Links>
      <HamContainer className={`hamburger ${showHamburger ? "close" : ""}`} onClick={hamburger}>
        <GiHamburgerMenu />
      </HamContainer>
      {showConnectWallet && (
        <ConnectMenu>
          <ConnectWallet
            setShowConnectWallet={setShowConnectWallet}
            setUserAccount={setUserAccount}
          />
        </ConnectMenu>
      )}
    </Container>
  );
};

export default Header;

const ConnectMenu = styled.div`
  position: absolute;
  z-index: 100000;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

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
        transform: translateX(-12.8%);
        position: fixed;
    }
    &.active {
        display: flex;
        opacity: 1;
    }
`;

const HamContainer = styled.div`
  display: none;
  color: white;

  @media (max-width: 780px) {
    display: block;
    font-size: 24px;
  }
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
`;
