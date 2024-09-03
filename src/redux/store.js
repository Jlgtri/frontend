import { configureStore } from '@reduxjs/toolkit';
import bloxReducer from './bloxSlice'; // Import the correct slice reducer

// Create the Redux store
const store = configureStore({
    reducer: {
        blox: bloxReducer, // Match the key with the slice name
        // You can add more reducers here if needed
    },
    // Optionally, you can configure middleware, dev tools, etc.
});

export default store;
