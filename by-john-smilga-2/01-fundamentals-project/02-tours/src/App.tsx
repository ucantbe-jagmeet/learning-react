import { useEffect, useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

interface ToursState{
  id: string,
  name: string,
  info: string,
  image: string,
  price: string,
}


function App() {
  const [tours, setTours] = useState<ToursState[]>([]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  
  const removeTour: (id:string) => void = (id: string) =>{
    const newTours = tours.filter((tour)=> tour.id !== id)
    setTours(newTours)
  }

  const fetchTours = async () => {
    setisLoading(true)
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setisLoading(false)
	} catch (error) {
		console.log(error);
    }
  };

  useEffect(() => {
      fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if( tours.length === 0){
    return  <main>
        <div className="title">
          <h2>No tours left</h2>
          <button type="button" style={{marginTop:"2rem"}} className="btn" onClick={fetchTours}> refresh</button>
        </div>
  </main>
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
