import React from 'react'
import Person from './Person'

interface PeopleType{
    id: number,
    name: string,
    age: number,
    image: string,
  }

interface PersonType{
    people: PeopleType[]
}


const List:React.FC<PersonType> = ({people}) => {
  return (
    <section>
        {
            people.map((person)=>{
                return <Person key={person.id} {...person}/>
            })
        }
    </section>
  )
}

export default List