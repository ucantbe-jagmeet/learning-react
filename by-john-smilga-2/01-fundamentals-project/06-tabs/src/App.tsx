import { useEffect, useState } from "react"

const url = "https://course-api.com/react-tabs-project"

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [jobs, setJobs] = useState([])

  const fetchJobs = async () =>{
    setIsLoading(true)
    try {
    const response = await fetch( url)
    const newjobs = await response.json()

    setJobs(newjobs)
    setIsLoading(false)
   } catch (error) {
    console.log(error);
   }
  }

  useEffect(()=>{
    fetchJobs()
  },[])

  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return (
    <>
     Tabs project bolte
    </>
  )
}

export default App
