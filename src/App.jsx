import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Main from './components/Main/Main'

function App() {
  // const [count, setCount] = useState(0)
  const [navColor, setNavColor] = useState('');
  const [sidebarColor, setSidebarColor] = useState('');

  const handleMainColor = (color) => {
    setNavColor(color)
  }
  const handleSidebarColor = (color) => {
    setSidebarColor(color);
  }

  return (
    <>
      <div style={{backgroundColor: navColor}}>
            <Navbar handleMainColor={handleMainColor} handleSidebarColor={handleSidebarColor}/>
            <div className="container">
              <Sidebar sidebarColor={sidebarColor}/>
              <Main />
            </div>
      </div>
      
      
      
    </>
  )
}

export default App
