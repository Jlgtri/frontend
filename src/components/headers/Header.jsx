import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { HashLink as Link } from "react-router-hash-link";
import bloxLogo from "../../assets/BLOX-SVG_LOGO.svg";

// const user = {
//   name: "Wallet Address",
//   addresWallet: process.env.REACT_APP_WALLET_ADDRESS,
// };
const navigation = [
  { name: "Home", href: "https://bloxchain.network/", current: true, target: "_blank" },
  { name: "How to Buy", href: "./#how-to-buy", current: false, target: "" },
  { name: "Docs", href: "https://bloxnetwork.gitbook.io/bloxnetwork", current: false, target: "_blank" },
  { name: "Roadmap", href: "https://bloxnetwork.gitbook.io/bloxnetwork/roadmap", current: false, target: "_blank" },
  { name: "Bloxomics", href: "https://bloxnetwork.gitbook.io/bloxnetwork/bloxomics", current: false, target: "_blank" },
  { name: "Airdrops", href: "/", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// useEffect(() => {
//     if(currentTab ==='Buy' || currentTab === 'Send' || currentTab === 'Receive' || currentTab === 'Swap'){
//       const newURL = `/Blox/buy?type=${currentTab}`;
//       window.history.pushState({}, "", newURL);
//     }
//   }, [currentTab])

const Header = () => {
  return (
    <div className="min-h-full relative z-10 bg-black">
      <Disclosure as="nav" className="py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/">
                  <img alt="Your Company" src={bloxLogo} className="w-36" />
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link target={item.target}
                      key={item.name}
                      to={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.current
                          ? "text-Greens"
                          : "text-gray-400 hover:text-green-500",
                        "rounded-md px-3 py-2 text-sm font-normal"
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center md:ml-6 ConnectButtonH">
                {/* <button className="py-2.5 px-4 bg-Green rounded-lg font-medium transition-all hover:bg-green-500 flex items-center gap-1">
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
                  </svg> */}
                <ConnectButton />
                {/* </button> */}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block h-6 w-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden h-6 w-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel className="md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
          <div className="border-t border-gray-700 pb-3 pt-4">
            <div className="flex items-center px-5">
              <ConnectButton />
            </div>
          </div>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default Header;
