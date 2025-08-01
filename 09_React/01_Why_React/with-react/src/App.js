import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);
  return (
    <div className="App">
      <div className="value">{value}</div>
      <button onClick={()=> setValue(value + 1)}> CLICK ME</button>
    </div>
  );
}

export default App;
