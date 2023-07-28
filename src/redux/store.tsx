import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "./Slices/RegisterUserSlice";
import addUsersSlice from "./Slices/AddUserSlice";

const store = configureStore({
  reducer: {
    users: usersSlice.reducer,
    userAdded: addUsersSlice.reducer,
  },
});

export default store;
// export {};
