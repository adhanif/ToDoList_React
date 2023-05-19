import React, { useState, useEffect } from 'react';
import './Main.css';

function TodoCategory({ categoryName }) {
  const [newTodo, setNewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const storedTodos = localStorage.getItem(categoryName);
    if (storedTodos) {
      setTodoList(JSON.parse(storedTodos));
    }
  }, [categoryName]);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      const newTodoList = [...todoList, { text: newTodo, completed: false, edit: false }];
      setTodoList(newTodoList);
      setNewTodo('');
      localStorage.setItem(categoryName, JSON.stringify(newTodoList));
    }
  };

  const handleCheckTodo = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].completed = !updatedTodoList[index].completed;
    setTodoList(updatedTodoList);
    localStorage.setItem(categoryName, JSON.stringify(updatedTodoList));
  };

  const handleEditTodo = (index, newText) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].text = newText;
    setTodoList(updatedTodoList);
    localStorage.setItem(categoryName, JSON.stringify(updatedTodoList));
  };

  const handleEdit = (index) => {
    const updatedTodoList = [...todoList];
    updatedTodoList[index].edit = !updatedTodoList[index].edit;
    setTodoList(updatedTodoList);
    localStorage.setItem(categoryName, JSON.stringify(updatedTodoList));
  };

  const handleDeleteTodo = (index) => {

    if (confirm("Are you sure you want to delete this task?")) {

      const updatedTodoList = [...todoList];
      updatedTodoList.splice(index, 1);
      setTodoList(updatedTodoList);
      localStorage.setItem(categoryName, JSON.stringify(updatedTodoList));
    } 
  };

  return (
    <div className="taskContainer">
      <div className="taskCategoryHeader">
        <div className="categoryDash">
          <div className="categoryIcon" style={{ backgroundColor: '#fd76a1' }}></div>
          <span>{categoryName}</span>
        </div>
        <input id="todo-input" type="text" placeholder="Add a new todo" onChange={handleInputChange} value={newTodo} />
        <i onClick={handleAddTodo} id="add-button" className="fas fa-plus" type="button"></i>
      </div>
      <ul id="todo-list">
        {todoList?.map((todo, index) => (
          <li key={index}>
            <div className="todo-item">
              <div className="todo-item-left">
                <input
                  id="todo-check"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleCheckTodo(index)}
                />
              </div>
              <input
                id="task-input"
                style={{ color: todo.completed ? 'grey' : '', textDecoration: todo.completed ? `2px line-through black` : '', border: todo.edit ? '1px solid grey' : '' }}
                type="text"
                value={todo.text}
                placeholder='Enter a task'
                onChange={(e) => e.target.value !=="" ? handleEditTodo(index, e.target.value) : null}
                disabled={todo.edit ? false : true}
              />
              <div className="todo-item-right">
                <i onClick={() => handleEdit(index)} id="todo-edit" className={todo.edit ? "fas fa-check save" : "fas fa-pen" }></i>
                <i id="todo-delete" className="fas fa-trash" onClick={() => handleDeleteTodo(index)}></i>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCategory;
