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
    const { id, content, checked } = inputValue;
    if (!content) return;
    //if (task.includes(content)) return;
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  const hanleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  return (
    <section className="todo-container">
      <header>
        <h1>ToDo List</h1>
        <DateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      <section className="myUnOrdList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoTask
                data={currTask.content}
                hanleDeleteTodo={hanleDeleteTodo}
                key={currTask.id}
              />
            );
          })}
        </ul>
      </section>
      <ClearTodo setTask={setTask} />
    </section>
  );
};
export default Todo;
