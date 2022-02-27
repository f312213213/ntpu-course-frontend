import React from 'react';
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch()
  const openSnackBar = () => {
    const snackBarInfo = {
      text: 'Hi SnackBar',
      barType: 'warning',
    }
    dispatch({
      type: 'showSnackBar',
      payload: { snackBarInfo }
    })
  }
  return (
      <div onClick={openSnackBar}>
        Home
      </div>
  );
};

export default Home;
