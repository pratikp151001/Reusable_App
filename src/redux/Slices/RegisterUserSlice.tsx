import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: any = {
  data: null,
  count: 0,
  isLoading: true,
  error: null,
};
// First, create the thunk
const RegisterUser: any = createAsyncThunk(
  "/addUser",
  async (values: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:2221/api/register",
        values,
      );
      console.log("🚀 ~ file: UserSlice.tsx:18 ~ response:", response);
      return response.data.data;

      // return UsersData;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      // return rejectWithValue(error?.response?.data);
    }
  },
);

const LoginUser: any = createAsyncThunk(
  "/LoginUser",
  async (values: any, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:2221/api/login",
        values,
      );
      console.log("🚀 ~ file: UserSlice.tsx:18 ~ response:", response);
      return response.data.data.checkCredentials;

      // return UsersData;
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return error;
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
    builder.addCase(RegisterUser.pending, (state: any, action: any) => {
      state.isLoading = true;
    });

    builder.addCase(RegisterUser.fulfilled, (state: any, action: any) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(RegisterUser.rejected, (state: any, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
    });

    builder.addCase(LoginUser.pending, (state: any, action: any) => {
      state.isLoading = true;
    });

    builder.addCase(LoginUser.fulfilled, (state: any, action: any) => {
      state.data = action.payload;
      console.log(
        "🚀 ~ file: RegisterUserSlice.tsx:79 ~ builder.addCase ~ action.payload:",
        action.payload,
      );
      state.isLoading = false;
      localStorage.setItem("activeUser", action.payload.first_name);
    });
    builder.addCase(LoginUser.rejected, (state: any, action: any) => {
      state.error = action.payload;
      state.isLoading = false;
    });
  },
});
export { RegisterUser, LoginUser };

export default usersSlice;
