import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

// const favSeries = 'netflix';
const favSeries = 'netflix';

const FavS = () =>
{
    if( favSeries ==="netflix")
    {
       return <Netflix/>
    }
    else
    {
        return <Amazon/>
    }
}

const App = () => (
<>
    <h1 className="heading_style" > List Of top 3 Netflix Series in 2022 </h1>
    <FavS />
</>
);

export default App;