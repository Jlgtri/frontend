import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import SelectedToken from "./custom/SelectedToken";
import dollImg from "../../assets/dollar.png";
import bloxIcon from "../../assets/blox-icon.png";
import HowtoBuy from "./HowtoBuy";
import PresaleLaunchpad from "./PresaleLaunchpad";
import InviteYourFriends from "./InviteYourFriends";
import CompetitiveAdvantage from "./CompetitiveAdvantage";
import UnlockExclusiveBenefits from "./UnlockExclusiveBenefits";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import { useDispatch, useSelector } from "react-redux";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSendTransaction, useWriteContract } from "wagmi";
import { config, getUnitByExponentValue } from "../../contracts/config";
import tokenAbi from "../../contracts/tokenAbi.json";
import { getBalance } from "@wagmi/core";
import callApi from "../../api/axiosInstance";
import { toast } from "react-toastify";

import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import { setUserDetails, setUserReferralData } from "../../redux/bloxSlice";
import {
  latestPriceFeed,
  getMe2DecimalPointsWithCommas,
} from "../../contracts";
import { HashLink as Link } from "react-router-hash-link";
import PresaleLaunchpadTable from "./PresaleLaunchpadTable";
import TimerCounter from "./custom/TimerCounter";

export function CircularColor() {
  return (
    <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
    </Stack>
  );
}

export const calculateTimeLeft = () => {
  const targetDate = 1726498800;
  const now = Math.floor(Date.now() / 1000);
  const difference = targetDate - now;
  return difference;
};

const Home = () => {
  const dispatch = useDispatch();
  const { data: hash, sendTransactionAsync } = useSendTransaction();
  const { data: hash1, writeContractAsync } = useWriteContract();
  const { isConnected, address, chainId } = useAccount();
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const [target, setTarget] = useState(0);
  const [current, setCurrent] = useState(0);
  const [listPrice, setListPrice] = useState(0);
  const [nextPrice, setNextPrice] = useState(0);
  const [usdtPrice, setUsdtPrice] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  const [cost, setCost] = useState(0);
  const [userBalance, setuserBalance] = useState(null);
  const presales = useSelector((state) => state.blox.presales);
  const activePresale = useSelector((state) => state.blox.activePresale);
  const selectedCurrency = useSelector((state) => state.blox.selectedCurrency);

  // users details--------------------------------------------------------
  const userDetail = useSelector((state) => state.blox.userDetails);
  const userReferralData = useSelector((state) => state.blox.userReferralData);

  // users details end-------------------------------------------------------

  const customReadFunction = async () => {
    try {
      const latestPrice =
        Number(await latestPriceFeed(selectedCurrency?.chain_id)) / 10 ** 8;
      const tokenAddress = selectedCurrency?.contractAddress;
      const usdtPriceLatest = tokenAddress ? 1 : latestPrice;
      setUsdtPrice(usdtPriceLatest > 0 ? usdtPriceLatest : 0);

      if (isConnected) {
        const balance = await getBalance(config, {
          address,
          token: selectedCurrency?.contractAddress,
          chainId: selectedCurrency?.chain_id,
        });
        setuserBalance(
          getMe2DecimalPointsWithCommas(balance.formatted) +
            " " +
            balance.symbol
        );
        return balance;
      } else {
        setuserBalance(0.0);
      }
    } catch (error) {
      console.log(error, " error");
    }
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const ref_address = queryParams.get("ref_address");

  useEffect(() => {
    if (activePresale) {
      setTarget(activePresale.total);
      setCurrent(parseFloat(activePresale.current));
      setListPrice(parseFloat(activePresale.price.current));
      setNextPrice(parseFloat(activePresale.price.next));
      const soldPercentage =
        (Number(activePresale.current) * 100) / Number(activePresale.total);
      setProgress(soldPercentage);
      customReadFunction();
    }
  }, [activePresale, selectedCurrency, isConnected]);

  const handleInputChange = async (e) => {
    try {
      const value = parseFloat(e.target.value); // Ensure value is parsed as a float
      if (isNaN(value) || value <= 0) {
        setCost(0);
        setInputValue("");
        return;
      }

      setInputValue(value);

      const latestPrice =
        Number(await latestPriceFeed(selectedCurrency?.chain_id)) / 10 ** 8;
      const tokenAddress = selectedCurrency?.contractAddress;
      const usdPrice = tokenAddress ? 1 : latestPrice;

      if (!usdPrice || isNaN(usdPrice)) {
        throw new Error("Invalid USD price.");
      }

      const userUsdValue = value * usdPrice;
      const presalePrice = activePresale.presale?.price;

      if (!presalePrice || isNaN(presalePrice)) {
        throw new Error("Invalid presale price.");
      }

      const newTokens = parseFloat(userUsdValue / presalePrice);
      setCost(newTokens);
    } catch (error) {
      console.error("Error calculating cost:", error);
      setCost(0);
      setInputValue(""); // Optionally clear input on error
    }
  };

  // Custom function to handle the transaction
  const handleSendTransaction = async () => {
    try {
      const balances = await customReadFunction();
      const formatted = balances?.formatted;
      const decimals = balances?.decimals;

      // Check if the chainId is correct
      if (chainId !== selectedCurrency?.chain_id) {
        toast.error(
          "Your selected currency and connected network do not match"
        );
        return;
      }

      if (Number(inputValue) >= Number(formatted)) {
        toast.error("Insufficient Balance!");
        return;
      }
      if (Number(inputValue) <= 0 || inputValue === "") {
        toast.error(`Amount should be greater than 0`);
        return;
      }

      const latestPrice =
        Number(await latestPriceFeed(selectedCurrency?.chain_id)) / 10 ** 8;
      const tokenAddress = selectedCurrency?.contractAddress;
      const usdPrice = tokenAddress ? 1 : latestPrice;

      if (!usdPrice || isNaN(usdPrice)) {
        throw new Error("Invalid USD price.");
      }

      const userUsdValue = inputValue * usdPrice;
      // Calculate the remaining tokens available in the presale
      const leftTokens = activePresale.total - activePresale.current;

      // Check if the user is trying to buy the last available tokens
      if (
        leftTokens < Number(activePresale.presale.minimum_buy) &&
        userUsdValue <= leftTokens
      ) {
        if (userUsdValue < 1) {
          toast.error("Minimum purchase amount should be $1.");
          return;
        }
        // console.log('Proceeding with the purchase as this is the last available amount.');
        // Proceed with the purchase logic here
      } else {
        // Check if the purchase amount is below the minimum allowed value
        if (Number(userUsdValue) < Number(activePresale.presale.minimum_buy)) {
          const minimumBuy = activePresale.presale.minimum_buy;
          toast.error(`The minimum purchase amount is $${minimumBuy}.`);
          return;
        }

        // Check if the purchase amount exceeds the maximum allowed value
        if (Number(userUsdValue) > Number(activePresale.presale.maximum_buy)) {
          const maximumBuy = activePresale.presale.maximum_buy;
          toast.error(`The maximum purchase amount is $${maximumBuy}.`);
          return;
        }

        // Check if the purchase exceeds the available tokens
        if (activePresale.current + userUsdValue > activePresale.total) {
          toast.error(
            `You cannot purchase more than the available amount. Only $${leftTokens} worth of tokens are remaining.`
          );
          return;
        }
      }

      // // Convert the inputValue to the appropriate unit
      const weiValue = await getUnitByExponentValue(inputValue, decimals);

      if (
        ref_address &&
        address &&
        address.toLowerCase() === ref_address.toLowerCase()
      ) {
        toast.error("You cannot use your own referral code.");
        return;
      }

      setLoading(true);
      // Proceed with token transfer if tokenAddress is provided
      if (tokenAddress) {
        // console.log("Initiating token transfer");

        const hash = await writeContractAsync({
          abi: tokenAbi,
          address: tokenAddress,
          functionName: "transfer",
          args: [process.env.REACT_APP_WALLET_ADDRESS, weiValue],
          chainId,
        });

        console.log(`Token Transaction hash: ${hash}`);

        const response = await callApi({
          method: "POST",
          url: "/transactions",
          data: {
            trx_hash: hash,
            currency: selectedCurrency?.symbol,
            chainId,
            ref_address,
          },
        });
        setLoading(false);
        toast.success(response?.message);
      } else {
        // If no tokenAddress is provided, perform a direct transfer
        const result = await sendTransactionAsync({
          to: process.env.REACT_APP_WALLET_ADDRESS,
          value: weiValue,
          chainId: chainId,
        });

        console.log(`Native Currency Transaction hash: ${result}`);

        const response = await callApi({
          method: "POST",
          url: "/transactions",
          data: {
            trx_hash: result,
            currency: selectedCurrency?.symbol,
            chainId,
            ref_address,
          },
        });
        setLoading(false);
        toast.success(response?.message);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Transaction Failed");
    }
  };

  useEffect(() => {
    async function updateUserDetails() {
      if (isConnected) {
        try {
          const userDetails = await callApi({
            method: "GET",
            url: `/balance/${address}`,
            data: {},
          });
          dispatch(setUserDetails(userDetails?.result));
          dispatch(setUserReferralData(userDetails?.referralData));
        } catch (error) {
          console.error("Error fetching user details:", error);
        }
      }
    }

    updateUserDetails();
  }, [address, isConnected, loading]);

  // Initialize state with the initial calculation
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  return (
    <>
      <Box
        sx={{ paddingY: { lg: "8rem", md: "7rem", xs: "3rem", sm: "3rem" } }}
        className="relative isolate"
      >
        <div Id="home">
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item lg="12" md="12" sm="12" xs="12"></Grid>
              <Grid item lg="12" md="12" sm="12" xs="12">
                <div>
                  <TimerCounter />
                </div>
                <div className="card-color rounded-2xl lg:p-6 md:p-8 sm:p-5 p-3">
                  <div className="progress_liver_content">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <div className="list_presale flex items-center gap-3">
                        <span className="dotLive"></span>
                        <h4 className="text-white lg:text-xl md:text-xl sm:text-lg text-lg">
                          Presale is {activePresale?.status}
                        </h4>
                      </div>
                      <div className="">
                        <h4 className="text-white lg:text-3xl md:text-3xl sm:text-2xl text-xl">
                          {activePresale?.presale?.name}
                        </h4>
                      </div>
                      <div className="raised_prices flex items-center gap-3">
                        <span className="text-white text-lg">Raised:</span>
                        <div className="lg:text-2xl md:text-2xl sm:text-xl text-lg font-medium text-Greens">
                          ${getMe2DecimalPointsWithCommas(current)}
                        </div>
                      </div>
                    </div>
                    <div className="progressBars my-3">
                      <ProgressBar progress={progress} />
                    </div>
                    <div className="text-right text-white text-lg">
                      Target: ${getMe2DecimalPointsWithCommas(target)}
                    </div>
                  </div>
                  <div className=" lg:w-1/2 md:w-1/2 sm:w-full w-full mb-3 m-auto">
                    <div className="bg-zinc-800 p-3 rounded-xl">
                      <div className="text-center text-2xl text-white flex items-center gap-7 justify-center">
                        <span>Listing Price </span>
                        <span className="text-Greens">$0.032</span>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex md:flex sm:block block gap-4 mb-4">
                    <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full mb-1">
                      <div className="bg-zinc-800 p-3 rounded-xl">
                        <div className="text-center text-white flex items-center gap-7 justify-center">
                          <span>Current Round Price </span>
                          <span className="text-Greens">${listPrice}</span>
                        </div>
                      </div>
                    </div>

                    <div className=" lg:w-1/2 md:w-1/2 sm:w-full w-full mb-1">
                      <div className="bg-zinc-800 p-3 rounded-xl">
                        <div className="text-center text-white flex items-center gap-7 justify-center">
                          <span>Next Round Price </span>
                          <span className="text-Greens">${nextPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="stakingSwap relative">
                    <div className="absolute lg:top-0 md:top-0 sm:top-0 top-0 left-0 bottom-0 right-0 m-auto flex items-center justify-center rounded-full">
                      <img
                        src={bloxIcon}
                        className="lg:w-20 md:w-20 sm:w-10 w-10 lg:h-20 md:h-20 sm:h-10 h-10 rounded-full bg-white p-1"
                        alt=""
                      />
                    </div>
                    <div className="lg:flex md:flex sm:block block gap-4 mb-4">
                      <div className="bg-black p-6 rounded-xl lg:w-1/2 md:w-1/2 sm:w-full w-full h-36 mb-1">
                        <div className="text-center text-gray-500 font-medium text-xl">
                          <span>Select Payment method</span>
                        </div>
                        <div className="my-3">
                          <SelectedToken />
                        </div>
                      </div>
                      <div className="bg-black p-6 rounded-xl lg:w-1/2 md:w-1/2 sm:w-full w-full h-36 mb-1">
                        <div className="text-center flex items-center gap-3 justify-center text-xl">
                          <span className="text-gray-500 font-medium">
                            USD Price:
                          </span>
                          <span className="text-white font-medium">
                            ${getMe2DecimalPointsWithCommas(usdtPrice)}
                          </span>
                        </div>
                        <div className="my-3">
                          <div className=" relative">
                            <div className="absolute top-0 left-2 bottom-0 flex items-center">
                              <img
                                src={dollImg}
                                className="w-6 h-6 rounded-full"
                                alt=""
                              />
                            </div>
                            <input
                              onChange={handleInputChange}
                              type="text"
                              min={0}
                              className="w-full rounded-xl h-12 py-2.5 pr-4 pl-10 bg-zinc-800 ring-0 focus:outline-none text-right text-white"
                              placeholder="0"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="lg:flex md:flex sm:block block gap-4 mb-4">
                      <div className="bg-black p-6 rounded-xl lg:w-1/2 md:w-1/2 sm:w-full w-full h-36 mb-1">
                        <div className="text-center flex items-center gap-3 justify-center text-xl">
                          <span className="text-gray-500 font-medium">
                            Balance:
                          </span>
                          <span className="text-white font-medium">
                            {userBalance ? userBalance : "0.00"}
                          </span>
                        </div>
                        <div className="border-t-2 border-zinc-800 h-1 my-3" />
                        {/* <div className="text-center text-white font-medium text-xl">BLOX</div> */}
                      </div>
                      <div className="bg-black p-6 rounded-xl lg:w-1/2 md:w-1/2 sm:w-full w-full h-36 mb-1">
                        <div className="text-center flex items-center gap-3 justify-center text-xl">
                          <span className="text-gray-500 font-medium">
                            You will receive:
                          </span>
                          <span className="text-white font-medium">
                            {getMe2DecimalPointsWithCommas(cost) + " BLOX"}
                          </span>
                        </div>
                        <div className="border-t-2 border-zinc-800 h-1 my-3" />
                        {/* <div className="text-center">
                                                    <span className="text-white font-medium text-xl">0</span>
                                                </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="my-5">
                    {isConnected ? (
                      loading ? (
                        <button className="py-3 px-4 w-full bg-Green rounded-lg font-medium transition-all hover:bg-green-500 flex items-center justify-center gap-1">
                          <CircularColor />
                        </button>
                      ) : (
                        <button
                          disabled={timeLeft > 0 ? true : false}
                          onClick={handleSendTransaction}
                          className="py-3 px-4 w-full bg-Green rounded-lg font-medium transition-all hover:bg-green-500 flex items-center justify-center gap-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 text-black"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                            />
                          </svg>
                          Buy Now
                        </button>
                      )
                    ) : (
                      <div className="w-full ConnectButton">
                        <ConnectButton className="w-full" />
                      </div>
                    )}
                  </div>

                  <div className="text-center text-white font-normal">
                    <span>
                      <Link to="./#how-to-buy">How to Buy?</Link> |{" "}
                      <Link to="./#Referral">Referral</Link>{" "}
                    </span>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </div>

        {userDetail && userDetail.length > 0 && (
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item lg="12" md="12" sm="12" xs="12">
                <Box className="text-center mt-16">
                  <div className="text-white font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-5">
                    Activity
                  </div>
                </Box>
                <div className="tablesArea text-white">
                  <PresaleLaunchpadTable />
                </div>
              </Grid>
            </Grid>
          </Container>
        )}
      </Box>
      <div id="how-to-buy">
        <HowtoBuy />
      </div>
      <Box className="relative isolate">
        <PresaleLaunchpad presale={presales} />
      </Box>
      <Box
        sx={{ paddingY: { lg: "5rem", md: "4rem", xs: "3rem", sm: "3rem" } }}
      >
        <InviteYourFriends
          userDetail={userDetail}
          userReferralData={userReferralData}
        />
      </Box>
      <Box
        sx={{
          paddingBottom: { lg: "5rem", md: "4rem", xs: "3rem", sm: "3rem" },
        }}
        className="relative isolate"
      >
        <CompetitiveAdvantage />
      </Box>
      <Box
        sx={{ paddingY: { lg: "5rem", md: "4rem", xs: "3rem", sm: "3rem" } }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} alignItems={"center"}>
            <Grid item lg="8" md="8" sm="12" xs="12" margin="auto">
              <Box className="lg:mb-52 md:mb-48 sm:mb-36 mb-36">
                <Box className="text-white text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-5">
                  Staking
                </Box>
              </Box>
              <Box className="text-center relative">
                <img
                  src={require("../../assets/blox-token.png")}
                  className="m-auto blox-token-img lg:w-36 md:w-36 sm:w-28 w-28 lg:h-36 md:h-3w-36 sm:h-28 h-28 "
                  alt=""
                />
                <img
                  src={require("../../assets/staking-img.png")}
                  className="w-full m-auto relative lg:left-10 md:left-10 sm:left-4 left-5"
                  alt=""
                />
              </Box>
              <Box className="my-5">
                <div className="text-center text-white mb-3">
                  Staking BLOX Coins lets holders contribute to blockchain
                  operations and earn reward without giving up ownership of
                  their assets. The BLOX Staking program is big and
                  groundbreaking making it easy and rewarding to participate.
                  Plus, it includes an affilite program where users an earn even
                  more by initing others to join this exciting staking
                  opportunity.
                </div>
                <div className="text-center text-white">
                  BLOX Coin operations. By staking their BLOX Coin, holders can
                  earn rewards while retaining ownership of their assets
                </div>
              </Box>
              <div className="text-center">
                <button className="Coming-Soon-Btn">Coming Soon</button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        sx={{ paddingY: { lg: "5rem", md: "4rem", xs: "3rem", sm: "3rem" } }}
      >
        <UnlockExclusiveBenefits />
      </Box>
      <Box>
        <FrequentlyAskedQuestion />
      </Box>
    </>
  );
};

export default Home;
