import { useState } from "react";
import data from './data'
import List from "./List";

interface PeopleType{
  id: number,
  name: string,
  age: number,
  image: string,
}

const App : React.FC = () => {
  const [ people , setPeople] = useState<PeopleType[]>(data)

  return <main>
    <div className="container">
      <h3>{people.length} birthday{people.length > 1 ? "'s": ''} today</h3>
      <List people={people}/>
      <button type="button" className="btn btn-block" onClick={()=> setPeople([])}>Clear list</button>
    </div>
  </main>;


};
export default App;