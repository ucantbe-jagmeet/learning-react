import "./App.css";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Data from "./icons";

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [openModel, setOpenModel] = useState(0);
  const [modelData, setModelData] = useState({});

  return (
    <>
      <div className="flex ">
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setSidebarOpen}
          setOpenModel={setOpenModel}
          openModel={openModel}
          Data={Data}
          modelData={modelData}
          setModelData={setModelData}
        />
      </div>
    </>
  );
}

export default App;
