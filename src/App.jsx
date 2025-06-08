import { useEffect, useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(() => {
    const storeTodo = localStorage.getItem("todos");
    return storeTodo ? JSON.parse(storeTodo) : [];
  });

  function writeTodo(e) {
    setInputValue(e.target.value);
  }

  function addTodo() {
    if (inputValue != "") {
      setTodos((prevTodo) => [
        ...prevTodo,
        { text: inputValue, checked: false },
      ]);
      
      setInputValue("");
    }
  }

  function delTodo(delIndex) {
    setTodos((prevTodo) =>
      prevTodo.filter((value, index) => {
        return index != delIndex;
      })
    );
  }

  function checkTodo(setIndex, e) {
    const newTodos = [...todos];
    newTodos[setIndex] = { ...newTodos[setIndex], checked: e.target.checked };
    setTodos(newTodos);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-container">
      <h1>My ToDo List</h1>
      <TodoInput
        inputValue={inputValue}
        writeTodo={writeTodo}
        addTodo={addTodo}
      />
      <TodoList todos={todos} delTodo={delTodo} checkTodo={checkTodo} />
    </div>
  );
}

export default App;
