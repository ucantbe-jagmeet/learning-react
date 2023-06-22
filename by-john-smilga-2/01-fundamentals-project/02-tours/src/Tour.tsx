import React, { useState } from 'react'

interface TourState{
    id: string,
    name: string,
    info: string,
    image: string,
    price: string,
    key?:string
    removeTour: (id:string) => void
}

const Tour:React.FC<TourState> = ({ id, image, info, price, name , removeTour}) => {
    const [readMore, setReadMore] = useState(false)

    return (
    <article className='single-tour'>
        <img src={image} alt={name} className='img' />
        <span className='tour-price'>${price}</span>
        <div className="tour-info">
            <h5>{name}</h5>
            <p>{ readMore ? info : `${info.substring(0,160)}...`}
            
            <button type="button" className='info-btn' onClick={()=>setReadMore(!readMore)}>read more</button>
            
            </p>
        </div>
        <button  type='button' className='btn btn-block delete-btn' onClick={() => removeTour(id)} style={{margin:"20px 10px"}}>Not Interested</button>

    </article>
  )
}

export default Tour