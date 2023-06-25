import React from 'react'

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
    console.log(removeItem);
    
  return (
    <h2>SingleItem</h2>
  )
}

export default SingleItem