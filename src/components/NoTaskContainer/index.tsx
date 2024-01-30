import clipboard from "../../assets/clipboard.png";
import "./styles.css";

function NoTaskContainer() {
  return (
    <div className="no_tasks_template">
      <div>
        <img src={clipboard} alt="Clipboard" />

        <p>Você ainda não tem tarefas cadastradas</p>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

export { NoTaskContainer };
