import React, {useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

interface Iquestions{
    id?: number,
    title: string,
    info: string,
    key?:number
}


const SingleQuestion:React.FC<Iquestions> = ({title, info}) => {

    const [ showInfo, setShowInfo] = useState(false)

  return (
    <article className='question'>
       <header> <h5>{title}</h5></header>
       <p>{info}</p>
    </article>
  )
}

export default SingleQuestion