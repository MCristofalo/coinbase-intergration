import logo from "./logo.svg";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import { CoinbaseWallet, Injected } from "./dapp.js";

function App() {
  const { activate, deactivate } = useWeb3React();
  return (
    <div className="App">
      <button
        onClick={() => {
          activate(CoinbaseWallet);
        }}
      >
        Coinbase Wallet
      </button>
      <button
        onClick={() => {
          activate(Injected);
        }}
      >
        Metamask
      </button>

      <button onClick={deactivate}>Disconnect</button>
    </div>
  );
}

export default App;
