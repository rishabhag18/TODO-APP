import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const TodoTask=({task,setTask})=>{
    const hanleDeleteTodo = (currTask) => {
        const updatedTask = task.filter((value) => currTask !== value);
        setTask(updatedTask);
      };
    return (
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
    )
}
export default TodoTask;