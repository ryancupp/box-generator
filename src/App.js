import { useState } from 'react'
import './App.css';
import Display from './components/Display';

function App() {
  const [boxes, setBoxes] = useState([
    { color : 'red'},
    { color : 'blue'},
  ]);
  
  const addBox = (newBox) => {
    setBoxes([...boxes,newBox]);
  }

  return (
    <div className="App">
      <Display boxes={boxes} addBox = {addBox}/>
    </div>
  );
}

export default App;
