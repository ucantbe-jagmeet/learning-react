import React from "react";
import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const multipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  if (isError) {
    return <h2>Error Occured</h2>;
  }

  const { name, avatar_url, bio, location } = user;
  return (
    <section>
      <h3>Fetch Data</h3>
      <div>
        <img src={avatar_url} alt="" className="img1" />
        <h2>{name}</h2>
        <h4>{bio}</h4>
        <p>{location}</p>
      </div>
    </section>
  );
};

export default multipleReturns;
