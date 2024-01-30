import { Header } from "./components/Header";
import { InputSearch } from "./components/InputSearch";
import { TaskCounter } from "./components/TaskCounter";

import "./App.css";
// import { NoTaskContainer } from "./components/NoTaskContainer";
import { Task } from "./components/Task";
import { TaskInterface } from "./types/Task";
import { useState } from "react";
import { NoTaskContainer } from "./components/NoTaskContainer";

function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([
    {
      id: 1,
      title: `Integer urna interdum massa libero auctor neque turpis turpis semper.
      Duis vel sed fames integer.`,
      isActive: true,
    },
    {
      id: 2,
      title: `Botar a ração dos gatos.`,
      isActive: true,
    },
    {
      id: 3,
      title: `Me preparar para entrevista.`,
      isActive: true,
    },
  ]);

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function handleActiveTask(id: number) {
    setTasks(
      tasks.map((task: TaskInterface) => {
        if (task.id === id) {
          return { ...task, isActive: !task.isActive };
        }
        return task;
      })
    );
  }

  function handleCreateTask(task: string) {
    const newTask: TaskInterface = {
      id: Math.random() * 10,
      title: task,
      isActive: false,
    };

    setTasks((tasks) => [...tasks, newTask]);
  }

  return (
    <>
      <Header />

      <div className="content">
        <InputSearch {...{ handleCreateTask }} />

        <TaskCounter />

        {tasks ? (
          tasks.map((task: TaskInterface) => (
            <Task
              key={task.id}
              isActive={task.isActive}
              title={task.title}
              id={task.id}
              {...{ handleDeleteTask }}
              {...{ handleActiveTask }}
            />
          ))
        ) : (
          <NoTaskContainer />
        )}
      </div>
    </>
  );
}

export default App;
