import FAKE_DATA from "../../FAKE_DATA";

const CourseDataReducer = (state = FAKE_DATA, action) => {
  switch (action.type) {
    case 'courseDataInit':
      return action.payload.courseData
    case 'courseDataAdd':
      return action.payload.courseData
    default:
      return state
  }
}

export default CourseDataReducer