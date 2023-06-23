import { useState} from 'react'
import data from './data'

function App() {
  const [ count, setCount] = useState(1)
  return (
    <section className='section-center'>
        <h4>Tired of boring Lorem ipsum ?</h4>
        <form className='lorem-form'>
          <label htmlFor="amount">paragraphs:</label>
          <input type="number" name="amount" id="amount" min='1' step='1' max='8' value={count} onChange={(e)=> setCount(Number(e.target.value))}/>
          <button className='btn' type='submit'>generate</button>
        </form>
    </section>
  )
}

export default App
