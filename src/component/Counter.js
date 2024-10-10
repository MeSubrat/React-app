import React, { useState } from "react";
import './Counter.css'


const Counter=()=>{
    const [Count,setCount]=useState(0);
    return (
        <div>
            <p>You clicked {Count} times</p>
            <button onClick={()=>{setCount(Count+1)}}>Click here</button>
            <button onClick={()=>{setCount(0)}}>Reset</button>
        </div>
    )
}
export default Counter