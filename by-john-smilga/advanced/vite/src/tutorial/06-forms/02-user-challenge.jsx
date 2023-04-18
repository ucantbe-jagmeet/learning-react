import { useState } from "react";
import data from "../../data.js";
const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();

    const newUser = { id: fakeId, name };
    const updatedUsers = [...user, newUser];

    setUser(updatedUsers);
    setName("");
  };

  const handleList = (id) => {
    const updatedUsers = user.filter((person) => person.id !== id);
    setUser(updatedUsers);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name=""
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>
      {user.map((item) => {
        return (
          <div key={item.id}>
            <h4>{item.name}</h4>
            <button className="btn" onClick={() => handleList(item.id)}>
              remove user
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ControlledInputs;
