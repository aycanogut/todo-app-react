/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import styled from "styled-components";

import helpers from "../helpers";

import Add from "../../assets/images/plus.svg";
import Check from "../../assets/images/check.svg";
import Remove from "../../assets/images/remove.svg";

import Header from "../Header/Header";
import Icon from "../Icon/Icon";

// styled components
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 500px;
  max-width: 593px;
  margin: 0 1rem;
  padding: 0 2rem;
  background: ${helpers.colors.white};
  background: linear-gradient(
    180deg,
    ${helpers.colors.gradient.white} 85%,
    ${helpers.colors.gradient.gray} 100%
  );
  border-radius: 60px;
  box-shadow: 0px 0px 16px 10px rgba(0, 0, 0, 0.4);
`;

const StyledInput = styled.input`
  margin: 0 0 28px 0;
  padding: 0.6rem 1rem;
  border: 2px solid ${helpers.colors.body};
  border-radius: 32px;
  font-size: 1rem;

  @media only screen and ${helpers.device.md} {
    padding: 0.6rem 2rem;
    font-size: 1.4rem;
  } ;
`;

// main component
const Form = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    // look localStorage for saved todos on page load, get it if it exists
    const localTodos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(localTodos);

    // set todos if there are any
    if (parsedTodos) {
      setTodos(parsedTodos);
    }
  }, []);

  useEffect(() => {
    // save todos to localStorage
    const localTodos = JSON.stringify(todos);
    localStorage.setItem("todos", localTodos);
  }, [todos]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // create a new todo with unique id
    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false
    };

    // add new todo object to the todos array without mutating the original array
    setTodos([...todos.concat(newTodo)]);

    // clear the input field
    setTodo("");
  };

  const deleteTodo = (id) => {
    // filter out the todo with the given id
    const filteredTodos = [...todos].filter((todo) => todo.id !== id);

    // set the new todos array
    setTodos(filteredTodos);
  };

  const toggleTodo = (id) => {
    // find the todo with the given id and update toggle it if the values are equal
    const filteredTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    // set the new todos array
    setTodos(filteredTodos);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Header />
      <div className="input-group">
        <StyledInput
          type="text"
          onChange={(e) => setTodo(e.target.value)} // trim whitespace from the input
          value={todo}
          placeholder="Add a todo"
          required
        />
        <button type="submit" className="add-button" role="button">
          <Icon source={Add} />
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="todo">
            {todo.text}
            <div className="control-group">
              <StyledInput
                type="checkbox"
                onChange={() => toggleTodo(todo.id)}
                checked={todo.completed}
              />
              <button onClick={() => deleteTodo(todo.id)}>
                <Icon source={Remove} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </StyledForm>
  );
};

export default Form;
