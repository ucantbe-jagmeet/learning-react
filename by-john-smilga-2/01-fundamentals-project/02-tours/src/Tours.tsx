import React from 'react'
import Tour from './Tour'

interface TourState{
    id: string,
    name: string,
    info: string,
    image: string,
    price: string,
}


interface ToursState{
    tours: TourState[],
    removeTour: (id:string) => void
}

const Tours:React.FC<ToursState> = ({tours, removeTour}) => {
  return (
    <section>
        <div className='title'>
            <h2>our Tours</h2>
            <div className="title-underline"></div>
        </div>
        <div className="tours">
            { tours.map((tour)=>{
                return <Tour key={tour.id} {...tour} removeTour= {removeTour} />
            })}
        </div>
    </section>
  )
}

export default Tours