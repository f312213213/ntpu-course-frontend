import React from 'react';
import AppRouter from "./AppRouter";
import SnackBars from "../components/SnackBars";
import Alerts from "../components/Alerts";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
      <>
        <Navbar />
        <Alerts />
        <SnackBars />
        <AppRouter />
      </>
  );
};

export default Main;
