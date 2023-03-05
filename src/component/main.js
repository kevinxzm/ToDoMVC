import React from "react";
import { ListItem } from "./listItem";

export default function Main({ list, currentType }) {
  let currentList = [];
  if (currentType === "all") {
    currentList = list;
  } else if (currentType === "active") {
    currentList = list.filter((val) => val.status == false);
  } else if (currentType === "completed") {
    currentList = list.filter((val) => val.status == true);
  }
  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {currentList.map((val) => (
          <ListItem value={val} key={val.id}></ListItem>
        ))}
      </ul>
    </section>
  );
}
