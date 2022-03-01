import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useDispatch} from "react-redux";

const UserReducer = (state = {}, action) => {
  const dispatch = useDispatch
  const auth = getAuth()
  switch (action.type) {
    case 'userSignUp': {
      createUserWithEmailAndPassword(auth, action.payload.account, action.payload.password)
          .then((userCredential) => {
            return userCredential.user
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage)
            return state
          })
    }
    case 'userLogin': {
      signInWithEmailAndPassword(auth, action.payload.account, action.payload.password)
          .then((userCredential) => {
            const user = userCredential.user
            localStorage.setItem('user', JSON.stringify(user))
            return user
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage)
            return state
          })
    }
    case 'userLogout': {
      localStorage.removeItem('user')
      return {}
    }
    default: {
      return state
    }
  }
}

export default UserReducer