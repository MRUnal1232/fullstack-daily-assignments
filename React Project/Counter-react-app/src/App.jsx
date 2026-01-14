import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incValue=()=>{
    setCounter(counter+1);
  };

  const decValue=()=>{
    setCounter(counter-1);
  };

  return (
    <>
    <div className="container">
      <div className="box">
        <h1>{counter}</h1>
        <button onClick={incValue} className="inc">Increment</button>
        <button onClick={decValue} className="dec">Decrement</button>
      </div>
    </div>
    </>
  )
}

export default App;
