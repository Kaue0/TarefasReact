import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount((prevCount) => prevCount + 1)
  }
  
  return (
    <div className="App">
      <button onClick = {increment}>
        Botão
      </button>
      <p>Quantidade de vezes que o botão foi clickado:</p>
      <p>{count} vezes</p>
    </div>
  );
}

export default App;
