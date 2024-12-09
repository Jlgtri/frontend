import { Container, Grid } from "@mui/material";
import React from "react";
import mobilesimg from "../../assets/blox-icon.png";
import logoBlackbase from "../../assets/base.svg";

const HowtoBuy = () => {
  return (
    <div className="lg:pb-44 md:pb-32 sm:py-20 py-10" >
      <div className="text-center mb-10">
        <div className="text-white font-bold text-5xl mb-5">How to Buy?</div>
        <div className="text-white font-normal text-1xl">
          Unlock the future of innovation!
        </div>
      </div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item lg="12" md="12" sm="12" xs="12" className="relative">
            <div className="vertical-lr">
              <div className="text-Greens lg:text-2xl md:text-2xl sm:text-xl text-lg">
                Step-1
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 p-4 rounded-xl">
                <div className="mt-5 mb-7 relative">
                  <div className="text-gradients bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 inline-block text-transparent bg-clip-text text-2xl font-medium">
                    Connect your Wallet
                  </div>
                  <div className="gradient_border" />
                </div>
                <div className="">
                  <div className="lg:flex md:flex sm:block block items-center gap-5 justify-start mb-4">
                    <div className="img_row w-20 text-center flex items-center justify-center lg:mb-0 md:mb-0 sm:mb-3 mb-3">
                      <img
                        src={mobilesimg}
                        className="rounded-lg w-full h-full text-center"
                        alt=""
                      />
                    </div>
                    <div className="text-content text-white">
                      Mobile: Open Metamask, Rainbow, WalletConnect or Math Wallet app on your device on your phone
                      visit our website using the integrated browser and click
                      connect. select the app from connect wallet and click
                      Approve
                    </div>
                  </div>
                  <div className="lg:flex md:flex sm:block block items-center gap-5 justify-start mb-4">
                    <div className="img_row w-20 text-center flex items-center justify-center lg:mb-0 md:mb-0 sm:mb-3 mb-3">
                      <img
                        src={mobilesimg}
                        className="rounded-lg w-full h-full text-center"
                        alt=""
                      />
                    </div>
                    <div className="text-content text-white">
                      Desktop: Open Metamask, Rainbow, WalletConnect or Math Wallet app on your desktop browser
                      visit our website using the integrated browser and click
                      connect. select the app from connect wallet and click
                      Approve
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg="12" md="12" sm="12" xs="12" className="relative">
            <div className="vertical-lr">
              <div className="text-Greens lg:text-2xl md:text-2xl sm:text-xl text-lg">
                Step-2
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 p-4 rounded-xl">
                <div className="mt-5 mb-7 relative">
                  <div className="text-gradients bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 inline-block text-transparent bg-clip-text text-2xl font-medium">
                    Select Payment Method
                  </div>
                  <div className="gradient_border gradient_border2" />
                </div>
                <Grid container spacing={2}>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-tether.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with USDT
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-USDC.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with USDC
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-ETH.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with ETH
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-BNB.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with BNB
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-matic.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with MATIC
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/icons-arbitrum-arb.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with ARB
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={require("../../assets/opmainnet.png")}
                            className="rounded-lg w-12 h-12 object-cover"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with OP Mainnet
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg="4" md="4" sm="6" xs="12">
                    <div className="bg-color252525 p-4 rounded-xl h-full">
                      <div className="flex items-center gap-3 justify-start mb-4">
                        <div className="img_row w-16 h-16 bg-black rounded-lg flex items-center justify-center">
                          <img
                            src={logoBlackbase}
                            className="rounded-lg w-12 h-12 object-contain"
                            alt=""
                          />
                        </div>
                        <div className="heading text-2xl text-white font-medium">
                          Buy with ETH in Base
                        </div>
                      </div>
                      <div className="text-content text-white font-normal text-sm">
                        <ul className="ml-4 list-disc">
                          <li className="mb-2">
                            Enter amount of currency/token
                          </li>
                          <li className="mb-2">Press "Buy Now" button</li>
                          <li className="mb-2">
                            Check "Metamask" and "Use default" in custom
                            spending cap
                          </li>
                          <li className="mb-2">Click "Next" and "Approve" </li>
                          <li className="mb-2">Wait for confirmation</li>
                          <li className="mb-2">Click "Approve" again</li>
                        </ul>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          <Grid item lg="12" md="12" sm="12" xs="12" className="relative">
            <div className="vertical-lr">
              <div className="text-Greens lg:text-2xl md:text-2xl sm:text-xl text-lg">
                Step-3
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 p-4 rounded-xl">
                <div className="mt-5 mb-7 relative">
                  <div className="text-gradients bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 inline-block text-transparent bg-clip-text text-2xl font-medium">
                    Check your balance in the dashboard
                  </div>
                  <div className="gradient_border gradient_border3" />
                </div>
                <div className="">
                  <div className="mb-4">
                    <div className="text-content text-white">
                      Once the transaction has been completed and confirmed, you
                      "Connect Wallet" and check your current balance of tokens.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg="12" md="12" sm="12" xs="12" className="relative">
            <div className="vertical-lr">
              <div className="text-Greens lg:text-2xl md:text-2xl sm:text-xl text-lg">
                Step-4
              </div>
            </div>
            <div className="cardBox mb-6">
              <div className="bg-color191919 p-4 rounded-xl">
                <div className="mt-5 mb-7 relative">
                  <div className="text-gradients bg-gradient-to-r from-green-400 via-purple-600 to-sky-400 inline-block text-transparent bg-clip-text text-2xl font-medium">
                    Claim
                  </div>
                  <div className="gradient_border gradient_border4" />
                </div>
                <div className="">
                  <div className="mb-4">
                    <div className="text-content text-white">
                      When the presale ends, you will be able to connect your
                      wallet and claim your tokens. Click the "Claim tokens"
                      button and accept the transaction in Metamask. Rainbow, Wallet Connect or math Wallet.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default HowtoBuy;
