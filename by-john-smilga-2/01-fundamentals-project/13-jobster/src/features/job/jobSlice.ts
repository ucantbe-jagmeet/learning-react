import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import { getUserToLocalStorage } from "../../utils/localStorage";
import {
  IJobSliceInitialState,
  IJobSliceInitialStateFieldPayload,
} from "../../@types";
import { FaKeybase } from "react-icons/fa";
import { BsKeyboardFill } from "react-icons/bs";

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
});

export default jobSlice.reducer;
export const { handleChange, clearValues } = jobSlice.actions;
