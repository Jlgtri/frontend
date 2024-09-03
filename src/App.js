import React, { useEffect } from "react";
import Header from "./components/headers/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/mainhome/Home";
import Footer from "./components/footer/Footer";
import callApi from "./api/axiosInstance";
import { useDispatch } from 'react-redux';
import { setActivePresale, setPresales, setSupportedCurrency, setTopTenWallets } from "./redux/bloxSlice";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function callApiResponse() {
      try {
        const currency = await callApi({ method: 'GET', url: '/payment/methods' });
        dispatch(setSupportedCurrency(currency));
      } catch (error) {
        console.error("Error fetching payment methods:", error);
      }

      try {
        const presales = await callApi({ method: 'GET', url: '/presales' });
        dispatch(setPresales(presales));
      } catch (error) {
        console.error("Error fetching presales:", error);
      }

      try {
        const activePresale = await callApi({ method: 'GET', url: '/presale' });
        dispatch(setActivePresale(activePresale));
      } catch (error) {
        console.error("Error fetching active presale:", error);
      }

      try {
        const topTenWallets = await callApi({ method: 'GET', url: '/topTenWallets' });
        dispatch(setTopTenWallets(topTenWallets));
      } catch (error) {
        console.error("Error fetching active presale:", error);
      }
    }

    callApiResponse();
  }, [dispatch]); // Dispatch is included as a stable dependency


  const basename = process.env.REACT_APP_BASENAME || '/';

  return (
    <BrowserRouter basename={basename}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
