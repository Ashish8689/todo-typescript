interface Todo {
  id: string;
  todo: string;
  isCompleted: Boolean;
}

interface todoAction {
  edit: Function;
  delete: Function;
  status: Function;
}

export type {
  todoAction,
  Todo
}