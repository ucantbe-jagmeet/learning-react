import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Services from "./Services.jsx";
import User from "./User.jsx";
import Error from "./Error.jsx";
import Search from "./Search.jsx";
import "./app.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="about" element={<About />} />
          <Route exact path="services" element={<Services />} />
          <Route exact path="search" element={<Search />} />
          <Route exact path="user/:fname/:lname" element={<User />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
