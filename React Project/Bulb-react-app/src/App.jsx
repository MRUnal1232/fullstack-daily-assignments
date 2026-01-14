import { useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState(true);

  const toggleOperation = () => {
    setStatus(!status);
  };

  return (
    <div className={status ? "container-dark" : "container-light"}>
      <div className="box">
        <i className={status ? "ri-lightbulb-fill" : "ri-lightbulb-line"}></i>

        <button onClick={toggleOperation}>
          {status ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
}

export default App;
