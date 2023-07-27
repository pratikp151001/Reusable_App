import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/UserSlice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export default store;
