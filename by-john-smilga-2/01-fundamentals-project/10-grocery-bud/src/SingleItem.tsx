import React ,{useState}from 'react'

interface IItemObject{
    name:string;
    completed:boolean;
    id:string;
}

interface IItemProps{
    item: IItemObject;
    removeItem: (itemId:string)=>void ;
}

const SingleItem:React.FC<IItemProps> = ({item, removeItem}) => {
  const [isChecked, setIsChecked] = useState(false)
    
  return (
    <div className='single-item'>
        <input type="checkbox" checked={isChecked} onChange={()=>setIsChecked(!isChecked)}/>
        <p style={{ textTransform:'capitalize' ,textDecoration: isChecked ? 'line-through' : undefined }}>{item.name}</p>
        <button className='btn remove-btn' type='button' onClick={()=> removeItem(item.id)}>Delete</button>
    </div>

  )
}

export default SingleItem