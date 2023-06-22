import React from 'react'

interface PersonType{
        key?: number,
        id?: number,
        name: string,
        age: number,
        image: string,
}

const Person:React.FC <PersonType> = ({ image, name, age}) => {
  return (
    <article className='person'>
        <img src={image} alt="" className='img' />
        <div>
            <h4>{name}</h4>
            <p>{age} years</p>
        </div>
    </article>
  )
}

export default Person