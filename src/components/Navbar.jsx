import './Navbar.css'
import React, { useState, useEffect } from "react";
import WineredTheme from "./images/winered-theme.png"
import BlueTheme from "./images/blue-theme.png"
import GreenTheme from "./images/green-theme.png"
import DarkTheme from "./images/dark-theme.png"


function Navbar({handleMainColor, handleSidebarColor}) {
  const [navColor, setNavColor] = useState('');
  
  // const [count, setCount] = useState(0)
  const colorBtnBlue = () =>{
    setNavColor('#76B7C8');
    handleMainColor('#16697A');
    handleSidebarColor('#104E5C');
    };

  const colorBtnWineRed = () => {
    setNavColor('#A790A5');
    handleMainColor('#54414E');
    handleSidebarColor('#44313C');
  };

  const colorBtnGreen = () => {
    setNavColor('#B3D6B1');
    handleMainColor('#313B31');
    handleSidebarColor('#1E251E');
    };
  
  const colorBtnDark = () => {
    setNavColor('black');
    handleMainColor('#0b0b0b');
    handleSidebarColor('#1d1e29');
    };
    
  const navbarColor = {
    backgroundColor: navColor,
  };

  return (
    <nav className="navContainer" style={navbarColor}>
    <div className="headerItemContainer">
      <div className="leftHeaderItems">
        <i className="fas fa-bars"></i>
      </div>

      <div className="leftHeaderItems">
        <i className="fas fa-border-all"></i>
        <span>Dashboard</span>
      </div>

      <div id="collections" className="leftHeaderItems">
        <i className="fas fa-images"></i>
        <span>Collections</span>
       </div>

       <div id='buttons'>
          <button onClick={colorBtnBlue} className='button1'><img src={BlueTheme} id="BtnBlue" alt="blue image"/></button>
          <button onClick={colorBtnWineRed} className='button2'><img src={WineredTheme} id="BtnRed" alt="wine red image"/></button>
          <button onClick={colorBtnGreen} className='button3'><img src={GreenTheme} id="BtnGreen" alt="green image"/></button>
          <button onClick={colorBtnDark} className='button4'><img src={DarkTheme} id="BtnDark" alt="dark image"/></button>
        </div>
       
    </div>

    <div className="headerItemContainer">
      <div className="rightHeaderItems">  
        <i className="fas fa-search"></i>
      </div>
      <div className="rightHeaderItems">
        <i className="fas fa-bell"></i>
      </div>
      <div className="profilImage">
        <img src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
      </div>
    </div>
  </nav>
  )
}

export default Navbar