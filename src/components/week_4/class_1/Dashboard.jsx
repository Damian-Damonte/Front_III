import React, { useState } from "react";
import Header from "./components/header/Header";
import AddTask from "./components/tasks/AddTask";
import Tasks from "./components/tasks/Tasks";
import { data } from "./db";

const done = data.filter((todo) => todo.isFinished === true);
const pend = data.filter((todo) => todo.isFinished === false);

const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [doneTasks, setDoneTasks] = useState(done);
  const [pendingTasks, setPendingTasks] = useState(pend);
  const [selection, setSelection] = useState(null);
  const [textNewTask, setTextNewTask] = useState("");

  const handleTodos = (todo) => {
    const taskSelected = todos.map((td) =>
      td.id === todo.id ? { ...td, isFinished: !td.isFinished } : td
    );
    setTodos(taskSelected);
    const tDone = taskSelected.filter((todo) => todo.isFinished === true);
    setDoneTasks(tDone);
    const tPending = taskSelected.filter((todo) => todo.isFinished === false);
    setPendingTasks(tPending);
  };

  const handleSelection = (param) => {
    setSelection(param);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if(textNewTask) {
    const newTask = {
      id: new Date().getTime(),
      task: textNewTask,
      isFinished: false,
    };
    setTextNewTask("");
    setPendingTasks([...todos, newTask]);
    setTodos([...todos, newTask]);
  } else
    alert("No puede crear una tarea vacía")
  };

  const RenderComponent = (value) => {
    switch (value) {
      case "finished":
        return (
          <Tasks
            data={doneTasks}
            title="Terminadas"
            handleTodos={handleTodos}
          />
        );
      case "pending":
        return (
          <Tasks
            data={pendingTasks}
            title="Listas de pendientes"
            handleTodos={handleTodos}
          />
        );
      default:
      case "todos":
        return (
          <Tasks
            data={todos}
            title="Lista de todas"
            handleTodos={handleTodos}
          />
        );
    }
  };

  return (
    <div>
      <Header
        appTitle="Todo App"
        handleSelection={handleSelection}
        todos={todos}
        done={doneTasks}
        pending={pendingTasks}
      />
      <AddTask
        handleAdd={handleAdd}
        value={textNewTask}
        onChange={setTextNewTask}
      />
      {RenderComponent(selection)}
    </div>
  );
};

export default Dashboard;
