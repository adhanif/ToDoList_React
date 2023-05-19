import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebarContainer">
        <h2>Dashboard</h2>
        <div className="categoryList">
            <div className="category">
                <div className="categoryIcon" style={{backgroundColor: "#fd76a1"}}>
                
                </div>
                <span>Personal</span>
            </div>
            {/* <div className="category">
                <div className="categoryIcon" style={{backgroundColor: "#70c4be"}}>
                
                </div>
                <span>Work</span>
            </div>
            <div className="category">
                <div className="categoryIcon" style={{backgroundColor: "#ab6ddf"}}>
                
                </div>
                <span>Home</span>
            </div>
            <div className="category">
                <div className="categoryIcon" style={{backgroundColor: "#86d377"}}>
                
                </div>
                <span>Gifts</span>
            </div> */}
            <div className="category">
                <div className="categoryIcon" style={{backgroundColor: "transperant"}}>
                <i id="addCategoryIcon" className="fas fa-plus"></i>
                </div>
                <span style={{marginLeft: "25px"}} >Add</span>
            </div>

        </div>
    </div>
  )
}

export default Sidebar