import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import React, { useEffect, useState } from "react";

export const Context = React.createContext();

var arr = [5, 3, 1, "a"];

var arr2 = Array.from(new Array(100)).map((_, index) => index + 1);

console.log(arr2.reduce((prev, value) => prev + value, 0));

const useTodo = () => {
  // 1. state
  const [currentType, setCurrentType] = useState("all");
  const [list, setList] = useState(() => {
    return localStorage.getItem("list")
      ? JSON.parse(localStorage.getItem("list"))
      : [];
  });
  // 2.1 method
  const getNewList = (newTask) => {
    setList([{ id: Math.random(), content: newTask, status: false }, ...list]);
  };
  // 2.2 radio是否完成任务
  const completeItem = (id) => {
    setList(
      list.map((val) => {
        if (val.id !== id) {
          return val;
        } else {
          return { ...val, status: !val.status };
        }
      })
    );
  };
  // 2.3 删除任务
  const deleteItem = (id) => {
    setList(
      list.filter((val) => {
        if (val.id !== id) {
          return val;
        }
      })
    );
  };

  // 2.4 双击input更新任务
  const updateItem = (id, value) => {
    setList(
      list.map((val) => {
        if (val.id === id) {
          val.content = value;
        }
        return val;
      })
    );
  };

  //3. useEffect
  useEffect(() => {

    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  useEffect(() => {});

  return {
    currentType,
    setCurrentType,
    list,
    getNewList,
    completeItem,
    deleteItem,
    updateItem,
    useEffect,
  };
};

function App() {
  let {
    currentType,
    setCurrentType,
    list,
    getNewList,
    completeItem,
    deleteItem,
    updateItem,
  } = useTodo();

  return (
    <Context.Provider
      value={{
        deleteItem,
        completeItem,
        updateItem,
        setCurrentType,
      }}
    >
      <div className="App">
        <section className="todoapp">
          <Header list={list} getNewList={getNewList}></Header>
          <Main list={list} currentType={currentType}></Main>
          <Footer list={list}></Footer>
        </section>
        <footer className="info" />
      </div>
    </Context.Provider>
  );
}

export default App;
