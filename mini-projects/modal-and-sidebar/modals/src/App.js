import "./App.css";
import { useState } from "react";

import Title from "./components/Title";
import Data from "./icons";

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
        className={
          isSidebarOpen
            ? "text-white w-fit rounded-br-lg cursor-pointer bg-green-300 "
            : "text-purple-600  w-fit rounded-br-lg cursor-pointer bg-blue-200"
        }
        onMouseEnter={() => setSidebarOpen(!isSidebarOpen)}
        onMouseLeave={() => setSidebarOpen(!isSidebarOpen)}
      >
        {Data.map((link) => {
          const { id, icon, text } = link;

          return (
            <>
              <p
                key={id}
                className=" px-2 py-4 text-2xl t flex    border-r-purple-400 border-2 border-t-0 border-l-0 border-b-0 hover:text-red-400 text-center"
              >
                <p className="mx-2 text-3xl">{icon}</p>
                {isSidebarOpen ? <Title text={text} /> : null}
              </p>
            </>
          );
        })}
      </div>
    </main>
  );
}

export default App;
