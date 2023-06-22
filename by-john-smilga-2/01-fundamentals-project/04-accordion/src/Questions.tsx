import React from 'react'
import SingleQuestion from './SingleQuestion'
interface Iquestions{
    id: number,
    title: string,
    info: string,
}
interface IquestionsArray{
    questions: Iquestions[]
}




const Questions:React.FC<IquestionsArray> = ({questions}) => {
  return (
    <section className='container'>
        <h1>Questions</h1>
        {
            questions.map((question)=>{
                return <SingleQuestion key={question.id} {...question}/>
            })
        }
    </section>
  )
}

export default Questions