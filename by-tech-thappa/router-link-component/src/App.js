// react-router-dom -> used to make single page applications
// step 1 -> BrowseRouter
// step 2 -> Route
// step 3 -> Routes
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* <About />
      <Contact /> */}
    </>
  );
}

export default App;
