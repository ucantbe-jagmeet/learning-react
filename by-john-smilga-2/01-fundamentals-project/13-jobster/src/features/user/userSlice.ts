import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContent, toast } from "react-toastify";
import {
  ILoginUser,
  IRegisterUser,
  IUserSliceInitialState,
  IUserData,
  IUser,
} from "../../types";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserToLocalStorage,
  removeUserToLocalStorage,
} from "../../utils/localStorage";

const initialState: IUserSliceInitialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserToLocalStorage(),
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
export const updateUser = createAsyncThunk<void, IUserData>(
  "user/updateUser",
  async (user, thunkAPI) => {
    const currentState: { user: IUser } = thunkAPI.getState();
    console.log(currentState);

    try {
      const resp = await customFetch.post("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${currentState?.user.user.token}`,
        },
      });

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
  reducers: {
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserToLocalStorage();
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
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
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`Welcome Back ${user.name}`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        state.user = user;
        addUserToLocalStorage(user);
        toast.success(`User Updated`);
      })
      .addCase(updateUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        toast.error(payload);
      });
  },
});

export default userSlice.reducer;
export const { toggleSidebar, logoutUser } = userSlice.actions;
