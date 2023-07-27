import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import UsersData from "../../constants/userData";

const initialState: any = {
  data: null,
  count: 0,
  isLoading: true,
  error: null,
};
// First, create the thunk
const addUser: any = createAsyncThunk(
  "/addUser",
  async (values: any, thunkAPI) => {
    console.log("🚀 ~ file: UserSlice.tsx:14 ~ values:", values);
    try {
      //   const response = await axios.post("/test", values);
      // return response.data;
      UsersData.push(values);
      return UsersData;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      // return rejectWithValue(error?.response?.data);
    }
  },
);

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // standard reducer logic, with auto-generated action types per reducer
  },
  extraReducers: (builder) => {
    builder.addCase(addUser.pending, (state: any, action: any) => {
      state.isLoading = true;
    });

    builder.addCase(addUser.fulfilled, (state: any, action: any) => {
      state.data = action.payload;
      state.isLoading = false;
    });
  },
});
export { addUser };

export default usersSlice;
