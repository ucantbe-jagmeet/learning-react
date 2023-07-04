import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ToastContent, toast } from "react-toastify";
import customFetch from "../../utils/axios";
import {
  addUserToLocalStorage,
  getUserToLocalStorage,
} from "../../utils/localStorage";
import {
  ICreateJob,
  IJobSliceInitialState,
  IJobSliceInitialStateFieldPayload,
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
      });
  },
});

export default jobSlice.reducer;
export const { handleChange, clearValues } = jobSlice.actions;
