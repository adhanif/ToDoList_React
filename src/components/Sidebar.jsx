import './Sidebar.css'

function Sidebar() {
  return (
    <div class="sidebarContainer">
        <h2>Dashboard</h2>
        <div class="categoryList">
            <div class="category">
                <div class="categoryIcon" style={{backgroundColor: "#fd76a1"}}>
                
                </div>
                <span>Personal</span>
            </div>
            {/* <div class="category">
                <div class="categoryIcon" style={{backgroundColor: "#70c4be"}}>
                
                </div>
                <span>Work</span>
            </div>
            <div class="category">
                <div class="categoryIcon" style={{backgroundColor: "#ab6ddf"}}>
                
                </div>
                <span>Home</span>
            </div>
            <div class="category">
                <div class="categoryIcon" style={{backgroundColor: "#86d377"}}>
                
                </div>
                <span>Gifts</span>
            </div> */}
            <div class="category">
                <div class="categoryIcon" style={{backgroundColor: "transperant"}}>
                <i id="addCategoryIcon" class="fas fa-plus"></i>
                </div>
                <span style={{marginLeft: "25px"}} >Add</span>
            </div>

        </div>
    </div>
  )
}

export default Sidebar