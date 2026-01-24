import { useState } from "react";
import "./App.css";

function App() {
  const [loan, setLoan] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");
  const [emi, setEmi] = useState(null);

  const calculateEMI = () => {
    const P = Number(loan);
    const annualRate = Number(rate);
    const N = Number(tenure);

    if (P <= 0 || annualRate <= 0 || N <= 0) {
      setEmi("Enter valid values");
      return;
    }

    const R = annualRate / 12 / 100;

    const EMI =
      (P * R * Math.pow(1 + R, N)) /
      (Math.pow(1 + R, N) - 1);

    setEmi(EMI.toFixed(2));

    console.log("Loan:", P);
    console.log("Rate:", annualRate);
    console.log("Tenure:", N);
    console.log("EMI:", EMI);
  };

  return (
    <div className="container">
      <h2>EMI Calculator</h2>

      <input
        type="number"
        placeholder="Loan Amount"
        value={loan}
        onChange={(e) => setLoan(e.target.value)}
      />

      <input
        type="number"
        placeholder="Annual Interest Rate (%)"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
      />

      <input
        type="number"
        placeholder="Tenure (Months)"
        value={tenure}
        onChange={(e) => setTenure(e.target.value)}
      />

      <button onClick={calculateEMI}>Calculate EMI</button>

      {emi && <h3>Monthly EMI: ₹ {emi}</h3>}
    </div>
  );
}

export default App;