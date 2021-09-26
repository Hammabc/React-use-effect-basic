import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'



function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(" ");
  
  useEffect(() => {
    setName(name + "Hammad Hussain")
  },[])

  return (
    <div>
      <p>Hello {name}!</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
      </div>
  )
}

export default App;
