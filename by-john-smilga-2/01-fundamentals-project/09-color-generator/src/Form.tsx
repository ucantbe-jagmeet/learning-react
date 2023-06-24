import React,{useState} from 'react'

interface IForm{
    addColor: (color: string) => void
}

const Form:React.FC<IForm> = ({addColor}) => {
    const [color, setColor] = useState('')
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{ 
        e.preventDefault()
        addColor(color)
    }
    
  return (
    <section className='container'>
        <h4>Color generator</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type="color" value={color} onChange={(e)=> setColor(e.target.value)}/>
            <input type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#f15025'/>
            <button className='btn' type='submit' style={{background: color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form