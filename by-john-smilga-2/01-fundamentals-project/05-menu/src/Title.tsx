import React from 'react'

interface Ititle{
    text:string
}


const Title:React.FC<Ititle> = ({text}) => {
  return (
    <div className='title'>
        <h2>{text || "Default Title"}</h2>
        <div className='title-underline'></div>
    </div>
  )
}

export default Title