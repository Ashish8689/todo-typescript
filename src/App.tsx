import React, { useState } from "react";
import "./App.css";
import InputField from "./InputField";
import { v4 as uuidv4 } from 'uuid';
import TodoList from "./TodoList";
import { Todo, todoAction } from "./modal";

interface todoObject{
  id:string,
  todo: string;
  isCompleted: Boolean;
}

function App() {

  const [ todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (value: string) =>{
    const todo:todoObject = { 
      id: uuidv4(),
      todo:value,
      isCompleted:false  
     }

    setTodos([...todos, todo ])
  }

  const deleteTodo = (id: string) =>{
    const todo = todos.filter(todo => todo.id !== id);
    setTodos(todo)
  }

  const editTodo = (id:string,value: string) =>{
    const newTodo = todos.map(todo => {
      if(todo.id === id){
        return {...todo, todo:value};
      }
      return todo
    });

    setTodos(newTodo)
  }

  const changeTodoStatus = (id: string) =>{
    const newTodo = todos.map(todo => {
      if(todo.id === id){
        return {...todo, isCompleted:!todo.isCompleted};
      }
      return todo
    });

    setTodos(newTodo)
  }

  const todoActions:todoAction ={
    edit: editTodo,
    delete: deleteTodo,
    status: changeTodoStatus
  }

  return (
  <div className="body">
    <div className="todo-container">
          <InputField addTodo={addTodo} />
          <TodoList todos={todos} todoActions={todoActions} />
    </div>
  </div>);
}

export default App;
