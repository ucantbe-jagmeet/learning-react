import React from 'react'

interface IDuties{
    duties:string[]
}

const Duties:React.FC<IDuties> = ({duties}) => {
  return (
    <div>Duties</div>
  )
}

export default Duties