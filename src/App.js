// import Card from './component/UserCard.js'
// import Counter from './component/Counter.js';
// import Card from "./component/StateLifting.js";
// import './component/StateLifting.css'
import { useState } from "react";
import Form from "./component/SimpleForm";
function App(props) {
  // const [name,setName]=useState("")
  const [formData,setFormData]=useState({
    name:"",
    loc:"",
    mob:"",
    email:"",
  });

  
  return (
    <div>
      {/* <Card name={name} setName={setName}/> */}
      <Form formData={formData} setFormData={setFormData}/>
    </div>

  );
}

export default App;
