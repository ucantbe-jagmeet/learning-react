import "./App.css";
import { useState } from "react";
import {
  TbBrandCpp,
  DiJava,
  GoGraph,
  IoLogoJavascript,
  FaPython,
  FaRust,
} from "./icons";
import Title from "./components/Title";
function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <main
      className={
        isSidebarOpen
          ? "h-screen bg-gray-300 ease-in duration-300"
          : "h-screen bg-gray-200 ease-in duration-200"
      }
    >
      <div
        className="text-white  w-fit rounded-br-lg cursor-pointer"
        onMouseEnter={() => setSidebarOpen(!isSidebarOpen)}
        onMouseLeave={() => setSidebarOpen(!isSidebarOpen)}
      >
        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400">
          <GoGraph className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="Languages" /> : null}
        </p>
        {/* logo ends */}

        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400">
          <TbBrandCpp className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="CPP" /> : null}
        </p>
        {/* logo ends */}

        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400">
          <DiJava className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="Java" /> : null}
        </p>
        {/* logo ends */}

        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400 ">
          <IoLogoJavascript className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="Javascript" /> : null}
        </p>
        {/* logo ends */}
        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400">
          <FaPython className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="Python" /> : null}
        </p>
        {/* logo ends */}

        {/* logo starts */}
        <p className=" px-2 py-4 text-2xl text-purple-600 flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-blue-400">
          <FaRust className="mx-2 text-3xl" />
          {isSidebarOpen ? <Title text="Rust" /> : null}
        </p>
        {/* logo ends */}
      </div>
    </main>
  );
}

export default App;
