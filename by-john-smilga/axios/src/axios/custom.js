import axios from "axios";

const authFetch = axios.create({
  baseURL: "https://course-api.com",
  header: { Accept: "apllication/json" },
});

export default authFetch;
