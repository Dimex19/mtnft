import { useSyncProviders } from "../hooks/useSyncProviders";
import { MMError } from "../vite-env";
import styled from "styled-components";
import { EIP6963ProviderDetail } from "../vite-env";
import { useState } from "react";

interface ConnectWalletProps {
  setShowConnectWallet: React.Dispatch<React.SetStateAction<boolean>>;
  setUserAccount: React.Dispatch<React.SetStateAction<string | null>>;
}

const ConnectWallet: React.FC<ConnectWalletProps> = ({ setShowConnectWallet, setUserAccount }) => {
  const providers = useSyncProviders();
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail | null>(null);
  const [errorMessage, setErrorMessage] = useState("");

  const clearError = () => setErrorMessage("");
  const setError = (error: string) => setErrorMessage(error);
  const isError = !!errorMessage;

  // const formatAddress = (addr: string) => `${addr.slice(0, 5)}...${addr.slice(-4)}`;

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = (await providerWithInfo.provider.request({
        method: "eth_requestAccounts",
      })) as string[];

      setSelectedWallet(providerWithInfo);
      setUserAccount(accounts[0]); // Save the selected wallet address
      setShowConnectWallet(false); // Close the connect wallet modal
    } catch (error) {
      console.error(error);
      const mmError: MMError = error as MMError;
      setError(`Code: ${mmError.code} \nError Message: ${mmError.message}`);
    }
  };

  return (
    <Wrapper>
      <div className="connectWallet">
        <h2>Wallets Detected:</h2>
        <div className="providers">
          {providers.length > 0 ? (
            providers.map((provider) => (
              <button key={provider.info.uuid} onClick={() => handleConnect(provider)}>
                <img src={provider.info.icon} alt={provider.info.name} />
                <div>{provider.info.name}</div>
              </button>
            ))
          ) : (
            <div>No Announced Wallet Providers</div>
          )}
        </div>
        {/* <hr /> */}
        {/* <h2>{selectedWallet ? "Selected Wallet" : "No Wallet Selected"}</h2> */}
        {selectedWallet && (
          <div className="selectedWallet">
            <img src={selectedWallet.info.icon} alt={selectedWallet.info.name} />
            <div>{selectedWallet.info.name}</div>
          </div>
        )}
        {isError && (
          <div className="mmError" style={{ backgroundColor: "brown" }} onClick={clearError}>
            <strong>Error:</strong> {errorMessage}
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default ConnectWallet;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  transform: translate(-50%, -12%);
  color: white;


  .connectWallet {
    background-color: black;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    width: 70%;
    height: 80%;
  }

  .providers {
    margin: auto;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    gap: 10px;
    max-width: 300px;

    img {
      width: 30px;
      /* border: 1px solid red; */
    }
  }

  .providers button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
    cursor: pointer;
  }

  .selectedWallet {
    margin-top: 10px;
  }

  .mmError {
    margin-top: 10px;
    cursor: pointer;
  }
`;
