import { http, createConfig } from '@wagmi/core'
import { Web3 } from 'web3';
import { mainnet, bsc, polygon, arbitrum, optimism, base, linea, bscTestnet } from '@wagmi/core/chains'

export const config = createConfig({
    chains: [mainnet, optimism, bsc, bscTestnet, polygon, arbitrum, base, linea],
    transports: {
        [mainnet.id]: http(),
        [bsc.id]: http(),
        [bscTestnet.id]: http(),
        [polygon.id]: http(),
        [arbitrum.id]: http(),
        [optimism.id]: http(),
        [base.id]: http(),
        [linea.id]: http(),
    },
});


const rawUnits = {
    1: "wei",
    3: "kwei",
    6: "mwei",
    9: "gwei",
    12: "szabo",
    15: "finney",
    18: "ether",
    21: "kether",
    24: "mether",
    27: "gether",
    30: "tether"
};

export const web3 = new Web3();

export const getUnitByExponentValue = (value, exponent) => {
    // return rawUnits[exponent] || null;
    return web3.utils.toWei(value.toString(), rawUnits[exponent]);
};
