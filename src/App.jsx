
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

// import DaisyNav from './Components/DaisyNav/DaisyNav'

function App() {

  return (
    <>
    <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl bg-orange-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
     
      


    </>
  )
}

export default App
