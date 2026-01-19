import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [activeBulb, setActiveBulb] = useState(null);

  const bulbs = [
    { id: 1, color: '#4caf50', top: '2%' }, 
    { id: 2, color: '#021835', top: '3%' }, 
    { id: 3, color: '#ff9800', top: '5%' }, 
    { id: 4, color: '#e91e63', top: '3%' }, 
    { id: 5, color: '#fdd835', top: '2%' }, 
  ];

  const handleToggle = (bulb) => {
    
    setActiveBulb(activeBulb?.id === bulb.id ? null : bulb);
  };

  return (
    <div 
      className="main-stage" 
      style={{ backgroundColor: activeBulb ? activeBulb.color : '#2c3e50' }}
    >
      <div className="bulbs-container">
        {bulbs.map((bulb) => (
          <div 
            key={bulb.id} 
            className="bulb-fixture" 
            style={{ paddingTop: bulb.top }}
          >
            <div className="cord" />
            <div className="topper" />
            <div 
              className={`glass ${activeBulb?.id === bulb.id ? 'lit' : ''}`}
              onClick={() => handleToggle(bulb)}
              style={{ 
                backgroundColor: activeBulb?.id === bulb.id ? '#fff' : bulb.color,
                '--glow-color': bulb.color 
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;