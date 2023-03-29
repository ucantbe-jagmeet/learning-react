import {React, useState} from "react";
import { questions } from "./api";
import MyAccordion from "./MyAccordion";

const Accordion = () => {
    const [data, setdata] = useState(questions);
    return (
        <>
         <div className="container">
            <div className="main__div">
                <h1>React Interview Questions</h1>
                {
                    data.map((curr)=>{
                     const { id} = curr;
                     return <MyAccordion key={id} { ...curr}/>
                    })
                }
            </div>
        </div> 
        </>
    )
}

export default Accordion;