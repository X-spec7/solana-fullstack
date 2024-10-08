import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "./App.css";
 
// Default styles that can be overridden by your app
import "@solana/wallet-adapter-react-ui/styles.css";
 
import IncrementButton from "./components/increment-button";
import CounterState from "./components/counter-state";
 
function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
 
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
    ],
    [network],
  );
 
  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <h1>Hello Solana</h1>
          <CounterState />
          <IncrementButton />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
 
export default App;
