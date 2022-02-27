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
      <div className={'bg-custom-100 w-full h-screen'}>
        <div onClick={openSnackBar}>
          Home
        </div>
      </div>
  );
};

export default Home;
