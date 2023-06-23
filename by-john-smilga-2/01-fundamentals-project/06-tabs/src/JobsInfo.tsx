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
    jobs: IJobsInfo[]
}

const JobsInfo:React.FC<IJobsInfoProps> = ({jobs}) => {
    const { company, dates, duties, title} = jobs[0]
    console.log(company, dates, duties, title);
    
    return (
    <article className='job-info'>
        <h3>{title}</h3>
        <span className='job-company'>{company}</span>
        <p className='job-date'>{dates}</p>
        <Duties duties={duties}/>
    </article>

  )
}

export default JobsInfo