import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showStats } from "../../features/allJobs/allJobsSlice";

const Status = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showStats());
  }, []);
  return <h1>Status</h1>;
};

export default Status;
