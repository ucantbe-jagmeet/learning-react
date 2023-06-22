import React from 'react'

interface ICategories{
    categories: string[]
}

const Categories:React.FC<ICategories> = ({categories}) => {
  return (
    <div className='btn-container'>
        {
            categories.map((category)=>{
                return <button type="button" className='btn' key={category}>{category}</button>
            })
        }
    </div>
  )
}

export default Categories