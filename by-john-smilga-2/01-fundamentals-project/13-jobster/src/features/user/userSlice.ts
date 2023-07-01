import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContent, toast } from "react-toastify";
import { ILoginUser, IRegisterUser, IUserSliceInitialState } from "../../types";
import customFetch from "../../utils/axios";

const initialState: IUserSliceInitialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk<void, IRegisterUser>(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/register", user);
      return resp.data;
    } catch (error) {
      const { msg } = error.respone.data;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const loginUser = createAsyncThunk<void, ILoginUser>(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      const { msg } = error.respone.data;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
