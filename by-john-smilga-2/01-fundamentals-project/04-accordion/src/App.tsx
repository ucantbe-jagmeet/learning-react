import { useState } from 'react'
import data from './data'
import Questions from './Questions'

interface Iquestions{
  id: number,
  title: string,
  info: string,
}

function App() {
  const [ questions, setQuestions] = useState<Iquestions[]>(data)
  return (
    <main>
        <Questions questions={questions}/>
    </main>
  )
}

export default App
