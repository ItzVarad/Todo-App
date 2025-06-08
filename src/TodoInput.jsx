import React from "react";

function TodoInput({inputValue, writeTodo, addTodo}) {
  return (
    <div className="input-section">
      <input
        type="text"
        id="todo-input"
        value={inputValue}
        onChange={writeTodo}
        placeholder="What do you want to do?"
      />
      <button id="add-btn" onClick={addTodo}>
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default TodoInput;
