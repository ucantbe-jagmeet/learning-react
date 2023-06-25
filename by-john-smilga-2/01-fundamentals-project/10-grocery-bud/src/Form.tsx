import React, { useState } from 'react'
interface IFormProps{
    addItem:( itemName: string)=>void;
}

const Form:React.FC<IFormProps> = ({addItem}) => {
    const [newItemName, setNewItemName] = useState('')
    const handleSubmit = (e: React.SyntheticEvent<EventTarget>)=>{
        e.preventDefault()
        if(!newItemName) return 
        
        addItem(newItemName)
        setNewItemName('')
    }


    return (
        <form onSubmit={handleSubmit}>
            <h4>Grocery Bud</h4>
            <div className="form-control">
                <input type="text" className='form-input' value={newItemName} onChange={(e)=> setNewItemName(e.target.value)}/>
                <button type='button' className='btn'>Add item</button>
            </div>
        </form>
    )
}

export default Form