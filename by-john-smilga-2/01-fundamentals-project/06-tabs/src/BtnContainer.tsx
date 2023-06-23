import React from 'react'

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

const BtnContainer:React.FC <IJobsInfoProps> = ({jobs}) => {

    return (
        <div className='btn-container'>
            {
                jobs.map((item)=>{
                    return <button key={item.id} className='job-btn'>
                        {item.company}  
                    </button>
                })
            }
        </div>
        )
}

export default BtnContainer