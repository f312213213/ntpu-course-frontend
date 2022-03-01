import React, {useEffect} from 'react';
import AppRouter from "./AppRouter";
import SnackBars from "../components/SnackBars";
import Alerts from "../components/Alerts";
import Navbar from "../components/Navbar";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {
  const appConfig = useSelector(state => state.AppReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!appConfig){
      dispatch({type: 'AppINIT'})
    }
  }, [])
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
