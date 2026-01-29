import './App.css'
import Card from './components/Card1'

function App() {

  return (
    <>
      <h1 className='bg-green-400 mb-6' >Hello Tailwind</h1>

      <Card customName='Discover the world'  views='2000'/>
      <Card btnValue ="Wanna Explore!" />
    </>
  )
}

export default App
