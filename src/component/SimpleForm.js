import React from "react";
import './SimpleForm.css'

const Form=(props)=>{
    function handleSubmit(){
        if(props.formData.name==="" || props.formData.loc==="" || props.formData.mob==="" || props.formData.email==="")alert("Empty")
        else console.log(props.formData)
        // <p>Name : {props.formData.name}</p>
    }
    function handleClear(){
        props.setFormData({
            name:"",
            loc:"",
            mob:"",
            email:"",
        })
    }
    const setField=(field,data)=>{
        props.setFormData((prevData)=>({...prevData,[field]:data}))
        
    }
    return (
        <div className="container">
            <div className="input-fields">
                <label>
                    Name:<input type="text" value={props.formData.name} onChange={(e)=>setField("name",e.target.value)}/>
                </label>
                <label>
                    Location:<input type="text" value={props.formData.loc} onChange={(e)=>setField("loc",e.target.value)}/>
                </label>
                <label>
                    Mobile:<input type="text" value={props.formData.mob} onChange={(e)=>setField("mob",e.target.value)}/>
                </label>
                <label>
                    E-mail:<input type="text" value={props.formData.email} onChange={(e)=>setField("email",e.target.value)}/>
                </label>
                <button onClick={handleSubmit}>Submit</button>
                <button onClick={handleClear}>Clear</button>
            </div>
        </div>
    )
}
export default Form