import './App.css'
import { useState } from 'react';




function App() {


const [counter,setCounter] = useState(0);

const addIncrease = () => {
  setCounter((prev) => (prev + 1))
}


return(
  <>
  
    <Child counter={counter} addIncrease={addIncrease}/>
  </>
)


}

function Child(props) {

  const handleIncrease = () => {
    {props.addIncrease()}
  }


  return(
    <>
    <button onClick={handleIncrease}>Add</button>
      <h1>{props.counter}</h1>
    </>
  )
}


export default App
