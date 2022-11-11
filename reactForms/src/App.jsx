import React, { useState }  from "react";


const App =() =>
{
    // const purple = '#8e44ad';
    const purple = "yellow";
    const [bg , setBg] = useState(purple);
    const [name1, setName] = useState('hello ji 😧')
    const bgChange = () =>
    {
        let color = 'orange';
        setBg(color);
        setName('okay bye 👍');     
    };

    const BgBack = () =>
    {
        setBg('blue');
        setName('Ayyo!! 🎈');
    };

    return (
        <>
            <div className="container" style = {{backgroundColor: bg}}>
                <button className="btn" onClick={bgChange} onDoubleClick={BgBack}>{name1}</button>
            </div>
        </>
    );
}

export default App;