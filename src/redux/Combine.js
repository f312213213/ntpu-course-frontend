import { combineReducers } from "redux";

import CourseDataReducer from "./CourseData/reducer";
import SnackBarReducer from "./SnackBar/reducer";

const allReducer = combineReducers({
  CourseDataReducer,
  SnackBarReducer
})

export default allReducer