import React from 'react'
import { FaAngleDoubleRight} from 'react-icons/fa'
import { v4 as uuidv4} from 'uuid'
interface IDuties{
    duties:string[]
}

const Duties:React.FC<IDuties> = ({duties}) => {

    // const id = uuidv4()
    return (
        <div>
            {
                duties.map((duty, index)=>{
                    return ( 
                    <div key={index} className='job-desc'>
                        <FaAngleDoubleRight className='job-icon'/>
                        <p>{duty}</p>
                    </div>)
                })
            }
        </div>
  )
}

export default Duties