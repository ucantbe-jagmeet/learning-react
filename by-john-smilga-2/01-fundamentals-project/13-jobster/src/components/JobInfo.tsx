import React from "react";
import Wrapper from "../assets/wrappers/JobInfo";
interface IJobInfoProps {
  icon: React.ReactNode;
  text: string;
}
const JobInfo: React.FC<IJobInfoProps> = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
