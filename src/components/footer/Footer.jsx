import React from "react";
import { Link } from "react-router-dom";
import bloxLogo from "../../assets/BLOX-SVG_LOGO.svg";

import coinmarketcap from '../../assets/iconsS/coinmarketcap-1.svg';
import discord from '../../assets/iconsS/discover.svg';
import linkdin from '../../assets/iconsS/linkdin.svg';
import medialog from '../../assets/iconsS/m.svg';
import telegram from '../../assets/iconsS/telegram.svg';
import twitter from '../../assets/iconsS/twitter.svg';
import youtube from '../../assets/iconsS/youtube.svg';

const Footer = () => {
    return (
        <div className="py-5 relative isolate overflow-hidden bg-black">
            <div class="flex mt-4 lg:justify-center md:justify-center sm:justify-center justify-center sm:mt-0 lg:gap-3 md:gap-3 sm:gap-2 gap-2">
                <Link to="https://t.me/bloxnetwork" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={telegram} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://www.youtube.com/@BLOXNetworkY" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={youtube} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://coinmarketcap.com/community/profile/BLOXNETWORK/" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={coinmarketcap} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://x.com/BloxNetworkX" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={twitter} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://bloxnetworkm.medium.com/" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={medialog} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://discord.com/invite/CDXuMcTV" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={discord} className="w-6 h-6 animate-pulse" />
                </Link>
                <Link to="https://www.linkedin.com/in/blox-network-26b3a2325/" target="_blank" class="text-green-500 hover:text-green-500 transition-all hover:-mt-2 bg-neutral-900 lg:w-14 md:w-14 sm:w-11 w-11 lg:h-14 md:h-14 sm:h-11 h-11 flex items-center justify-center rounded-full">
                    <img src={linkdin} className="w-6 h-6 animate-pulse" />
                </Link>
            </div>
            <footer class="mt-10">
                <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0 lg:w-1/2 md:w-1/2 sm:w-full w-full">
                            <Link to="/" class="flex items-center">
                                <img src={bloxLogo} class="w-48 me-3" alt="FlowBite Logo" />
                            </Link>
                            <div className="lg:w-1/2 md:w-1/2 sm:w-full w-full mt-5">
                                <p class="mb-2 text-footertext text-sm">
                                    BLOX Network: Redefining the Future. Secure, scalable, and sustainable solutions for digital transactions and asset management. Discover unparalleled innovation and excellence.
                                </p>
                            </div>
                        </div>
                        <div class="flex lg:flex-nowrap md:flex-nowrap flex-wrap gap-8 lg:w-1/2 md:w-1/2 sm:w-full w-full">
                            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2">
                                <h2 class="mb-6 text-sm font-normal text-white uppercase">Product</h2>
                                <ul class="">
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork/blox-ecosystem/blox-validator" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Become a validator
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Developer Guide
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/bloxomics" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Bloxomics
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/partner" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Partner
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/event" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Event
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-1/2">
                                <h2 class="mb-6 text-sm font-normal text-white uppercase">Company</h2>
                                <ul class="">
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/blog/" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Blog
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/career" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Careers
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork/undefined/contact-us" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Contact
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/mediakit" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Media Kit
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full">
                                <h2 class="mb-6 text-sm font-normal text-white uppercase">Resources</h2>
                                <ul class="">
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/community" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Community
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Docs
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="./#how-to-buy" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            How to Buy
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxchain.network/roadmap" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Roadmaps
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="./#Referral" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Referral
                                        </Link>

                                    </li>
                                </ul>
                            </div>
                            <div className="lg:w-1/4 md:w-1/3 sm:w-full w-full">
                                <h2 class="mb-6 text-sm font-normal text-white uppercase">Legal</h2>
                                <ul class="">
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork/undefined/privacy-policy" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Privacy
                                        </Link>
                                    </li>
                                    <li class="mb-4">
                                        <Link target="_blank" to="https://bloxnetwork.gitbook.io/bloxnetwork/undefined/disclaimer" class="hover:text-white transition-all text-footertext font-normal no-underline text-sm">
                                            Disclaimer
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <hr class="my-6 sm:mx-auto border-black lg:my-8" />

                    <div class="sm:flex sm:items-center sm:justify-between justify-center text-center">

                        <span class="flex items-center justify-center text-sm text-gray-500 sm:text-center">
                            © 2024
                            <Link to="/" class="hover:text-green-500 transition-all">
                                BLOX ICO
                            </Link>
                            . All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
