import { combineReducers } from "redux";

import CourseDataReducer from "./CourseData/reducer";
import SnackBarReducer from "./SnackBar/reducer";
import AppReducer from "./App/reducer";
import UserReducer from "./User/reducer";

const allReducer = combineReducers({
  CourseDataReducer,
  SnackBarReducer,
  AppReducer,
  UserReducer
})

export default allReducer