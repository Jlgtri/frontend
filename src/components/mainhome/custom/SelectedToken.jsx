import React, { useState, useEffect } from "react";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedCurrency } from "../../../redux/bloxSlice";
import { useAccount } from "wagmi";

const SelectedToken = () => {
    const { chainId } = useAccount();
    const dispatch = useDispatch();
    const supportedCurrencys = useSelector((state) => state.blox.supportedCurrency);
    const chainIds = [...new Set(supportedCurrencys.map(currency => currency.chain_id))];
    const supportedChain = chainIds.find(id => id === chainId);
    const supportedCurrency = supportedChain ? supportedCurrencys.filter(currency => currency.chain_id === chainId) : supportedCurrencys;

    const [selected, setSelected] = useState(null);

    useEffect(() => {
        if (supportedCurrency.length > 0) {
            const defaultCurrency = selected?.chain_id === chainId ? selected : supportedCurrency[0];
            setSelected(defaultCurrency);
            dispatch(setSelectedCurrency(defaultCurrency));
        }
    }, [supportedCurrency, selected, chainId, dispatch]);

    if (!supportedCurrency || supportedCurrency.length === 0) {
        return <div>Loading...</div>;
    }

    const handleChange = (currency) => {
        setSelected(currency); // Update local state
        dispatch(setSelectedCurrency(currency)); // Dispatch the selected currency to Redux store
    };

    return (
        <Listbox value={selected} onChange={handleChange}>
            <div className="relative">
                <ListboxButton className="relative w-full cursor-default rounded-xl bg-zinc-800 py-2.5 pl-3 pr-10 text-left text-white shadow-sm focus:outline-none sm:text-sm">
                    <span className="flex items-center">
                        {selected && selected?.name && (
                            <img
                                alt={selected.name || "Selected token"}
                                src={`${process.env.REACT_APP_API_URL}/${selected.image}`}
                                className="h-6 w-6 flex-shrink-0 rounded"
                            />
                        )}

                        <span className="ml-3 block truncate">{selected?.name || "Select a token"}</span>
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                        <ChevronUpDownIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                    </span>
                </ListboxButton>

                <ListboxOptions className="scrollBars absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-zinc-800 py-1 text-base shadow-lg focus:outline-none sm:text-sm">
                    {supportedCurrency.map((currency) => (
                        <ListboxOption
                            key={currency.id}
                            value={currency}
                            className={({ active }) =>
                                `relative cursor-default select-none py-2 pl-3 pr-9 ${active ? 'bg-Green text-white' : 'text-white'
                                }`
                            }
                        >
                            <div className="flex items-center">
                                <img
                                    alt={currency?.name || "Currency"}
                                    src={`${process.env.REACT_APP_API_URL}/${currency?.image}`}
                                    className="h-7 w-7 flex-shrink-0 rounded-full object-contain"
                                />
                                <span className={`ml-3 block truncate ${selected?.id === currency.id ? 'font-semibold' : 'font-normal'}`}>
                                    {currency.name}
                                </span>
                            </div>

                            {selected?.id === currency.id && (
                                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                                    <CheckIcon aria-hidden="true" className="h-5 w-5" />
                                </span>
                            )}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
};


export default SelectedToken;
