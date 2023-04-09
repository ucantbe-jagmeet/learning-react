import { useState } from "react";

const toggleChallenge = () => {
  const [Value, setValue] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: `vegan food truck` });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      <h2>User Challenge</h2>
      {user ? (
        <div>
          <h4> hello there , {user.name}</h4>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4> Please Login</h4>
          <button className="btn" onClick={login}>
            login
          </button>
        </div>
      )}
      {Value ? <Alert1 /> : <Alert />}
    </div>
  );
};

export default toggleChallenge;
