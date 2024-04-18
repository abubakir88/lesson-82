// TodoList.js

import React from "react";
import { connect } from "react-redux";
import { addTodo, toggleTodo } from "./actions";

const TodoList = ({ todos, addTodo, toggleTodo }) => {
  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return;
    }
    addTodo(input.value);
    input.value = "";
  };

  return (
    <div>
      {/* <form onSubmit={handleSubmit}>
        <input required ref={(node) => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
