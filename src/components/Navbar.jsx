import './Navbar.css'

function Navbar() {
  // const [count, setCount] = useState(0)

  return (
    <nav class="navContainer">
    <div class="headerItemContainer">
      <div class="leftHeaderItems">
        <i class="fas fa-bars"></i>
      </div>

      <div class="leftHeaderItems">
        <i class="fas fa-border-all"></i>
        <span>Dashboard</span>
      </div>

      <div id="collections" class="leftHeaderItems">
        <i class="fas fa-images"></i>
        <span>Collections</span>
      </div>
    </div>

    <div class="headerItemContainer">
      <div class="rightHeaderItems">
        <i class="fas fa-search"></i>
      </div>
      <div class="rightHeaderItems">
        <i class="fas fa-bell"></i>
      </div>
      <div class="profilImage">
        <image src="https://cdn-icons-png.flaticon.com/128/149/149071.png" />
      </div>
    </div>
  </nav>
  )
}

export default Navbar