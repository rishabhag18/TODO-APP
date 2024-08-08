import { useState } from "react";
import { useEffect } from "react";
import "./todo1.css";
import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import TodoForm from "./TodoForm";


const Todo = () => {
  //todo add task event handler
  
  const [task, setTask] = useState([]);
  const [dateTime, setDateTime] = useState("");
  
  //todo form submit handler
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };
  //todo date and time handler
  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = new Date();
      const timeDate = {
        Date: timeNow.toLocaleDateString(),
        Time: timeNow.toLocaleTimeString(),
      };
      setDateTime(`${timeDate.Date} - ${timeDate.Time}`);
    }, 1000);
    return () => clearInterval(interval);
  }, []);
//delete task in todo 
  const hanleDeleteTodo = (currTask) => {
    const updatedTask = task.filter((value) => currTask !== value);
    setTask(updatedTask);
  };
  // clear complete todo
  const handleClearTodo = () => {
    setTask([]);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <h2 className="date-time">{dateTime}</h2>
      </header>
      <TodoForm onAddTodo={handleFormSubmit}/>
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask, index) => {
            return (
              <li key={index} className="todo-item">
                <span>{currTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button
                  className="delete-btn"
                  onClick={() => hanleDeleteTodo(currTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <button className="clear-btn" onClick={handleClearTodo}>
          Clear All
        </button>
      </section>
    </section>
  );
};
export default Todo;
