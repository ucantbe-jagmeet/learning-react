import { useState } from "react";

const toggleChallenge = () => {
  const [Value, setValue] = useState(false);
  const [user, setUser] = useState({ name: "Jagmeet" });

  return (
    <div>
      <h2>User Challenge</h2>
      <h4> {Value ? <Fun name={user.name} /> : <Fun2 />}</h4>
      <button className="btn" onClick={() => setValue(!Value)}>
        {Value ? "Logout" : "Login"}
      </button>
      {Value ? <Alert1 /> : <Alert />}
    </div>
  );
};

const Fun = ({ name }) => {
  return <h4>Hello There, {name}</h4>;
};
const Fun2 = () => {
  return <h4>Please Login</h4>;
};

const Alert = () => {
  return <div className="alert alert-danger">Please Login </div>;
};
const Alert1 = () => {
  return <div className="alert alert-success">Yes you can logout now</div>;
};

export default toggleChallenge;
