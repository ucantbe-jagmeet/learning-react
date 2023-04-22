import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route
          path="testing"
          element={
            <div>
              <h2>Testing Page</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
