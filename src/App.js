import React, { useReducer } from 'react';
import './App.css';
import reducer from './reducer';

function App() {
  const [counter, dispatch] = useReducer(reducer, { count: 0 });

  const sub = () => dispatch({ type: 'SUB' });
  const add = () => dispatch({ type: 'ADD' });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Couting</h1>
        <h2>{counter.count}</h2>
        <div>
          <button onClick={sub}>Sub</button>
          <button onClick={add}>Add</button>
        </div>
      </header>
    </div>
  );
}

export default App;
