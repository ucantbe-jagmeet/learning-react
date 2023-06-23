import React,{ useEffect, useState,FC } from "react"
import JobsInfo from "./JobsInfo"
import BtnContainer from "./BtnContainer"
const url = "https://course-api.com/react-tabs-project"

interface IJobsInfo{
  id:string,
  order:number,
  title:string,
  dates:string,
  duties:string[],
  company:string,
}

const App:React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [jobs, setJobs] = useState<IJobsInfo[]>([])
  const [currentItem, setCurrentItem] = useState<number>(0)


  const fetchJobs = async () =>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const newjobs = await response.json()

      setJobs(newjobs)
      console.log(newjobs);
      
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
        <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>

        {/* job info */}
        <JobsInfo jobs={jobs} currentItem={currentItem}/>
    </section>
  )
}

export default App
