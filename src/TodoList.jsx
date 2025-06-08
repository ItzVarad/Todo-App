import React from "react";
import Todo from "./Todo";

function TodoList({ todos, delTodo, checkTodo }) {
  return (
    <ul id="todo-list">
      {todos.map((todo, index) => {
        return (
          <Todo
            index={index}
            todo={todo}
            delTodo={delTodo}
            checkTodo={checkTodo}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
