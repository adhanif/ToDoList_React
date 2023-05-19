import React from 'react'
import './Main.css'

function TodoHeader() {

  const date = new Date();
  const day = date.getDate();
  const dayOfWeek = date.toDateString().split(" ")[0];
  const month = date.toDateString().split(" ")[1];


  return (
    <>
      <h2>Hello, John</h2>
        <div>
          <span className="currentDay">Today </span> <br />
          <div className="date">
            <span>{dayOfWeek + ", " + day + " " +  month}</span>
            <i id="calenderIcon" className="fas fa-calendar-alt" style={{}}></i>
          </div>
        </div>
    </>
  )
}

export default TodoHeader
