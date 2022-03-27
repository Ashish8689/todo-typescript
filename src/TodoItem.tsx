import React, { useState } from "react";
import { Todo, todoAction } from "./modal";

interface Props {
  todo: Todo;
  todoActions: todoAction;
}

function TodoItem({ todo, todoActions }: Props) {
  const { id, todo: value, isCompleted } = todo;
  const [edit, setEdit] = useState<Boolean>(false);
  const [editValue, setEditValue] = useState<string>(value);

  const HandleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      if (editValue.length > 0) {
        todoActions.edit(id, editValue);
        setEdit(false);
        setEditValue("");
      }
    }
  };

  return (
    <div className={`todo-item ${isCompleted && "completed"}`}>
      {edit ? (
        <input
          id={id}
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyPress={HandleSubmit}
        />
      ) : (
        <h1>{value}</h1>
      )}
      <div className="todo-action-container">
        <label htmlFor={id}>
          <i
            id="edit"
            className="fa fa-pencil-square-o"
            onClick={() => {
              if (!isCompleted) {
                setEdit(!edit);
              } else {
                alert("Todo is already completed");
              }
            }}
          ></i>
        </label>
        <i className="fa fa-trash" onClick={() => todoActions.delete(id)}></i>
        {edit ? (
          ""
        ) : (
          <i
            className="fa fa-check-circle-o"
            onClick={() => todoActions.status(id)}
          ></i>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
