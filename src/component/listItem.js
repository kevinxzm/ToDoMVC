import { Context } from "./App";
import React, { useEffect, useRef, useState } from "react";

export function ListItem({ value: val }) {
  const { deleteItem, completeItem, updateItem} =
    React.useContext(Context);



  // const refLi = React.createRef();
  const refLi = useRef(null);

  const [inputVal, setInputVal] = useState({ status: false, value: "123" });

  useEffect(() => {
    refLi.current.focus();
  }, [inputVal]);


  return (
    <li
      className={[
        val.status ? "completed" : "",
        inputVal.status ? "editing" : "",
      ].join(" ")}
    >
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={val.status}
          onChange={() => {
            completeItem(val.id);
          }}
        />
        <label
          onDoubleClick={() => {
            setInputVal({ status: true, value: val.content });
          }}
        >
          {val.content}
        </label>
        <button
          className="destroy"
          onClick={() => {
            deleteItem(val.id);
          }}
        ></button>
      </div>
      <input
        className="edit"
        autoFocus
        ref={refLi}
        value={inputVal.value}
        onBlur={() => {
          updateItem(val.id, inputVal.value);
          setInputVal({ status: false, value: "" });
        }}
        onChange={(e) => {
          setInputVal({ ...inputVal, value: e.target.value });
        }}
        onKeyUp={(e) => {
          if (e.key === "Escape") {
            setInputVal({ status: false, value: val.content });
          }
        }}
      />
    </li>
  );
}
