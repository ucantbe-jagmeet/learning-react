import React, { useState }  from "react";


const App =() =>
{
   
    const [fullName, setFullName] = useState({
        fname : '',
        lname : '',
        email : '',
        phone : '',
        quali : ''
    });


    const inputEvent = (event) =>
    {
        console.log(event.target.name);
        console.log(event.target.value);

        const {value , name } = event.target; // object destructoring

        setFullName((preValue) => {
            
            return{
                ...preValue,
                [name] : value,
            }
            // if(name === 'fname')
            // {
            //     return{
            //         fname : value,
            //         lname : preValue.lname,
            //         email : preValue.email,
            //         phone : preValue.phone
            //     };
            // }
            // else if(name === 'lname')
            // {
            //     return{
            //         fname : preValue.fname,
            //         lname : value,
            //         email : preValue.email,
            //         phone : preValue.phone
            //     };
            // }
            // else if(name === 'email')
            // {
            //     return{
            //         fname : preValue.fname,
            //         lname : preValue.lname,
            //         email : value ,
            //         phone : preValue.phone
            //     };
            // }
            // else if(name === 'phone')
            // {
            //     return{
            //         fname : preValue.fname,
            //         lname : preValue.lnmae,
            //         email : preValue.email,
            //         phone :  value
            //     };
            // }
        })

    };
    
    const onSubmits = (e) =>
    {
        e.preventDefault();
        alert('Form Submitted');
    };

    return (
    <>
       <form onSubmit={onSubmits}>
        <div className="container" >
                <h1 className="header">Hello {fullName.fname} {fullName.lname}</h1>
                <p>{fullName.email}</p>
                <p>{fullName.phone}</p>
                <p>{fullName.quali}</p>
                <input 
                    className="content" 
                    type='text' 
                    placeholder='Enter Your First Name'
                    name = 'fname'
                    onChange={inputEvent}
                    value={fullName.fname}                    
                />
                <input 
                    className="content" 
                    type='text' 
                    placeholder='Enter Your Second Name'
                    name = 'lname'
                    onChange={inputEvent}
                    value={fullName.lname}
                />
                <input 
                    className="content" 
                    type='email' 
                    placeholder='Enter Your Email'
                    name = 'email'
                    onChange={inputEvent}
                    value={fullName.email}
                    autoComplete="off"
                />
                <input 
                    className="content" 
                    type='number' 
                    placeholder='Enter Your Phone Number'
                    name = 'phone'
                    onChange={inputEvent}
                    value={fullName.phone}
                />
                <input 
                    className="content" 
                    type='text' 
                    placeholder='Enter Your Qualification'
                    name = 'quali'
                    onChange={inputEvent}
                    value={fullName.quali}
                />
                <button type="submit" className="btn" >Submit Me 👍</button>
            </div>
       </form>
    </>
    );
}

export default App;