import { useState } from "react";
import "./todo1.css";
import { FaUserAstronaut } from "react-icons/fa";

const Todo = () => {
    const [inputValue,setInputValue]=useState("");
    const [task,setTask]=useState([]);
    const handleInputChange=(value)=>{
        setInputValue(()=>value)
    }
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
     
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
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
    </section>
  );
};
export default Todo;
