import React, { useEffect } from "react";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useAppDispatch, useAppSelector } from "../store";
import { Job, Loading } from ".";
import { IAllJobsSliceInitialState } from "../@types";

const JobsContainer: React.FC = () => {
  const { jobs, isLoading } = useAppSelector<IAllJobsSliceInitialState>(
    (store) => store.allJobs
  );
  const dispatch = useAppDispatch();

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }

  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No Jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>Job Info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
