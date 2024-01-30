import "./styles.css";

function TaskCounter() {
  const createdTasks = 0;
  const finishedTasks = 0;

  return (
    <span className="tasks_container">
      <p className="created_tasks">
        Tarefas criadas <span>{createdTasks}</span>
      </p>

      <p className="finished_tasks">
        Concluídas <span>{finishedTasks}</span>
      </p>
    </span>
  );
}

export { TaskCounter };
