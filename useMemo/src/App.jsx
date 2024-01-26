import { useState,useMemo } from 'react'

function App() {
  const [counter, setCounter] = useState(0)
  const [counter2,setCounter2] = useState(100)
  const squareValue=()=>{
    console.log("print Again")
    return counter*counter;

  }
  const memo=useMemo(squareValue,[counter])
  return (
    <div className='App'>
      <h2>Counter:{counter}</h2>
      <h2>Square:{memo}</h2>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <h2>Counter2:{counter2}</h2>
      <button onClick={()=>setCounter2(counter2-1)}>Decrement</button>
    </div>
  )
}

export default App
