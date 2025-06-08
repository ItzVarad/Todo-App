import React from "react";

function Todo({ index, todo, delTodo, checkTodo }) {
  return (
    <li className="todo-item" key={index}>
      <div className="todo-left">
        <input
          type="checkbox"
          className="todo-check"
          checked={todo.checked}
          onChange={(e) => checkTodo(index, e)}
        />
        <span className={todo.checked ? "todo-text strike-text" : "todo-text"}>
          {todo.text}
        </span>
      </div>
      <div className="todo-actions">
        <button className="edit-btn" hidden>
          <i className="fas fa-edit"></i>
        </button>
        <button className="delete-btn" onClick={() => delTodo(index)}>
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default Todo;
