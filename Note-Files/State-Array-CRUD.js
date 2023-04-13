import React, { useState } from "react";
import { myTodos, getNextId } from './todos'

/*
Rules of state: never mutate state directly!

Todo Deliverables:
- Add element to array: use spread operator!
- Remove element to array: use filter!
- Update element in array: use map!
*/

function TodoList() {
  const [todos, setTodos] = useState(myTodos); 
  const [newTodoDescription, setNewTodoDescription] = useState("");

  function addTodo(e) {
    e.preventDefault();
    const newTodo = {
      id: getNextId(), // this line creates a new id when the form is submited
      description: newTodoDescription,
      completed: false,
    };
    
    const updatedTodos = [...todos, newTodo] //using spread operator to create a new array and then adding the new todo item to the end of that array
    // using the spread operator allows us to create a new array without directly mutating state as well as destructively manipulating the original array
    setTodos(updatedTodos); //we pass in the new array to setTodos, this will allow us to rerender our application with the new data included
  }
  
  function deleteTodo(id) { //takes in the id of the elememt we want to delete
      const updatedTodos = todos.filter(todo => todo.id !== id) //we start with our current list of todos and use the filter method to filter out the todo that matches the id. So we write out a callback function so that we return whatever todo that DOES NOT MATCH the one we are trying to remove
      setTodos(updatedTodos) // calling setTodos with our new array will allow us to remove the todos from the application and rerender it based on the new array in state
  }
  
  function updateTodo(id, completed) { //This helper function will take in an id and a completed boolean (a true or false, whether it is completed) 
      console.log(todos)
      
      /*
- iterate over the elements in our todo array
- check if the ID matches
- if it does, return an updated todo obj
- otherwise, return the original todo
      */

      const updatedTodos = todos.map(todo => { // we ultimately want to create an updated list of todos. So we will use .map() because we want to create an array that is the same length as our current array of todos. 
          if (todo.id === id) { //To do the logic we want to accomplish, we must check if the id matches the id that we are passing into the updatedTodos function. 
              return { ...todo, completed: completed } //If it does match the id we want to return a new object and in that object we want a copy of all the properties from that current todo and we want to update the key of completed to be a value of whatever we are passing in. This can also be written with just one "completed" becasue the variable we pass in as a parameter is the same.
          } else {
             return todo //otherwise, we want to return the existing element
          }
      })
      setTodos(updatedTodos) //we again use our setter function to set the state and rerender the application by passing in our updated array
      
  }
  
//   console.log(todos)
  
  return (
    <div className="App">
      <h2>Add Todos</h2>
      <form onSubmit={addTodo}>
        <label>
          Description:
          <input
            type="text"
            value={newTodoDescription}
            onChange={(e) => setNewTodoDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Add todo" />
      </form>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <strong>{todo.description}</strong>
            <label>
              Completed?
              <input
                type="checkbox"
                onChange={(e) => updateTodo(todo.id, e.target.checked)} // write a helper function that will take in the id of a todo that we are trying to update so that we have a way of finding that specific todo in our array as well as whether or not that checkbox is checked
                checked={todo.completed}
              />
            </label>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button> {/* we are passing in the todo's id associated with the appropriate delete button*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;