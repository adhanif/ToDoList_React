import './Sidebar.css'
import React, { useState, useEffect } from "react";

function Sidebar() {

    const storageKey = "categoryListKey";
    const[categories, setCategories]=useState("");
    const [categoryList, setCategoryList] = useState(
        JSON.parse(localStorage.getItem(storageKey)) || []
    );

       //code from Ermias MAin
       const [todos, setTodos] = useState([]);

        useEffect(() => {
        const getAllLocalStorageItems = () => {
        const localStorageItems = {};
    
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
    
        // Parse the value if it is JSON data
        let parsedValue;
        try {
          parsedValue = JSON.parse(value);
        } catch (error) {
          parsedValue = value;
        }
    
        localStorageItems[key] = parsedValue;
      }
    
      return localStorageItems;
    };
    
    const allLocalStorageItems = getAllLocalStorageItems();
    setTodos(allLocalStorageItems)
    // setTodos(allLocalStorageItems);
    // const storedTodos = localStorage.getItem('Work');
    // if (storedTodos) {
    //   setTodos(JSON.parse(storedTodos)); 
    // }
    // console.log(allLocalStorageItems)
  }, [categoryList]);
  

       //
    
    // useEffect(() => {
    //     localStorage.setItem(categories, JSON.stringify(categoryList));
    //   }, [categoryList]);

      
    const submit=(e)=>{
        e.preventDefault();
    };

    const handleInputChange=(e)=>{  
        setCategories(e.target.value)
        }

    const addCategory=(categoryIconColor, e)=>{
        console.log(categoryIconColor)
        // const iconColor=categoryIconColor
        if(categories!=""){

            setCategoryList([...categoryList, categories])
            localStorage.setItem(categories, JSON.stringify(["color: categoryIconColor"]));
            // localStorage.setItem(categories, JSON.stringify(categoryList));
            setCategories("");
        }else{
            alert("Enter the category")
        }
        
        
    }
    // indexDelete
    const deleteCategory=(e, category)=>{
        
         localStorage.removeItem(category);
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
            <h2 id="heading2">Category </h2>
            <div >
                <form action="" onSubmit={submit} >
                    <input type="text" placeholder='Enter the category:'
                    onChange={handleInputChange}
                    value={categories}
                    id="task-input"
                    />
                    <button onClick={(e)=>addCategory(e, categoryIconColor[0])} id="addButton"><i  className="fas fa-plus"></i>Add </button>
                </form>
            </div>
           
            
            <div className="categoryList">

                {
                Object?.keys(todos)?.map(
                        (category, index)=>(
                            <div className="category" key={index}>
                                <div className="icon-cat">
                                    {/* <div className="categoryIcon" style={{backgroundColor: "#fd76a1"}}>
                                    </div> */}
                                    <div className="categoryIcon" style={{backgroundColor: categoryIconColor[index]}}>
                                    </div>
                                    <span className="categoryText">{category} </span>
                            	</div>
                                <i id="todo-delete" className="fas fa-trash" data-index={index}  onClick={(e) => deleteCategory(e,category, index)}></i>
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