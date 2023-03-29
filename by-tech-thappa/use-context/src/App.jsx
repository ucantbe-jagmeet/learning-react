// step1 - createContext()
// step 2 - provider
// step 3 - consimer
import React, { createContext } from "react";
import CompA from "./CompA";

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
      <FirstName.Provider value={"Jagmeet"}>
        <LastName.Provider value={"Singh"}>
          <CompA />
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };
