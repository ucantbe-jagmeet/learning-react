import { useState } from "react";

const UserChallenge = () => {
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
          <button className="btn" onClick={() => setUser(null)}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4> Please Login</h4>
          <button
            className="btn"
            onClick={() => setUser({ name: `vegan food truck` })}
          >
            login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
