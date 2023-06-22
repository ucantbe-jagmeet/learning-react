import React from 'react'

interface IMenu{
    id:number,
    title:string,
    category:string,
    price:number,
    img:string,
    desc:string,
}


const MenuItem:React.FC<IMenu> = ({ title, category, price,img, desc}) => {
    console.log(title, category, img , desc, title);
    
  return (
    <article className='menu-item'> 
        <img src={img} alt={title} className='img' />
        <div className="item-info">
            <header>
                <h5>{title}</h5>
                <span className='item-price'>${price}</span>
            </header>
            <p className='item-text'>{desc}</p>
        </div>
    </article>
  )
}

export default MenuItem