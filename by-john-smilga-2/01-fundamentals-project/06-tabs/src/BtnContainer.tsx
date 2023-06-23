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
    jobs: IJobsInfo[],
    currentItem: number,
    setCurrentItem: (id:number)=> void,
}

const BtnContainer:React.FC <IJobsInfoProps> = ({jobs, currentItem, setCurrentItem}) => {

    return (
        <div className='btn-container'>
            {
                jobs.map((item, index)=>{
                    return <button key={item.id}  onClick={()=> setCurrentItem(index)} className={ index=== currentItem ? 'job-btn active-btn':'job-btn'}>
                        {item.company}  
                    </button>
                })
            }
        </div>
        )
}

export default BtnContainer