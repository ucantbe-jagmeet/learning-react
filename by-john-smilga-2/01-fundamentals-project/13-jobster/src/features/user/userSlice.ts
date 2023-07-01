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
      const resp = await customFetch.post("/auth/testingRegister", user);
      console.log(resp);
    } catch (error) {
      toast.error(error.response.data.msg);
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
});

export default userSlice.reducer;
