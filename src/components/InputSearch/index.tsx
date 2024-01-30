import { useState } from "react";
import plus from "../../assets/plus.png";
import "./styles.css";

interface InProp {
  handleCreateTask: (task: string) => void;
}

function InputSearch({ handleCreateTask }: InProp) {
  const [task, setTask] = useState<string>("");

  return (
    <form className="input_container">
      <input
        className="input"
        type="text"
        placeholder="Adicione uma tarefa..."
        value={task}
        onChange={(e) => setTask(e.currentTarget.value)}
      />

      <button
        className="button"
        type="button"
        onClick={() => {
          handleCreateTask(task);
          setTask("");
        }}
      >
        <p> Criar</p>
        <img className="img" src={plus} alt="Plus icon" />
      </button>
    </form>
  );
}

export { InputSearch };
