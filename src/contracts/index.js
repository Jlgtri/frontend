import { readContract } from '@wagmi/core'
import { config } from './config'
import priceFeedAbi from './priceFeedAbi.json'

// Function to get the standardized chain ID
const getStandardChainId = (chainId) => {
    if (chainId === 11155111 || chainId === 1) return 1;
    if (chainId === 10 || chainId === 10) return 10;
    if (chainId === 97 || chainId === 56) return 56;
    if (chainId === 137 || chainId === 137) return 137;
    if (chainId === 8453 || chainId === 8453) return 8453;
    if (chainId === 421614 || chainId === 42161) return 42161;
    if (chainId === 59144 || chainId === 59144) return 59144;
    return chainId; // Return the input chainId if it doesn't need mapping
};

// Function to get the contract address based on chain ID
const getContractAddress = (chainId) => {
    switch (chainId) {
        case 1:
            return "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419";
        case 10:
            return "0xb7B9A39CC63f856b90B364911CC324dC46aC1770";
        case 56:
            return "0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE";
        case 137:
            return "0xAB594600376Ec9fD91F8e885dADF0CE036862dE0";
        case 8453:
            return "0x71041dddad3595F9CEd3DcCFBe3D1F4b0a16Bb70";
        case 42161:
            return "0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612";
        case 59144:
            return "0x3c6Cd9Cc7c7a4c2Cf5a82734CD249D7D593354dA";
        default:
            return null;
    }
};


export const latestPriceFeed = async (chainId) => {
    if (!chainId) return;
    try {
        chainId = getStandardChainId(chainId);
        const address = getContractAddress(chainId);
        const result = await readContract(config, {
            abi: priceFeedAbi,
            address: address,
            functionName: 'latestAnswer',
            chainId: chainId
        });
        return result;
    } catch (error) {
        console.log(error, " error")

    }
}

export function getMe2DecimalPointsWithCommas(amount) {
    return Number(amount).toLocaleString('en', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 4
    });
}
