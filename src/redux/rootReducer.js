import authReducer from "./auth/authSlice";
import cartReducer from "./cart/cartSlice";
import userPreferencesReducer from "./userPreferences/userPreferencesSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  userPreferences: userPreferencesReducer,
});

export default rootReducer;
