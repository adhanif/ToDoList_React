import React, {useState, useEffect} from 'react';
import './Main.css';
import TodoHeader from './TodoHeader';
import TodoCategory from './TodoCategory';


function Main() {
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
    setTodos(allLocalStorageItems);
    // const storedTodos = localStorage.getItem('Work');
    // if (storedTodos) {
    //   setTodos(JSON.parse(storedTodos));
    // }
  }, [todos]);
 

  return (
    <div className="mainContent">
      <div className="todoContent">
        <TodoHeader />
        {Object?.keys(todos)?.map((categoryName, index) => (
          <TodoCategory
            key={index}
            categoryName={categoryName}
            categoryColor={todos[categoryName].categoryColor}
            todos={todos[categoryName]}
            setTodos={setTodos}
          />
        ))}
        </div>
    </div>
  )
}

export default Main