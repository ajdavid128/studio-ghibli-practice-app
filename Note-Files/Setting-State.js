import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  // a variable that changes! we want to use state.
  const [count, setCount] = useState(0)
  
  
  function handleCountClick() {
    setCount((count/*current state*/) => count + 1/*<-next state*/)
    
    // ^ using the callback function syntax is a best practice (arrow function)
    // the equivalent simplified syntax: 
        //setCount(count + 1)
        //It is better to use callback syntax because you are technically calling the "next state (count + 1)" based off of the "current state ((count)...)"
  }
  
  console.log("In component: ", count)
  
  return (
    <div>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));