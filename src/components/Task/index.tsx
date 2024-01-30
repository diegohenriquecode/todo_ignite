import trash from "../../assets/trash.png";
import { TaskInterface } from "../../types/Task";
import "./styles.css";

interface TaskProvider extends TaskInterface {
  handleDeleteTask: (id: number) => void;
  handleActiveTask: (id: number) => void;
}

function Task({
  isActive,
  title,
  id,
  handleDeleteTask,
  handleActiveTask,
}: TaskProvider) {
  return (
    <div className="container">
      <div onClick={() => handleActiveTask(id)}>
        <span className={isActive ? "selected_task" : "unselected_task"} />
      </div>

      <div
        className={`task_description ${isActive ? "selected_task_title" : ""}`}
      >
        {title}
      </div>

      <div onClick={() => handleDeleteTask(id)} className="delete_task">
        <img src={trash} alt="Trash icon" />
      </div>
    </div>
  );
}

export { Task };
