import React from "react";

const Card=(props)=>{
    return(
        <div className="container">
            <input type="text"  onChange={(e)=>props.setName(e.target.value)}/>
            <p>Your name is : {props.name}</p>
        </div>
    )
}
export default Card