import "./App.css";
import { TbBrandCpp, DiJava, GoGraph } from "./icons";

function App() {
  return (
    <main className="h-screen bg-slate-200">
      <div className="text-white bg-purple-300 w-fit">
        <p className=" px-2 py-4 text-3xl text-purple-600">
          <GoGraph />
        </p>
      </div>
      <h1 className="text-3xl  bg-purple-300 px-2 py-1 border  rounded-tr-lg rounded-br-lg w-fit text-white">
        <TbBrandCpp />
      </h1>
    </main>
  );
}

export default App;
