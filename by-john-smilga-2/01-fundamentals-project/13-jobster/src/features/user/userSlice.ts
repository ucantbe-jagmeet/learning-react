import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ILoginUser, IRegisterUser, IUserSliceInitialState } from "../../types";

const initialState: IUserSliceInitialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk<void, IRegisterUser>(
  "user/registerUser",
  async (user, thunkAPI) => {
    console.log(`Register User : ${JSON.stringify(user)}`);
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
});

export default userSlice.reducer;
