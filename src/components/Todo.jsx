import { useState } from "react";
import "./todo1.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";


const Todo = () => {
    //todo add task event handler
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const [dateTime,setDateTime]=useState("")
    const handleInputChange=(value)=>{
        setInputValue(()=>value)
    }
    //todo form submit handler
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if(!inputValue) {
            setInputValue("")
            return
        } 
        if(task.includes(inputValue)) return
        setTask((prevTask)=>[...prevTask,inputValue])
        setInputValue("")
        console.log(task)
    }
     //todo date and time handler
     const timeNow=new Date();
     setInterval(()=>{
        const timeDate={
            Date: timeNow.toLocaleDateString(),
            Time: timeNow.toLocaleTimeString(),
         }
         setDateTime(`${timeDate.Date} - ${timeDate.Time}`)
     },1000)
     
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <section className="form">
        <form onSubmit={handleFormSubmit}>
          <div>
            <input type="text" className="todo-input" autoComplete="off"  value={inputValue} onChange={(event)=> handleInputChange(event.target.value)}/>
          </div>
          <div>
            <button type="submit" className="todo-btn">Add Task</button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
            {
                task.map((currTask,index)=>{
                    return <li key={index} className="todo-item">
                        <span>
                            {currTask}
                        </span>
                        <button className="check-btn">
                            <MdCheck/>
                        </button>
                        <button className="delete-btn">
                            <MdDeleteForever />
                        </button>
                    </li>
                    
                })

            }
        </ul>
      </section>
    </section>
  );
};
export default Todo;
