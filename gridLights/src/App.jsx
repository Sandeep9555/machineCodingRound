import { useState } from 'react'
import './App.css'
import Cell from './Cell'

function App() {
  const [order, setOrder] = useState([])
  const [isDeactivating,setIsDeactivating] = useState(false)
  const config=[
    [1,1,1],
    [1,0,1],
    [1,1,1],
  ]
  const activateCells=(index)=>{
  const newOrder=[...order,index];
    setOrder(newOrder)
   //console.log(newOrder);

    //deactivateorder
    if(newOrder.length===config.flat(1).filter(Boolean).length){
      deactivatecells()

    }
  }
  const deactivatecells=()=>{
   setIsDeactivating(true)
   const timer=setInterval(()=>{
       setOrder((origOrder)=>{
         const newOrder=[...origOrder];
         newOrder.pop();
         if(newOrder.length===0){
         clearInterval(timer)
         setIsDeactivating(false)
       } 
         return newOrder;
       })
  },300)
}
  return (
    <div className="wrapper">
    <div className='grid' 
    style={{
       gridTemplateColumns: `repeat(${config[0].length},1fr)`,
      }}>
      {config.flat(1).map((value,index)=>{
        return value? <Cell key={index} filled={order.includes(index)}
          onClick={()=>{
            activateCells(index)
           
          }}
          isDisabled={order.includes(index)|| isDeactivating}
        />:<span/>
      })
      }
    </div>
    </div>
   
  )
}


export default App
