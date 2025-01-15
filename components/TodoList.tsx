import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import { Todo } from "@/types";
import ChangeStatus from "./ChangeStatus";

type Todos = {
  todos: Todo[];
};

export default function TodoList({ todos }: Todos) {
  return (
    <ul className="space-y-2 w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className=" w-full flex justify-between items-center p-2 border rounded"
        >
          <div className="w-full   flex  items-center space-x-2">
            <ChangeStatus todo={todo} />
            <p
              className={`w-full ${
                todo.completed
                  ? "line-through text-gray-300 pointer-events-none"
                  : ""
              }`}
            >
              {todo.title[0].toUpperCase() + todo.title.substring(1)}
            </p>
          </div>

          <div className="flex space-x-4 ">
            <EditTodo todo={todo} />
            <DeleteTodo todo={todo} />
          </div>
        </li>
      ))}
    </ul>
  );
}
