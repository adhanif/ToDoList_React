import './Navbar.css'

function Navbar() {
  // const [count, setCount] = useState(0)

  

  return (
    <nav className="navContainer">
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