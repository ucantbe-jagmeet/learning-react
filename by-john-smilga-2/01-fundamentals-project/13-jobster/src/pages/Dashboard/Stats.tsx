import React, { useEffect } from "react";
import { StatsContainer, Loading, ChartsContainer } from "../../components";
import { showStats } from "../../features/allJobs/allJobsSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import { AnyAction } from "@reduxjs/toolkit";

const Stats = () => {
  const { isLoading, monthlyApplications } = useAppSelector(
    (store) => store.allJobs
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(showStats() as unknown as AnyAction);
    // eslint-disable-next-line
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};

export default Stats;
