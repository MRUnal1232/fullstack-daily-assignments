import { useState } from "react";
import "./App.css";

function App() {
  const [sgpas, setSgpas] = useState(["", "", "", ""]);
  const [cgpa, setCgpa] = useState(null);

  const handleChange = (index, e) => {
    const updated = [...sgpas];
    updated[index] = e.target.value;
    setSgpas(updated);

    console.log("SGPA Values:", updated);
  };

  const calculateCGPA = () => {
    let sum = 0;
    let count = 0;

    sgpas.forEach((val) => {
      const num = Number(val);
      if (num) {
        sum += num;
        count++;
      }
    });

    if (count === 0) {
      setCgpa("Enter valid SGPA");
    } else {
      setCgpa((sum / count).toFixed(2));
    }

    console.log("CGPA:", sum / count);
  };

  return (
    <div className="container">
      <h2>SGPA → CGPA Calculator</h2>

      {sgpas.map((value, index) => (
        <input
          key={index}
          type="number"
          step="0.01"
          placeholder={`Semester ${index + 1} SGPA`}
          value={value}
          onChange={(e) => handleChange(index, e)}
        />
      ))}

      <button onClick={calculateCGPA}>Calculate CGPA</button>

      {cgpa && <h3>CGPA: {cgpa}</h3>}
    </div>
  );
}

export default App;