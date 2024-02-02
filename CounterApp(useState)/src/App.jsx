import { useState } from "react";

function App() {

      const [counter,setCounter]=useState(0);
      const incrementValue=() =>{
      setCounter(counter+1);
      }
      const decrementValue=() =>{
        setCounter(counter-1);
        }
  return (
    <>
      <h1> counter project that is used to understand useState hook</h1>
      <h2>value:{counter}</h2><br/> <br />
      <button  onClick={incrementValue}>increment value:{counter}</button><br/> <br />
      <button onClick={decrementValue}>Decrement value:{counter}</button>
    </>
  )
}

export default App
