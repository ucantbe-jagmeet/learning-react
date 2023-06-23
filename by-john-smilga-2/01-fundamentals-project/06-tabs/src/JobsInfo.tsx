import React from 'react'
import Duties from './Duties';
interface IJobsInfo{
    id:string,
    order:number,
    title:string,
    dates:string,
    duties:string[],
    company:string,
}

interface IJobsInfoProps{
    jobs: IJobsInfo[],
    currentItem: number
}

const JobsInfo:React.FC<IJobsInfoProps> = ({jobs, currentItem}) => {
    if(jobs && jobs.length > 1){
        console.log(currentItem);
        
        const { company, dates, duties, title} = jobs[currentItem]
    
            return (
            <article className='job-info'>
                <h3>{title}</h3>
                <span className='job-company'>{company}</span>
                <p className='job-date'>{dates}</p>
                <Duties duties={duties}/>
            </article>
        )
    } else{
        return <h1> No Jobs Found </h1>
    }
}

export default JobsInfo