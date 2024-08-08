import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const TodoTask = ({ data, hanleDeleteTodo ,key}) => {
  return (
    <li key={key} className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => hanleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoTask;
