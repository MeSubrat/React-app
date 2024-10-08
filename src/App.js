function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <h1>This is a heading!!</h1>
  );
}

function welcome(){
  return <h1 className="headerMsg">
    "WELCOME"
  </h1>
}
function myFun(){

  const msg=document.getElementById("inputField").value;
  if(msg===null)
  {
    alert("Type something");
  }
  else{
    alert("Submitted");
  }
}
export default App;
