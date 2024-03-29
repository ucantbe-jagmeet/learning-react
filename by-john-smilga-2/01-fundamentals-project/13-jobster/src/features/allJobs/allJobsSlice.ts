import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ToastContent, toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { IAllJobsSliceInitialState, RootStateType } from "../../@types";
import { AxiosError } from "axios";

const intialFiltersState = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState: IAllJobsSliceInitialState = {
  isLoading: false,
  jobs: [],
  totalJobs: 0,
  numOfPages: 1,
  page: 0,
  stats: {},
  monthlyApplications: [],
  ...intialFiltersState,
};
export const getAllJobs = createAsyncThunk<IAllJobsSliceInitialState>(
  "allJobs/getJobs",
  async (_, { rejectWithValue, getState }) => {
    const { page, search, searchStatus, searchType, sort } = (
      getState() as RootStateType
    ).user.allJobs;

    let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
    if (search) {
      url = url + `&search=${search}`;
    }
    try {
      const resp = await customFetch.get(url, {
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
        return rejectWithValue(message);
      }
      // unhandled non-AxiosError goes here
      throw error;
    }
  }
);

export const showStats = createAsyncThunk(
  "allJobs/showStats",
  async (_, { rejectWithValue, getState }) => {
    const url = `jobs/stats`;
    try {
      const resp = await customFetch.get(url, {
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
        return rejectWithValue(message);
      }
      throw error;
    }
  }
);

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    showLoading: (state) => {
      state.isLoading = true;
    },
    hideLoading: (state) => {
      state.isLoading = false;
    },
    handleChange: (state, { payload: { name, value } }) => {
      state.page = 1;
      state[name] = value;
    },
    clearFilters: (state) => {
      return { ...state, ...intialFiltersState };
    },
    changePage: (state, { payload }) => {
      state.page = payload;
    },
    clearAllJobsState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllJobs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllJobs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jobs = action.payload.jobs;
        state.numOfPages = action.payload.numOfPages;
        state.totalJobs = action.payload.totalJobs;
      })
      .addCase(getAllJobs.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(showStats.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showStats.fulfilled, (state, action) => {
        state.isLoading = false;
        state.stats = action.payload.defaultStats;
        state.monthlyApplications = action.payload.monthlyApplications;
      })
      .addCase(showStats.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      });
  },
});

export default allJobsSlice.reducer;
export const {
  showLoading,
  hideLoading,
  handleChange,
  clearFilters,
  changePage,
} = allJobsSlice.actions;
