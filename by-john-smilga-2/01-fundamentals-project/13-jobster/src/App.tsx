import { ToastContainer } from "react-toastify";
import { Landing, Register, Error } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { AddJob, Profile, SharedLayout, Stats } from "./pages/Dashboard";

function App() {
  return (
    <>
      <ToastContainer autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Stats />} />
            <Route path="all-jobs" element={<Stats />} />
            <Route path="add-job" element={<AddJob />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="/landing" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
