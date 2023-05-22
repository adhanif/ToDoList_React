import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main/Main'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <div className="container">
        <Sidebar/>
        <Main />
      </div>
    </>
  )
}

export default App
