import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';



//First Project
// const element=<h1>This is a headinG!!</h1>
// ReactDOM.render(element,document.getElementById("root"));


// CREATE ELEMENT WITHOUT JSX
// const element=React.createElement("h1",null,"This is the heading created without JSX");
// ReactDOM.render(element,document.getElementById("root"));

// const elem = React.createElement("div",{className:testClass},
//   React.createElement("h1",null,"this is a heading")
// );

// const msg=React.createElement("h1",{className:headerMsg},"Welcome");
// const msg=welcome();


// const msg=<h1 className='headerMsg'>Welcome</h1>
// ReactDOM.render(msg,document.getElementById("root"));

// function myFun(){
//   const msg=document.getElementById("inputField").value;
//   if(msg.trim()==="")
//   {
//     alert("Type something");
//   }
//   else{
//     alert("Submitted");
//   }
// }


// const elem=(
//   <div>
//     <h1 className='headerMsg'>Welcome</h1>
//       <label>
//         Enter name
//         <input type="text" id='inputField'></input>
//       </label>
//       <button onClick={myFun}>Enter</button>
//   </div>
// );

// ReactDOM.render(elem,document.getElementById("root"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <App/>
)
