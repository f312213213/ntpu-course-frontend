const SNACKBAR_INIT = {
  show: false,
  text: '',
  barType: 'success'
}

const SnackBarReducer = (state = SNACKBAR_INIT, action) => {
  switch (action.type) {
    case 'showSnackBar': {
      return {
        show: true,
        text: action.payload.snackBarInfo.text,
        barType: action.payload.snackBarInfo.barType
      }
    }
    case 'closeSnackBar': {
      return {
        show: false,
        text: '',
        type: ''
      }
    }
    default: {
      return state
    }
  }
}

export default SnackBarReducer