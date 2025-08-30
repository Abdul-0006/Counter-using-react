import React from 'react';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='main-container'>
      <h1>{count}</h1>
      <div className='button-container'>
        <button className='Decrease' onClick={() => setCount(prev => Math.max(0, prev - 5))} disabled={count < 5}>
          5-
        </button>
        <button className='Decrease' onClick={() => setCount(prev => Math.max(0, prev - 1))} disabled={count === 0}>
          -
        </button>
        <button className='Reset' onClick={() => setCount(0)}>
          Reset
        </button>
        <button className='Increase' onClick={() => setCount(prev => prev + 1)}>
          +
        </button>
        <button className='Increase' onClick={() => setCount(prev => prev + 5)}>
          5+
        </button>
      </div>
    </div>
  );
};

export default App;