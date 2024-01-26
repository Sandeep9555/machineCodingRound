import { useState,useEffect } from 'react'
import './App.css'
import Progressbar from './components/Progressbar'

function App() {
  const [value,setValue] = useState(0)
  const [success,setSuccess] = useState(false)
  
  useEffect(() => {
    setInterval(() => {
      setValue(value => value + 1)
    }, 100)
  },[])
  return (
   <div className='app'>
    <span>
      ProgressBar
    </span>
    <Progressbar
     value={value} 
     onComplete={()=>{setSuccess(true)}}
     />
     <span>   
      {success?"Complete!":"Loading..."}
     </span>
   </div>
  )
}

export default App
