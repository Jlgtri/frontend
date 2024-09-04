import { Box, Container, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { getMe2DecimalPointsWithCommas } from "../../contracts";

const PresaleLaunchpad = ({ presale }) => {
    const [tabs, setTabs] = useState("Presale");

    return (
        <div>
            <Box>
                <Box className="text-center">
                    <div className="text-white font-bold text-5xl mb-5">Presale Launchpad</div>
                    <div className="flex items-center gap-4 justify-center my-10">
                        <button
                            className="Private_btn"
                            onClick={() => setTabs("Private")}
                            style={{
                                background: tabs === "Private" ? "var(--green-Color)" : "transparent",
                                color: tabs === "Private" ? "var(--text-color-111)" : "white",
                                borderColor: tabs === "Private" ? "var(--text-color-111)" : "white",
                            }}
                        >
                            Private Round
                        </button>
                        <button
                            className="Private_btn"
                            onClick={() => setTabs("Presale")}
                            style={{
                                background: tabs === "Presale" ? "var(--green-Color)" : "transparent",
                                color: tabs === "Private" ? "white" : "var(--text-color-111)",
                                borderColor: tabs === "Private" ? "white" : "var(--text-color-111)",
                            }}
                        >
                            Presale Round
                        </button>
                    </div>
                </Box>
                <Container maxWidth="lg">
                    {tabs === "Private" && (
                        <Grid container spacing={2}>
                            {presale.map((item, index) => {
                                if (item.name == "Private Sale") {
                                    return (
                                        <Grid item lg="4" md="4" sm="12" xs="12">
                                            <div className="rounded-lg gradientBorder">
                                                <Box className="bg-color191919 rounded-lg p-4 h-full">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-white text-lg font-normal">Private Round</div>
                                                        <div className="flex items-center gap-3 bg-black px-4 py-1.5 rounded">
                                                            <span class="dotLive" />
                                                            <div className="text-Greens font-normal text-sm uppercase">{item.status}</div>
                                                        </div>
                                                    </div>
                                                    <div className="my-4">
                                                        <Divider sx={{ borderColor: "#101010" }} />
                                                    </div>
                                                    <div className="privateSale_list">
                                                        <ul>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Tokens :</span>
                                                                <span className="text-Greens w-1/2">{getMe2DecimalPointsWithCommas(item.tokens)} BLOX</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Price :</span>

                                                                <span className="text-Greens w-1/2">${item.price}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Cliff :</span>

                                                                <span className="text-Greens w-1/2">{item.cliff}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Vesting Period :</span>

                                                                <span className="text-Greens w-1/2">{item.vesting_period}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Vesting Month :</span>
                                                                <span className="text-Greens w-1/2">{item.vesting_month} </span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">TGE Unlock :</span>
                                                                <span className="text-Greens w-1/2">{parseFloat(item?.tge_unlock)}%</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right"></span>

                                                                <span className="text-Greens w-1/2"></span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right"></span>
                                                                <span className="text-Greens w-1/2"></span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Box>
                                            </div>
                                        </Grid>
                                    )
                                }

                            })}
                        </Grid>
                    )}
                    {/* Presale Round  Launchpad area  */}
                    {tabs === "Presale" && (
                        <Grid container spacing={2}>
                            {presale.map((item, index) => {
                                if (item.name !== "Private Sale") {
                                    return (
                                        <Grid item lg="4" md="4" sm="12" xs="12">
                                            <div className="rounded-lg gradientBorder">
                                                <Box className="bg-color191919 rounded-lg p-4 h-full">
                                                    <div className="flex items-center justify-between">
                                                        <div className="text-white text-lg font-normal">Round - {index}</div>
                                                        <div className="flex items-center gap-3 bg-black px-4 py-1.5 rounded">
                                                            <span class="dotLive" />
                                                            <div className="text-Greens font-normal text-sm uppercase">{item.status}</div>
                                                        </div>
                                                    </div>
                                                    <div className="my-4">
                                                        <Divider sx={{ borderColor: "#101010" }} />
                                                    </div>
                                                    <div className="privateSale_list">
                                                        <ul>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Tokens :</span>
                                                                <span className="text-Greens w-1/2">{getMe2DecimalPointsWithCommas(item.tokens)} BLOX</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Price :</span>

                                                                <span className="text-Greens w-1/2">${item.price}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Cliff :</span>

                                                                <span className="text-Greens w-1/2">{item.cliff}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Vesting Period :</span>

                                                                <span className="text-Greens w-1/2">{item.vesting_period}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Vesting Month :</span>
                                                                <span className="text-Greens w-1/2">{item.vesting_month} </span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">TGE Unlock :</span>
                                                                <span className="text-Greens w-1/2">{parseFloat(item?.tge_unlock)}%</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Minimum buy :</span>

                                                                <span className="text-Greens w-1/2">${getMe2DecimalPointsWithCommas(item.minimum_buy)}</span>
                                                            </li>
                                                            <li className="my-5 flex items-center gap-5 justify-between">
                                                                <span className="text-white w-1/2 text-right">Maximum buy :</span>
                                                                <span className="text-Greens w-1/2"> ${getMe2DecimalPointsWithCommas(item.maximum_buy)}</span>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </Box>
                                            </div>
                                        </Grid>

                                    )
                                }

                            })}
                        </Grid>
                    )}
                </Container>
                <div className="text-center my-10">
                    <Link to="./#home">
                        <button className="bg-Green px-8 py-2.5 rounded-lg">
                            BUY NOW
                        </button>
                    </Link>
                </div>

            </Box>
        </div>
    );
};

export default PresaleLaunchpad;
