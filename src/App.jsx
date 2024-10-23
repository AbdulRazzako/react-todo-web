import React, { useState,useEffect } from 'react'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
      setTodos(JSON.parse(savedTodos));
    }
  },[]);

  useEffect(() => {
    if(todos.length > 0){
       localStorage.setItem("todos", JSON.stringify(todos));
    }
   
  },[todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  }
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }


    return (
    <div className="min-h-screen bg-gray-800 p-4 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App
