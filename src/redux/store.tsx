import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/RegisterUserSlice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
  },
});

export default store;
// export {};
