import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./slices/bookingSlice";
import leadFormReducer from "./slices/leadFormSlice";

export const store = configureStore({
  reducer: {
    leadForm: leadFormReducer,
    booking: bookingReducer,
  },
});

export default store;
