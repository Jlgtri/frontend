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


const config = getDefaultConfig({
  appName: 'BLOX TGT',
  projectId: 'e731e6939e5decd2eb8075e801eaa267',
  chains: [mainnet, optimism, bsc, polygon, arbitrum, base, linea],
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

