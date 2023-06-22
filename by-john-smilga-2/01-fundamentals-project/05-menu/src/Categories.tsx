import React from 'react'

interface ICategories{
    categories: string[],
    filterItems: ( category: string)=> void
}

const Categories:React.FC<ICategories> = ({categories,filterItems}) => {
  return (
    <div className='btn-container'>
        {
            categories.map((category)=>{
                return <button type="button" className='btn' key={category} onClick={()=> filterItems(category) }>{category}</button>
            })
        }
    </div>
  )
}

export default Categories