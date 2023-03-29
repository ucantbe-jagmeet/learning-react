import React, { useState }  from "react";


const App =() =>
{
   
    const [name1, setName] = useState('');
    const [lastName ,setLastName] = useState('');
    const [fullName ,setFullName] = useState('');
    const [lastNameNew , setLastNewName] = useState('');

    const inputEvent = (event) =>
    {
        console.log(event.target.value);
        setName(event.target.value);
    };
    const inputEventTwo = (event) =>
    {
        console.log(event.target.value);
        setLastName(event.target.value);
    };

    const onSubmits = (e) =>
    {
        e.preventDefault();
        setFullName(name1);
        setLastNewName(lastName);
    };

    return (
    <>
       <form onSubmit={onSubmits}>
        <div className="container" >
                <h1 className="header">Hello {fullName} {lastNameNew}</h1>
                <input 
                    className="content" 
                    type='text' 
                    placeholder='Enter Your First Name'
                    onChange={inputEvent}
                    value={name1}
                />
                <input 
                    className="content" 
                    type='text' 
                    placeholder='Enter Your Second Name'
                    onChange={inputEventTwo}
                    value={lastName}
                />
                <button type="submit" className="btn" >Submit Me 👍</button>
            </div>
       </form>
    </>
    );
}

export default App;