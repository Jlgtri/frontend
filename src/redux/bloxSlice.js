import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    presales: [],
    supportedCurrency: [],
    activePresale: null,
    selectedCurrency: null,
    userDetails: [],
    userReferralData: [],
    topTenWallets: [],
};

export const bloxSlice = createSlice({
    name: 'blox', // Reflects the broader purpose of this slice
    initialState,
    reducers: {
        setPresales: (state, action) => {
            state.presales = action.payload;
        },
        setSupportedCurrency: (state, action) => {
            state.supportedCurrency = action.payload;
        },
        setActivePresale: (state, action) => {
            state.activePresale = action.payload;
        },
        setSelectedCurrency: (state, action) => {
            state.selectedCurrency = action.payload;
        },
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },

        setUserReferralData: (state, action) => {
            state.userReferralData = action.payload;
        },

        setTopTenWallets: (state, action) => {
            state.topTenWallets = action.payload;
        },
    },
});

// Export action creators
export const { setPresales, setSupportedCurrency, setActivePresale, setSelectedCurrency, setUserDetails, setUserReferralData, setTopTenWallets } = bloxSlice.actions;

// Export the reducer
export default bloxSlice.reducer;
