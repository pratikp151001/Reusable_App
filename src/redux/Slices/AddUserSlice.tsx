import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import UsersData from "../../constants/userData";

const initialState: any = {
    data: null,
    count: 0,
    isLoading: true,
    error: null,
};
const addUser: any = createAsyncThunk(
    "/addUser",
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

const addUsersSlice = createSlice({
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
        builder.addCase(addUser.rejected, (state: any, action: any) => {
            state.error = action.payload;
            state.isLoading = false;
        });

    },
});
export { addUser };
export default { addUsersSlice }
