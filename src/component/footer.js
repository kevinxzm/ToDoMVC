import React, { useContext, useState } from "react";
import { Context } from "./App";

export default function Footer({ list }) {
  const { setCurrentType } = useContext(Context);
  var arr = [
    { href: "#/", content: "all" },
    { href: "#/active", content: "active" },
    { href: "#/completed", content: "completed" },
  ];

  const [select, setSelect] = useState("all");

  return (
    <footer className={"footer"}>
      <span className="todo-count">
        <strong></strong>
        {list.filter((val) => val.status == false).length} item left
      </span>
      <ul className="filters">
        {arr.map((val, index) => (
          <li key={index}>
            <a 
              href={val.href}
              className={select === val.content ? "selected" : ""}
              onClick={() => {
                setSelect(val.content);
                setCurrentType(val.content);
              }}
            >
              {val.content}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
