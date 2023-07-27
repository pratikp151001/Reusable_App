import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  data: null,
  isLoading: false,
  error: null,
};

export const addUsersAction = createAsyncThunk("users/getUsers", async () => {
  console.log("ddddddddd");
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
    );
    console.log("🚀 ~ file: UserSlice.tsx:17 ~ response:", response);
    return response.data;
  } catch (error: any) {
    if (!error.response) {
      throw error;
    }
    // return rejectWithValue(error?.response?.data);
  }
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // addUser(state, action) {
    //   console.log("Reducer Called", action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(addUsersAction.fulfilled, (state, action) => {
      console.log(
        "🚀 ~ file: UserSlice.tsx:36 ~ builder.addCase ~ action:",
        action.payload,
      );
      state.data = action?.payload;
    });
  },
});
// export const { addUser } = userSlice.actions;
export { userSlice };
