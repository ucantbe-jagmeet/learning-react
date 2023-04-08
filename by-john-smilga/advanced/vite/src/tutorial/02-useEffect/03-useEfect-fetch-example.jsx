import React from "react";
import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const useEffectBasics = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        // console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // console.log(`hello`);
  }, []);

  return (
    <section>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          console.log(user);
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h5>{login}</h5>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default useEffectBasics;
