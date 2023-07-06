import React, { useEffect } from "react";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useAppDispatch, useAppSelector } from "../../store";
import { toast } from "react-toastify";
import { FormRow } from "../../components";
import { IJobSliceInitialState } from "../../@types";
import FormRowSelect from "../../components/FormRowSelect";
import {
  clearValues,
  handleChange,
  createJob,
  editJob,
  jobState,
} from "../../features/job/jobSlice";
import { AnyAction } from "@reduxjs/toolkit";

const AddJob: React.FC = () => {
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobTypeOptions,
    jobType,
    statusOptions,
    status,
    isEditing,
    editJobId,
  } = useAppSelector<IJobSliceInitialState>((store) => store.job);

  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error("Please Fill Out All Fields");
      return;
    }
    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        }) as unknown as AnyAction
      );
      return;
    }

    dispatch(
      createJob({
        position,
        company,
        jobLocation,
        jobType,
        status,
      }) as unknown as AnyAction
    );
  };

  const handleJobInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const key = e.target.name as keyof typeof jobState;
    const value = e.target.value;
    dispatch(handleChange({ key, value }) as unknown as AnyAction);
  };

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isEditing ? "edit job" : "add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
            labelText="Position"
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
            labelText="Company"
          />
          {/* location */}
          <FormRow
            type="text"
            name="jobLocation"
            value={jobLocation}
            handleChange={handleJobInput}
            labelText="Job Location"
          />

          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />

          <FormRowSelect
            name="jobType"
            labelText="job type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />

          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearValues())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              disabled={isLoading}
            >
              {isLoading ? "Please wait..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

export default AddJob;
