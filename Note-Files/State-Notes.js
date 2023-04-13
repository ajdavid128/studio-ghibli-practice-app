import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// array destructuring!

function Header({ isOn }) {
  console.log("Header render")
  return <h1>{isOn ? "It's on" : "It's off"}</h1>
}

function App() {
  // a variable that changes! we want to use state.
  const [isOn, setIsOn] = useState(false)
  const [count, setCount] = useState(0)
  
  console.log({ isOn, setIsOn })
  
  function handleClick(event) {
    setIsOn(!isOn)
  }
  
  function handleCountClick() {
    setCount(count + 1)
  }
  
  return (
    <div>
      <Header isOn={isOn} />
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));