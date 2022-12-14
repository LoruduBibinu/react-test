import React from "react";
import { v4 as uuidv4 } from "uuid";
const Form = ({ input, setInput, todos, setTodos }) => {
  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, {id:uuidv4(), title: input, completed: false}]);
    setInput("");
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a todo..."
        className="task-input"
        value={input}
        required
        onChange={onInputChange}
      />
      <button className="btn-add" type="submit">
        Add Task
      </button>
    </form>
  );
};
export default Form;
