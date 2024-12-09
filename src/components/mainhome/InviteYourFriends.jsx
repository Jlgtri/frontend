import { Box, Container, Grid } from "@mui/material";
import React, { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { toast } from "react-toastify";
import { getMe2DecimalPointsWithCommas } from "../../contracts";
import { useSelector } from "react-redux";

const InviteYourFriends = ({ userDetail, userReferralData }) => {

    const { address, isConnected } = useAccount();
    const topTenWallet = useSelector((state) => state.blox.topTenWallets);
    const baseName = process.env.REACT_APP_BASENAME || '';
    const currentUrl = window.location.origin;
    const referralLink = `${currentUrl}${baseName}?ref_address=${address}`;

    const handleCopy = () => {
        navigator.clipboard.writeText(referralLink)
            .then(() => {
                toast.success("Copied to clipboard!");
            })
            .catch(err => {
                toast.error('Failed to copy: ' + err.message);
            });
    };

    const tokens = userDetail.map(obj => parseFloat(obj.purchased_amount) || 0);
    // const userClaimedTokens = userDetail.filter(token => token.status === 1);
    // const userWithoutClaimedTokens = userDetail.filter(token => token.status === 0);
    const userClaimedReferralRewards = userReferralData.filter(token => token.status === 1);
    const userWithoutClaimedReferralRewards = userReferralData.filter(token => token.status === 0);

    const userClaimedReferralRewardsSum = userClaimedReferralRewards.reduce((accumulator, item) => accumulator + parseFloat(item.referral_rewards) || 0, 0);
    const userWithoutClaimedReferralRewardsSum = userWithoutClaimedReferralRewards.reduce((accumulator, item) => accumulator + parseFloat(item.referral_rewards) || 0, 0);

    const sumBoughtTokens = tokens.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // const sumRewardsTokens = referral_rewards.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return (
        <div id="Referral">
            <Box className="text-center mb-10">
                <div className="text-white font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-5">Invite Your Friends</div>
                <div className="text-gradients bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 inline-block text-transparent bg-clip-text text-6xl font-bold">
                    Earn <span className="lg:text-9xl md:text-9xl">10%</span>
                </div>
            </Box>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item lg="12" md="12" sm="12" xs="12">
                        <Box className="bg-color191919 p-4 rounded-xl relative z-10">
                            <Box className="lg:text-4xl md:text-3xl sm:text-2xl text-2xl text-center text-white font-bold py-5">
                                {/* Invite your friend and earn rewards */}
                            </Box>
                            <Box className="relative text-center lg:w-1/2 md:w-1/2 m-auto">
                                <input
                                    placeholder="Connect BLOX wallet first"
                                    value={isConnected ? referralLink : ""}
                                    className="p-3 rounded-md bg-color252525 ring-0 focus:outline-none text-white h-12 w-full"
                                    readOnly
                                />
                                <Box className="absolute top-0 bottom-0 right-1 flex items-center">
                                    {isConnected ? (
                                        <button
                                            onClick={handleCopy}
                                            className="bg-Green px-4 py-2.5 rounded-lg font-medium"
                                        >
                                            Copy Link
                                        </button>
                                    ) : (
                                        <div className="w-full ConnectButton">
                                            <ConnectButton className="w-full" />
                                        </div>
                                    )}
                                </Box>
                            </Box>
                            <div className="mt-8 lg:flex md:flex sm:block block items-center gap-4 justify-around">
                                <div className="text-xl font-medium mb-3">
                                    <span className="text-gray-500 mr-3">Total Reward Earned:</span>
                                    <span className="text-white">${getMe2DecimalPointsWithCommas(userWithoutClaimedReferralRewardsSum + userClaimedReferralRewardsSum)}</span>
                                </div>
                                <div className="text-xl font-medium mb-3">
                                    <span className="text-gray-500 mr-3">$Purchased BLOX:</span>
                                    <span className="text-white">${getMe2DecimalPointsWithCommas(sumBoughtTokens)}</span>
                                </div>
                                <div className="text-xl font-medium mb-3">
                                    <span className="text-gray-500 mr-3">Available BLOX in Wallet:</span>
                                    <span className="text-white">${getMe2DecimalPointsWithCommas(userWithoutClaimedReferralRewardsSum + sumBoughtTokens)}</span>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <Container maxWidth="lg" sx={{ marginTop: '2rem' }}>
                <Grid container spacing={2}>
                    <Grid item lg="12" md="12" sm="12" xs="12">
                        {topTenWallet.length > 0 ? (
                            <Box className="rounded-xl p-2 bg-color191919 overflow-x-auto">
                                <h2 className="text-2xl font-semibold mb-4 text-center text-black p-3 rounded-t-md" style={{ backgroundColor: '#00ff99' }}
                                >
                                    Winner List
                                </h2>
                                <table className="min-w-full">
                                    <thead>
                                        <tr>
                                            <th className="text-left tracking-wider">
                                                <div className="bg-color191919 rounded-sm p-3 text-gray-300 font-normal">Wallet Address</div>
                                            </th>
                                            <th className="text-left tracking-wider min-w-40">
                                                <div className="bg-color191919 rounded-sm p-3 text-gray-300 font-normal">BLOX Earned</div>
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="">
                                        {topTenWallet.map((wallet, index) => (
                                            <tr key={index}>
                                                <td className="">
                                                    <div className={`bg-color191919 rounded-sm p-3 text-gray-300 ${index < 3 ? 'font-bold' : 'font-normal'
                                                        }`}>{wallet.address}
                                                    </div>
                                                </td>
                                                <td className="">
                                                    <div className={`bg-color191919 rounded-sm p-3 text-gray-300 ${index < 3 ? 'font-bold' : 'font-normal'
                                                        }`}>{getMe2DecimalPointsWithCommas(wallet.blox)}</div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Box>

                        ) : (
                            <h2 className="text-2xl font-semibold mb-4 text-center text-black p-3 rounded-t-md" style={{ backgroundColor: '#00ff99' }}
                            >
                                Competition will start at Round 1
                            </h2>
                        )

                        }

                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default InviteYourFriends;
