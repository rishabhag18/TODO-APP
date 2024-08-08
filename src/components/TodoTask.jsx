import { MdCheck } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
const TodoTask = ({ data,checked, handleDeleteTodo ,onHandleCheckedTodo}) => {
  return (
    <li className="todo-item">
      <span className={checked?"checkList":"notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=>onHandleCheckedTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => handleDeleteTodo(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};
export default TodoTask;
