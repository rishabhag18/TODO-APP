import { useState } from "react";
import "./todo1.css";
import DateTime from "./DateTime";
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";
import ClearTodo from "./ClearTodo";

const Todo = () => {
  //todo add task event handler
  const [task, setTask] = useState([]);
  //todo form submit handler
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prevTask) => [...prevTask, inputValue]);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <DateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit}/>
      <TodoTask task={task} setTask={setTask}/> 
      <ClearTodo setTask={setTask}/>
    </section>
  );
};
export default Todo;
