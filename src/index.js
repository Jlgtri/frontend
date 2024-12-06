import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  optimism,
  bsc,
  polygon,
  arbitrum,
  base,
  linea
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const bscTestnet = {
  id: 97,
  name: 'BNB Smart Chain Testnet',
  iconUrl: 'https://flowbite.com/docs/images/logo.svg',
  iconBackground: '#fff',
  nativeCurrency: { name: 'tBNB', symbol: 'tBNB', decimals: 18 },
  rpcUrls: {
    default: { http: ['https://data-seed-prebsc-1-s1.bnbchain.org:8545'] },
  },
  blockExplorers: {
    default: { name: 'BNB Smart Chain Testnet explorer', url: 'https://testnet.bscscan.com' },
  },
  // contracts: {
  //   multicall3: {
  //     address: '0xca11bde05977b3631167028862be2a173976ca11',
  //     blockCreated: 11_907_934,
  //   },
  // },
}


const config = getDefaultConfig({
  appName: 'BLOX TGT',
  projectId: '8dedab8b006f5bd07d155900d143ffe2',
  chains: [mainnet, optimism, bsc, bscTestnet, polygon, arbitrum, base, linea],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider modalSize="wide" locale='en-US'>
          <Provider store={store}>
            <App />
            <ToastContainer />
          </Provider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>

  </React.StrictMode>
);

