import { useState } from "react"
import people from "./data"
import { FaChevronLeft , FaChevronRight , FaQuoteRight} from "react-icons/fa"

function App() {
  const [ index, setIndex] = useState(0)
  const { name, job, image, text, id } = people[index] 

  console.log( name , job, id, text, image);
  

  const checkNumber = ( number:number) =>{
     if( number > people.length -1){
      return 0 
     }
     if( number < 0){
      return people.length -1
     }
     return number
  }


  const nextPerson = () =>{
    setIndex( (currentIndex)=>{
      const newIndex = currentIndex + 1
      return checkNumber(newIndex)
    })
  };
  
  const prevPerson = () =>{
    setIndex( (currentIndex)=>{
      const newIndex = currentIndex - 1
      return checkNumber(newIndex)
    })
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight/>
            </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevPerson}><FaChevronLeft/></button>
        <button className="next-btn" onClick={nextPerson}><FaChevronRight/></button>
      </div>
      </article>
    </main>
  )
}

export default App
