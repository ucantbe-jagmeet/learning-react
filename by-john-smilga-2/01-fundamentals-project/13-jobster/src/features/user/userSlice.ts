import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
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
    console.log(`Login User : ${JSON.stringify(user)}`);
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
        state.isLoading = true;
        state.user = user;
        toast.success(`Hello there ${user.name}`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
