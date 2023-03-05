import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./reducers/usersSlice";

export const store = configureStore({
  reducer: {
    users: usersSlice,
  },
});
