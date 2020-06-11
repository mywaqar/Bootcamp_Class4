import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';


function App() {
  let [number, setNumber] = useState(0);
  let [isLit, setLit] = useState(true);

  return (
    <div className={`box ${isLit? 'light' : 'dark'}`}>
      <Counter count={number} />
      <br />
      <button onClick={() => setNumber(++number)}>Increase Count</button>
      <br />
      <br />
      <button onClick={() => setNumber(--number)}>Decrease Count</button>
      <br />
      <br />
      <button onClick={() => setLit(!isLit)}>Set Light</button>
      <h1>Good {isLit? 'Morning' : 'Night'}</h1>      
    </div>
  );
}

export default App;
