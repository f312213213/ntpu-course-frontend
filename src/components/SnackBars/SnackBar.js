import React from 'react';

import { Snackbar, Alert } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

const SnackBar = () => {
  const snackBarStatus = useSelector(state => state.SnackBarReducer)
  const dispatch = useDispatch()
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch({
      type: 'closeSnackBar'
    })
  };
  if (snackBarStatus.barType === 'success') {
    return (
        <Snackbar open={snackBarStatus.show} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={'success'} sx={{ width: '100%' }}>
            {snackBarStatus.text}
          </Alert>
        </Snackbar>
    );
  } else if (snackBarStatus.barType === 'warning') {
    return (
        <Snackbar open={snackBarStatus.show} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={'warning'} sx={{ width: '100%' }}>
            {snackBarStatus.text}
          </Alert>
        </Snackbar>
    );
  } else if (snackBarStatus.barType === 'info') {
    return (
        <Snackbar open={snackBarStatus.show} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={'info'} sx={{ width: '100%' }}>
            {snackBarStatus.text}
          </Alert>
        </Snackbar>
    );
  } else if (snackBarStatus.barType === 'error') {
    return (
        <Snackbar open={snackBarStatus.show} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={'error'} sx={{ width: '100%' }}>
            {snackBarStatus.text}
          </Alert>
        </Snackbar>
    );
  } else {
    return <></>
  }
};

export default SnackBar;
