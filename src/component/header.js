import React, { useState } from "react";

export default function Header({ list, getNewList }) {
  var [newTask, setNewTask] = useState("");

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            getNewList(newTask);
            setNewTask("");
          }
        }}
      />
    </header>
  );
}



