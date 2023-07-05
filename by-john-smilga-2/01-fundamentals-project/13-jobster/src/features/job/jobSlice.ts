import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastContent, toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import {
  IAllJobsSliceInitialState,
  ICreateJob,
  IDeleteJob,
  IJob,
  IJobProps,
  IJobSliceInitialState,
  IJobSliceInitialStateFieldPayload,
  ISingleJob,
  RootStateType,
} from "../../@types";
import { AxiosError } from "axios";

export const jobState: IJobSliceInitialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["interview", "declined", "pending"],
  status: "pending",
  isEditing: false,
  editJobId: "",
};

export const createJob = createAsyncThunk<ICreateJob, Partial<ICreateJob>>(
  "job/createJob",
  async (job, { rejectWithValue, getState, dispatch }) => {
    try {
      const resp = await customFetch.post("/jobs", job, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
          }`,
        },
      });
      dispatch(clearValues());
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

export const deleteJob = createAsyncThunk<IDeleteJob, IDeleteJob>(
  "job/deleteJob",
  async ({ jobId }, { rejectWithValue, getState, dispatch }) => {
    const url = `/jobs/${jobId}`;
    dispatch(showLoading());
    try {
      const resp = await customFetch.delete(url, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
          }`,
        },
      });
      dispatch(getAllJobs());
      return resp.data;
    } catch (error) {
      dispatch(hideLoading());
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
export const editJob = createAsyncThunk<IJob, IJob>(
  "job/editJob",
  async ({ jobId, job }, { rejectWithValue, getState, dispatch }) => {
    const url = `/jobs/${jobId}`;
    try {
      const resp = await customFetch.patch(url, job, {
        headers: {
          Authorization: `Bearer ${
            (getState() as RootStateType).user?.user?.token
          }`,
        },
      });
      dispatch(clearValues());
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

const jobSlice = createSlice({
  name: "job",
  initialState: jobState,
  reducers: {
    handleChange: (
      state,
      action: PayloadAction<IJobSliceInitialStateFieldPayload>
    ) => {
      const obj = action.payload;
      if (obj) {
        const { key, value } = obj;
        switch (key) {
          case "isLoading":
            state.isLoading = value;
            break;
          case "position":
            state.position = value;
            break;
          case "company":
            state.company = value;
            break;
          case "jobLocation":
            state.jobLocation = value;
            break;
          case "jobTypeOptions":
            state.jobTypeOptions = value;
            break;
          case "status":
            state.status = value;
            break;
          case "isEditing":
            state.isEditing = value;
            break;
          case "editJobId":
            state.editJobId = value;
            break;
          case "statusOptions":
            state.statusOptions = value;
            break;
          case "jobType":
            state.jobType = value;
            break;
        }
      }
    },
    clearValues: () => {
      return { ...jobState };
    },
    setEditJob: (state, action: PayloadAction<IJobProps>) => {
      return { ...state, isEditing: true, ...action.payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success(" Job Created");
      })
      .addCase(createJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(deleteJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Job Deleted..");
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      })
      .addCase(editJob.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editJob.fulfilled, (state, action) => {
        state.isLoading = false;
        toast.success("Job Modified...");
      })
      .addCase(editJob.rejected, (state, action) => {
        state.isLoading = false;
        const toastContent: ToastContent = action.payload as ToastContent;
        toast.error(toastContent);
      });
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValues, setEditJob } = jobSlice.actions;
