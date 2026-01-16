import { useState } from 'react';
import './App.css';

function App() {
  const [bgColor, setBgColor] = useState('linear-gradient(120deg, black, #555)');
  const setBlack = () => setBgColor('linear-gradient(120deg, black, black)');
  const setOrange = () => setBgColor('linear-gradient(120deg, orange, darkorange)');
  const setRed = () => setBgColor('linear-gradient(120deg, red, darkred)');
  const setGreen = () => setBgColor('linear-gradient(120deg, green, darkgreen)');

  return (
    <>
      <div className="container" style={{ background: bgColor }}>
        <div className="box-buttons">
          <button onClick={setBlack}>Black</button>
          <button onClick={setOrange}>Orange</button>
          <button onClick={setRed}>Red</button>
          <button onClick={setGreen}>Green</button>
        </div>
      </div>
    </>
  );
}

export default App;