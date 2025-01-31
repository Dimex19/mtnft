import { useSyncProviders } from "../hooks/useSyncProviders"
import { MMError } from "../vite-env"

import styled from "styled-components"
import { EIP6963ProviderDetail } from "../vite-env"
import { useState } from "react"
const connectWallet:React.FC = () => {
  const providers = useSyncProviders()
  const [selectedWallet, setSelectedWallet] = useState<EIP6963ProviderDetail>()
  const [userAccount, setUserAccount] = useState<string>("")

  const [errorMessage, setErrorMessage] = useState("")
  const clearError = () => setErrorMessage("")
  const setError = (error: string) => setErrorMessage(error)
  const isError = !!errorMessage

  const formatAddress = (addr: string) => {
    const upperAfterLastTwo = addr.slice(0, 2) + addr.slice(2)
    return `${upperAfterLastTwo.substring(0, 5)}...${upperAfterLastTwo.substring(39)}`
  }

  const handleConnect = async (providerWithInfo: EIP6963ProviderDetail) => {
    try {
      const accounts = await providerWithInfo.provider.request({
        method: "eth_requestAccounts"
      }) as string[]

      setSelectedWallet(providerWithInfo)
      setUserAccount(accounts?.[0])
    } catch (error) {
      console.error(error)
      const mmError: MMError = error as MMError
      setError(`Code: ${mmError.code} \nError Message: ${mmError.message}`)
    }
  }

  return (
    <Wrapper>
    <div className="connectWallet">
      <h2>Wallets Detected:</h2>
      <div className="providers">
        {
          providers.length > 0 ? providers?.map((provider: EIP6963ProviderDetail) => (
            <button key={provider.info.uuid} onClick={() => handleConnect(provider)} >
              <img src={provider.info.icon} alt={provider.info.name} />
              <div>{provider.info.name}</div>
            </button>
          )) :
            <div>
              No Announced Wallet Providers
            </div>
        }
      </div>
      <hr />
      <h2>{userAccount ? "" : "No"} Wallet Selected</h2>
      {userAccount &&
        <div className="selectedWallet">
          <img src={selectedWallet?.info.icon} alt={selectedWallet?.info.name} />
          <div>{selectedWallet?.info.name}</div>
          <div>({formatAddress(userAccount)})</div>
        </div>
      }
      <div className="mmError" style={isError ? { backgroundColor: "brown" } : {}}>
        {isError &&
          <div onClick={clearError}>
            <strong>Error:</strong> {errorMessage}
          </div>
        }
      </div>
    </div>
    </Wrapper>
  )
}

export default connectWallet

const Wrapper = styled.div`
    color: white;
    background-color: rgba(255, 255, 255, 0.2);
    min-width: 100vw;
    min-height: 100vh;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
    width: 2em;
    }
    .connectWallet {
        width: 70vw;
        min-height: 80vh;
        text-align: center;
        background-color: black;
        /* border: 1px solid red; */
        margin: auto;
        padding: 20px;
        border-radius: 20px;
    }

    .providers {
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    gap: 1em;

    padding: 0.6em 1.2em;
    }

    .providers button {
    width: 12em;
    }

    
`