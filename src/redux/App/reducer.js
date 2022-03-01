import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD7bC7Q5crk0oSSGaXBVNjlwATLAc3YElk",
  authDomain: "ntpu-course.firebaseapp.com",
  projectId: "ntpu-course",
  storageBucket: "ntpu-course.appspot.com",
  messagingSenderId: "587503354902",
  appId: "1:587503354902:web:b1cf52550737ce48096137",
  measurementId: "G-Q7XRP8WQFN"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const AppReducer = (state = {
  app,
  analytics
}, action) => {
  switch (action.type) {
    case 'AppINIT': {
      return {
        app,
        analytics
      }
    }
    default: {
      return state
    }
  }
}

export default AppReducer