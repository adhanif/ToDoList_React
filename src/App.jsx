import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container">
      <Sidebar/>

      </div>
      
      
    </>
  )
}

export default App
