import { useState} from 'react'
import data from './data'

function App() {
  const [ count, setCount] = useState<number>(1)
  const [ text, setText] = useState<string[]>([])

  const handleSubmit = (e: { preventDefault: () => void }) =>{
    e.preventDefault()
    setText( data.slice(0, count))    
  }


  return (
    <section className='section-center'>
        <h4>Tired of boring Lorem ipsum ?</h4>
        <form className='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor="amount">paragraphs:</label>
          <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e)=> setCount(Number(e.target.value))}/>
          <button className='btn' type='submit'>generate</button>
        </form>
        <article className='lorem-text'>
          {
            text.map(( item, index)=>{
              return <p key={index}>{item}</p>
            })
          }
        </article>
    </section>
  )
}

export default App
