import React, { useState } from "react";

interface Props {
  addTodo: Function;
}

function InputField({ addTodo }: Props) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <span
        onClick={() => {
          addTodo(inputValue);
          setInputValue('');
        }}
      >
        <i className="fa fa-plus-circle" aria-hidden="true"></i>
      </span>
    </div>
  );
}

export default InputField;
