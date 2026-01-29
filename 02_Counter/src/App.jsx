import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)

  const addValue = () =>{
    if (counter <20) {
      setCounter(counter+1)
    }
    console.log("Value of counter after clicking ADD Value button is : "+counter);
  }

  const removeValue = () =>{
    if (counter >0) {
      setCounter(counter-1)
    }
    console.log("Value of counter after clicking REMOVE Value button is : "+counter);
  }
  return (
    <>
      <h1>Chai aur React by Dibyanand</h1>
      <h2>Counter: {counter} </h2>
      <button onClick={addValue} >Add value {counter} </button>
      <br />
      <button onClick={removeValue} >Remove value {counter} </button>
      <footer> {counter} </footer>
    </>
  )
}

export default App
