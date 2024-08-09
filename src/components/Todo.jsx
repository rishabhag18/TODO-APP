import { useState } from "react";
import "./todo1.css";
import DateTime from "./DateTime";
import TodoForm from "./TodoForm";
import TodoTask from "./TodoTask";
import ClearTodo from "./ClearTodo";

const Todo = () => {
  //todo add task event handler
  const localStorageKey="reactTask";
  const [task, setTask] = useState(()=>{
    const todoData=localStorage.getItem(localStorageKey);
    if(!todoData) return [];
    return JSON.parse(todoData);
  });
  //todo form submit handler
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return;
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;
    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  };
  const handleCheckedTodo = (myData) => {
    const updatedTask=task.map((curTask)=>{
      if(curTask.content==myData){
        return {...curTask,checked:!curTask.checked}
      }else{
        return curTask;
      }
    });
    setTask(updatedTask);
  };

  //todo LocalStorage data saving
  localStorage.setItem(localStorageKey,JSON.stringify(task));
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
                key={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                handleDeleteTodo={handleDeleteTodo}
                onHandleCheckedTodo={handleCheckedTodo}
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
