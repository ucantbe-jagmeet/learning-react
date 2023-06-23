import { useEffect, useState } from "react"
import JobsInfo from "./JobsInfo"
const url = "https://course-api.com/react-tabs-project"

interface IJobsInfo{
  id:string,
  order:number,
  title:string,
  dates:string,
  duties:string[],
  company:string,
}

function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [jobs, setJobs] = useState<IJobsInfo[]>([])

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
    <section className="jobs-center">
        {/* button container */}
        {/* job info */}

        <JobsInfo jobs={jobs}/>
    </section>
  )
}

export default App
