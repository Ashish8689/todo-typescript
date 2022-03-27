import React from 'react'
import { Todo, todoAction } from './modal'
import TodoItem from './TodoItem'

interface Props{
    todoActions:todoAction;
    todos:Todo[];
}

function TodoList({todoActions,todos}:Props) {
  return (
    <div className="todo-list-container">
        {todos.map(todo =>(
            <TodoItem key={todo.id} todo={todo} todoActions={todoActions} />
        ))}
    </div>
  )
}

export default TodoList