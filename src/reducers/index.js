import { combineReducers } from "redux";

import getUserData from "./get_User_data";
import getPostData from "./get_Post_Data";
import getPhotoData from "./get_Photos_Data";
export default combineReducers({
  User_data: getUserData,
  Post_data: getPostData,
  Photos_data: getPhotoData,
});
