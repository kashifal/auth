import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";

const rootReducers = combineReducers({
  authSlice,
});

export default rootReducers;
