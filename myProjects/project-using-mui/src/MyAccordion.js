import{ React, useState} from 'react'
import {AiOutlineDown} from 'react-icons/ai';


const MyAccordion = ({question, answer}) => {
    const [Show, setShow] = useState(false);
  return (
    <>
        <div className="box">
            <AiOutlineDown className='icon' onClick={()=> setShow(!Show)}/>
            <h3 onClick={()=> setShow(!Show)}>{question}</h3>
        </div>          
        {  Show &&  <p >{answer}</p>}
            
    </>
  )
}
export default MyAccordion
