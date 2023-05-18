import './Sidebar.css'
import React, { useState, useEffect } from "react";

function Sidebar() {

    const storageKey = "categoryListKey";
    const[categories, setCategories]=useState("");
    const [categoryList, setCategoryList] = useState(
        JSON.parse(localStorage.getItem(storageKey)) || []
      );

 
    
    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(categoryList));
      }, [categoryList]);

      
    const submit=(e)=>{
        e.preventDefault();
    };

    const handleInputChange=(e)=>{  
        setCategories(e.target.value)
        // console.log(e.target.value)
        }

    const addCategory=()=>{
        setCategoryList([...categoryList, categories])
        setCategories("");
        
    }
    // indexDelete
    const deleteCategory=(e)=>{
        const indexToDelete=e.target.dataset.index;
        
        const updatedList=categoryList.filter((_, index) => {
           if(index !== parseInt(indexToDelete)){
            return true;// Include the element in the filtered array
           } else{
            return false;
           }
            
        });
        setCategoryList(updatedList);
    }

    

    // for alternative colors of categoryIconColor
    const colors=["#fd76a1", "#70c4be", "#ab6ddf","#86d377" ]
    let count=0;
    let categoryIconColor=[];
    for(let i=0; i<categoryList.length; i++){
        categoryIconColor.push(colors[count]);
        count++;
        if(count===colors.length){
            count=0;
        }
    }

 return (
        <div className="sidebarContainer">
            <h2>Dashboard</h2>
            <div >
                <form action="" onSubmit={submit} >
                    <input type="text" placeholder='Enter the cataegory'
                    onChange={handleInputChange}
                    value={categories}
                    id="task-input"
                    />
                    <button onClick={addCategory}><i id="addCategoryIcon" className="fas fa-plus"></i>Add </button>
                </form>
            </div>
           
            
            <div className="categoryList">

                {
                    categoryList.map(
                        (category, index)=>(
                            <div className="category" key={index}>
                                <div className="icon-cat">
                                    {/* <div className="categoryIcon" style={{backgroundColor: "#fd76a1"}}>
                                    </div> */}
                                    <div className="categoryIcon" style={{backgroundColor: categoryIconColor[index]}}>
                                    </div>
                                    <span>{category} </span>
                            	</div>
                                <i id="todo-delete" class="fas fa-trash" data-index={index}  onClick={(e) => deleteCategory(e)}></i>
                                {/* <button value={index}  onClick={(e) => deleteCategory(e)}>Delete</button> */}
                                
                            </div>
                        )
                    )
                }

            </div>
           
           

            
    </div>
  )
}

export default Sidebar