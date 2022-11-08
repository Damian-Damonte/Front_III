import React from "react";
import AddTask from "./AddTask.jsx";
import { TaskContainer, TaskCard, Button } from "./TaskStyle.js";

const Tasks = ({ data, title, handleTodos }) => {
  return (
    <TaskContainer>
    <h1>{title}</h1>
      {data.map((todo) => (
        <TaskCard key={todo.id}>
          <section style={{ width: "80%" }}>
            <p>{todo.task}</p>
          </section>
          <section style={{ width: "20%" }}>
            <Button bgColor={todo.isFinished} onClick={() => handleTodos(todo)}>{todo.isFinished ? "hecho" : "pendiente"}</Button>
          </section>
        </TaskCard>
      ))}
    </TaskContainer>
  );
};

export default Tasks;
