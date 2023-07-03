import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast, ToastContent } from "react-toastify";
import {
  ILoginUser,
  IRegisterUser,
  IUserSliceInitialState,
  IUserData,
  RootStateType,
} from "../../types";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserToLocalStorage,
  removeUserToLocalStorage,
} from "../../utils/localStorage";
import { AxiosError } from "axios";
import "react-toastify/dist/ReactToastify.css";

const initialState: IUserSliceInitialState = {
  isLoading: false,
  isSidebarOpen: false,
  user: getUserToLocalStorage(),
};

export const registerUser = createAsyncThunk<
  IRegisterUser,
  Partial<IRegisterUser>
>("user/registerUser", async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
    // unhandled non-AxiosError goes here
    throw error;
  }
});

export const loginUser = createAsyncThunk<ILoginUser, Partial<ILoginUser>>(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/login", user);
      return resp.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        return thunkAPI.rejectWithValue(message);
      }
      throw error;
    }
  }
);

export const updateUser = createAsyncThunk<IUserData, Partial<IUserData>>(
  "user/updateUser",
  async (user, { rejectWithValue, getState, dispatch }) => {
    // const currentState: { user: IUserData } = (getState() as RootStateType)
    //   .auth;
    try {
      const resp = await customFetch.patch("/auth/updateUser", user, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
          }`,
        },
      });
      return resp.data;
    } catch (error) {
      if (error instanceof AxiosError) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        if (error && error.response && error.response.status === 401) {
          dispatch(logoutUser());
          return rejectWithValue(`Unauthorized! logging out...`);
        }
        return rejectWithValue(message);
      }
      throw error;
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
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Hello there ${user.name}`);
        }
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`Hello there ${user.name}`);
        }
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.isLoading = false;
        if (user) {
          state.user = user;
          addUserToLocalStorage(user);
          toast.success(`User Updated`);
        }
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      });
  },
});

export default userSlice.reducer;
export const { toggleSidebar, logoutUser } = userSlice.actions;
